import { reject, isNil, unless } from 'ramda';
import { isNilOrEmpty } from './is-nil-empty';

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
 * @param {object|{object[]}} functor The iterable to remove nil values from.
 * @returns {object|{object[]}} The original iterable without `null` or `undefined`
 *  values.
 */
export const rejectNil = unless(isNil, reject(isNil));

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
 * @param {object|{object[]}} functor The iterable to remove nil or empty values from.
 * @returns {object|{object[]}} The original iterable without `null`, `undefined`
 *  or empty values.
 */
export const rejectNilOrEmpty = unless(isNil, reject(isNilOrEmpty));
