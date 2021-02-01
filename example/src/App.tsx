import React from 'react'

import { Spline } from 'react-spline';
import 'react-spline/dist/index.css';
import { SPLINE_EXPORTED_SCENE } from './scene';
import { SPLINE_ASSETS_LIST } from './assets';

const App = () => {
  return (
    <div>
      <h1>Hi! This is an experiment.</h1>
      <Spline scene={SPLINE_EXPORTED_SCENE} assets={SPLINE_ASSETS_LIST} />
    </div>
  )
}

export default App
