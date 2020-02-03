'use strict';
const curry = require('./curry');
const { isNotNilOrEmpty } = require('./is-nil-empty');
const { take, when, compose, trim } = require('ramda');

/**
 * String sequence that should appear on truncated strings. The length
 * of this constant will affect the total length of the output of the truncation transformation.
 * @type {String}
 * @private
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
      stringToTruncate => {
        const maxLengthLargerThanEllipsis = maxLength > ELLIPSIS.length;
        return maxLength < 1
          ? // Return an empty string is the maximum requested length is 1 or less
            ''
          : stringToTruncate.length > maxLength
          ? // If the input is longer than the maximum length, shorten it and append `...` at the end
            // if it'd still be within the limits - the ellipsis (`...`) should not be returned if the `maxLength`
            // is less than the ellipsis length itself
            `${take(
              maxLengthLargerThanEllipsis ? maxLength - ELLIPSIS.length : maxLength,
              stringToTruncate
            )}${maxLengthLargerThanEllipsis ? ELLIPSIS : ''}`
          : // Return the input as is if its size fits within the given limit
            stringToTruncate;
      },
      trim,
      String
    ),
    value
  );
}

module.exports = curry(truncate);
