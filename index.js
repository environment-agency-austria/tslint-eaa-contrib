/**
 * Copyright (c) 2018-present, Umweltbundesamt GmbH
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

// [tslint]
const tslintRules = {
  // [tslint] - deactivate
  'variable-name': false, // see [tslint-consistent-codestyle].naming-convention
  'newline-per-chained-call': false,
  'no-null-keyword': false,
  // [tslint] - configure
  'align': [true, 'arguments', 'statements', 'members', 'elements'],
  'no-unused-expression': [true, 'allow-fast-null-checks'],
  'prefer-method-signature': true,
  'prefer-readonly': [true, 'only-inline-lambdas'],
  'quotemark': [true, 'single', 'jsx-double'],
  'strict-boolean-expressions': [
    true, 'allow-undefined-union', 'allow-string', 'allow-boolean-or-undefined',
  ],
  'trailing-comma': [
    true, {
      'multiline': 'always',
      'singleline': 'never',
      // Disallowes ',' after rest parameters
      'esSpecCompliant': true,
    },
  ],
  'typedef': [
    true,
    'call-signature',
    'arrow-call-signature',
    'parameter',
    // 'arrow-parameter', // use the inferred types
    // 'variable-declaration', // use the inferred types
    'member-variable-declaration',
    'property-declaration',
  ],
  'no-implicit-dependencies': [
    true,
    [
      'enzyme', // enzyme related dependencies are only used in unit tests
      'enzyme-adapter-react-16',
    ],
  ],
};
// ================================================
// [tslint-microsoft-contrib]
const tslintMicrosoftContribRules = {
  // [tslint-microsoft-contrib] - deactivate
  'function-name': false, // see [tslint-consistent-codestyle].naming-convention
  'no-relative-imports': false,
  'missing-jsdoc': false,
  'mocha-avoid-only': false,
  'mocha-no-side-effect-code': false,
  'mocha-unneeded-done': false,
  'no-increment-decrement': false,

  // [tslint-microsoft-contrib] - configure
  'export-name': true,
  'import-name': [
    true, {
      'reactFontawesome': 'FontAwesomeIcon',
    },
  ],
  'react-tsx-curly-spacing': [true, 'never', { 'allowMultiline': true }],
  'react-unused-props-and-state': true,
  'react-this-binding-issue': [true, { 'allow-anonymous-listeners': true }],
  'no-suspicious-comment': {
    'severity': 'warning',
  },
};
// ================================================
// [tslint-react]
const tslintReact = {
  // [tslint-react] - deactivate
  'jsx-no-multiline-js': false, // see: react-tsx-curly-spacing
  'jsx-no-lambda': false, // see: react-this-binding-issue

  // [tslint-react] - configure
  'jsx-boolean-value': [true, 'never'],
  'jsx-equals-spacing': [true, 'never'],
  'jsx-key': true,
  'jsx-no-string-ref': true,
  'jsx-self-close': true,
  'jsx-space-before-trailing-slash': true,
  'jsx-wrap-multiline': true,
};
// ================================================
// [tslint-consistent-codestyle]
const tslintConsistentCodestyle = {
  // [tslint-consistent-codestyle] - configure
  'early-exit': [
    true, {
      'max-length': 4,
    },
  ],
  'naming-convention': [
    true,
    // forbid leading and trailing underscores and enforce camelCase on EVERY name.
    // will be overridden by subtypes if needed
    { 'type': 'default', 'format': 'camelCase', 'leadingUnderscore': 'forbid', 'trailingUnderscore': 'forbid' },
    // require all global constants to be camelCase or UPPER_CASE
    // all other variables and functions still need to be camelCase
    { 'type': 'variable', 'modifiers': ['global', 'const'], 'format': ['camelCase', 'UPPER_CASE'] },
    // override the above format option for exported constants to allow only PascalCase
    { 'type': 'variable', 'modifiers': ['export', 'const'], 'format': 'PascalCase' },
    // require constant function variables to be PascalCase when they are exported or end with 'SFC'
    { 'type': 'functionVariable', 'modifiers': ['export', 'const'], 'format': 'PascalCase' },
    { 'type': 'functionVariable', 'modifiers': ['const'], 'format': 'PascalCase', 'filter': 'SFC$' }, // (stateless components)
    { 'type': 'functionVariable', 'modifiers': ['const'], 'format': 'PascalCase', 'filter': '^Base[A-Z]+' }, // (stateless components)
    // Except for and HOCs - they should be camelCase (they start with the prefix 'with')
    { 'type': 'functionVariable', 'modifiers': ['export', 'const'], 'format': 'camelCase', 'filter': '^with' },
    // This rule usually applies for any HOC that has a parameter with the suffix 'Component'
    // passed. Since this parameter describes a type, we want to enforce PascalCase
    { 'type': 'parameter', 'format': 'PascalCase', 'filter': '^(Wrapped)?Component$' },
    // exclicitly disable the format check only for method toJSON
    { 'type': 'method', 'filter': '^toJSON$', 'format': null },
    // enforce UPPER_CASE for all public static readonly(!) properties
    { 'type': 'property', 'modifiers': ['public', 'static', 'const'], 'format': 'UPPER_CASE' },
    // enforce PascalCase for classes, interfaces, enums, etc. Remember, there are still no
    // underscores allowed.
    { 'type': 'type', 'format': 'PascalCase' },
    // Enforce prefix 'Abstract' for abstract classes
    { 'type': 'class', 'modifiers': 'abstract', 'prefix': 'Abstract' },
    // Interfaces shall start with an capital I
    { 'type': 'interface', 'prefix': 'I' },
    // generic type parameters must start with 'T' or 'U'
    { 'type': 'genericTypeParameter', 'regex': '^[TU].*$' },
    // Override 'public static const' format here with PascalCase
    { 'type': 'enumMember', 'format': 'PascalCase' },
  ],
  'no-accessor-recursion': true,
  'no-collapsible-if': true,
  'no-static-this': true,
  'no-unnecessary-else': true,
  'no-var-before-return': true,
  'object-shorthand-properties-first': true,
  'prefer-const-enum': true,
};


module.exports = {
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-microsoft-contrib',
  ],

  defaultSeverity: 'error',

  rulesDirectory: ['tslint-consistent-codestyle'],
  rules: {
    ...tslintRules,
    ...tslintMicrosoftContribRules,
    ...tslintReact,
    ...tslintConsistentCodestyle,
  },
};
