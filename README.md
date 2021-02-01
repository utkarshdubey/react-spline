# react-spline

> A wrapper for loading Spline models and animations.

[![NPM](https://img.shields.io/npm/v/react-spline.svg)](https://www.npmjs.com/package/react-spline) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-spline
```

## Usage

```tsx
import React, { Component } from 'react'

import { Spline } from 'react-spline'
import 'react-spline/dist/index.css'

class Example extends Component {
  render() {
    return <Spline scene={SCENE_OBJECT} assets={ASSETS_OBJECT} />
  }
}
```

## License

MIT © [utkarshdubey](https://github.com/utkarshdubey)
