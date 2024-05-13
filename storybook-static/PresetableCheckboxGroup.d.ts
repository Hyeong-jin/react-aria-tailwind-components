import { CheckboxGroupProps } from './Checkbox';
import { default as React } from '../node_modules/react';

export type TPreset = {
    label: string;
    value: string;
};
type TPresetableCheckboxGroupState = {
    addItem?: (item: string) => void;
};
export declare const PresetableCheckboxGroupContext: React.Context<TPresetableCheckboxGroupState>;
export declare const usePresetableCheckboxGroup: () => TPresetableCheckboxGroupState;
export interface PresetableCheckboxGroupProps extends CheckboxGroupProps {
    presets: TPreset[];
}
declare const _PresetableCheckboxGroup: React.ForwardRefExoticComponent<PresetableCheckboxGroupProps & React.RefAttributes<unknown>>;
export { _PresetableCheckboxGroup as PresetableCheckboxGroup };
