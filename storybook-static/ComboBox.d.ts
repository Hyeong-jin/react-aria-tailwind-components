import { DropdownSectionProps } from './ListBox';
import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from '../node_modules/react';

export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children'> {
    label?: string;
    labelPosition?: LabelPosition;
    labelAlign?: Alignment;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function ComboBox<T extends object>({ label, labelAlign, labelPosition, description, errorMessage, children, items, ...props }: ComboBoxProps<T>): React.JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): React.JSX.Element;
export declare function ComboBoxSection<T extends object>(props: DropdownSectionProps<T>): React.JSX.Element;
