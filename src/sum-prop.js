'use strict';

const { compose, applyTo, propOr, reduce, pair, useWith, identity, sum } = require('ramda');
const curryN = require('./curry-n');
const castArray = require('./cast-array');
const { rejectNilOrEmpty } = require('./reject-nil');
const round = require('./round');

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
      round(precision),
      reduce(useWith(compose(sum, pair), [identity, compose(Number, propOr(0, propName))]), 0),
      rejectNilOrEmpty,
      castArray
    )
  );
}

module.exports = curryN(3, sumProp);
