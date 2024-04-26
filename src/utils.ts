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

export const fieldWithLabel = tv({
  slots: {
    base: 'flex flex-1',
    label: '',
  },
  variants: {
    labelPosition: {
      top: {
        base: 'flex-col gap-1 items-start',
      },
      side: {
        base: 'gap-4 items-center',
      },
    },
    labelAlign: {
      start: { base: 'items-start' },
      center: { base: 'items-center' },
      end: { base: 'items-end' },
    },
    isInvalid: {
      true: {
        label: '',
      },
    },
    isRequired: {
      true: {
        label:
          '[&::after]:content-["*"] [&::after]:text-red-700 [&::after]:p-1',
      },
    },
    isDisabled: {
      true: {
        label: 'text-gray-200 dark:text-gray-700 [&::after]:content-[""]',
      },
    },
  },
  defaultVariants: {
    labelPosition: 'top',
    labelAlign: 'start',
  },
})
