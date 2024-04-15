import { RadioGroupProps as RACRadioGroupProps, RadioProps, ValidationResult } from 'react-aria-components';
import { default as React, ReactNode } from 'react';

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function RadioGroup(props: RadioGroupProps): React.JSX.Element;
export declare function Radio(props: RadioProps): React.JSX.Element;
