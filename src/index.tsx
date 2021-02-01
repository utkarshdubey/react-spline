import './setup'

import * as React from 'react'

import { SpeRuntime } from './spline-runtime.js'
import styles from './styles.module.css'

interface Props {
  scene: object
  assets?: object
  id?: string
  className?: string
  style?: React.CSSProperties
}

export const Spline = ({ scene, assets, id, className, style }: Props) => {
  const canvasRef: any = React.useRef<HTMLCanvasElement>()
  React.useEffect(() => {
    const { current } = canvasRef
    if (current != null) {
      // @ts-ignore
      current.width = current.width
    }
    const splineRuntime = new SpeRuntime(scene, assets || { fonts: [], images: [], models: [], animations: [] }, {}, current)

    splineRuntime.run()
  }, [scene, assets])
  return (
    <div id={id} className={className} style={style}>
      <div className={styles.container}>
        <canvas
          id='canvas3d'
          className={styles.canvas}
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  )
}
