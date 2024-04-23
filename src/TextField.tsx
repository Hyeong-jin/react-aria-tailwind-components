import React from 'react'
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
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  labelPosition?: 'top' | 'left' | 'right' | 'bottom'
}

export function TextField({
  label,
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
          labelPosition,
          hasDescription: !!description,
          ...renderProps,
          className,
        }),
      )}
    >
      {label && (
        <Label
          className={labelStyles({
            labelPosition,
            hasDescription: !!description,
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
