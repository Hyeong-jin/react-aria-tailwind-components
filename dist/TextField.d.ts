import { TextFieldProps as AriaTextFieldProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface TextFieldProps extends AriaTextFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function TextField({ label, description, errorMessage, ...props }: TextFieldProps): React.JSX.Element;
