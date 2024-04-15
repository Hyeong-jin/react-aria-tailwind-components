import { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function SearchField({ label, description, errorMessage, ...props }: SearchFieldProps): React.JSX.Element;
