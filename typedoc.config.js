import { config } from '#config/config.js';

const ENTRY_FILE = config.ENTRY_FILE;
const DOCS_DIR = config.DOCS_DIR;

export default {
  entryPoints: [ENTRY_FILE],
  out: DOCS_DIR,
  readme: 'README.md',
  includeVersion: true,
  excludePrivate: true,
  excludeInternal: true,
  hideGenerator: true,
  sort: ['source-order'],
};
