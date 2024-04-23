import { composeRenderProps } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export const focusRing = tv({
  base: 'outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] -outline-offset-1',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2',
    },
  },
})

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string,
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className))
}

export const fieldLabel = tv({
  base: 'flex',
  variants: {
    labelPosition: {
      top: 'flex-col gap-1',
      left: 'flex-row gap-2 items-center',
      right: 'flex-row-reverse gap-2 items-center',
      bottom: 'flex-col-reverse gap-1',
    },
    hasDescription: {
      true: '',
    },
    isInvalid: {
      true: '',
    },
  },
  compoundVariants: [
    {
      labelPosition: ['left', 'right'],
      hasDescription: true,
      class: 'items-start',
    },
    {
      labelPosition: ['left', 'right'],
      isInvalid: true,
      class: 'items-start',
    },
  ],
  defaultVariants: {
    labelPosition: 'top',
  },
})
