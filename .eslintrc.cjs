module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    project: ['./jsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'leadfisher', 'plugin:prettier/recommended'],
  plugins: ['svelte3'],
  ignorePatterns: ['node_modules', '*.cjs', 'public', 'src/**/*.{sass, scss}'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-unused-vars': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
  },
};
