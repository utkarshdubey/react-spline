# React Spline
[![NPM](https://img.shields.io/npm/v/react-spline.svg)](https://www.npmjs.com/package/react-spline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A painless, configurable, [spline](https://spline.design) wrapper for React to add sweet animations easily into your projects.

## Install

```bash
npm install --save react-spline
```
or
```bash
yarn add react-spline
```

## Usage
Import the ``Spline`` component from ``react-spline``, and include the stylesheet from ``react-spline/dist/index.css``. You're set.

```tsx
import React, { Component } from 'react'

import { Spline } from 'react-spline'
import 'react-spline/dist/index.css'

class Example extends Component {
  render() {
    return <Spline scene={SCENE_OBJECT} />
  }
}
```
## Props
|Property|Description|
|--|--|
| scene ``object`` | Required. The scene object exported from Spline.|
| assets ``object`` | Default ``{ fonts:  [], images:  [], models:  [], animations:  []  }``. The assets object exported from Spline. |
| id ``string`` | Default empty. Assignable HTMLAttribute ``id`` for the ``<canvas>`` element.|
| className ``string`` | Default empty. Assignable HTMLAttribute ``class`` for the ``<div>`` wrapper. |
| style ``JSX CSS`` | Default empty. Custom styling for the ``<div>`` wrapper. |
| canvasStyle ``JSX CSS`` | Default empty. Custom styling for the ``<canvas>`` element. |


## License

MIT © [utkarshdubey](https://github.com/utkarshdubey)
