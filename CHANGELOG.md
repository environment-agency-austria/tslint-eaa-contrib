# Changelog
All notable changes to this project will be documented in this file.

## 0.1.4 - 2018-12-03
* update to `tslint-microsoft-contrib` 6.0.0
* deactivated rules:
  * `newline-per-chained-call`
  * `no-increment-decrement`
  * `no-null-keyword`
* configured rules:
  * `prefer-readonly`: activated, but allowes inline lambdas

## 0.1.3 - 2018-11-06
* Added `enzyme` and `enzyme-adapter-react-16` to allowed implicit dependencies
* Made rule `no-suspicious-comment` a warning instead of an error by default

## 0.1.2 - 2018-09-06
* Added tslint-consistent-codestyle as peer dependency
* Fixed naming convention for React related names
* Added 'allow-string' option to strict-boolean-expressions

## 0.1.1 - 2018-08-31
* deactivated mocha specific rules

## 0.1.0 - 2018-08-31
* basic setup
* use EAA eslint rule set 'eslint-config-oceanjs'
