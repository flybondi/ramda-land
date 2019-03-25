# @flybondi/ramda-land

[![ramda](https://img.shields.io/badge/ramda-849.png?logoWidth=20&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAMAAADCkShIAAABqlBMVEUAAADvO0LiJi3vO0LvO0LiJi3vO0LvO0LvO0LvO0LiJi3vO0LiJi3vO0LiJi3vO0LiJS3vO0LiJS3vO0LiJS3iJSzvO0LvO0LvO0LvO0LvO0LvO0LiJCzvO0LvO0LhJCzvO0LvO0LvO0LvO0LvO0LhJCvhIyvvO0LvO0LpMTjhIyvhIyvvO0LhIyvhIyrhIyrgIyrvO0LkKTDgIirvO0LgIirgIirvO0LkKDDvO0LgISnjJi7vO0LgISnvO0LvO0LiJS3gISnfISjfICjvO0LhJCvfICjfICjvO0LvO0LgIinvO0LvO0LfICffISjvO0LeHyfeHybeHibeHybvO0LeHibeHibvO0LdHSXdHSXvO0LvO0LdHSTdHSTvO0LvO0LvO0LvO0LvO0LvO0LcGyPvO0LcGyLvO0LvO0LbGSHvO0LvO0LaGB/aGCDvO0LvO0LZFx/ZFh7vO0LvO0LZFh7vO0LYFR3vO0LYFBzYFR3uOkHXExvYFBzvO0LWERnWEhrXEhrXExvYFBzfICjgISngIingIirnLjboLjboLzboMDfuOkHvOkHvO0JHr331AAAAfnRSTlMAAQICAwQGBwgJDA8QExQUISIjJCUqLS8zNjc6QUJKS0tMTlBRUmJmaWtucHBzdHZ5fX6AgIGEhY6OlJSUlp2en6Cnqamqq62usLGxs7jAwsPFx8fLzc7P1NbW2Nnb3N3f4ePk5+fp6+zu7vH29vb3+Pn5+vv7/Pz9/f3+/v4qZr0RAAABc0lEQVR42pXUVXfyUBCF4f25a93d3d3d3d2dqlCbUNf5z6WswCIwpw3P9Z6V9yYHui9x5V2T0/3N6X4wSB3cOCU6WGwKgLtvOcusO2sPgkvmBjlpw//hEjLFbg6LPsLh+wi5s2ZBF2tho7bPsPu9QkZaKRzCdthT/Tvg/Tx50jJg92OOvSUBjeTt6C+AEhas/gk4IcEg8GuTJfndJLH5I5lFs0ckqkULix5INo8ZFt2QbA9nLLogBaiLZNhnyTUpaBhjwZOyaBtVLLgnlQlEsuCKVPLwYdSXoq1PQLQvRQWwqzRfNI4XX4fMFq3/hMO/OXNFB+HQ+S2YKbJGwSVw6e0iawIgX9yR5CQBBsFr7HQp7hPhIdR58Xiu3hsvLOxwK/3KaRBEWFRFtgxAvpCLtGwoxOxKRVohlGJ3+VLaq8UfexVV4FUpF/JeLdf4iRq8qdhmeBlNKNPIqQ6mVJOuAyY1KPZqrWTXAx90EvXCJ30DkD0DFY6c2EtNX54AAAAASUVORK5CYII=)](https://ramdajs.com)
[![js-flybondi](https://img.shields.io/badge/flybondi-fdbe15.png?logo=javascript&style=flat-square&logoColor=grey&logoWidth=20)](https://flybondi.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A comprehensive collection of utilities for [Ramda][ramda], providing a variety of **useful**, **well tested**, **reusable** functions.

```sh
yarn add @flybondi/ramda-land
yarn add ramda
```

## Basic usage

Mix and match `@flybondi/ramda-land` functions with common `ramda` functions.

```js
const { when } = require('ramda');
const { isNilOrEmpty, alwaysNew } = require('@flybondi/ramda-land');

const defaultToLife = when(isNilOrEmpty, alwaysNew({ life: 42 }));
defaultToLife(null); // -> { life: 42 }
defaultToLife({ foo: 'bar' }); // -> { foo: 'bar' }
```

[View on Github][github].

[ramda]: https://ramdajs.com
[flybondi]: https://www.flybondi.com
[github]: https://github.com/flybondi/toolbox/packages/lambda-land
