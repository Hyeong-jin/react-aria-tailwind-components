import { SearchFieldProps as AriaSearchFieldProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface SearchFieldProps extends AriaSearchFieldProps {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function SearchField({ label, labelAlign, labelPosition, description, errorMessage, ...props }: SearchFieldProps): React.JSX.Element;
