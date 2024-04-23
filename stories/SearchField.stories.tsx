import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { SearchField } from '../src/SearchField'

const meta: Meta<typeof SearchField> = {
  title: 'FORMS/SearchField',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelPosition: {
      options: ['top', 'left', 'right', 'bottom'],
      control: 'radio',
    },
  },
  args: {
    label: 'Search',
  },
}

export default meta

export const Example = (args: any) => <SearchField {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <SearchField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
