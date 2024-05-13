import { SwitchProps as AriaSwitchProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
    children: React.ReactNode;
}
export declare function Switch({ children, ...props }: SwitchProps): React.JSX.Element;
