import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const config = {};

// LIBRARY CONFIG
config.LIBRARY_NAME = 'dsalgorithms';
config.PACKAGE_NAME = `${config.LIBRARY_NAME}-js`;
config.VERSION = '0.1.0-alpha.1';

// PATHS
config.PROJECT_ROOT = resolve(__dirname, '..');
config.SOURCE_DIR = `${config.PROJECT_ROOT}/src`;
config.TESTS_DIR = `${config.PROJECT_ROOT}/test`;
config.BUILD_DIR = `${config.PROJECT_ROOT}/dist`;
config.EXAMPLES_DIR = `${config.PROJECT_ROOT}/examples`;
config.DOCS_DIR = `${config.PROJECT_ROOT}/docs`;

// FILENAMES

// Source main entry point
config.ENTRY_NAME = 'index';
config.ENTRY_FILE = `${config.SOURCE_DIR}/${config.ENTRY_NAME}.ts`;

// Built library files
config.BUILD_CJS = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.cjs`;
config.BUILD_ESM = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.mjs`;
config.BUILD_IIFE = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.iife.js`;
config.BUILD_IIFE_MIN = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.min.iife.js`;
config.BUILD_UMD = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.umd.js`;
config.BUILD_UMD_MIN = `${config.BUILD_DIR}/${config.PACKAGE_NAME}.min.umd.js`;
config.BUILD_TYPES_ENTRY = `${config.BUILD_DIR}/${config.ENTRY_NAME}.d.ts`;

export { config };
