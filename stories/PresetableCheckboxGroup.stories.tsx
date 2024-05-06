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
        <Checkbox value="seoul">Seoul</Checkbox>
        <Checkbox value="incheon">Incheon</Checkbox>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
        <Checkbox value="paris">Paris</Checkbox>
        <Checkbox value="leon">Leon</Checkbox>
      </>
    ),
  },
}

const presets = [
  { label: 'Korea', value: 'incheon, seoul' },
  { label: 'Austrailia', value: 'sydney' },
  { label: 'USA', value: 'sf,ny' },
  { label: 'United Kingdom', value: 'london' },
  { label: 'France', value: 'paris, leon' },
]

export const Default = {
  args: {
    presets,
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
  presets,
}
