import _curry1 from './utils/_curry1';
import curryN from './curry-n';
import { apply, max, pluck, reduce, keys, values, always } from 'ramda';

// Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
// delegating calls to .map
function mapValues(fn, obj) {
  return Array.isArray(obj)
    ? obj.map(fn)
    : keys(obj).reduce(function (acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
      }, {});
}

/**
 * Checks if `value` is object-like.
 * A value is object-like if it's not `null` and has a `typeof` result of `'object'`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if value is object-like, else false.
 */
const isObjectLike = value => typeof value === 'object' && value !== null;

/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * The difference between `R.applySpec` and this implementation is that it also
 * accepts literal values as part of the spec (e.g. `applySpec({ value: 42 });`).
 *
 * @function
 * @param {object|Array} spec a list or object recursively mapping properties or elements to functions for
 *  producing corresponding values.
 * @return {Function} A function that returns an object of the same structure
 *  as `spec', with each property set to the value returned by calling its
 *  associated function with the supplied arguments.
 * @example
 *
 *      const getMetrics = applySpec({
 *        list: [R.add, 'value']
 *        sum: R.add,
 *        some: 'value',
 *        nested: { mul: R.multiply, any: 'value' }
 *      });
 *      getMetrics(2, 4); // => {  list: [6, 'value'], sum: 6, some: 'value', nested: { mul: 8, any: 'value' } }
 */
const applySpec = _curry1(function applySpec(spec) {
  spec = mapValues(
    v => (typeof v === 'function' ? v : isObjectLike(v) ? applySpec(v) : always(v)),
    spec
  );

  return curryN(reduce(max, 0, pluck('length', values(spec))), function applySpec() {
    const args = arguments;
    return mapValues(f => apply(f, args), spec);
  });
});

export default applySpec;
