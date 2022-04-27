module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
    es2019: true,
    browser: true,
    jquery: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    // 'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['html', 'prettier'],
  globals: {RED: true},
  overrides: [
    {
      files: ['packages/**/*.+(ts|tsx)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended', // removes redundant warnings between TS & ESLint
        'plugin:@typescript-eslint/recommended', // rules specific to typescript, e.g., writing interfaces
        'prettier', // ensure rule set doesn't conflict with prettier for TS files too
      ],
    },
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        bracketSpacing: false,
        endOfLine: 'auto',
        printWidth: 80,
      },
    ],
    quotes: ['error', 'single'],
    'no-var': 'error',
    'prefer-arrow-callback': 'off', // can be dangerous with --fix option
    // 'unicorn/filename-case': 'off',
    // 'unicorn/prefer-module': 'off',
    // 'unicorn/prefer-object-spread': 'off',
    'capitalized-comments': 'off',
    'no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
