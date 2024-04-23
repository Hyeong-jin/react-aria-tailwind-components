import { ChevronDown } from 'lucide-react'
import React from 'react'
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  ListBox,
  ListBoxItemProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { Button } from './Button'
import { Description, FieldError, FieldGroup, Input, Label } from './Field'
import { DropdownItem, DropdownSection, DropdownSectionProps } from './ListBox'
import { Popover } from './Popover'
import { composeTailwindRenderProps, fieldWithLabel } from './utils'
import { tv } from 'tailwind-variants'

const comboBoxStyles = tv({
  extend: fieldWithLabel,
})

export interface ComboBoxProps<T extends object>
  extends Omit<AriaComboBoxProps<T>, 'children'> {
  label?: string
  labelPosition?: 'top' | 'right' | 'bottom' | 'left'
  description?: string | null
  errorMessage?: string | ((validation: ValidationResult) => string)
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function ComboBox<T extends object>({
  label,
  labelPosition,
  description,
  errorMessage,
  children,
  items,
  ...props
}: ComboBoxProps<T>) {
  const { base, label: labelStyles } = fieldWithLabel({
    labelPosition,
    hasDescription: !!description,
  })
  return (
    <AriaComboBox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        base({
          ...renderProps,
          className,
        }),
      )}
    >
      <Label>{label}</Label>
      <div className="flex flex-1 flex-col gap-1">
        <FieldGroup>
          <Input />
          <Button variant="icon" className="mr-1 w-6 rounded outline-offset-0 ">
            <ChevronDown aria-hidden className="h-4 w-4" />
          </Button>
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
      <Popover className="w-[--trigger-width]">
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  )
}

export function ComboBoxItem(props: ListBoxItemProps) {
  return <DropdownItem {...props} />
}

export function ComboBoxSection<T extends object>(
  props: DropdownSectionProps<T>,
) {
  return <DropdownSection {...props} />
}
