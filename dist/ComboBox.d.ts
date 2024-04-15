import { DropdownSectionProps } from './ListBox';
import { ComboBoxProps as AriaComboBoxProps, ListBoxItemProps, ValidationResult } from 'react-aria-components';
import { default as React } from 'react';

export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children'> {
    label?: string;
    description?: string | null;
    errorMessage?: string | ((validation: ValidationResult) => string);
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function ComboBox<T extends object>({ label, description, errorMessage, children, items, ...props }: ComboBoxProps<T>): React.JSX.Element;
export declare function ComboBoxItem(props: ListBoxItemProps): React.JSX.Element;
export declare function ComboBoxSection<T extends object>(props: DropdownSectionProps<T>): React.JSX.Element;
