import { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface NumberFieldProps extends AriaNumberFieldProps {
    label?: string;
    labelPosition?: 'top' | 'left' | 'right' | 'bottom';
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function NumberField({ label, labelPosition, description, errorMessage, ...props }: NumberFieldProps): React.JSX.Element;
