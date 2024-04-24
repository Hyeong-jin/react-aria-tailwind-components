import { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    labelPosition?: 'top' | 'left' | 'right' | 'bottom';
}
export declare function TimeField<T extends TimeValue>({ label, labelPosition, description, errorMessage, ...props }: TimeFieldProps<T>): React.JSX.Element;
