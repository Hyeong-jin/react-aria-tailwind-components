import { RadioGroupProps as RACRadioGroupProps, RadioProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React, ReactNode } from '../node_modules/react';

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function RadioGroup({ labelAlign, labelPosition, orientation, ...props }: RadioGroupProps): React.JSX.Element;
export declare function Radio(props: RadioProps): React.JSX.Element;
