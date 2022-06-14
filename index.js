module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/object-curly-spacing': ["error", "never"],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-globals': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(scss)$'],
        ],
      },
    ],
  },
};
