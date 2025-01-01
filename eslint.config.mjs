export default [
  {
      env: {
          browser: true,
          node: true,
          es2021: true,
      },
      extends: [
          'eslint:recommended',
          'plugin:react/recommended',
      ],
      parserOptions: {
          ecmaVersion: 12,
          sourceType: 'module',
      },
      plugins: ['react'],
      rules: {
          'no-undef': 'off', // Disable 'no-undef' for Node.js globals
      },
      settings: {
          react: {
              version: 'detect', // Automatically detect React version
          },
      },
  },
];
