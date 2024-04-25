import { CalendarIcon } from 'lucide-react'
import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { Button } from './Button'
import { Calendar } from './Calendar'
import { DateInput } from './DateField'
import { Dialog } from './Dialog'
import { Description, FieldError, FieldGroup, Label } from './Field'
import { Popover } from './Popover'
import { composeTailwindRenderProps, fieldWithLabel } from './utils'

export interface DatePickerProps<T extends DateValue>
  extends AriaDatePickerProps<T> {
  label?: string
  labelAlign: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DatePicker<T extends DateValue>({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  const styles = fieldWithLabel()

  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(
        composeRenderProps(props.className, (className, renderProps) =>
          styles.base({
            labelAlign:
              labelAlign || labelPosition === 'side' ? 'center' : 'start',
            labelPosition,
            ...renderProps,
            className,
          }),
        ),
        'group',
      )}
    >
      {label && (
        <Label
          className={styles.label({
            isRequired: props.isRequired,
            isDisabled: props.isDisabled,
          })}
        >
          {label}
        </Label>
      )}
      <FieldGroup className="w-auto min-w-[208px]">
        <DateInput className="min-w-[150px] flex-1 px-2 py-1.5 text-sm" />
        <Button variant="icon" className="mr-1 w-6 rounded outline-offset-0">
          <CalendarIcon aria-hidden className="h-4 w-4" />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  )
}
