import { ButtonProps as RACButtonProps } from 'react-aria-components';
import { default as React } from 'react';

export interface ButtonProps extends RACButtonProps {
    variant?: 'primary' | 'secondary' | 'destructive' | 'icon';
}
export declare function Button(props: ButtonProps): React.JSX.Element;
