'use strict';
const { reject, isNil, unless } = require('ramda');
const { isNilOrEmpty } = require('./is-nil-empty');

/**
 * Iterates over a functor a removes any elements that are either `null` or
 * `undefined`.
 *
 * @example
 *  rejectNil(null); // -> null
 *  rejectNil([42, undefined, 'life']); // -> [42, 'life']
 *  rejectNil({ foo: null, life: 42 }); // -> { life: 42 }
 *
 * @function
 * @see https://ramdajs.com/docs/#reject
 * @param {Object|Array.<Object>} functor The iterable to remove nil values from.
 * @returns {Object|Array.<Object>} The original iterable without `null` or `undefined`
 *  values.
 */
const rejectNil = unless(isNil, reject(isNil));

/**
 * Iterates over a functor a removes any elements that are either `null`,
 * `undefined`. or empty ([], {}).
 *
 * @example
 *  rejectNilOrEmpty(null); // -> null
 *  rejectNilOrEmpty([42, undefined, {}, 'life']); // -> [42, 'life']
 *  rejectNilOrEmpty({ foo: null, bar: [], life: 42 }); // -> { life: 42 }
 *
 * @function
 * @see https://ramdajs.com/docs/#reject
 * @param {Object|Array.<Object>} functor The iterable to remove nil or empty values from.
 * @returns {Object|Array.<Object>} The original iterable without `null`, `undefined`
 *  or empty values.
 */
const rejectNilOrEmpty = unless(isNil, reject(isNilOrEmpty));

module.exports = { rejectNil, rejectNilOrEmpty };
