import { TextFieldProps as AriaTextFieldProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from 'react';

export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TextField({ label, labelAlign, labelPosition, description, errorMessage, ...props }: TextFieldProps): React.JSX.Element;
