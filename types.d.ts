/**
 * Converts all elements in an array to lowercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined` and
 * `null` values will be removed from the output.
 * @example
 * allToLower(['Foo', null, 'bAr']); // ['foo', bar']
 * @param values - The values to convert to lowercase. A
 *  single value will be wrapped in an array.
 * @returns All the passed `values`, down cased.
 */
export declare function allToLower(values: string[] | string): string[];

/**
 * Converts all elements in an array to uppercase. Each element
 * is coerced into a `String`, if it's not already one. All `undefined`,
 * `null` or empty values will be removed from the output.
 * @example
 * allToUpper(['Foo', null, 'bAr']); // ['FOO', BAR']
 * @param values - The values to convert to uppercase. A
 *  single value will be wrapped in an array.
 * @returns All the passed `values`, upper cased.
 */
export declare function allToUpper(values: string[] | string): string[];

/**
 * Returns a function that creates new instances of whatever argument
 * is passed in each time it's called.
 * @example
 * const alwaysNewArray = alwaysNew([]);
 *  const a = alwaysNewArray(); // -> []
 *  const b = alwaysNewArray(); // -> []
 *  // a !== b
 * @param value - The value to create instances of on each call.
 * @returns A factory function that returns new instances of
 *  `value` each time it is called.
 */
export declare function alwaysNew(value: any): (...params: any[]) => any;

/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 * @example
 * const getMetrics = R.applySpec({
 *        list: [R.add, 'value']
 *        sum: R.add,
 *        some: 'value',
 *        nested: { mul: R.multiply, any: 'value' }
 *      });
 *      getMetrics(2, 4); // => {  list: [6, 'value'], sum: 6, some: 'value', nested: { mul: 8, any: 'value' } }
 * @param spec - a list or object recursively mapping properties or elements to functions for
 *  producing corresponding values.
 * @returns A function that returns an object of the same structure
 *  as `spec', with each property set to the value returned by calling its
 *  associated function with the supplied arguments.
 */
export declare function applySpec(spec: any | any[]): (...params: any[]) => any;

/**
 * Shorthand function to extract a property at a path from an object and cast its value to an array. If the
 * value is already an array, it will be returned as is. Note that this function ensures that the
 * returned value is always an `Array` - so `null` and `undefined` property values at `path`
 * will return `[null]` and `[undefined]` respectively. Use `compactPath` instead if you need all
 * falsey and empty values removed.
 * @example
 * arrayPath(['foo', 'bar'], { foo: { bar: 'baz' } }); // -> ['baz']
 *  arrayPath(['foo'], { foo: [1, 2, 3] }); // -> [1, 2, 3]
 *  arrayPath(['foo', 'bar'], { foo: {} }); // -> [undefined]
 * @param path - Path to the value on `obj`
 * @param obj - Source of the extracted property
 * @returns The value of `obj` at `path` cast as an array.
 */
export declare function arrayPath(path: string[], obj: any): any[];

/**
 * Shorthand function to extract a property from an object at `path` and cast its value to an array,
 * removing all falsey and empty values from it. The values `false`, `null`, `0`, `""`,
 * `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty. If the value is
 * already an array, this function behaves like calling `compact` with that same value.
 * Note that this function ensures that the returned value is always an `Array` - so `null`
 * and `undefined` properties will both  return `[]` (an empty array).
 * @example
 * compactPath(['foo'. 'bar'], { foo: { bar: 'baz' } }); // -> ['baz']
 *  compactPath(['foo'], { foo: [0, 1, 2, 3, null] }); // -> [1, 2, 3]
 *  compactPath(['foo', 'bar'], {}); // -> []
 *  compactPath(['foo'], { foo: null }); // -> []
 *  compactPath(['foo', 'bar'], { foo: {} }); // -> []
 * @param path - Path to the value on `obj`
 * @param obj - Source of the extracted property
 * @returns The value of `obj` at `path` cast as an array with
 *  all falsey and empty values removed.
 */
export declare function compactPath(path: string[], obj: any): any[];

