import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
import {
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { Button } from './Button'
import { DateInput } from './DateField'
import { Dialog } from './Dialog'
import { Description, FieldError, FieldGroup, Label } from './Field'
import { Popover } from './Popover'
import { RangeCalendar } from './RangeCalendar'
import { fieldWithLabel } from './utils'
import { twMerge } from 'tailwind-merge'

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string
  labelAlign: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateRangePicker<T extends DateValue>({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: DateRangePickerProps<T>) {
  const { base, label: labelStyles } = fieldWithLabel()

  return (
    <AriaDateRangePicker
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        twMerge(
          base({
            labelAlign:
              labelAlign || labelPosition === 'side' ? 'center' : 'start',
            labelPosition,
            ...renderProps,
            className,
          }),
          'group',
        ),
      )}
    >
      {label && (
        <Label
          className={labelStyles({
            isRequired: props.isRequired,
            isDisabled: props.isDisabled,
          })}
        >
          {label}
        </Label>
      )}
      <FieldGroup className="w-auto min-w-[208px]">
        <DateInput slot="start" className="px-2 py-1.5 text-sm" />
        <span
          aria-hidden="true"
          className="text-gray-800 group-disabled:text-gray-200 dark:text-zinc-200 group-disabled:dark:text-zinc-600 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]"
        >
          –
        </span>
        <DateInput slot="end" className="flex-1 px-2 py-1.5 text-sm" />
        <Button variant="icon" className="mr-1 w-6 rounded outline-offset-0">
          <CalendarIcon aria-hidden className="h-4 w-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  )
}
