export default [
  {
      files: ['**/*.js'], // Apply this config to all `.js` files
      languageOptions: {
          ecmaVersion: 2021, // Use ES2021 syntax
          sourceType: 'module',
          globals: {
              browser: true,
              node: true,
              require: 'readonly',
              process: 'readonly',
              module: 'readonly',
          },
      },
      plugins: {
          react: require('eslint-plugin-react'),
      },
      rules: {
          'react/react-in-jsx-scope': 'off', // Example: Rule for React projects
          'no-undef': 'off', // Disable `no-undef` for Node.js globals
      },
      settings: {
          react: {
              version: 'detect', // Automatically detect React version
          },
      },
  },
];
