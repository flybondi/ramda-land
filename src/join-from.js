import { compose, applyTo, join, of, ap } from 'ramda';
import curry from './curry';
import { rejectNil } from './reject-nil';

/**
 * Joins together using a `separator` strings returned from an array
 * of `fns` functions that are applied to an `obj` element.
 *
 * @example
 *  joinFrom('-', [prop('firstName'), prop('lastName')], {
 *    firstName: 'Fred',
 *    lastName: 'Astaire'
 *  }); // -> Fred Astaire
 *
 * @function
 * @param {string} separator String to use to join together all other strings.
 * @param {Function[]} fns Set of string returning functions that will be applied to `obj`.
 * @param {*} elem Value that will become the single argument for each function in `fns`.
 * @returns {string} The result of joining together each string returned by functions in
 *  `fns` with `separator`.
 */
const joinFrom = curry(function joinFrom(separator, fns, elem) {
  return applyTo(elem, compose(join(separator), rejectNil, ap(fns), of(Array)));
});

export default joinFrom;
