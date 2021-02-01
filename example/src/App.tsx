import 'react-spline/react-spline.modern.css'

import React from 'react'
import { SPLINE_ASSETS_LIST } from './assets'
import { SPLINE_EXPORTED_SCENE as SPLINE_EXPORTED_SCENE_TWO } from './scene2'
import { SPLINE_EXPORTED_SCENE } from './scene'
import { Spline } from 'react-spline'

const App = () => {
  return (
    <div>
      <div
        style={{
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 style={{ position: 'absolute', zIndex: 1 }}>
          If you see this, react-spline works.
        </h1>
        <div>
          <Spline scene={SPLINE_EXPORTED_SCENE} assets={SPLINE_ASSETS_LIST} />
        </div>
      </div>
      <div
        style={{
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111111',
          height: '100vh'
        }}
      >
        <h1 style={{ position: 'absolute', zIndex: 1, color: 'white' }}>
          If you see this, multiple canvas elements work too :)
        </h1>
        <Spline scene={SPLINE_EXPORTED_SCENE_TWO} assets={SPLINE_ASSETS_LIST} />
      </div>
    </div>
  )
}

export default App
