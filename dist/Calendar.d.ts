import { CalendarProps as AriaCalendarProps, DateValue } from 'react-aria-components';
import { default as React } from 'react';

export interface CalendarProps<T extends DateValue> extends Omit<AriaCalendarProps<T>, 'visibleDuration'> {
    errorMessage?: string;
}
export declare function Calendar<T extends DateValue>({ errorMessage, ...props }: CalendarProps<T>): React.JSX.Element;
export declare function CalendarHeader(): React.JSX.Element;
export declare function CalendarGridHeader(): React.JSX.Element;
