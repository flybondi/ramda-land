import _curry1 from './_curry1';
import _curry2 from './_curry2';
import _isPlaceholder from './is-placeholder';
import _copyNameProperty from './copy-name';

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return _copyNameProperty(fn, function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a)
          ? f3
          : _curry2(
              _copyNameProperty(fn, function (_b, _c) {
                return fn(a, _b, _c);
              })
            );
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b)
          ? f3
          : _isPlaceholder(a)
          ? _curry2(
              _copyNameProperty(fn, function (_a, _c) {
                return fn(_a, b, _c);
              })
            )
          : _isPlaceholder(b)
          ? _curry2(
              _copyNameProperty(fn, function (_b, _c) {
                return fn(a, _b, _c);
              })
            )
          : _curry1(
              _copyNameProperty(fn, function (_c) {
                return fn(a, b, _c);
              })
            );
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c)
          ? f3
          : _isPlaceholder(a) && _isPlaceholder(b)
          ? _curry2(
              _copyNameProperty(fn, function (_a, _b) {
                return fn(_a, _b, c);
              })
            )
          : _isPlaceholder(a) && _isPlaceholder(c)
          ? _curry2(
              _copyNameProperty(fn, function (_a, _c) {
                return fn(_a, b, _c);
              })
            )
          : _isPlaceholder(b) && _isPlaceholder(c)
          ? _curry2(
              _copyNameProperty(fn, function (_b, _c) {
                return fn(a, _b, _c);
              })
            )
          : _isPlaceholder(a)
          ? _curry1(
              _copyNameProperty(fn, function (_a) {
                return fn(_a, b, c);
              })
            )
          : _isPlaceholder(b)
          ? _curry1(
              _copyNameProperty(fn, function (_b) {
                return fn(a, _b, c);
              })
            )
          : _isPlaceholder(c)
          ? _curry1(
              _copyNameProperty(fn, function (_c) {
                return fn(a, b, _c);
              })
            )
          : fn(a, b, c);
    }
  });
}

export default _curry3;
