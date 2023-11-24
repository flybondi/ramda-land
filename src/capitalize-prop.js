import capitalize from './capitalize';
import { compose, curry, propOr, trim } from 'ramda';

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
