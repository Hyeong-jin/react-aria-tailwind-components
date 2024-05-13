import { Alignment, LabelPosition } from '@react-types/shared';
import { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps, TagListProps } from 'react-aria-components';
import { default as React } from 'react';

declare const colors: {
    gray: string;
    green: string;
    yellow: string;
    blue: string;
};
type Color = keyof typeof colors;
export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, 'children'>, Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
    color?: Color;
    label?: string;
    labelAlign?: Alignment;
    labelPosition?: LabelPosition;
    description?: string;
    errorMessage?: string;
}
export interface TagProps extends AriaTagProps {
    color?: Color;
}
export declare function TagGroup<T extends object>({ label, labelAlign, labelPosition, description, errorMessage, items, children, renderEmptyState, ...props }: TagGroupProps<T>): React.JSX.Element;
export declare function Tag({ children, color, ...props }: TagProps): React.JSX.Element;
export {};
