import { curry, thunkify } from 'ramda';

/**
 * @private
 */
function throwError(message, data) {
  throw Object.assign(new Error(message), data);
}

/**
 * Immediately throws an `Error` with the given `message` extended with
 * additional properties on `data`.
 *
 * @example
 *  throwErrorWith('boom', { code: 500 }); // Throw `new Error('boom')`
 *
 * @param {string} message  The error message
 * @param {object} data Additional properties to attach to the thrown error
 * @throws {Error}
 */
export const throwErrorWith = curry(throwError);

/**
 * Returns a function that, when invoked, throws an `Error` with the given `message` extended with
 * additional properties on `data`.
 *
 * @example
 *  const explode = thenThrowErrorWith('boom', { code: 500 });
 *  explode(); // Throw `new Error('boom')`
 *
 * @param {string} message  The error message
 * @param {object} data Additional properties to attach to the thrown error
 * @throws {Error}
 */
export const thenThrowErrorWith = thunkify(throwErrorWith);
