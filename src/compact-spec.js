// @flow strict
'use strict';
const { always, applyTo, applySpec, compose, isEmpty, when } = require('ramda');
const { curry, rejectNilOrEmpty } = require('@flybondi/ramda-land');

/**
 * Given a spec object recursively mapping properties to functions, creates a function
 * producing an object of the same structure, by mapping each property to the result of calling
 * its associated function with the supplied arguments.
 * If the outcome of applying the spec produces an object with all nil or empty values,
 * it returns `undefined` instead.
 *
 * @example
 *  compactSpec({ foo: o => o.bar }, { bar: null }); // -> undefined
 *
 * @see https://ramdajs.com/docs/#applySpec
 * @param {Object} spec An object recursively mapping properties to functions for producing the values for these properties.
 * @param {Object|Array} value An object or array to apply the spec to.
 * @returns {Object|undefined} An spec matching object, or `undefined` if all of its properties are nil or empty.
 */
function compactSpec(spec, obj) {
  return applyTo(
    obj,
    compose(
      // Avoid returning an empty object when all properties
      // are `null` or `undefined`
      when(isEmpty, always(undefined)),
      rejectNilOrEmpty,
      applySpec(spec)
    )
  );
}

module.exports = curry(compactSpec);
