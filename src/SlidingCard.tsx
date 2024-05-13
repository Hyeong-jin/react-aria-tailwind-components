import React from 'react'
import {
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  RadioGroupProps as RACRadioGroupProps,
  RadioProps,
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const styles = tv({
  base: 'flex h-screen gap-5 bg-white py-5 overflow-hidden',
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
  const interval = React.useRef<NodeJS.Timeout>()

  function play() {
    interval.current = setInterval(() => {
      setValue((prev) => {
        return ((parseInt(prev) % 5) + 1).toString()
      })
    }, 5000)
  }

  function stop() {
    interval.current && clearInterval(interval.current)
  }

  React.useEffect(() => {
    play()
    return stop
  }, [])

  return (
    <div onMouseOver={stop} onMouseLeave={play} className='h-full'>
      <RACRadioGroup
        value={value}
        onChange={setValue}
        aria-label="sliding-card-group"
        {...props}
        className={`${styles()} ${props.className}`}
      >
        {children}
      </RACRadioGroup>
    </div>
  )
}

const cardStyles = tv({
  slots: {
    base: 'w-20 [&[data-selected]]:flex-1 transition-all duration-700 ease-in-out rounded-[40px] shadow-xl shadow-gray-400',
    card: 'flex h-full items-end justify-start rounded-[40px] p-1 gap-3 bg-cover',
    cardBox: 'flex items-end transition-all duration-700 ease-in-out ',
    cardNumber:
      'text-4xl font-bold rounded-full grow-0 shrink-0 w-16 h-16 flex items-center justify-center bg-black/60 text-white m-1 ',
    description:
      'text-sm transition-all duration-700 ease-in-out text-wrap break-all p-2 text-white',
  },
  variants: {
    isSelected: {
      false: { description: 'opacity-0' },
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
        <div className={`${card({ ...renderProps })} ${className}`}>
          <div className={cardBox(renderProps)}>
            <div className={cardNumber()}>{props.value}</div>
            <div className={description(renderProps)}>{children}</div>
          </div>
        </div>
      )}
    </RACRadio>
  )
}
