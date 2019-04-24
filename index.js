'use strict';
/**
 * A comprehensive collection of utilities for ramda, providing a variety of
 * useful, well tested and reusable functions.
 *
 * @module @flybondi/ramda-land
 */
const { numberProp, numberPropOr } = require('./src/number-prop');
const { booleanProp, booleanPropOr } = require('./src/boolean-prop');
const { isNilOrEmpty, isNotNilOrEmpty } = require('./src/is-nil-empty');
const { thenThrowErrorWith, throwErrorWith } = require('./src/throw-error');
const { rejectNil, rejectNilOrEmpty } = require('./src/reject-nil');
const { allToLower, allToUpper } = require('./src/all-to-lower-upper');
const mergeInto = require('./src/merge-into');
const castArray = require('./src/cast-array');
const mapKeys = require('./src/map-keys');
const renameKeys = require('./src/rename-keys');
const spreadProp = require('./src/spread-prop');
const alwaysNew = require('./src/always-new');
const nAry = require('./src/n-ary');
const capitalize = require('./src/capitalize');
const capitalizeWords = require('./src/capitalize-words');
const curry = require('./src/curry');
const curryN = require('./src/curry-n');
const isOneOf = require('./src/is-one-of');

module.exports = {
  curry,
  curryN,
  nAry,
  isOneOf,
  allToLower,
  allToUpper,
  alwaysNew,
  booleanProp,
  booleanPropOr,
  isNilOrEmpty,
  isNotNilOrEmpty,
  castArray,
  capitalize,
  capitalizeWords,
  mapKeys,
  renameKeys,
  rejectNil,
  rejectNilOrEmpty,
  thenThrowErrorWith,
  throwErrorWith,
  spreadProp,
  numberProp,
  numberPropOr,
  mergeInto
};
