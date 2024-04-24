import { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    labelPosition?: 'top' | 'left' | 'right' | 'bottom';
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function SearchField({ label, labelPosition, description, errorMessage, ...props }: SearchFieldProps): React.JSX.Element;
