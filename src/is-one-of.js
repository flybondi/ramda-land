import { compose, not, isEmpty, useWith, intersection, complement } from 'ramda';
import { allToLower } from './all-to-lower-upper';
import curryN from './curry-n';

/**
 * Checks if a string value (or set of values) is present in another.
 * The comparison between elements is case insensitive. `null` and
 * `undefined` values are ignored.
 *
 * @example
 *  const isVeggie = isOneOf(['carrot', 'cucumber', 'parsnip']);
 *  isVeggie('tuna'); //=> false
 *
 *  const anyWild = isOneOf(['tiger', 'lion', 'panther']);
 *  anyWild(['dog', 'cat']); //=> false
 *  anyWild(['tiger', 'cat']); //=> true
 *
 * @function
 * @see https://ramdajs.com/docs/#intersection
 * @param {string[]|string} firstSet The first set of elements (or single element) to check.
 * @param {string[]|string} secondSet The second set of elements (or single element) to check.
 * @returns {boolean} `true` if at least one element on `firstSet` is present in `secondSet`.
 */
export const isOneOf = curryN(
  2,
  compose(not, isEmpty, useWith(intersection, [allToLower, allToLower]))
);

/**
 * Checks if a string value (or set of values) is not present in another.
 * The comparison between elements is case insensitive. `null` and
 * `undefined` values are ignored.
 *
 * @example
 *  const isNotVeggie = isNotOneOf(['carrot', 'cucumber', 'parsnip']);
 *  isNotVeggie('tuna'); //=> true
 *
 *  const areAllDomestic = isNotOneOf(['tiger', 'lion', 'panther']);
 *  areAllDomestic(['dog', 'cat']); //=> true
 *  areAllDomestic(['tiger', 'cat']); //=> false
 *
 * @function
 * @see https://ramdajs.com/docs/#intersection
 * @param {string[]|string} firstSet The first set of elements (or single element) to check.
 * @param {string[]|string} secondSet The second set of elements (or single element) to check.
 * @returns {boolean} `true` if no one element on `firstSet` is present in `secondSet`.
 */
export const isNotOneOf = complement(isOneOf);
