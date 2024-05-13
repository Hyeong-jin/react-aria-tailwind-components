import { PopoverProps } from './Popover';
import { DropdownSectionProps } from './ListBox';
import { MenuProps as AriaMenuProps, MenuItemProps, SeparatorProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

interface MenuProps<T> extends AriaMenuProps<T> {
    placement?: PopoverProps['placement'];
}
export declare function Menu<T extends object>(props: MenuProps<T>): React.JSX.Element;
export declare function MenuItem(props: MenuItemProps): React.JSX.Element;
export declare function MenuSeparator(props: SeparatorProps): React.JSX.Element;
export declare function MenuSection<T extends object>(props: DropdownSectionProps<T>): React.JSX.Element;
export {};
