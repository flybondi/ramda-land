'use strict';

/**
 * @private
 */
function isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

module.exports = isPlaceholder;
