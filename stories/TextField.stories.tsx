import type { Meta } from '@storybook/react'
import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { TextField } from '../src/TextField'

const meta: Meta<typeof TextField> = {
  title: 'FORMS/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Name',
  },
}

export default meta

export const Example = (args: any) => <TextField {...args} />

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
