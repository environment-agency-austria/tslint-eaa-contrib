/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-microsoft-contrib',
  ],

  defaultSeverity: 'error',

  rules: {
    // [tslint]
    // [tslint] - configure
    'align': [true, 'arguments', 'statements', 'members', 'elements'],

    'prefer-method-signature': false,
    'quotemark': [true, 'single', 'jsx-double'],
    'strict-boolean-expressions': [
      true, 'allow-null-union', 'allow-undefined-union', 'allow-string'
    ],
    'trailing-comma': [
      true, {
        'multiline': 'always',
        'singleline': 'never',
        // Disallowes ',' after rest parameters
        'esSpecCompliant': true
      }
    ],
    'typedef': [
      true,
      'call-signature',
      'arrow-call-signature',
      'parameter',
      // 'arrow-parameter',
      'property-declaration',
      // 'variable-declaration',
      'member-variable-declaration'
    ],

    // ================================================
    // [tslint-microsoft-contrib]
    // [tslint-microsoft-contrib] - deactivate
    'export-name': false,
    'import-name': false,
    'no-relative-imports': false,
    'missing-jsdoc': false,

    // [tslint-microsoft-contrib] - configure
    'function-name': [
      true, {
        // override that static methods should start upper case
        'static-method-regex': '^[a-z][\\w\\d]+$'
      }
    ],
    'react-tsx-curly-spacing': [true, 'never', { 'allowMultiline': true }],
    'react-unused-props-and-state': true,

    // ================================================
    // [tslint-react]
    // [tslint-react] - deactivate
    'jsx-no-multiline-js': false, // see: react-tsx-curly-spacing

    // [tslint-react] - configure
    'jsx-boolean-value': [true, 'never'],
    'jsx-equals-spacing': [true, 'never'],
    'jsx-key': true,
    'jsx-no-string-ref': true,
    'jsx-self-close': true,
    'jsx-space-before-trailing-slash': true,
    'jsx-wrap-multiline': true
  }
};
