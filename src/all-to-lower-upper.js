import { compose, toLower, toUpper, map } from 'ramda';
import { rejectNilOrEmpty } from './reject-nil';
import castArray from './cast-array';
import curryN from './curry-n';

const compactMap = fn => compose(map(fn), rejectNilOrEmpty, castArray);

/**
 * Converts all elements in an array to lowercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined` and
 * `null` values will be removed from the output.
 *
 * @example
 *  allToLower(['Foo', null, 'bAr']); // ['foo', bar']
 *
 * @function
 * @param {{String[]}|String} values The values to convert to lowercase. A
 *  single value will be wrapped in an array.
 * @returns {string[]} All the passed `values`, down cased.
 */
export const allToLower = curryN(1, compactMap(compose(toLower, String)));

/**
 * Converts all elements in an array to uppercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined`,
 * `null` or empty values will be removed from the output.
 *
 * @example
 *  allToUpper(['Foo', null, 'bAr']); // ['FOO', BAR']
 *
 * @function
 * @param {{String[]}|String} values The values to convert to uppercase. A
 *  single value will be wrapped in an array.
 * @returns {string[]} All the passed `values`, upper cased.
 */
export const allToUpper = curryN(1, compactMap(compose(toUpper, String)));
