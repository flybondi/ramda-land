'use strict';
const { replace, compose } = require('ramda');

/**
 * Escape `RegExp` special characters.
 *
 * @private
 * @function
 * @param {*} value Value to escape (will be coerced into a `String`).
 * @returns {String} The escaped value, sanitized to be used in a regular expression.
 */
const escapeStringRegexp = compose(replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&'), String);

module.exports = escapeStringRegexp;
