import _curry2 from './utils/_curry2';
import _copyNameProperty from './utils/copy-name';

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @function
 * @param {number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @example
 *
 *      const takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 */
const nAry = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0:
      return _copyNameProperty(fn, function () {
        return fn.call(this);
      });
    case 1:
      return _copyNameProperty(fn, function (a0) {
        return fn.call(this, a0);
      });
    case 2:
      return _copyNameProperty(fn, function (a0, a1) {
        return fn.call(this, a0, a1);
      });
    case 3:
      return _copyNameProperty(fn, function (a0, a1, a2) {
        return fn.call(this, a0, a1, a2);
      });
    case 4:
      return _copyNameProperty(fn, function (a0, a1, a2, a3) {
        return fn.call(this, a0, a1, a2, a3);
      });
    case 5:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4) {
        return fn.call(this, a0, a1, a2, a3, a4);
      });
    case 6:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4, a5) {
        return fn.call(this, a0, a1, a2, a3, a4, a5);
      });
    case 7:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
      });
    case 8:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
      });
    case 9:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
      });
    case 10:
      return _copyNameProperty(fn, function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
      });
    default:
      throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});

export default nAry;
