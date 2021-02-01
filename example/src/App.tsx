import 'react-spline/react-spline.modern.css'

import React from 'react'
import { SPLINE_ASSETS_LIST } from './assets'
import { SPLINE_EXPORTED_SCENE } from './scene'
import { Spline } from 'react-spline'

const App = () => {
  return (
    <div style={{backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{ position: "absolute", zIndex: 1 }}>If you see this, react-spline works.</h1>
      <div>
        <Spline scene={SPLINE_EXPORTED_SCENE} assets={SPLINE_ASSETS_LIST} />
      </div>
    </div>
  )
}

export default App
