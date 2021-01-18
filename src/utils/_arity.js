/**
 * @private
 */
function _arity(n, fn) {
  return Object.defineProperty(fn, 'length', {
    value: n,
    configurable: true
  });
}

export default _arity;
