'use strict';
const { compose, trim, toLower, unless, isNil } = require('ramda');

/**
 * Trims and transforms text to lower case. `null` and `undefined` values
 * are returned as is.
 *
 * @function
 * @param {String} value The string to trim and convert to lowercase.
 * @returns {String} The `value` after trimming and lowercasing.
 */
const lowerTrim = unless(
  isNil,
  compose(
    toLower,
    trim,
    String
  )
);

module.exports = lowerTrim;
