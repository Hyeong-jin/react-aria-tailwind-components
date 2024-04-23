import React from 'react'
import {
  TimeField as AriaTimeField,
  TimeFieldProps as AriaTimeFieldProps,
  TimeValue,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { DateInput } from './DateField'
import { Description, FieldError, Label } from './Field'
import { fieldWithLabel } from './utils'

export interface TimeFieldProps<T extends TimeValue>
  extends AriaTimeFieldProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  labelPosition?: 'top' | 'left' | 'right' | 'bottom'
}

export function TimeField<T extends TimeValue>({
  label,
  labelPosition,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  const { base, label: labelStyles } = fieldWithLabel({
    labelPosition,
    hasDescription: !!description,
  })
  return (
    <AriaTimeField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        base({
          ...renderProps,
          className,
        }),
      )}
    >
      <Label className={labelStyles()}>{label}</Label>
      <div className="flex flex-col gap-1">
        <DateInput />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaTimeField>
  )
}
