import { SearchIcon, XIcon } from 'lucide-react'
import React from 'react'
import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  ValidationResult,
  composeRenderProps,
} from 'react-aria-components'
import { Button } from './Button'
import { Description, FieldError, FieldGroup, Input, Label } from './Field'
import { tv } from 'tailwind-variants'
import { fieldLabel } from './utils'

const fieldStyles = tv({
  extend: fieldLabel,
  base: 'group',
})

export interface SearchFieldProps extends AriaSearchFieldProps {
  label?: string
  labelPosition?: 'top' | 'left' | 'right' | 'bottom'
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function SearchField({
  label,
  labelPosition = 'top',
  description,
  errorMessage,
  ...props
}: SearchFieldProps) {
  return (
    <AriaSearchField
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldStyles({
          labelPosition,
          hasDescription: !!description,
          ...renderProps,
          className,
        }),
      )}
    >
      {label && (
        <Label className="flex h-9 flex-1 flex-col items-center">{label}</Label>
      )}
      <div className="flex flex-1 flex-col gap-1">
        <FieldGroup>
          <SearchIcon
            aria-hidden
            className="ml-2 h-4 w-4 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
          />
          <Input className="[&::-webkit-search-cancel-button]:hidden" />
          <Button variant="icon" className="mr-1 w-6 group-empty:invisible">
            <XIcon aria-hidden className="h-4 w-4" />
          </Button>
        </FieldGroup>
        {description && <Description>{description}</Description>}
        <FieldError>{errorMessage}</FieldError>
      </div>
    </AriaSearchField>
  )
}
