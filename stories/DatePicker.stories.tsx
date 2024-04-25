import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { DatePicker } from '../src/DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'DATE AND TIME/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelAlign: {
      options: ['start', 'center', 'end'],
      control: 'radio',
    },
    labelPosition: {
      options: ['top', 'side'],
      control: 'radio',
    },
  },
  args: {
    label: 'Event date',
  },
}

export default meta

export const Example = (args: any) => <DatePicker {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <DatePicker {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
