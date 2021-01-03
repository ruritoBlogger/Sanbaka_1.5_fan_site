module.exports = {
  extends: 'airbnb',
  ignorePatterns: ['public'],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['development.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
