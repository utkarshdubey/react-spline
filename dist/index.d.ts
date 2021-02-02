import './setup';
import * as React from 'react';
interface Props {
    scene: object;
    assets?: object;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    canvasStyle?: React.CSSProperties;
}
export declare const Spline: ({ scene, assets, id, className, style, canvasStyle }: Props) => JSX.Element;
export {};
