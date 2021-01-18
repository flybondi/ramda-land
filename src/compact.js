import { filter, both } from 'ramda';
import { isNotEmpty } from './is-nil-empty';

/**
 * Returns a new array with all falsey and empty values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty.
 *
 * @example
 *  compact([0, 1, false, 2, '', 3, {}]);
 *  // -> [1, 2, 3]
 *
 * @function
 * @see https://lodash.com/docs/4.17.11#compact
 * @see https://ramdajs.com/docs/#filter
 * @param {Array.<*>} list The array to compact.
 * @returns {Array.<*>} Returns the new array of filtered values.
 */
const compact = filter(both(Boolean, isNotEmpty));

export default compact;
