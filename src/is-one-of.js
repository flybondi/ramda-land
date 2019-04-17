'use strict';
const { compose, not, isEmpty, useWith, intersection } = require('ramda');
const { allToLower } = require('./all-to-lower-upper');
const curryN = require('./curry-n');

/**
 * Checks if a string value (or set of values) is present in another.
 * The comparison between elements is case insensitive. `null` and
 * `undefined` values are ignored.
 *
 * @example
 *  const isVeggie = isOneOf(['carrot', 'cucumber', 'parsnip']);
 *  isVeggie('tuna'); // false
 *
 * @function
 * @see https://ramdajs.com/docs/#intersection
 * @param {Array.<String>|String} firstSet The first set of elements (or single element) to check.
 * @param {Array.<String>|String} secondSet The second set of elements (or single element) to check.
 * @returns {Boolean} `true` if at least one element on `firstSet` is present in `secondSet`.
 */
const isOneOf = curryN(
  2,
  compose(
    not,
    isEmpty,
    useWith(intersection, [allToLower, allToLower])
  )
);

module.exports = isOneOf;
