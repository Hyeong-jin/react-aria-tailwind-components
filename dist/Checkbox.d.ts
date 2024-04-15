import { CheckboxGroupProps as AriaCheckboxGroupProps, CheckboxProps, ValidationResult } from 'react-aria-components';
import { default as React, ReactNode } from 'react';

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
    label?: string;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function CheckboxGroup(props: CheckboxGroupProps): React.JSX.Element;
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
