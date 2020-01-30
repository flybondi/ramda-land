'use strict';
const curry = require('./curry');
const { rejectNil } = require('./reject-nil');
const { compose, values, mapObjIndexed, reduce, replace, flip, call } = require('ramda');

const replacer = compose(
  values,
  mapObjIndexed((value, key) => replace(new RegExp(`{${key}}`, 'g'), value)),
  rejectNil
);

/**
 * Replaces variables in a template enclosed by `{}`.
 *
 * @example
 *  interpolate('I am {name}', { name: 'Error' });
 *  // 'I am Error'
 *
 * @param {String} template The template to interpolate.
 * @param {Object} context The values to replace in `template.
 * @returns {String} The result of resolving template interpolation
 *  with the given `context`.
 */
function interpolate(template, context) {
  return reduce(flip(call), template, replacer(context));
}

module.exports = curry(interpolate);
