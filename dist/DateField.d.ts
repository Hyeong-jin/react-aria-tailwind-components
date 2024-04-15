import { DateFieldProps as AriaDateFieldProps, DateInputProps, DateValue, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface DateFieldProps<T extends DateValue> extends AriaDateFieldProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateField<T extends DateValue>({ label, description, errorMessage, ...props }: DateFieldProps<T>): React.JSX.Element;
export declare function DateInput(props: Omit<DateInputProps, 'children'>): React.JSX.Element;