/**
 * Shorthand function to extract a property from an object and cast its value to an array. If the
 * value is already an array, it will be returned as is. Note that this function ensures that the
 * returned value is always an `Array` - so `null` and `undefined` properties
 * will return `[null]` and `[undefined]` respectively. Use `compactProp` instead if you need all
 * falsey and empty values removed.
 * @example
 * arrayProp('foo', { foo: 'bar' }); // -> ['bar']
 *  arrayProp('foo', { foo: [1, 2, 3] }); // -> [1, 2, 3]
 *  arrayProp('foo', {}); // -> [undefined]
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property
 * @returns The value of `obj` at `propName` cast as an array.
 */
export declare function arrayProp(propName: string, obj: any): any[];

/**
 * Shorthand function to extract a property from an object and cast its value to an array,
 * removing all falsey and empty values from it. The values `false`, `null`, `0`, `""`,
 * `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty. If the value is
 * already an array, this function behaves like calling `compact` with that same value.
 * Note that this function ensures that the returned value is always an `Array` - so `null`
 * and `undefined` properties will both  return `[]` (an empty array).
 * @example
 * compactProp('foo', { foo: 'bar' }); // -> ['bar']
 *  compactProp('foo', { foo: [0, 1, 2, 3, null] }); // -> [1, 2, 3]
 *  compactProp('foo', {}); // -> []
 *  compactProp('foo', { foo: null }); // -> []
 *  compactProp('foo', { foo: {} }); // -> []
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property
 * @returns The value of `obj` at `propName` cast as an array with
 *  all falsey and empty values removed.
 */
export declare function compactProp(propName: string, obj: any): any[];

/**
 * Shorthand function to extract a property from an object and convert it to a boolean.
 * Parsing of values to boolean follows `yn` logic.
 * @example
 * booleanProp('foo', { foo: 'y' }); // -> true
 *  booleanProp('foo', { foo: 0 }); // -> false
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property
 * @returns The value of `obj` at `propName` as a boolean.
 */
export declare function booleanProp(propName: string, obj: any): boolean;

/**
 * Shorthand function to extract a property from an object and convert it to a `Boolean`.
 * If boolean conversion would return `null` or `undefined`, it returns `defaultValue`, instead.
 * @example
 * booleanPropOr(true, 'foo', { bar: 42 }); // -> true
 *  booleanPropOr(false, 'foo', { foo: 'y' }); // -> true
 * @param defaultValue - The value to return if `propName` does not exist in `obj`
 *  or is nil.
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property.
 * @returns The value of `obj` at `propName` as a boolean or `defaultValue`.
 */
export declare function booleanPropOr(defaultValue: any, propName: string, obj: any): any;

/**
 * Capitalizes each word in a sentence. A "word" is considered any
 * token between space characters.
 * @example
 * capitalizeWords('I am selling these fine leather jackets');
 *  // I am Selling These Fine Leather Jackets
 * @param words - The sentence to capitalize.
 * @returns The original sentence with each word capitalized.
 */
export declare function capitalizeWords(words: string): string;

/**
 * Transforms a string so that the first letter is capitalized
 * and the rest is lowercased (i.e.: 'uNibROw' -> 'Unibrow').
 * If the input is `null` or `undefined`, it's returned as is.
 * @param str - The string to capitalize
 * @returns The original string with the first letter capitalized.
 */
export declare function capitalize(str: string): string;

/**
 * Wraps any value in an `Array` if it's not already one.
 * @example
 * castArray(42); // -> [42]
 *  castArray([42]); // -> [42]
 *  castArray(['foo', 'bar']); // -> ['foo', 'bar']
 * @param value - The value to wrap
 * @returns An `Array` containing the given `value`
 *  or the same input if it was already an `Array`.
 */
export declare function castArray(value: any): any[];

/**
 * Creates a wrapping function that concatenates the result of each function
 * in `fns` with an `||` operator, returning the first truthy value. This works
 * as a falsy-coalescing operator.
 * @example
 * coalesce([prop('foo'), prop('bar'), prop('baz')])({ bar: 42 }); // -> 42
 * @param fns - A list of functions to be chained together with
 *  an `||` operator returning the result of the first truthy value after their evaluation.
 * @returns A falsy-coalescing evaluator function. The arity of this resulting function
 *  matches the arity of the function in `fns` with the largest number of arguments.
 */
