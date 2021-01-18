import { when, always, compose, lt, applyTo, gt, both } from 'ramda';
import _curry2 from './utils/_curry2';
import { MAX_MATH_DELTA, MIN_MATH_DELTA, MIN_NEG_MATH_DELTA } from './utils/_math-constants';

/**
 * Rounds a given number to the next largest number for positives and the next smallest for negatives.
 * @example
 * round(2, 2.151) // returns 2.15
 * round(1, -2.63) // returns -2.7
 * round(0, 2.8) // returns 3
 * @param {number} decimals number of decimals to round to
 * @param {number} value number to be rounded
 * @returns {number} rounded number
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

export default _curry2(round);
