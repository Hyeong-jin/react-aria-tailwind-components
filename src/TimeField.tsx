import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
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
  labelAlign?: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TimeField<T extends TimeValue>({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: TimeFieldProps<T>) {
  const { base, label: labelStyles } = fieldWithLabel()
  return (
    <AriaTimeField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        base({
          labelAlign,
          labelPosition,
          ...renderProps,
          className,
        }),
      )}
    >
      <Label
        className={labelStyles({
          isRequired: props.isRequired,
          isInvalid: props.isInvalid,
          isDisabled: props.isDisabled,
        })}
      >
        {label}
      </Label>
      <div className="flex flex-col gap-1">
        <DateInput />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaTimeField>
  )
}
