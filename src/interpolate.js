import { compose, values, mapObjIndexed, reduce, replace, flip, call, take } from 'ramda';
import curry from './curry';
import { rejectNil } from './reject-nil';
import escapeStringRegexp from './utils/escape-regex';

/**
 * @private
 * @type {number}
 */
const MAX_SYMBOL_LENGTH = 512;

/**
 * @private
 * @function
 */
const sanitizeSymbol = compose(escapeStringRegexp, take(MAX_SYMBOL_LENGTH));

const replacer = compose(
  values,
  mapObjIndexed((value, key) => replace(new RegExp(`{${sanitizeSymbol(key)}}`, 'g'), value)),
  rejectNil
);

/**
 * Replaces variables in a template enclosed by `{}`. Variable names
 * will be escaped for safe regular expression usage and, for safety reasons,
 * cannot exceed `512` characters in length.
 *
 * @example
 *  interpolate('I am {name}', { name: 'Error' });
 *  // 'I am Error'
 *
 * @param {string} template The template to interpolate.
 * @param {object} context The values to replace in `template.
 * @returns {string} The result of resolving template interpolation
 *  with the given `context`.
 */
function interpolate(template, context) {
  return reduce(flip(call), template, replacer(context));
}

export default curry(interpolate);
