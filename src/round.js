'use strict';

const { when, always, compose, lt, applyTo, gt, both } = require('ramda');
const _curry2 = require('./utils/_curry2');
const { MAX_MATH_DELTA, MIN_MATH_DELTA, MIN_NEG_MATH_DELTA } = require('./utils/_math-constants');

/**
 * Rounds a given number to the next largest number for positives and the next smallest for negatives.
 * @example
 * round(2, 2.151) // returns 2.15
 * round(1, -2.63) // returns -2.7
 * round(0, 2.8) // returns 3
 * @param {Number} decimals number of decimals to round to
 * @param {Number} value number to be rounded
 * @returns {Number} rounded number
 */
function round(precision, value) {
  return applyTo(
    value,
    compose(
      total =>
        Number.isFinite(total) ? +(Math.round(total + `e+${precision}`) + `e-${precision}`) : total,
      // Coerce values higher than `Number.MAX_SAFE_INTEGER` to `Infinity`
      when(lt(MAX_MATH_DELTA), always(Infinity)),
      // Coerce values between `0.0000001` and `-0.0000001` to `0`
      when(both(gt(MIN_MATH_DELTA), lt(MIN_NEG_MATH_DELTA)), always(0)),
      Number
    )
  );
}

module.exports = _curry2(round);
