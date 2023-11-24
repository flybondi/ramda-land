import { compose, curry, propOr, toUpper, trim } from 'ramda';

/**
 * Extract a property from an object and convert it to uppercase.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  toUpperProp('value')({ value: null }) //=> ''
 *  toUpperProp('value')({ value: undefined }) //=> ''
 *  toUpperProp('value')({ value: ' test ' }) //=> ' TEST '
 * @param {string} propName value
 * @returns {string} upper case value
 */
export const toUpperProp = curry(compose(toUpper, propOr('')));

/**
 * Extract a property from an object and convert it to uppercase.
 * If the property is null or undefined, an empty string will be returned.
 * If the property has spaces in between, note that the following will be included.
 * @example
 *  toUpperTrimProp('value')({ value: null }) //=> ''
 *  toUpperTrimProp('value')({ value: undefined }) //=> ''
 *  toUpperTrimProp('value')({ value: ' test ' }) //=> 'TEST'
 * @param {string} propName value
 * @returns {string} upper case value
 */
export const toUpperTrimProp = curry(compose(trim, toUpperProp));
