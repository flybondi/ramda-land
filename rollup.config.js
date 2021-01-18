import babel from '@rollup/plugin-babel';
import clean from 'rollup-plugin-clean';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import path from 'path';

const [, PACKAGE_NAME] = pkg.name.split('/');

/**
 * Name of the directory where the built files are going to be written
 * (relative to the root of the project).
 *
 * @constant {string}
 */
const OUTPUT_DIR = 'dist';

/**
 * Global variable name from where `ramda-land` functions would be accessible
 * in the browser.
 *
 * @constant {string}
 */
const GLOBAL_NAME = 'RL';

/**
 * Browser global variable names corresponding to needed external modules.
 *
 * @constant {object}
 */
const GLOBALS = Object.freeze({ ramda: 'R' });

// Core plugins needed by all builds
const basePlugins = [
  clean(),
  resolve({
    browser: true,
    preferBuiltins: false
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: /node_modules/,
    rootMode: 'upward'
  }),
  commonjs({
    include: /node_modules/,
    sourceMap: false
  })
];

export default [
  {
    input: 'index.js',
    external: ['ramda'],
    output: [
      {
        file: path.join(OUTPUT_DIR, `${PACKAGE_NAME}.js`),
        format: 'umd',
        name: GLOBAL_NAME,
        globals: GLOBALS,
        sourcemap: false
      }
    ],
    plugins: basePlugins
  },
  {
    input: 'index.js',
    external: ['ramda'],
    output: [
      {
        file: path.join(OUTPUT_DIR, `${PACKAGE_NAME}.min.js`),
        format: 'umd',
        name: GLOBAL_NAME,
        globals: GLOBALS,
        indent: false,
        sourcemap: false
      }
    ],
    plugins: [
      ...basePlugins,
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ]
  }
];
