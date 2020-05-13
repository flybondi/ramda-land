'use strict';
/**
 * A comprehensive collection of utilities for ramda, providing a variety of
 * useful, well tested and reusable functions.
 *
 * @module @flybondi/ramda-land
 */
const alwaysNew = require('./src/always-new');
const applySpec = require('./src/apply-spec');
const capitalize = require('./src/capitalize');
const capitalizeWords = require('./src/capitalize-words');
const castArray = require('./src/cast-array');
const coalesce = require('./src/coalesce');
const compact = require('./src/compact');
const compactSpec = require('./src/compact-spec');
const curry = require('./src/curry');
const curryN = require('./src/curry-n');
const isOneOf = require('./src/is-one-of');
const joinFrom = require('./src/join-from');
const lowerEquals = require('./src/lower-equals');
const lowerPath = require('./src/lower-path');
const lowerPathSatisfies = require('./src/lower-path-satisfies');
const lowerTrim = require('./src/lower-trim');
const mapKeys = require('./src/map-keys');
const mergeInto = require('./src/merge-into');
const mergeSpec = require('./src/merge-spec');
const nAry = require('./src/n-ary');
const renameKeys = require('./src/rename-keys');
const spreadProp = require('./src/spread-prop');
const truncate = require('./src/truncate');
const interpolate = require('./src/interpolate');
const notEquals = require('./src/not-equals');
const propOf = require('./src/prop-of');
const { allToLower, allToUpper } = require('./src/all-to-lower-upper');
const { arrayPath, compactPath } = require('./src/array-path');
const { arrayProp, compactProp } = require('./src/array-prop');
const { booleanProp, booleanPropOr } = require('./src/boolean-prop');
const { isNilOrEmpty, isNotNilOrEmpty, isNotEmpty, isNotNil } = require('./src/is-nil-empty');
const { numberProp, numberPropOr, numberPath, numberPathOr } = require('./src/number-prop');
const { rejectNil, rejectNilOrEmpty } = require('./src/reject-nil');
const { thenThrowErrorWith, throwErrorWith } = require('./src/throw-error');
const sumProp = require('./src/sum-prop');

module.exports = {
  allToLower,
  allToUpper,
  alwaysNew,
  applySpec,
  arrayPath,
  arrayProp,
  booleanProp,
  booleanPropOr,
  capitalize,
  capitalizeWords,
  castArray,
  coalesce,
  compact,
  compactPath,
  compactProp,
  compactSpec,
  curry,
  curryN,
  interpolate,
  isNilOrEmpty,
  isNotEmpty,
  isNotNil,
  isNotNilOrEmpty,
  isOneOf,
  joinFrom,
  lowerEquals,
  lowerPath,
  lowerPathSatisfies,
  lowerTrim,
  mapKeys,
  mergeInto,
  mergeSpec,
  nAry,
  propOf,
  notEquals,
  numberProp,
  numberPropOr,
  numberPath,
  numberPathOr,
  rejectNil,
  rejectNilOrEmpty,
  renameKeys,
  spreadProp,
  sumProp,
  thenThrowErrorWith,
  throwErrorWith,
  truncate
};
