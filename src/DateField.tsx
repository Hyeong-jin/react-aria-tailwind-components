import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
import {
  DateField as AriaDateField,
  DateFieldProps as AriaDateFieldProps,
  DateInput as AriaDateInput,
  DateInputProps,
  DateSegment,
  DateValue,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label, fieldGroupStyles } from './Field'
import { fieldWithLabel } from './utils'

export interface DateFieldProps<T extends DateValue>
  extends AriaDateFieldProps<T> {
  label?: string
  labelAlign?: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DateField<T extends DateValue>({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: DateFieldProps<T>) {
  const { base, label: labelStyles } = fieldWithLabel()
  return (
    <AriaDateField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        base({
          labelAlign:
            labelAlign || labelPosition === 'side' ? 'center' : 'start',
          labelPosition,
          ...renderProps,
          className,
        }),
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
      <div className="flex flex-1 flex-col gap-1">
        <DateInput />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaDateField>
  )
}

const segmentStyles = tv({
  base: 'inline p-0.5 type-literal:px-0 rounded outline outline-0 forced-color-adjust-none caret-transparent text-gray-800 dark:text-zinc-200 forced-colors:text-[ButtonText]',
  variants: {
    isPlaceholder: {
      true: 'text-gray-600 dark:text-zinc-400 italic',
    },
    isDisabled: {
      true: 'text-gray-200 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
    isFocused: {
      true: 'bg-blue-600 text-white dark:text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]',
    },
  },
})

export function DateInput(props: Omit<DateInputProps, 'children'>) {
  return (
    <AriaDateInput
      className={(renderProps) =>
        fieldGroupStyles({
          ...renderProps,
          class: 'block min-w-[150px] px-2 py-1.5 text-sm',
        })
      }
      {...props}
    >
      {(segment) => <DateSegment segment={segment} className={segmentStyles} />}
    </AriaDateInput>
  )
}
