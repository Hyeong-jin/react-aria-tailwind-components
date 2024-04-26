import React from 'react'
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { Label } from './Field'
import { composeTailwindRenderProps, focusRing } from './utils'

const trackStyles = tv({
  base: 'rounded-full',
  variants: {
    orientation: {
      horizontal: 'w-full h-[6px]',
      vertical: 'h-full w-[6px] ml-[50%] -translate-x-[50%]',
    },
    isDisabled: {
      false: 'bg-gray-300 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder]',
      true: 'bg-gray-100 dark:bg-zinc-800 forced-colors:bg-[GrayText]',
    },
  },
})

const thumbStyles = tv({
  extend: focusRing,
  base: 'w-6 h-6 outline-offset-2 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3 rounded-full bg-gray-50 dark:bg-zinc-900 border-2 border-gray-700 dark:border-gray-300',
  variants: {
    isDragging: {
      true: 'bg-gray-700 dark:bg-gray-300 forced-colors:bg-[ButtonBorder]',
    },
    isDisabled: {
      true: 'border-gray-300 dark:border-zinc-700 forced-colors:border-[GrayText]',
    },
  },
})

const labelStyles = tv({
  variants: {
    isDisabled: {
      true: 'text-zinc-500 dark:text-zinc-700',
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
})

const outputStyles = tv({
  base: 'text-sm font-medium text-gray-500 orientation-vertical:hidden dark:text-zinc-400',
  variants: {
    isDisabled: {
      true: 'text-zinc-500 dark:text-zinc-700',
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
})

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string
  thumbLabels?: string[]
}

export function Slider<T extends number | number[]>({
  label,
  thumbLabels,
  ...props
}: SliderProps<T>) {
  return (
    <AriaSlider
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:grid orientation-horizontal:w-64 orientation-vertical:flex',
      )}
    >
      <Label
        className={labelStyles({
          isDisabled: props.isDisabled,
        })}
      >
        {label}
      </Label>
      <SliderOutput
        className={outputStyles({
          isDisabled: props.isDisabled,
        })}
      >
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')
        }
      </SliderOutput>
      <SliderTrack className="group col-span-2 flex items-center orientation-horizontal:h-6 orientation-vertical:h-64 orientation-vertical:w-6">
        {({ state, ...renderProps }) => (
          <>
            <div className={trackStyles(renderProps)} />
            {state.values.map((_, i) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels?.[i]}
                className={thumbStyles}
              />
            ))}
          </>
        )}
      </SliderTrack>
    </AriaSlider>
  )
}
