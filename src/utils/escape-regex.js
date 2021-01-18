import { replace, compose } from 'ramda';

/**
 * Escape `RegExp` special characters.
 *
 * @private
 * @function
 * @param {*} value Value to escape (will be coerced into a `String`).
 * @returns {string} The escaped value, sanitized to be used in a regular expression.
 */
const escapeStringRegexp = compose(replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&'), String);

export default escapeStringRegexp;
