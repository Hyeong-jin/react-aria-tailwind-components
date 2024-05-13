import { DateFieldProps as AriaDateFieldProps, DateInputProps, DateValue, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateField<T extends DateValue>({ label, labelAlign, labelPosition, description, errorMessage, ...props }: DateFieldProps<T>): React.JSX.Element;
export declare function DateInput(props: Omit<DateInputProps, 'children'>): React.JSX.Element;
