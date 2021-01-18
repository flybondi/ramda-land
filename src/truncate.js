import curry from './curry';
import { isNotNilOrEmpty } from './is-nil-empty';
import { take, when, compose, trim, empty } from 'ramda';

/**
 * String sequence that should appear on truncated strings. The length
 * of this constant will affect the total length of the output of the truncation transformation.
 *
 * @constant {string}
 * @private
 */
const ELLIPSIS = '...';

/**
 * @private
 */
const shorten = (maxLength, value) => {
  const shouldAppendEllipsis = maxLength > ELLIPSIS.length;
  return `${take(shouldAppendEllipsis ? maxLength - ELLIPSIS.length : maxLength, value)}${
    shouldAppendEllipsis ? ELLIPSIS : ''
  }`;
};

/**
 * @private
 */
const truncateIfNeeded = (maxLength, value) => {
  if (maxLength < 1) {
    // Return an empty string is the maximum requested length is 1 or less
    return empty(value);
  }

  return value.length > maxLength
    ? // If the input is longer than the maximum length, shorten it and append `...` at the end
      // if it'd still be within the limits - the ellipsis (`...`) should not be returned if the `maxLength`
      // is less than the ellipsis length itself
      shorten(maxLength, value)
    : // Return the input as is if its size fits within the given limit
      value;
};

/**
 * Truncates the given string `value` so its total length does not exceed `maxLength` length,
 * adding an ellipsis (`...`) at the end.
 *
 * @example
 *  truncate(15, 'I am selling these fine leather jackets');
 *  // 'I am selling...'
 *
 * @param {number} maxLength Length threshold above which `value` will be truncated.
 * @param {*} value The text to truncate (will be coerced into a `String` and trimmed).
 * @returns {string} The truncated string containing an ellipsis (`...`) at the end.
 */
function truncate(maxLength, value) {
  return when(
    isNotNilOrEmpty,
    compose(stringToTruncate => truncateIfNeeded(maxLength, stringToTruncate), trim, String),
    value
  );
}

export default curry(truncate);
