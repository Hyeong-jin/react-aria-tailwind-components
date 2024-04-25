import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { NumberField } from '../src/NumberField'

const meta: Meta<typeof NumberField> = {
  title: 'FORMS/NumberField',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      options: ['top', 'side'],
      control: 'radio',
    },
  },
  args: {
    label: 'Cookies',
  },
}

export default meta

export const Example = (args: any) => <NumberField {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <NumberField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