export declare function coalesce(fns: ((...params: any[]) => void)[]): (...params: any[]) => any;

/**
 * Given a spec object recursively mapping properties to functions, creates a function
 * producing an object of the same structure, by mapping each property to the result of calling
 * its associated function with the supplied arguments.
 * If the outcome of applying the spec produces an object with all nil or empty values,
 * it returns `undefined` instead.
 * @example
 * compactSpec({ foo: o => o.bar }, { bar: null }); // -> undefined
 * @param spec - An object recursively mapping properties to functions for producing the values for these properties.
 * @param value - An object or array to apply the spec to.
 * @returns An spec matching object, or `undefined` if all of its properties are nil or empty.
 */
export declare function compactSpec(spec: any, value: any | any[]): any | undefined;

/**
 * Returns a new array with all falsey and empty values removed.
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey. `[]` and `{}` are considered empty.
 * @example
 * compact([0, 1, false, 2, '', 3, {}]);
 *  // -> [1, 2, 3]
 * @param list - The array to compact.
 * @returns Returns the new array of filtered values.
 */
export declare function compact(list: any[]): any[];

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 * @example
 * const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 * @param length - The arity for the returned function.
 * @param fn - The function to curry.
 * @returns A new, curried function.
 */
export declare function curryN(length: number, fn: (...params: any[]) => any): (...params: any[]) => any;

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` (exported by `ramda`) may be used
 * to specify "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`,
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 * @example
 * const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 * @param fn - The function to curry.
 * @returns A new, curried function.
 */
export declare function curry(fn: (...params: any[]) => any): (...params: any[]) => any;

/**
 * A comprehensive collection of utilities for ramda, providing a variety of
 * useful, well tested and reusable functions.
 */
export declare module "@flybondi/ramda-land" { }

/**
 * Replaces variables in a template enclosed by `{}`. Variable names
 * will be escaped for safe regular expression usage and, for safety reasons,
 * cannot exceed `512` characters in length.
 * @example
 * interpolate('I am {name}', { name: 'Error' });
 *  // 'I am Error'
 * @param template - The template to interpolate.
 * @param context - The values to replace in `template.
 * @returns The result of resolving template interpolation
 *  with the given `context`.
 */
export declare function interpolate(template: string, context: any): string;

/**
 * Checks whether the given `value` is `null`, `undefined` or empty (definition of
 * "empty" is type dependant).
 * @example
 * isNilOrEmpty({}); // -> true
 *  isNilOrEmpty(null); // -> true
 *  isNilOrEmpty([]); // -> true
 *  isNilOrEmpty([42]); // -> false
 * @param value - The value to check
 * @returns `true` if `value` is either `null`, `undefined` or empty
 *  (such as `""` for strings, `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export declare function isNilOrEmpty(value: any): boolean;

/**
 * Checks whether the given `value` is neither `null`, `undefined` nor empty (definition of
 * "empty" is type dependant).
 * @example
 * isNotNilOrEmpty({}); // -> false
 *  isNotNilOrEmpty(null); // -> false
 *  isNotNilOrEmpty([]); // -> false
 *  isNotNilOrEmpty([42]); // -> true
 * @param value - The value to check
 * @returns `true` if `value` is neither `null`, `undefined` nor empty
 *  (such as `""` for strings, `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export declare function isNotNilOrEmpty(value: any): boolean;

/**
 * Checks whether the given `value` is neither `null`, nor `undefined`.
 * @example
 * isNotNil({}); // -> true
 *  isNotNil(null); // -> false
 *  isNotNil([42]); // -> true
 *  isNotNil(undefined); // -> false
 * @param value - The value to check
 * @returns `true` if `value` is neither `null` nor `undefined`; `false`, otherwise.
 */
export declare function isNotNil(value: any): boolean;

/**
 * Checks whether the given `value` is not empty or not (definition of
 * "empty" is type dependant).
 * @example
 * isNotEmpty({}); // -> false
 *  isNotEmpty(null); // -> true
 *  isNotEmpty(undefined); // -> true
 *  isNotEmpty([]); // -> false
 *  isNotEmpty([42]); // -> true
 * @param value - The value to check
 * @returns `true` if `value` is not empty (such as `""` for strings,
 *  `{}` for objects and `[]` for arrays); `false`, otherwise.
 */
