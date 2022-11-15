import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' };

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
  external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.devDependencies)],
  plugins: [
    typescript(),
    commonjs(),
    resolve()
  ]
};