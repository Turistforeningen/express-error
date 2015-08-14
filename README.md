# express-errors

[![Build status](https://img.shields.io/wercker/ci/55cdda23602392657103dfac.svg "Build status")](https://app.wercker.com/project/bykey/d2d38dc4f464d2afd95c382ff4662912)
[![NPM downloads](https://img.shields.io/npm/dm/@turistforenignen/express-errors.svg "NPM downloads")](https://www.npmjs.com/package/@turistforenignen/express-errors)
[![NPM version](https://img.shields.io/npm/v/@turistforenignen/express-errors.svg "NPM version")](https://www.npmjs.com/package/@turistforenignen/express-errors)
[![Node version](https://img.shields.io/node/v/@turistforenignen/express-errors.svg "Node version")](https://www.npmjs.com/package/@turistforenignen/express-errors)
[![Dependency status](https://img.shields.io/david/turistforeningen/express-errors.svg "Dependency status")](https://david-dm.org/turistforeningen/express-errors)

Return JSON error objects from your Express backed API.

## Requiremets

* Node.JS v4.0.0 or newer
* io.js v1.0.0 or newer

## Install

```
npm install @turistforenignen/express-errors --save
```

## Usage

This should be put at the end of your Express route configurations. See the
[examples](https://github.com/Turistforeningen/express-errors/tree/master/examples)
directory for more detailed examples.

```js
app.use(require('@turistforenigen/express-errors'));
```

## [MIT License](https://github.com/Turistforeningen/express-errors/blob/master/LICENSE)
