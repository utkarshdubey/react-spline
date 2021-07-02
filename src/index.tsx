import * as React from 'react'

import {speRuntimeFactory}  from  './splineRuntime';

interface Props {
  scene: object
  id?: string
  className?: string
  style?: React.CSSProperties
  canvasStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
}
const SpeRuntime = speRuntimeFactory({})

export const Spline = ({
  scene,
  id,
  className,
  style,
  canvasStyle = { height: '100%', width: '100%', outline: 'none' },
  containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  }
}: Props) => {
  const canvasRef: any = React.useRef<HTMLCanvasElement>()
  React.useEffect(() => {
    const { current } = canvasRef
    if (current != null) {
      current.width = current.width
    }
    new SpeRuntime.Application().start(scene, current)
  }, [scene])
  return (
    <div className={className} style={style}>
      <div style={containerStyle}>
        <canvas id={id} ref={canvasRef} style={canvasStyle}></canvas>
      </div>
    </div>
  )
}
