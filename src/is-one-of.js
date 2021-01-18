import { compose, not, isEmpty, useWith, intersection } from 'ramda';
import { allToLower } from './all-to-lower-upper';
import curryN from './curry-n';

/**
 * Checks if a string value (or set of values) is present in another.
 * The comparison between elements is case insensitive. `null` and
 * `undefined` values are ignored.
 *
 * @example
 *  const isVeggie = isOneOf(['carrot', 'cucumber', 'parsnip']);
 *  isVeggie('tuna'); // false
 *
 * @function
 * @see https://ramdajs.com/docs/#intersection
 * @param {{String[]}|String} firstSet The first set of elements (or single element) to check.
 * @param {{String[]}|String} secondSet The second set of elements (or single element) to check.
 * @returns {boolean} `true` if at least one element on `firstSet` is present in `secondSet`.
 */
const isOneOf = curryN(2, compose(not, isEmpty, useWith(intersection, [allToLower, allToLower])));

export default isOneOf;
