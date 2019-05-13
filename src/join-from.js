'use strict';
const { compose, applyTo, join, of, ap } = require('ramda');
const curry = require('./curry');
const { rejectNil } = require('./reject-nil');

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
 * @param {String} separator String to use to join together all other strings.
 * @param {Array.<Function>} fns Set of string returning functions that will be applied to `obj`.
 * @param {*} elem Value that will become the single argument for each function in `fns`.
 * @returns {String} The result of joining together each string returned by functions in
 *  `fns` with `separator`.
 */
const joinFrom = curry(function joinFrom(separator, fns, elem) {
  return applyTo(
    elem,
    compose(
      join(separator),
      rejectNil,
      ap(fns),
      of
    )
  );
});

module.exports = joinFrom;
