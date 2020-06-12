'use strict';

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

module.exports = { MIN_MATH_DELTA, MAX_MATH_DELTA };
