'use strict';
const { curry, fromPairs, toPairs, map, adjust } = require('ramda');

/**
 * Map keys on an objects by running a mapping function to each one.
 *
 * @function
 * @param {Function} fn Mapping function. Receives a key and must return a new key name.
 * @param {Object} obj The object to map keys from.
 * @returns {Object} The resulting object after mapping its keys.
 */
const mapKeys = curry((fn, obj) => fromPairs(map(adjust(0, fn), toPairs(obj))));

module.exports = mapKeys;
