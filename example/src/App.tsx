import 'react-spline/react-spline.modern.css'

import React from 'react'
import { SPLINE_ASSETS_LIST } from './assets'
import { SPLINE_EXPORTED_SCENE } from './scene'
import { Spline } from 'react-spline'

const App = () => {
  return (
    <div>
      <h1>Hi! This is an experiment.</h1>
      <Spline scene={SPLINE_EXPORTED_SCENE} assets={SPLINE_ASSETS_LIST} />
    </div>
  )
}

export default App
