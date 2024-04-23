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
    base: 'flex-1 flex gap-1',
    label: '',
  },
  variants: {
    labelPosition: {
      top: {
        base: 'flex-col',
      },
      left: {
        base: 'gap-4',
        label: 'h-9 flex items-center',
      },
      right: {
        base: 'flex-row-reverse gap-4',
        label: 'h-9 flex items-center',
      },
      bottom: {
        base: 'flex-col-reverse',
      },
    },
    hasDescription: {
      true: {
        label: '',
      },
    },
    isInvalid: {
      true: {
        label: '',
      },
    },
    isRequired: {
      true: {
        label:
          '[&::after]:content-["*"] [&::after]:text-red-500 [&::after]:pl-1 ',
      },
    },
    isDisabled: {
      true: {
        label: 'text-gray-200 dark:text-gray-700',
      },
    },
  },
  defaultVariants: {
    labelPosition: 'top',
    hasDescription: false,
  },
})
