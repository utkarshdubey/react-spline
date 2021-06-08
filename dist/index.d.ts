import * as React from 'react';
interface Props {
    scene: object;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    canvasStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
}
export declare const Spline: ({ scene, id, className, style, canvasStyle, containerStyle }: Props) => JSX.Element;
export {};
