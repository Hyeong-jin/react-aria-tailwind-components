import { ListBoxProps as AriaListBoxProps, ListBoxItemProps, SectionProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

interface ListBoxProps<T> extends Omit<AriaListBoxProps<T>, 'layout' | 'orientation'> {
}
export declare function ListBox<T extends object>({ children, ...props }: ListBoxProps<T>): React.JSX.Element;
export declare const itemStyles: import('tailwind-variants').TVReturnType<{
    isSelected: {
        false: string;
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "group relative flex items-center gap-8 cursor-default select-none py-1.5 px-2.5 rounded-md will-change-transform text-sm forced-color-adjust-none", import('tailwind-variants/dist/config').TVConfig<{
    isSelected: {
        false: string;
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1", import('tailwind-variants/dist/config').TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, undefined, "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1", import('tailwind-variants/dist/config').TVConfig<{
    isFocusVisible: {
        false: string;
        true: string;
    };
}, {
    isFocusVisible: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>>;
export declare function ListBoxItem(props: ListBoxItemProps): React.JSX.Element;
export declare const dropdownItemStyles: import('tailwind-variants').TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}, undefined, "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded-lg outline outline-0 text-sm forced-color-adjust-none", import('tailwind-variants/dist/config').TVConfig<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}>, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}, undefined, "group flex items-center gap-4 cursor-default select-none py-2 pl-3 pr-1 rounded-lg outline outline-0 text-sm forced-color-adjust-none", import('tailwind-variants/dist/config').TVConfig<{
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}, {
    isDisabled: {
        false: string;
        true: string;
    };
    isFocused: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
export declare function DropdownItem(props: ListBoxItemProps): React.JSX.Element;
export interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string;
}
export declare function DropdownSection<T extends object>(props: DropdownSectionProps<T>): React.JSX.Element;
export {};
