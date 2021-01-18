/**
 * The minimum value beneath which underflow to zero occurs.
 * @constant {number}
 */
export const MIN_MATH_DELTA = 1e-7;

/**
 * The minimum negative value beneath which underflow to zero occurs.
 * @constant {number}
 */
export const MIN_NEG_MATH_DELTA = -1e-7;

/**
 * The maximum value above which overflow to Infinity occurs.
 * @constant {number}
 */
export const MAX_MATH_DELTA = Number.MAX_SAFE_INTEGER - 1;
