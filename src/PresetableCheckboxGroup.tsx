import React from 'react'
import { Checkbox, CheckboxGroup, CheckboxGroupProps } from './Checkbox'
import { CheckboxProps, Separator } from 'react-aria-components'
import { Label } from './Field'

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
  presets,
  ...props
}: PresetableCheckboxGroupProps) {
  const [isSelectAll, setIsSelectAll] = React.useState(false)
  const [updatedSelectAll, updateSelectAll] = React.useState(false)

  const [value, setValue] = React.useState<string[]>([]) // values array
  const [items, setItems] = React.useState<string[]>([])
  const [presetValues, setPresetValues] = React.useState<string[]>([]) // comma separated values array
  const [updatedPresets, updatePresets] = React.useState<string[]>([])

  const [isIndeterminate, setIsIndeterminate] = React.useState(false)

  const updatePresetValues = () => {
    const newPresets: string[] = []
    presets.forEach((preset) => {
      if (preset.value.split(',').every((v) => value.includes(v))) {
        newPresets.push(preset.value)
      }
    })
    updatePresets(newPresets)
  }

  React.useEffect(() => {
    updateSelectAll(value.length === items.length)
    updatePresetValues()
    setIsIndeterminate(value.length > 0 && value.length < items.length)
  }, [value])

  React.useEffect(() => {
    setValue([...presetValues.map((p) => p.split(',')).flat()])
  }, [presetValues])

  React.useEffect(() => {
    if (isSelectAll) {
      setValue(items)
      setPresetValues([...presets.map((p) => p.value)])
    } else {
      setValue([])
      setPresetValues([])
    }
  }, [isSelectAll])

  const addItem = React.useCallback(
    (item: string) => setItems((prev) => [...new Set([...prev, item])]),
    [],
  )

  const contextValue = React.useMemo(() => {
    return {
      addItem,
    }
  }, [])

  const toggleSelectAll = () => {
    setIsSelectAll((prev) => {
      updateSelectAll(!prev)
      return !prev
    })
  }
  return (
    <div className="rounded-lg border p-5">
      <Label>{props.label}</Label>
      <Checkbox
        isSelected={updatedSelectAll}
        isIndeterminate={isIndeterminate}
        onChange={toggleSelectAll}
      >
        All
      </Checkbox>
      <Separator className="my-2" />
      <PresetableCheckboxGroupContext.Provider value={contextValue}>
        <CheckboxGroup value={value} onChange={setValue}>
          {props.children}
        </CheckboxGroup>
      </PresetableCheckboxGroupContext.Provider>
      <Separator className="my-2" />
      <CheckboxGroup
        label="Presets"
        // value={presetValues}
        value={updatedPresets}
        onChange={setPresetValues}
      >
        {presets &&
          presets.map((preset) => (
            <Checkbox value={preset.value}>{preset.label}</Checkbox>
          ))}
      </CheckboxGroup>
    </div>
  )
}

const _PresetableCheckboxGroup = React.forwardRef(PresetableCheckboxGroup)
export { _PresetableCheckboxGroup as PresetableCheckboxGroup }

export interface IPresetableCheckboxGroupItemProps extends CheckboxProps {}
function PresetableCheckboxGroupItem(props: IPresetableCheckboxGroupItemProps) {
  return <Checkbox {...props} />
}
export { PresetableCheckboxGroupItem }
