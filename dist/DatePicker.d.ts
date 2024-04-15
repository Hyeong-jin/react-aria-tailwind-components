import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DatePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DatePickerProps<T>): React.JSX.Element;
