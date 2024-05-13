import { default as React } from '../node_modules/react';
import { PopoverProps as AriaPopoverProps } from 'react-aria-components';

export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
    showArrow?: boolean;
    children: React.ReactNode;
}
export declare function Popover({ children, showArrow, className, ...props }: PopoverProps): React.JSX.Element;
