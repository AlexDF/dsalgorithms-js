import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import htmleslint from '@html-eslint/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { config } from '#config/config.js';

const BUILD_DIR = config.BUILD_DIR;

export default [
  {
    ignores: [BUILD_DIR],
  },
  // JavaScript/TypeScript configs
  ...tseslint.configs.recommended,
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    ...eslintPluginPrettierRecommended,
  },
  // HTML config
  {
    ...htmleslint.configs['flat/recommended'],
    files: ['examples/*.html'],
    rules: {
      ...htmleslint.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['error', 2],
      '@html-eslint/require-doctype': 'error',
      '@html-eslint/no-duplicate-id': 'error',
      '@html-eslint/no-inline-styles': 'warn',
      '@html-eslint/require-meta-charset': 'error',
      '@html-eslint/require-meta-viewport': 'error',
      '@html-eslint/require-lang': 'error',
    },
  },
];
