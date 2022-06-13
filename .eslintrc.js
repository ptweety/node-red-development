module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2022,
    sourceType: 'script',
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
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['html', 'promise', 'sonarjs', 'prettier'],
  globals: {RED: true},
  overrides: [
    {
      files: ['*.js__'], // enable by removing __
      extends: ['plugin:unicorn/recommended'],
      rules: {
        'unicorn/filename-case': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-object-spread': 'off',
      },
    },
    {
      files: ['*.mod.js', '*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
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

    'sonarjs/cognitive-complexity': ['error', 60], // default is 15
    'sonarjs/elseif-without-else': 'off',
    'sonarjs/max-switch-cases': 'warn',
    'sonarjs/no-all-duplicated-branches': 'error',
    'sonarjs/no-collapsible-if': 'warn',
    'sonarjs/no-collection-size-mischeck': 'warn',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-duplicated-branches': 'warn',
    'sonarjs/no-element-overwrite': 'error',
    'sonarjs/no-empty-collection': 'error',
    'sonarjs/no-extra-arguments': 'error',
    'sonarjs/no-gratuitous-expressions': 'warn',
    'sonarjs/no-identical-conditions': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-ignored-return': 'error',
    'sonarjs/no-inverted-boolean-check': 'off',
    'sonarjs/no-nested-switch': 'warn',
    'sonarjs/no-nested-template-literals': 'warn',
    'sonarjs/no-one-iteration-loop': 'error',
    'sonarjs/no-redundant-boolean': 'warn',
    'sonarjs/no-redundant-jump': 'warn',
    'sonarjs/no-same-line-conditional': 'warn',
    'sonarjs/no-small-switch': 'warn',
    'sonarjs/no-unused-collection': 'warn',
    'sonarjs/no-use-of-empty-return-value': 'error',
    'sonarjs/no-useless-catch': 'warn',
    'sonarjs/non-existent-operator': 'error',
    'sonarjs/prefer-immediate-return': 'warn',
    'sonarjs/prefer-object-literal': 'warn',
    'sonarjs/prefer-single-boolean-return': 'warn',
    'sonarjs/prefer-while': 'warn',

    'promise/always-return': 'warn',
    'promise/no-return-wrap': 'warn',
    'promise/param-names': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
  },
};
