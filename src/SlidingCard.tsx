import React from 'react'
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps,
  composeRenderProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { composeTailwindRenderProps } from './utils'

const styles = tv({
  base: 'flex h-screen gap-5 bg-white py-5 ',
})

export interface SlidingCardGroupProps
  extends Omit<RACRadioGroupProps, 'children'> {
  children: React.ReactNode
}

export function SlidingCardGroup({
  children,
  ...props
}: SlidingCardGroupProps) {
  const [value, setValue] = React.useState('1')

  return (
    <RACRadioGroup
      value={value}
      onChange={setValue}
      aria-label="sliding-card-group"
      {...props}
      className={styles}
    >
      {children}
    </RACRadioGroup>
  )
}

const cardStyles = tv({
  slots: {
    base: 'w-20 [&[data-selected]]:flex-1 transition-all duration-700 ease-in-out rounded-[40px]',
    card: 'flex h-full items-end justify-start bg-gray-200 rounded-[40px] p-3 gap-3 bg-cover',
    cardBox: 'flex items-end transition-all duration-700 ease-in-out ',
    cardNumber:
      'text-4xl font-bold rounded-full grow-0 shrink-0 w-10 h-10 flex items-center justify-center bg-black text-white m-2 ',
    description:
      'text-sm transition-all duration-700 ease-in-out text-wrap break-all p-2 text-white',
  },
  variants: {
    isSelected: {
      false: { description: 'w-3/4 opacity-0' },
      true: { cardBox: 'items-center', description: 'w-3/4 opacity-100' },
    },
  },
})
export interface SlidingCardProps extends Omit<RadioProps, 'children'> {
  children: React.ReactNode
  className?: string
}
export function SlidingCard({
  children,
  className,
  ...props
}: SlidingCardProps) {
  const { base, card, cardBox, cardNumber, description } = cardStyles()
  return (
    <RACRadio {...props} className={base()}>
      {(renderProps) => (
        <div className={`${card({...renderProps })} ${className}`}>
          <div className={cardBox(renderProps)}>
            <div className={cardNumber()}>{props.value}</div>
            <div className={description(renderProps )}>
              {children}
            </div>
          </div>
        </div>
      )}
    </RACRadio>
  )
}
