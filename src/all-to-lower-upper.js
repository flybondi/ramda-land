'use strict';
const { compose, toLower, toUpper, map } = require('ramda');
const { rejectNilOrEmpty } = require('./reject-nil');
const castArray = require('./cast-array');
const curryN = require('./curry-n');

const compactMap = fn =>
  compose(
    map(fn),
    rejectNilOrEmpty,
    castArray
  );

/**
 * Converts all elements in an array to lowercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined` and
 * `null` values will be removed from the output.
 *
 * @example
 *  allToLower(['Foo', null, 'bAr']); // ['foo', bar']
 *
 * @function
 * @param {Array.<String>|String} values The values to convert to lowercase. A
 *  single value will be wrapped in an array.
 * @returns {Array.<String>} All the passed `values`, down cased.
 */
const allToLower = curryN(
  1,
  compactMap(
    compose(
      toLower,
      String
    )
  )
);

/**
 * Converts all elements in an array to uppercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined`,
 * `null` or empty values will be removed from the output.
 *
 * @example
 *  allToUpper(['Foo', null, 'bAr']); // ['FOO', BAR']
 *
 * @function
 * @param {Array.<String>|String} values The values to convert to uppercase. A
 *  single value will be wrapped in an array.
 * @returns {Array.<String>} All the passed `values`, upper cased.
 */
const allToUpper = curryN(
  1,
  compactMap(
    compose(
      toUpper,
      String
    )
  )
);

module.exports = { allToLower, allToUpper };
