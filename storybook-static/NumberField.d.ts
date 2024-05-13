import { NumberFieldProps as AriaNumberFieldProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface NumberFieldProps extends AriaNumberFieldProps {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
}
export declare function NumberField({ label, labelAlign, labelPosition, description, errorMessage, ...props }: NumberFieldProps): React.JSX.Element;
