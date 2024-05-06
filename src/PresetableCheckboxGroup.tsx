import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from './Checkbox'
import { Separator } from './Separator'
import { Label } from './Field'
import { fieldWithLabel } from './utils'

export type TPreset = {
  label: string
  value: string
}

type TPresetableCheckboxGroupState = {
  addItem?: (item: string) => void
}

export const PresetableCheckboxGroupContext =
  React.createContext<TPresetableCheckboxGroupState>({})

export const usePresetableCheckboxGroup = () => {
  return React.useContext(PresetableCheckboxGroupContext)
}

export interface PresetableCheckboxGroupProps extends CheckboxGroupProps {
  presets: TPreset[]
}

function PresetableCheckboxGroup({
  label,
  presets,
  ...props
}: PresetableCheckboxGroupProps) {
  /** select all or none state  **/
  const [isSelectAll, setIsSelectAll] = React.useState(false)
  const [updatedSelectAll, updateSelectAll] = React.useState(false)

  // selected preset values
  const [presetValues, setPresetValues] = React.useState<string[]>([]) // comma separated values array
  const [updatedPresets, updatePresets] = React.useState<string[]>([])

  // indeterminate state
  const [isIndeterminate, setIsIndeterminate] = React.useState(false)

  // all values in the group
  const [items, setItems] = React.useState<string[]>([])

  // selected values in the group
  const [value, setValue] = React.useState<string[]>([])

  // update preset values
  const updatePresetValues = () => {
    const newPresets: string[] = []
    presets.forEach((preset) => {
      if (preset.value.split(',').every((v) => value.includes(v.trim()))) {
        newPresets.push(preset.value)
      }
    })
    updatePresets(newPresets)
  }

  // update preset values when selected values are updated
  React.useEffect(() => {
    updatePresetValues()
    setIsIndeterminate(value.length > 0 && value.length < items.length)
    updateSelectAll(value.length === items.length)
  }, [value])

  // update selected values when preset values are updated
  React.useEffect(() => {
    setValue([
      ...new Set([
        ...presetValues
          .map((preset) => preset.split(',').map((p) => p.trim()))
          .flat(),
      ]),
    ])
  }, [presetValues])

  // update select values when select all is toggled
  React.useEffect(() => {
    if (isSelectAll) {
      setValue(items)
    } else {
      setValue([])
    }
  }, [isSelectAll])

  // add item to the group
  const addItem = React.useCallback(
    (item: string) => setItems((prev) => [...new Set([...prev, item])]),
    [],
  )

  // preset checkbox group context value
  const contextValue = React.useMemo<TPresetableCheckboxGroupState>(() => {
    return {
      addItem,
    }
  }, [])

  // update selected values when change select all
  const toggleSelectAll = (selected: boolean) => {
    setIsSelectAll(selected)
    updateSelectAll(selected)
    if (selected) {
      setValue(items)
    } else {
      setValue([])
    }
  }

  const { base, label: labelStyles } = fieldWithLabel()

  // render presets
  const rendererdPresets = React.useMemo(() => {
    return (
      <CheckboxGroup
        // label="Presets"
        value={updatedPresets}
        onChange={setPresetValues}
        orientation={props.orientation}
        className="w-full"
      >
        {presets &&
          presets.map((preset) => (
            <Checkbox value={preset.value}>{preset.label}</Checkbox>
          ))}
      </CheckboxGroup>
    )
  }, [updatedPresets, props.orientation])

  return (
    <div
      className={twMerge(
        base({
          labelPosition: props.labelPosition || 'top',
          labelAlign: props.labelAlign || 'start',
        }),
        props.className as string,
        'gap-4 rounded-lg border border-gray-500 p-6',
      )}
    >
      <div className="flex w-1/3 flex-col gap-4">
        <Label
          className={labelStyles({
            isRequired: props.isRequired,
            isDisabled: props.isDisabled,
          })}
        >
          {label}
        </Label>
        <Checkbox
          isSelected={updatedSelectAll}
          isIndeterminate={isIndeterminate}
          onChange={toggleSelectAll}
        >
          All
        </Checkbox>
        {props.labelPosition === 'side' && rendererdPresets}
      </div>
      <PresetableCheckboxGroupContext.Provider value={contextValue}>
        <CheckboxGroup
          value={value}
          onChange={setValue}
          {...props}
          className={`rounded border border-gray-300 p-4 dark:border-zinc-500 forced-colors:border-[ButtonBorder]`}
        >
          {props.children}
        </CheckboxGroup>
      </PresetableCheckboxGroupContext.Provider>
      {props.labelPosition !== 'side' && rendererdPresets}
    </div>
  )
}

const _PresetableCheckboxGroup = React.forwardRef(PresetableCheckboxGroup)
export { _PresetableCheckboxGroup as PresetableCheckboxGroup }
