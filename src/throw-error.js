'use strict';
const { curry, thunkify } = require('ramda');

/**
 * Immediately throws an `Error` with the given `message` extended with
 * additional properties on `data`.
 *
 * @example
 *  throwErrorWith('boom', { code: 500 }); // Throw `new Error('boom')`
 *
 * @param {String} message  The error message
 * @param {Object} data Additional properties to attach to the thrown error
 * @throws {Error}
 */
function throwErrorWith(message, data) {
  throw Object.assign(new Error(message), data);
}

module.exports = {
  thenThrowErrorWith: thunkify(throwErrorWith),
  throwErrorWith: curry(throwErrorWith)
};
