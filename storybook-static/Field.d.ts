import { FieldErrorProps, GroupProps, InputProps, LabelProps, TextProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export declare function Label(props: LabelProps): React.JSX.Element;
export declare function Description(props: TextProps): React.JSX.Element;
export declare function FieldError(props: FieldErrorProps): React.JSX.Element;
export declare const fieldBorderStyles: import('tailwind-variants').TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, undefined, import('tailwind-variants/dist/config').TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}>, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, import('tailwind-variants').TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, undefined, import('tailwind-variants/dist/config').TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, {
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}>, unknown, unknown, undefined>>;
export declare const fieldGroupStyles: import('tailwind-variants').TVReturnType<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
        true: string;
    };
    isDisabled: {
        true: string;
    };
}, undefined, "group flex items-center h-9 bg-white dark:bg-zinc-900 forced-colors:bg-[Field] border rounded-lg overflow-hidden", import('tailwind-variants/dist/config').TVConfig<{
    isFocusWithin: {
        false: string;
        true: string;
    };
    isInvalid: {
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
export declare function FieldGroup(props: GroupProps): React.JSX.Element;
export declare function Input(props: InputProps): React.JSX.Element;
