import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'

import { tv } from 'tailwind-variants'
import {
  Description,
  FieldError,
  Input,
  Label,
  fieldBorderStyles,
} from './Field'
import { fieldWithLabel, focusRing } from './utils'

const inputStyles = tv({
  extend: focusRing,
  base: 'border rounded-md',
  variants: {
    isFocused: fieldBorderStyles.variants.isFocusWithin,
    ...fieldBorderStyles.variants,
  },
  compoundVariants: [
    {
      isFocused: true,
      isFocusVisible: true,
      class: 'outline-2',
    },
    {
      isFocused: true,
      isFocusVisible: false,
      class: 'outline-2',
    },
  ],
})

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string
  labelAlign?: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function TextField({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
  const { base, label: labelStyles } = fieldWithLabel()
  return (
    <AriaTextField
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
      {label && (
        <Label
          className={labelStyles({
            isRequired: props.isRequired,
            isDisabled: props.isDisabled,
            isInvalid: props.isInvalid,
          })}
        >
          {label}
        </Label>
      )}
      <div className="flex flex-1 flex-col gap-1">
        <Input className={inputStyles} />
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaTextField>
  )
}
