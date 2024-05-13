import { TooltipProps as AriaTooltipProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export interface TooltipProps extends Omit<AriaTooltipProps, 'children'> {
    children: React.ReactNode;
}
export declare function Tooltip({ children, ...props }: TooltipProps): React.JSX.Element;
