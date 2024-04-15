import { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TimeField<T extends TimeValue>({ label, description, errorMessage, ...props }: TimeFieldProps<T>): React.JSX.Element;
