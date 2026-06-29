import { omit, isNil } from 'ramda';
import curry from './curry';

/**
 * Checks if a value is an object.
 * @private
 * @param {*} obj The value to check.
 * @returns {boolean} Returns `true` if `obj` is an object, else `false`.
 */
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * Recursively omit the specified keys from an object or array of objects.
 * The keys are omitted from the object itself and all its nested objects.
 *
 * @function
 * @see https://github.com/jonschlinkert/omit-deep/tree/master
 * @param {Object|Array} input The object or array of objects to omit keys from.
 * @param {Array} props The list of keys to omit.
 * @returns {Object|Array} A new object or array of objects with the specified keys omitted.
 * @example
 * omitDeep(['b'], { a: 1, b: 2, c: { d: 3, e: 4 } }); // returns { a: 1, c: { d: 3, e: 4 } }
 */
function omitDeep(props, input) {
  function omitDeepOnOwnProps(obj) {
    if (typeof input === 'undefined') {
      return input;
    }

    if (!Array.isArray(obj) && !isObject(obj)) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return omitDeep(props, obj);
    }

    const o = {};
    for (const [key, value] of Object.entries(obj)) {
      o[key] = !isNil(value) ? omitDeep(props, value) : value;
    }

    return omit(props, o);
  }

  if (arguments.length > 2) {
    props = Array.prototype.slice.call(arguments).slice(1);
  }

  if (Array.isArray(input)) {
    return input.map(omitDeepOnOwnProps);
  }

  return omitDeepOnOwnProps(input);
}

export default curry(omitDeep);
