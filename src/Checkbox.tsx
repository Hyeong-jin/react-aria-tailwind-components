import { Check, Minus } from 'lucide-react'
import React, { ReactNode } from 'react'

import { Alignment, LabelPosition } from '@react-types/shared'
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  CheckboxProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Description, FieldError, Label } from './Field'
import { fieldWithLabel, focusRing } from './utils'
import { usePresetableCheckboxGroup } from './PresetableCheckboxGroup'

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  label?: string
  labelAlign?: Alignment
  labelPosition?: LabelPosition
  children?: ReactNode
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const { base, label: labelStyles } = fieldWithLabel()

  return (
    <AriaCheckboxGroup
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        base({
          labelAlign: props.labelAlign || 'start',
          labelPosition: props.labelPosition || 'top',
          ...renderProps,
          className,
        }),
      )}
    >
      {props.label && (
        <Label
          className={labelStyles({
            isRequired: props.isRequired,
            isDisabled: props.isDisabled,
          })}
        >
          {props.label}
        </Label>
      )}
      <div className="flex flex-1 flex-col gap-1">
        {props.children}
        {props.description && <Description>{props.description}</Description>}
        <FieldError>{props.errorMessage}</FieldError>
      </div>
    </AriaCheckboxGroup>
  )
}

const checkboxStyles = tv({
  base: 'flex gap-2 items-center group text-sm transition',
  variants: {
    isDisabled: {
      false: 'text-gray-800 dark:text-zinc-200',
      true: 'text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]',
    },
  },
})

const boxStyles = tv({
  extend: focusRing,
  base: 'w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 outline-offset-2 transition',
  variants: {
    isSelected: {
      false:
        'bg-white dark:bg-zinc-900 border-[--color] [--color:theme(colors.gray.400)] dark:[--color:colors.zinc-400)] group-pressed:[--color:theme(colors.gray.500)] dark:group-pressed:[--color:theme(colors.zinc.300)]',
      true: 'bg-[--color] border-[--color] [--color:theme(colors.gray.700)] group-pressed:[--color:theme(colors.gray.800)] dark:[--color:theme(colors.slate.300)] dark:group-pressed:[--color:theme(colors.slate.200)] forced-colors:![--color:Highlight]',
    },
    isInvalid: {
      true: '[--color:theme(colors.red.700)] dark:[--color:theme(colors.red.600)] forced-colors:![--color:Mark] group-pressed:[--color:theme(colors.red.800)] dark:group-pressed:[--color:theme(colors.red.700)]',
    },
    isDisabled: {
      true: '[--color:theme(colors.gray.200)] dark:[--color:theme(colors.zinc.700)] forced-colors:![--color:GrayText]',
    },
  },
})

const iconStyles =
  'w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600 forced-colors:text-[HighlightText]'

export function Checkbox(props: CheckboxProps) {
  const { addItem } = usePresetableCheckboxGroup()
  React.useEffect(() => {
    addItem?.(props.value as string)
  }, [])

  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => {
          return checkboxStyles({ ...renderProps, className })
        },
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <div
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}
          >
            {isIndeterminate ? (
              <Minus aria-hidden className={iconStyles} />
            ) : isSelected ? (
              <Check aria-hidden className={iconStyles} />
            ) : null}
          </div>
          {props.children}
        </>
      )}
    </AriaCheckbox>
  )
}
