import React, { ReactNode } from 'react'
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label } from './Field'
import { composeTailwindRenderProps, fieldLabel, focusRing } from './utils'

const radioGroupStyles = tv({
  extend: fieldLabel,
  base: 'group',
})

export interface RadioGroupProps extends Omit<RACRadioGroupProps, 'children'> {
  label?: string
  labelPosition?: 'top' | 'left' | 'right' | 'bottom'
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function RadioGroup({ labelPosition, ...props }: RadioGroupProps) {
  return (
    <RACRadioGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        radioGroupStyles({
          labelPosition,
          hasDescription: !!props.description,
          ...renderProps,
          className,
        }),
      )}
    >
      <Label className="field-label flex h-9 flex-1 items-center">
        {props.label}
      </Label>
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 group-orientation-horizontal:gap-4 group-orientation-vertical:flex-col">
          {props.children}
        </div>
        {props.description && <Description>{props.description}</Description>}
        <FieldError>{props.errorMessage}</FieldError>
      </div>
    </RACRadioGroup>
  )
}

const styles = tv({
  extend: focusRing,
  base: 'w-5 h-5 outline-offset-2 rounded-full border-2 bg-white dark:bg-zinc-900 transition-all',
  variants: {
    isSelected: {
      false:
        'border-gray-400 dark:border-zinc-400 group-pressed:border-gray-500 dark:group-pressed:border-zinc-300',
      true: 'border-[7px] border-gray-700 dark:border-slate-300 forced-colors:!border-[Highlight] group-pressed:border-gray-800 dark:group-pressed:border-slate-200',
    },
    isInvalid: {
      true: 'border-red-700 dark:border-red-600 group-pressed:border-red-800 dark:group-pressed:border-red-700 forced-colors:!border-[Mark]',
    },
    isDisabled: {
      true: 'border-gray-200 dark:border-zinc-700 forced-colors:!border-[GrayText]',
    },
  },
})

export function Radio(props: RadioProps) {
  return (
    <RACRadio
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]',
      )}
    >
      {(renderProps) => (
        <>
          <div className={styles(renderProps)} />
          {props.children}
        </>
      )}
    </RACRadio>
  )
}
