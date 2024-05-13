import { MeterProps as AriaMeterProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export interface MeterProps extends AriaMeterProps {
    label?: string;
}
export declare function Meter({ label, ...props }: MeterProps): React.JSX.Element;