export declare function isNotEmpty(value: any): boolean;

/**
 * Checks if a string value (or set of values) is present in another.
 * The comparison between elements is case insensitive. `null` and
 * `undefined` values are ignored.
 * @example
 * const isVeggie = isOneOf(['carrot', 'cucumber', 'parsnip']);
 *  isVeggie('tuna'); // false
 * @param firstSet - The first set of elements (or single element) to check.
 * @param secondSet - The second set of elements (or single element) to check.
 * @returns `true` if at least one element on `firstSet` is present in `secondSet`.
 */
export declare function isOneOf(firstSet: string[] | string, secondSet: string[] | string): boolean;

/**
 * Joins together using a `separator` strings returned from an array
 * of `fns` functions that are applied to an `obj` element.
 * @example
 * joinFrom('-', [prop('firstName'), prop('lastName')], {
 *    firstName: 'Fred',
 *    lastName: 'Astaire'
 *  }); // -> Fred Astaire
 * @param separator - String to use to join together all other strings.
 * @param fns - Set of string returning functions that will be applied to `obj`.
 * @param elem - Value that will become the single argument for each function in `fns`.
 * @returns The result of joining together each string returned by functions in
 *  `fns` with `separator`.
 */
export declare function joinFrom(separator: string, fns: ((...params: any[]) => void)[], elem: any): string;

/**
 * Compares two elements and returns `true` if they are the same after
 * transforming their stringified value to lower case and trimming spaces;
 * `false` otherwise.
 * @param first - The first value to compare.
 * @param second - The second value to compare.
 * @returns `true` if `first` and `second` are the same value
 *  after lower casing and trimming.
 */
export declare function lowerEquals(first: any, second: any): boolean;

/**
 * Returns true if the specified object property at given path satisfies the given predicate; false otherwise.
 * The individual keys  on the path are transformed to lowercase before checking the actual value.
 * @example
 * lowerPathSatisfies(isNil, ['country', 'IE'], {country: { ie: '&#133662110186;' } });
 *  // -> false
 * @param pred - The predicate to check the value.
 * @param path - The path to the value (items in here will be lowercased).
 * @param obj - The source of the value to extract.
 * @returns True if the object property at given path satisfies the given predicate.
 */
export declare function lowerPathSatisfies(pred: (...params: any[]) => any, path: string[], obj: any): boolean;

/**
 * Extracts the value of an object at the given `path`. The individual keys
 * on the path are transformed to lowercase before extracting the actual value.
 * @example
 * lowerPath(['country', 'IE'], {country: { ie: '&#133662110186;' } });
 *  // -> '&#133662110186;'
 * @param path - The path to the value (items in here will be lowercased).
 * @param obj - The source of the value to extract.
 * @returns The value of `obj` at `path` after lower casing keys.
 */
export declare function lowerPath(path: string[], obj: any): any;

/**
 * Trims and transforms text to lower case. `null` and `undefined` values
 * are returned as is.
 * @param value - The string to trim and convert to lowercase.
 * @returns The `value` after trimming and lowercasing.
 */
export declare function lowerTrim(value: string): string;

/**
 * Map keys on an objects by running a mapping function to each one.
 * @param fn - Mapping function. Receives a key and must return a new key name.
 * @param obj - The object to map keys from.
 * @returns The resulting object after mapping its keys.
 */
export declare function mapKeys(fn: (...params: any[]) => any, obj: any): any;

/**
 * Given an object containing an array move selected properties outside the
 * array to each element on it.
 * @example
 * const o = { foo: 'bar', items: [{ id: 1 }, { id: 2 }] };
 *  mergeInto('foo', 'items');
 *  // -> { foo: 'bar', items: [{ id: 1, foo: 'bar' }, { id: 2, foo: 'bar' }] }
 * @param propNames - List of property names to merge
 *  into each element in the `arrayProp` (supports sending a single name).
 * @param arrayPropName - Name of the array property on `obj`.
 * @param obj - The object to apply the transformation to.
 * @returns The object with `propNames` properties merged into elements
 *  of `arrayPropName` array.
 */
export declare function mergeInto(propNames: string | any, arrayPropName: string, obj: any): any;

