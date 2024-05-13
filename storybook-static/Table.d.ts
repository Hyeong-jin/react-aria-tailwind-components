import { CellProps, ColumnProps, RowProps, TableHeaderProps, TableProps } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export declare function Table(props: TableProps): React.JSX.Element;
export declare function Column(props: ColumnProps): React.JSX.Element;
export declare function TableHeader<T extends object>(props: TableHeaderProps<T>): React.JSX.Element;
export declare function Row<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>): React.JSX.Element;
export declare function Cell(props: CellProps): React.JSX.Element;
