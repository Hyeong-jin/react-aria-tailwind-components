import { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface NumberFieldProps extends AriaNumberFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function NumberField({ label, description, errorMessage, ...props }: NumberFieldProps): React.JSX.Element;
