import { DropdownSectionProps } from './ListBox';
import { SelectProps as AriaSelectProps, ListBoxItemProps, ValidationResult } from 'react-aria-components';
import { Alignment, LabelPosition } from '@react-types/shared';
import { default as React } from 'react';

export interface SelectProps<T extends object> extends Omit<AriaSelectProps<T>, 'children'> {
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string | ((validation: ValidationResult) => string);
    items?: Iterable<T>;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}
export declare function Select<T extends object>({ label, labelAlign, labelPosition, description, errorMessage, children, items, ...props }: SelectProps<T>): React.JSX.Element;
export declare function SelectItem(props: ListBoxItemProps): React.JSX.Element;
export declare function SelectSection<T extends object>(props: DropdownSectionProps<T>): React.JSX.Element;
