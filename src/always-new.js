import { thunkify, clone } from 'ramda';

/**
 * Returns a function that creates new instances of whatever argument
 * is passed in each time it's called.
 *
 * @example
 *
 *  const alwaysNewArray = alwaysNew([]);
 *  const a = alwaysNewArray(); // -> []
 *  const b = alwaysNewArray(); // -> []
 *  // a !== b
 *
 * @function
 * @param {*} value The value to create instances of on each call.
 * @returns {Function} A factory function that returns new instances of
 *  `value` each time it is called.
 */
const alwaysNew = thunkify(clone);

export default alwaysNew;
