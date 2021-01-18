import _isPlaceholder from './is-placeholder';
import _copyNameProperty from './copy-name';

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return _copyNameProperty(fn, function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  });
}

export default _curry1;
