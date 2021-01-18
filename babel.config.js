/* eslint-disable strict */
'use strict';

module.exports = ({ env }) => {
  // Are we building CJS or ES modules?
  const isCommonJs = env('commonjs');
  const isEs = env('es');

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // Do not transpile modules to CJS if running the ES build
          modules: isCommonJs ? 'commonjs' : isEs ? false : 'auto',
          targets: { node: true, esmodules: true },
          bugfixes: true,
          spec: true,
          loose: true
        }
      ]
    ],
    plugins: isCommonJs
      ? [['@babel/plugin-transform-modules-commonjs', { strict: true, noInterop: true }]]
      : []
  };
};
