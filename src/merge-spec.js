'use strict';
const { applyTo, compose, mergeDeepRight } = require('ramda');
const _curry2 = require('./utils/_curry2');
const applySpec = require('./apply-spec');

/**
 * Recursively applies functions on the `spec` object to produce a new
 * object matching its definition, which is then merged with the original
 * object. If a key exists in both objects, the value from the result of
 * applying the `spec` will take precedence.
 *
 * @example
 *  mergeSpec({ bar: o => o.num + 40 }, { num: 2 });
 *  // -> { bar: 42, num: 2 }
 *
 * @function
 * @see https://ramdajs.com/docs/#applySpec
 * @see https://ramdajs.com/docs/#mergeRight
 * @param {Object} spec An object recursively mapping properties to functions for
 *  producing corresponding values.
 * @param {Object} obj The object to apply the spec to and onto which the result
 *  will be merged.
 * @returns {Object} A new object containing all properties coming from applying
 *  the `spec` to `obj` plus all or of `obj` own properties.
 *
 */
const mergeSpec = _curry2(function mergeSpec(spec, obj) {
  return applyTo(
    obj,
    compose(
      mergeDeepRight(obj),
      applySpec(spec)
    )
  );
});

module.exports = mergeSpec;
