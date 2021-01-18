import { fromPairs, toPairs, map, adjust } from 'ramda';
import curry from './curry';

/**
 * Map keys on an objects by running a mapping function to each one.
 *
 * @function
 * @param {Function} fn Mapping function. Receives a key and must return a new key name.
 * @param {object} obj The object to map keys from.
 * @returns {object} The resulting object after mapping its keys.
 */
const mapKeys = curry((fn, obj) => fromPairs(map(adjust(0, fn), toPairs(obj))));

export default mapKeys;
