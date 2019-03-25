'use strict';

/**
 * @private
 */
function _arity(n, fn) {
  return Object.defineProperty(fn, 'length', {
    value: n,
    configurable: true
  });
}

module.exports = _arity;
