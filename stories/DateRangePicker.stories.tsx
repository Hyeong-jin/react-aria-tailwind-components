import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { DateRangePicker } from '../src/DateRangePicker'

const meta: Meta<typeof DateRangePicker> = {
  title: 'DATE AND TIME/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelPosition: {
      options: ['top', 'side'],
      control: 'radio',
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Trip dates',
  },
}

export default meta

export const Example = (args: any) => <DateRangePicker {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <DateRangePicker {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