/**
 * Recursively applies functions on the `spec` object to produce a new
 * object matching its definition, which is then merged with the original
 * object. If a key exists in both objects, the value from the result of
 * applying the `spec` will take precedence.
 * @example
 * mergeSpec({ bar: o => o.num + 40 }, { num: 2 });
 *  // -> { bar: 42, num: 2 }
 * @param spec - An object recursively mapping properties to functions for
 *  producing corresponding values.
 * @param obj - The object to apply the spec to and onto which the result
 *  will be merged.
 * @returns A new object containing all properties coming from applying
 *  the `spec` to `obj` plus all or of `obj` own properties.
 */
export declare function mergeSpec(spec: any, obj: any): any;

/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 * @example
 * const takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @param n - The desired arity of the new function.
 * @param fn - The function to wrap.
 * @returns A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 */
export declare function nAry(n: number, fn: (...params: any[]) => any): (...params: any[]) => any;

/**
 * Returns false if its arguments are equivalent, true otherwise. Handles cyclical data structures.
 * @example
 * notEquals(1, 2) //=> true
 *   notEquals({ a: 1 }, { a: 1 }) //=> false
 * @param A - The first object to compare
 * @param B - The second object to compare
 * @returns The result of the compare
 */
export declare function notEquals(A: any, B: any): boolean;

/**
 * Shorthand function to extract a property from an object and convert it to a number.
 * Note that this behaves somewhat different to regular number parsing using `Number` constructor:
 * if the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `NaN` will be returned.
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property.
 * @returns The value of `obj` at `propName` as a number or `NaN`.
 */
export declare function numberProp(propName: string, obj: any): number;

/**
 * Shorthand function to extract a nested property from an object and convert it to a number.
 * Note that this behaves somewhat different to regular number parsing using `Number` constructor:
 * if the property is `null` or `undefined` it will be returned as is; if the property is
 * an empty string (`''`), `NaN` will be returned.
 * @example
 * numberPath(['life', 'meaning'], { life: { meaning: '42' }}); // 42
 * @param propPath - Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param obj - Source of the extracted property.
 * @returns The value of `obj` at `propPath` as a number or `NaN`.
 */
export declare function numberPath(propPath: string | any, obj: any): number;

/**
 * Extract a property from an object and convert it to a number. If property
 * is absent, `null`, `undefined` or cannot be coerced into a `Number`, the default
 * value will be returned instead. Note that number coercing behaves somewhat different
 * than using the `Number` constructor: an empty string (`''`) or `null` would return the
 * `defaultValue` instead of `0`.
 * @param defaultValue - The value to return if `propName` does not exist in `obj`
 *  or is nil.
 * @param propName - Name of the property to extract.
 * @param obj - Source of the extracted property.
 * @returns The value of `obj` at `propName` as a number or `defaultValue`.
 */
export declare function numberPropOr(defaultValue: any, propName: string, obj: any): any;

/**
 * Extract a nested property from an object and convert it to a number. If property
 * is absent, `null`, `undefined` or cannot be coerced into a `Number`, the default
 * value will be returned instead. Note that number coercing behaves somewhat different
 * than using the `Number` constructor: an empty string (`''`) or `null` would return the
 * `defaultValue` instead of `0`.
 * @example
 * numberPathOr(42, ['life', 'meaning'], { foo: 'bar' }); // 42
 * @param defaultValue - The value to return if `propPath` does not exist in `obj`
 *  or its value is nil or `NaN`.
 * @param propPath - Path to the property to extract. Also accepts a
 *  property name as a single string.
 * @param obj - Source of the extracted property.
 * @returns The value of `obj` at `propName` as a number or `defaultValue`.
 */
export declare function numberPathOr(defaultValue: any, propPath: string | any, obj: any): any;

/**
 * Returns the value of `obj` at the given `propName`.
 * @example
 * propOf({ name: 'Alexander' }, 'name') //=> 'Alexander'
 *   propOf({ name: 'Alexander' }, 'age') //=> undefined
 * @param obj - The object to query
 * @param propName - The property name
 * @returns The value at `obj[propName]`.
 */
export declare function propOf(obj: any, propName: string): any;

