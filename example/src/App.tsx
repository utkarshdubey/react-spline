import React from 'react'
import SPLINE_EXPORTED_SCENE from './scene.json'
import SPLINE_EXPORTED_SCENE_TWO from './scene-two.json'
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
        <h1 style={{ position: 'absolute', zIndex: 1, color: '#fff' }}>
          If you see this, react-spline works.
        </h1>
        <Spline scene={SPLINE_EXPORTED_SCENE} />
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
        <Spline scene={SPLINE_EXPORTED_SCENE_TWO} />
      </div>
    </div>
  )
}

export default App
