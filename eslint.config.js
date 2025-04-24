import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  ...compat.plugins('prettier', '@typescript-eslint'),
  {
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'build/**', 'coverage/**'],
  },
];

export default config;
