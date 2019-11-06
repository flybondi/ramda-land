'use strict';
const curry = require('./curry');
const { isNotNilOrEmpty } = require('./is-nil-empty');
const { take, when, compose, trim } = require('ramda');

/**
 * String sequence that should appear on truncated strings. The length
 * of this constant will affect the total length of the output of the truncation transformation.
 * @type {String}
 */
const ELLIPSIS = '...';

/**
 * Truncates the given string `value` so its total length does not exceed `maxLength` length,
 * adding an ellipsis (`...`) at the end.
 *
 * @example
 *  truncate(15, 'I am selling these fine leather jackets');
 * // 'I am selling...'
 *
 * @param {Number} maxLength Length threshold above which `value` will be truncated.
 * @param {*} value The text to truncate (will be coerced into a `String` and trimmed).
 * @returns {String} The truncated string containing an ellipsis (`...`) at the end.
 */
function truncate(maxLength, value) {
  return when(
    isNotNilOrEmpty,
    compose(
      stringToTruncate =>
        `${take(maxLength - ELLIPSIS.length, stringToTruncate)}${
          stringToTruncate.length > maxLength ? ELLIPSIS : ''
        }`,
      trim,
      String
    ),
    value
  );
}

module.exports = curry(truncate);
