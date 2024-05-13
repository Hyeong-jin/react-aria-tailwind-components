import { DialogProps } from 'react-aria-components';
import { default as React, ReactNode } from '../node_modules/react';

interface AlertDialogProps extends Omit<DialogProps, 'children'> {
    title: string;
    children: ReactNode;
    variant?: 'info' | 'destructive';
    actionLabel: string;
    cancelLabel?: string;
    onAction?: () => void;
}
export declare function AlertDialog({ title, variant, cancelLabel, actionLabel, onAction, children, ...props }: AlertDialogProps): React.JSX.Element;
export {};
