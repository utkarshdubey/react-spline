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
  canvasStyle?: React.CSSProperties
}

export const Spline = ({ scene, assets, id, className, style, canvasStyle }: Props) => {
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
    <div className={className} style={style}>
      <div className={styles.container}>
        <canvas
          id={id}
          className={styles.canvas}
          ref={canvasRef}
          style={canvasStyle}
        ></canvas>
      </div>
    </div>
  )
}
