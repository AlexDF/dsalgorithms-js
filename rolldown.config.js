import terser from '@rollup/plugin-terser';
import { dts } from 'rolldown-plugin-dts';
import { config } from '#config/config.js';

export default [
  // CommonJS build - Not minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_CJS,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [],
  },
  // ES Module build - Not minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_ESM,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    plugins: [],
  },
  // IIFE build - Not minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_IIFE,
      format: 'iife',
      exports: 'named',
      sourcemap: true,
      name: config.LIBRARY_NAME,
    },
    plugins: [],
  },
  // IIFE build - Minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_IIFE_MIN,
      format: 'iife',
      exports: 'named',
      sourcemap: true,
      name: config.LIBRARY_NAME,
    },
    plugins: [terser()],
  },
  // UMD build - Not minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_UMD,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      name: config.LIBRARY_NAME,
    },
    plugins: [],
  },
  // UMD build - Minified
  {
    input: config.ENTRY_FILE,
    output: {
      file: config.BUILD_UMD_MIN,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      name: config.LIBRARY_NAME,
    },
    plugins: [terser()],
  },
  // TypeScript declarations
  {
    input: config.ENTRY_FILE,
    output: {
      dir: config.BUILD_DIR,
      format: 'es',
    },
    plugins: [dts({ emitDtsOnly: true })],
  },
];