/**
 * Iterates over a functor a removes any elements that are either `null` or
 * `undefined`.
 * @example
 * rejectNil(null); // -> null
 *  rejectNil([42, undefined, 'life']); // -> [42, 'life']
 *  rejectNil({ foo: null, life: 42 }); // -> { life: 42 }
 * @param functor - The iterable to remove nil values from.
 * @returns The original iterable without `null` or `undefined`
 *  values.
 */
export declare function rejectNil(functor: any | any): any | any;

/**
 * Iterates over a functor a removes any elements that are either `null`,
 * `undefined`. or empty ([], {}).
 * @example
 * rejectNilOrEmpty(null); // -> null
 *  rejectNilOrEmpty([42, undefined, {}, 'life']); // -> [42, 'life']
 *  rejectNilOrEmpty({ foo: null, bar: [], life: 42 }); // -> { life: 42 }
 * @param functor - The iterable to remove nil or empty values from.
 * @returns The original iterable without `null`, `undefined`
 *  or empty values.
 */
export declare function rejectNilOrEmpty(functor: any | any): any | any;

/**
 * Creates a new object with the own properties of the provided object, but the
 * keys renamed according to the keysMap object as `{oldKey: newKey}`.
 * When some key is not found in the keysMap, then it's passed as-is.
 * @example
 * renameKeys({ foo: 'life' }, { foo: 42 }); // -> { life: 42 }
 * @param keysMap - Mapping of current key names to new names.
 * @param obj - Object whose keys are to be renamed
 * @returns A new object based on `obj` with renamed keys.
 */
export declare function renameKeys(keysMap: any, obj: any): any;

/**
 * Rounds a given number to the next largest number for positives and the next smallest for negatives.
 * @example
 * round(2, 2.151) // returns 2.15
 * round(1, -2.63) // returns -2.7
 * round(0, 2.8) // returns 3
 * @param decimals - number of decimals to round to
 * @param value - number to be rounded
 * @returns rounded number
 */
export declare function round(decimals: number, value: number): number;

/**
 * Spreads object under property onto provided object.
 * @example
 * spreadProp('b', { a: 1, b: { c: 3, d: 4 } }); // => { a: 1, c: 3, d: 4 };
 * @param prop - The property to spread
 * @param obj - The provided object
 * @returns The result of the spread
 */
export declare function spreadProp(prop: string | number, obj: any): any;

/**
 * Sums the values at `propName` present in each element of an array.
 * Works as a single-pass version of `compose(sum, map(Number), pluck(propName))`.
 * @example
 * sumProp(2, 'amount', [{amount:'40'}, {amount:'2'}]); // 42
 * @param precision - Number of decimal places used in rounding the final value.
 * @param propName - Name of the property to pluck values from.
 * @param values - The elements to extract the `propName` values from.
 *  Value may be either a `Number` or a numerical `String`.
 * @returns The total sum of all values at `propName`.
 */
export declare function sumProp(precision: string, propName: string, values: object[]): number;

/**
 * Immediately throws an `Error` with the given `message` extended with
 * additional properties on `data`.
 * @example
 * throwErrorWith('boom', { code: 500 }); // Throw `new Error('boom')`
 * @param message - The error message
 * @param data - Additional properties to attach to the thrown error
 */
export declare function throwErrorWith(message: string, data: any): void;

/**
 * Returns a function that, when invoked, throws an `Error` with the given `message` extended with
 * additional properties on `data`.
 * @example
 * const explode = thenThrowErrorWith('boom', { code: 500 });
 *  explode(); // Throw `new Error('boom')`
 * @param message - The error message
 * @param data - Additional properties to attach to the thrown error
 */
export declare function thenThrowErrorWith(message: string, data: any): void;

/**
 * Truncates the given string `value` so its total length does not exceed `maxLength` length,
 * adding an ellipsis (`...`) at the end.
 * @example
 * truncate(15, 'I am selling these fine leather jackets');
 *  // 'I am selling...'
 * @param maxLength - Length threshold above which `value` will be truncated.
 * @param value - The text to truncate (will be coerced into a `String` and trimmed).
 * @returns The truncated string containing an ellipsis (`...`) at the end.
 */
export declare function truncate(maxLength: number, value: any): string;

