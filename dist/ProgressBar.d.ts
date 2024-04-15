import { ProgressBarProps as AriaProgressBarProps } from 'react-aria-components';
import { default as React } from 'react';

export interface ProgressBarProps extends AriaProgressBarProps {
    label?: string;
}
export declare function ProgressBar({ label, ...props }: ProgressBarProps): React.JSX.Element;
