'use strict';
const { converge, compose, toUpper, head, tail, toLower, concat, unless, isNil } = require('ramda');

/**
 * Transforms a string so that the first letter is capitalized
 * and the rest is lowercased (i.e.: 'uNibROw' -> 'Unibrow').
 * If the input is `null` or `undefined`, it's returned as is.
 *
 * @function
 * @param {String} str The string to capitalize
 * @returns {String} The original string with the first letter capitalized.
 */
const capitalize = unless(
  isNil,
  converge(concat, [
    compose(
      toUpper,
      head
    ),
    compose(
      toLower,
      tail
    )
  ])
);

module.exports = capitalize;
