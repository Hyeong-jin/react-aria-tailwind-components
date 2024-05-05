import React from 'react'
import { Form } from 'react-aria-components'
import { Button } from '../src/Button'
import { Checkbox } from '../src/Checkbox'
import { PresetableCheckboxGroup } from '../src/PresetableCheckboxGroup'

export default {
  title: 'FORMS/PresetableCheckboxGroup',
  component: PresetableCheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
  args: {
    presets: [
      { label: 'aa', value: 'sf,ny' },
      { label: 'bb', value: 'sydney,london' },
      { label: 'cc', value: 'tokyo' },
    ],
  },
}

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <PresetableCheckboxGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
)

Validation.args = {
  isRequired: true,
  presets: [
    { label: 'aa', value: 'sf,ny' },
    { label: 'bb', value: 'sydney,london' },
    { label: 'cc', value: 'tokyo' },
  ],
}