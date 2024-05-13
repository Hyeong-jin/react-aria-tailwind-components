import { TimeFieldProps as AriaTimeFieldProps, TimeValue, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface TimeFieldProps<T extends TimeValue> extends AriaTimeFieldProps<T> {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TimeField<T extends TimeValue>({ label, labelAlign, labelPosition, description, errorMessage, ...props }: TimeFieldProps<T>): React.JSX.Element;
