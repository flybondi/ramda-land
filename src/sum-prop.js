import { compose, applyTo, propOr, reduce, pair, useWith, identity, sum } from 'ramda';
import curryN from './curry-n';
import castArray from './cast-array';
import { rejectNilOrEmpty } from './reject-nil';
import round from './round';

/**
 * Sums the values at `propName` present in each element of an array.
 * Works as a single-pass version of `compose(sum, map(Number), pluck(propName))`.
 *
 * @example
 *  sumProp(2, 'amount', [{amount:'40'}, {amount:'2'}]); // 42
 *
 * @function
 * @param {string} precision Number of decimal places used in rounding the final value.
 * @param {string} propName Name of the property to pluck values from.
 * @param {object[]} values The elements to extract the `propName` values from.
 *  Value may be either a `Number` or a numerical `String`.
 * @returns {number} The total sum of all values at `propName`.
 */
function sumProp(precision, propName, values) {
  return applyTo(
    values,
    compose(
      round(precision),
      reduce(useWith(compose(sum, pair), [identity, compose(Number, propOr(0, propName))]), 0),
      rejectNilOrEmpty,
      castArray
    )
  );
}

export default curryN(3, sumProp);
