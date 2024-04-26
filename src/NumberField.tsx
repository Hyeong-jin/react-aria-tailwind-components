import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import { Alignment, LabelPosition } from '@react-types/shared'
import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  Button,
  ButtonProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import {
  Description,
  FieldError,
  FieldGroup,
  Input,
  Label,
  fieldBorderStyles,
} from './Field'
import { composeTailwindRenderProps, fieldWithLabel } from './utils'

export interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string
  labelAlign?: Alignment
  labelPosition?: LabelPosition
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function NumberField({
  label,
  labelAlign,
  labelPosition,
  description,
  errorMessage,
  ...props
}: NumberFieldProps) {
  const { base, label: labelStyles } = fieldWithLabel()

  return (
    <AriaNumberField
      {...props}
      className={composeTailwindRenderProps(
        composeRenderProps(props.className, (className, renderProps) =>
          base({
            labelAlign,
            labelPosition,
            ...renderProps,
            className,
          }),
        ),
        'group',
      )}
    >
      <Label
        className={labelStyles({
          isRequired: props.isRequired,
          isDisabled: props.isDisabled,
        })}
      >
        {label}
      </Label>
      <div className="flex flex-col gap-1">
        <FieldGroup>
          {(renderProps) => (
            <>
              <Input />
              <div
                className={fieldBorderStyles({
                  ...renderProps,
                  class: 'flex flex-col border-s-2',
                })}
              >
                <StepperButton slot="increment">
                  <ChevronUp aria-hidden className="h-4 w-4" />
                </StepperButton>
                <div
                  className={fieldBorderStyles({
                    ...renderProps,
                    class: 'border-b-2',
                  })}
                />
                <StepperButton slot="decrement">
                  <ChevronDown aria-hidden className="h-4 w-4" />
                </StepperButton>
              </div>
            </>
          )}
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaNumberField>
  )
}

function StepperButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="cursor-default px-0.5 text-gray-500 pressed:bg-gray-100 group-disabled:text-gray-200 dark:text-zinc-400 dark:pressed:bg-zinc-800 dark:group-disabled:text-zinc-600 forced-colors:group-disabled:text-[GrayText]"
    />
  )
}
