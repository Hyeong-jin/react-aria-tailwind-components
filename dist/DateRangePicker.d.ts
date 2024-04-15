import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateRangePicker<T extends DateValue>({ label, description, errorMessage, ...props }: DateRangePickerProps<T>): React.JSX.Element;
