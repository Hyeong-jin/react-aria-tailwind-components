import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{g as m,e as p}from"./index-CKGhC0Va.js";import{B as c}from"./Button-Cj8flKvI.js";import{C as h}from"./Calendar-D4WnlXHf.js";import{a as f}from"./DateField-CBanjDty.js";import{D as v}from"./Dialog-Bh-sMmMj.js";import{L as y,F as b,D as V,a as g}from"./Field-D12m9y4t.js";import{P as q}from"./Popover-CRf8CYbi.js";import{f as D,c as w}from"./utils-D1ukYlRK.js";import{C as x}from"./calendar-DwVDWwnf.js";function r({label:l,labelAlign:s,labelPosition:t,description:n,errorMessage:o,...a}){const i=D();return e.jsxs(m,{...a,className:w(p(a.className,(u,d)=>i.base({labelAlign:s||t==="side"?"center":"start",labelPosition:t,...d,className:u})),"group"),children:[l&&e.jsx(y,{className:i.label({isRequired:a.isRequired,isDisabled:a.isDisabled}),children:l}),e.jsxs(b,{className:"w-auto min-w-[208px]",children:[e.jsx(f,{className:"min-w-[150px] flex-1 px-2 py-1.5 text-sm"}),e.jsx(c,{variant:"icon",className:"mr-1 w-6 rounded outline-offset-0",children:e.jsx(x,{"aria-hidden":!0,className:"h-4 w-4"})})]}),n&&e.jsx(V,{children:n}),e.jsx(g,{children:o}),e.jsx(q,{children:e.jsx(v,{children:e.jsx(h,{})})})]})}try{r.displayName="DatePicker",r.__docgenInfo={description:"",displayName:"DatePicker",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelAlign:{defaultValue:null,description:"",name:"labelAlign",required:!0,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"side"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: MappedDateValue<T>) => true | ValidationError"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: MappedDateValue<T>) => void"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},placeholderValue:{defaultValue:null,description:"A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.",name:"placeholderValue",required:!1,type:{name:"DateValue"}},hourCycle:{defaultValue:null,description:"Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.",name:"hourCycle",required:!1,type:{name:"enum",value:[{value:"12"},{value:"24"}]}},granularity:{defaultValue:null,description:'Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.',name:"granularity",required:!1,type:{name:"enum",value:[{value:'"day"'},{value:'"hour"'},{value:'"minute"'},{value:'"second"'}]}},hideTimeZone:{defaultValue:{value:"false"},description:"Whether to hide the time zone abbreviation.",name:"hideTimeZone",required:!1,type:{name:"boolean"}},shouldForceLeadingZeros:{defaultValue:null,description:`Whether to always show leading zeros in the month, day, and hour fields.
By default, this is determined by the user's locale.`,name:"shouldForceLeadingZeros",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},shouldCloseOnSelect:{defaultValue:{value:"true"},description:"Determines whether the date picker popover should close automatically when a date is selected.",name:"shouldCloseOnSelect",required:!1,type:{name:"boolean | (() => boolean)"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: DatePickerRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: DatePickerRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: DatePickerRenderProps) => CSSProperties)"}}}}}catch{}export{r as D};