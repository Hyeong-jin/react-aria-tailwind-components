import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { TimeField } from '../src/TimeField'

const meta: Meta<typeof TimeField> = {
  title: 'DATE AND TIME/TimeField',
  component: TimeField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      options: ['top', 'left', 'right', 'bottom'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    label: 'Event time',
  },
}

export default meta

export const Example = (args: any) => <TimeField {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <TimeField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
