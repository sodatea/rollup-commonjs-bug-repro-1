// Please modify this file to suit your reproduction

// require plugins here. e.g.
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'input.js',
  output: {
    file: 'output/bundle.mjs',
    format: 'es'
  },
  plugins: [
    commonjs({
      ignoreDynamicRequires: true
    })
  ]
};