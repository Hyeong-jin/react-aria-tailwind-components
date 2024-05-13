import { RangeCalendarProps as AriaRangeCalendarProps, DateValue } from 'react-aria-components';
import { default as React } from '../node_modules/react';

export interface RangeCalendarProps<T extends DateValue> extends Omit<AriaRangeCalendarProps<T>, 'visibleDuration'> {
    errorMessage?: string;
}
export declare function RangeCalendar<T extends DateValue>({ errorMessage, ...props }: RangeCalendarProps<T>): React.JSX.Element;
