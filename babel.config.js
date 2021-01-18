/* eslint-disable strict */
'use strict';

module.exports = ({ env }) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          // Do not transpile modules to CJS if running the ES build
          modules: env('commonjs') ? 'commonjs' : env('es') ? false : 'auto',
          targets: env('es') ? { esmodules: true } : 'defaults'
        }
      ]
    ]
  };
};
