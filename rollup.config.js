import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/bundle.main.js',
    format: 'cjs'
  }, {
    file: 'dist/bundle.module.js',
    format: 'esm', // 'es'也可以
  }, {
    file: 'dist/bundle.browser.js',
    format: 'umd',
    name: 'UMDFormat'
  }],
  plugins: [
    typescript()
  ]
};