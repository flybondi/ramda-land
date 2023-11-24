import { capitalize } from './capitalize';
import { compose, join, reject, map, isEmpty, split, isNil, unless } from 'ramda';

/**
 * Capitalizes each word in a sentence. A "word" is considered any
 * token between space characters.
 *
 * @function
 * @example
 *
 *  capitalizeWords('I am selling these fine leather jackets');
 *  // I am Selling These Fine Leather Jackets
 *
 * @param {string} words The sentence to capitalize.
 * @returns {string} The original sentence with each word capitalized.
 */
const capitalizeWords = unless(
  isNil,
  compose(join(' '), reject(isEmpty), map(capitalize), split(/\s+/g))
);

export default capitalizeWords;
