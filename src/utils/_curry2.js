import _curry1 from './_curry1';
import _isPlaceholder from './is-placeholder';
import _copyNameProperty from './copy-name';

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return _copyNameProperty(fn, function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a)
          ? f2
          : _curry1(
              _copyNameProperty(fn, function (_b) {
                return fn(a, _b);
              })
            );
      default:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f2
          : _isPlaceholder(a)
          ? _curry1(
              _copyNameProperty(fn, function (_a) {
                return fn(_a, b);
              })
            )
          : _isPlaceholder(b)
          ? _curry1(
              _copyNameProperty(fn, function (_b) {
                return fn(a, _b);
              })
            )
          : fn(a, b);
    }
  });
}

export default _curry2;
