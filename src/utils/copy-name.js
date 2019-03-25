'use strict';
/**
 * Copies the `name` property of a function to another.
 *
 * @private
 * @param {Function} fna Function providing the name to be set onto `fnb`.
 * @param {Function} fnb Function that will receive the `name` of `fna`.
 * @returns {Function} `fnb` after defining its new `name` property.
 */
function copyNameProperty(fna, fnb) {
  return Object.defineProperty(fnb, 'name', { value: fna.name, configurable: true });
}

module.exports = copyNameProperty;
