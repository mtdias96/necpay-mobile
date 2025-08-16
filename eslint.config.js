const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '.expo/*',
      'web-build/*',
      'android/*',
      'ios/*',
      '*.config.js',
      'babel.config.js',
      'metro.config.js',
    ],
  },
  ...compat.extends('expo'),
  ...compat.extends('@react-native'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: 'es5',
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];

