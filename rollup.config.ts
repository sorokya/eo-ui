import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from 'postcss-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [{ file: 'dist/index.js', format: 'esm', sourcemap: true }],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extract: 'styles.css',
      modules: true,
      to: './dist/assets',
      plugins: [
        url([
          {
            url: 'copy', // copy the file
            assetsPath: 'assets', // folder inside dist/
            useHash: true, // optional: hashed filenames
            basePath: path.resolve('src', 'assets'),
          },
        ]),
      ],
    }),
  ],
};
