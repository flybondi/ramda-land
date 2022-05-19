import { replace } from 'ramda';
import curry from './curry';

/**
 * Regular expression used to detect and replace
 * interpolation `{tokens}` within templates.
 *
 * @constant {RegExp}
 */
const INTERPOLATE_SYNTAX_REGEXP = /{\s*([^}]+?)\s*}/g;

/**
 * Replaces variables in a template enclosed by `{}`.
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
  return replace(INTERPOLATE_SYNTAX_REGEXP, (token, key) => context[key] ?? token, template);
}

export default curry(interpolate);
