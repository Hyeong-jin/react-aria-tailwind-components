import { DatePickerProps as AriaDatePickerProps, DateValue, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
    label?: string;
    labelAlign: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function DatePicker<T extends DateValue>({ label, labelAlign, labelPosition, description, errorMessage, ...props }: DatePickerProps<T>): React.JSX.Element;
