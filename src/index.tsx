import * as React from 'react'
import styles from './styles.module.css'
import './setup'

import { SpeRuntime } from './spline-runtime.js'

interface Props {
  scene: object
  assets: object
}

export const Spline = ({ scene, assets }: Props) => {
  React.useEffect(() => {
    const splineRuntime = new SpeRuntime(scene, assets)
    splineRuntime.run()
  }, [])
  return (
    <div>
      <div className={styles.container}>
        <canvas id='canvas3d' className={styles.canvas}></canvas>
      </div>
    </div>
  )
}
