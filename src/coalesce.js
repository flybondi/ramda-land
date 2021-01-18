import { compose, reduce, either, F, map, max, length } from 'ramda';
import curry from './curry';

/**
 * @function
 * @private
 */
const _coalesce = reduce(either, F);

/**
 * @function
 * @private
 */
const maxLength = compose(reduce(max, 0), map(length));

/**
 * Creates a wrapping function that concatenates the result of each function
 * in `fns` with an `||` operator, returning the first truthy value. This works
 * as a falsy-coalescing operator.
 *
 * @example
 *  coalesce([prop('foo'), prop('bar'), prop('baz')])({ bar: 42 }); // -> 42
 *
 * @see https://ramdajs.com/docs/#either
 * @param {Function[]} fns A list of functions to be chained together with
 *  an `||` operator returning the result of the first truthy value after their evaluation.
 * @returns {Function} A falsy-coalescing evaluator function. The arity of this resulting function
 *  matches the arity of the function in `fns` with the largest number of arguments.
 */
function coalesce(fns) {
  const op = _coalesce(fns);
  return Object.defineProperty(op, 'length', { value: maxLength(fns) });
}

export default curry(coalesce);
