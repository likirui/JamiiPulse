// .eslintrc.js
module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      'no-unused-vars': 'warn',
    },
    globals: {
      setComments: 'writable',
    },
  };