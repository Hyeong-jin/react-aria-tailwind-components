import { RadioGroupProps as RACRadioGroupProps, RadioProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export interface SlidingCardGroupProps extends Omit<RACRadioGroupProps, 'children'> {
    children: React.ReactNode;
}
export declare function SlidingCardGroup({ children, ...props }: SlidingCardGroupProps): React.JSX.Element;
export interface SlidingCardProps extends Omit<RadioProps, 'children'> {
    children: React.ReactNode;
    className?: string;
}
export declare function SlidingCard({ children, className, ...props }: SlidingCardProps): React.JSX.Element;
