import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { Checkbox, CheckboxGroup } from '../src/Checkbox'

export default {
  title: 'FORMS/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: 'radio',
    },
    labelPosition: {
      options: ['top', 'side'],
      control: 'radio',
    },
    labelAlign: {
      options: ['start', 'center', 'end'],
      control: 'radio',
    },
  },
  args: {
    label: 'Cities',
    isDisabled: false,
    isRequired: false,
    description: '',
    children: (
      <>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </>
    ),
  },
}

export const Default = {
  args: {},
}

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <CheckboxGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
}
