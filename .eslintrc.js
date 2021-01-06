module.exports = {
  extends: 'airbnb',
  ignorePatterns: ['public', 'node_modules'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      },
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'import/extensions': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
      ],
    },
  ],
};
