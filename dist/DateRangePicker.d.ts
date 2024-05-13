import { DateRangePickerProps as AriaDateRangePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from 'react';

export interface DateRangePickerProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
    label?: string;
    labelAlign: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DateRangePicker<T extends DateValue>({ label, labelAlign, labelPosition, description, errorMessage, ...props }: DateRangePickerProps<T>): React.JSX.Element;
