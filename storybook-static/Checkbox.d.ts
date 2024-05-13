import { CheckboxGroupProps as AriaCheckboxGroupProps, CheckboxProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition, Orientation } from '@react-types/shared';
import { default as React, ReactNode } from '../node_modules/react';

export interface CheckboxGroupProps extends Omit<AriaCheckboxGroupProps, 'children'> {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    orientation?: Orientation;
    children?: ReactNode;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function CheckboxGroup(props: CheckboxGroupProps): React.JSX.Element;
export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
