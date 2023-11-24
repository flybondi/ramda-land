import {
  converge,
  compose,
  toUpper,
  head,
  tail,
  toLower,
  concat,
  unless,
  isNil,
  curry,
  propOr,
  trim
} from 'ramda';

/**
 * Transforms a string so that the first letter is capitalized
 * and the rest is lowercased (i.e.: 'uNibROw' -> 'Unibrow').
 * If the input is `null` or `undefined`, it's returned as is.
 *
 * @function
 * @param {string} str The string to capitalize
 * @returns {string} The original string with the first letter capitalized.
 */
export const capitalize = unless(
  isNil,
  converge(concat, [compose(toUpper, head), compose(toLower, tail)])
);

/**
 * Extract a property from an object and capitalize.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  capitalizeProp('value')({ value: null }) //=> ''
 *  capitalizeProp('value')({ value: undefined }) //=> ''
 *  capitalizeProp('value')({ value: ' TEST ' }) //=> ' test '
 *  capitalizeProp('value')({ value: 'TEST' }) //=> ' Test '
 * @param {string} propName value
 * @returns {string} capitalize value
 */
export const capitalizeProp = curry(compose(capitalize, propOr('')));

/**
 * Extract a property from an object and capitalize.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  capitalizeTrimProp('value')({ value: null }) //=> ''
 *  capitalizeTrimProp('value')({ value: undefined }) //=> ''
 *  capitalizeTrimProp('value')({ value: ' TEST ' }) //=> 'Test'
 * @param {string} propName value
 * @returns {string} capitalize value
 */
export const capitalizeTrimProp = curry(compose(capitalize, trim, propOr('')));
