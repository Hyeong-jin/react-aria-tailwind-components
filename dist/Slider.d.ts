import { SliderProps as AriaSliderProps } from 'react-aria-components';
import { default as React } from 'react';

export interface SliderProps<T> extends AriaSliderProps<T> {
    label?: string;
    thumbLabels?: string[];
}
export declare function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>): React.JSX.Element;
