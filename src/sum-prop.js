'use strict';

const {
  compose,
  applyTo,
  propOr,
  gt,
  lt,
  when,
  always,
  reduce,
  pair,
  useWith,
  identity,
  sum
} = require('ramda');
const curryN = require('./curry-n');
const castArray = require('./cast-array');
const { rejectNilOrEmpty } = require('./reject-nil');

/**
 * The minimum value beneath which underflow to zero occurs.
 * @type {Number}
 */
const MIN_MATH_DELTA = 1e-7;

/**
 * The maximum value above which overflow to Infinity occurs.
 * @type {Number}
 */
const MAX_MATH_DELTA = Number.MAX_SAFE_INTEGER - 1;

/**
 * Sums the values at `propName` present in each element of an array.
 * Works as a single-pass version of `compose(sum, map(Number), pluck(propName))`.
 *
 * @example
 *  sumProp(2, 'amount', [{amount:'40'}, {amount:'2'}]); // 42
 *
 * @function
 * @param {String} precision Number of decimal places used in rounding the final value.
 * @param {String} propName Name of the property to pluck values from.
 * @param {Array.<Object>} values The elements to extract the `propName` values from.
 *  Value may be either a `Number` or a numerical `String`.
 * @returns {Number} The total sum of all values at `propName`.
 */
function sumProp(precision, propName, values) {
  return applyTo(
    values,
    compose(
      // Round to two decimal places
      total =>
        Number.isFinite(total) ? +(Math.round(total + `e+${precision}`) + `e-${precision}`) : total,
      // Coerce values higher than `Number.MAX_SAFE_INTEGER` to `Infinity`
      when(lt(MAX_MATH_DELTA), always(Infinity)),
      // Coerce values lower than `0.0000001` to `0`
      when(gt(MIN_MATH_DELTA), always(0)),
      reduce(useWith(compose(sum, pair), [identity, compose(Number, propOr(0, propName))]), 0),
      rejectNilOrEmpty,
      castArray
    )
  );
}

module.exports = curryN(3, sumProp);
