import './setup'

import * as React from 'react'

import { SpeRuntime } from './spline-runtime.js'
import styles from './styles.module.css'

interface Props {
  scene: object
  assets: object
}

export const Spline = ({ scene, assets }: Props) => {
  const ref = React.useRef()
  React.useEffect(() => {
    const { current } = ref
    if (current) {
      current.width = current.width
    }
    const splineRuntime = new SpeRuntime(scene, assets)
    splineRuntime.run()
  }, [scene, assets])
  return (
    <div>
      <div className={styles.container}>
        <canvas id='canvas3d' className={styles.canvas} ref={ref}></canvas>
      </div>
    </div>
  )
}
