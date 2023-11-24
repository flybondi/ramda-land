import { compose, curry, propOr, toLower, trim } from 'ramda';

/**
 * Extract a property from an object and convert it to lowercase.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  toLowerProp('value')({ value: ' TEST ' }) //=> ' test '
 * @param {string} propName value
 * @returns {string} lowercase value or empty string
 */
export const toLowerProp = curry(compose(toLower, propOr('')));

/**
 * Extract a property from an object and convert it to lowercase.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  toLowerTrimProp('value')({ value: ' TEST ' }) //=> 'test'
 * @param {string} propName value
 * @returns {string} lowercase value or empty string
 */
export const toLowerTrimProp = curry(compose(trim, toLowerProp));
