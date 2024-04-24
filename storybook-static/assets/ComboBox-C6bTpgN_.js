import{j as e}from"./jsx-runtime-CKrituN3.js";import{i as f,f as r,d as y,e as v,g as b}from"./utils-B75MjL0w.js";import{B as g}from"./Button-CeeEdyyX.js";import{L as V,F as q,I as x,D as w,a as S}from"./Field-DIzNbEPX.js";import{D as T,a as C}from"./ListBox-B-jQA-LD.js";import{P as I}from"./Popover-DQI4vFc7.js";import{C as N}from"./chevron-down-DbyoNoN6.js";f({extend:r});function n({label:t,labelPosition:s,description:a,errorMessage:u,children:d,items:m,...l}){const{base:c,label:B}=r({labelPosition:s,hasDescription:!!a});return e.jsxs(y,{...l,className:v(l.className,(p,h)=>c({...h,className:p})),children:[e.jsx(V,{children:t}),e.jsxs("div",{className:"flex flex-1 flex-col gap-1",children:[e.jsxs(q,{children:[e.jsx(x,{}),e.jsx(g,{variant:"icon",className:"mr-1 w-6 rounded outline-offset-0 ",children:e.jsx(N,{"aria-hidden":!0,className:"h-4 w-4"})})]}),a&&e.jsx(w,{children:a}),e.jsx(S,{children:u})]}),e.jsx(I,{className:"w-[--trigger-width]",children:e.jsx(b,{items:m,className:"max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]",children:d})})]})}function i(t){return e.jsx(T,{...t})}function o(t){return e.jsx(C,{...t})}try{n.displayName="ComboBox",n.__docgenInfo={description:"",displayName:"ComboBox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'},{value:'"bottom"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},disabledKeys:{defaultValue:null,description:"The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},items:{defaultValue:null,description:"The list of ComboBox items (controlled).",name:"items",required:!1,type:{name:"Iterable<T>"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ComboBoxRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ComboBoxRenderProps) => CSSProperties)"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: ComboBoxValidationValue) => true | ValidationError"}},selectedKey:{defaultValue:null,description:"The currently selected key in the collection (controlled).",name:"selectedKey",required:!1,type:{name:"Key"}},defaultSelectedKey:{defaultValue:null,description:"The initial selected key in the collection (uncontrolled).",name:"defaultSelectedKey",required:!1,type:{name:"Key"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"(key: Key) => any"}},shouldFocusWrap:{defaultValue:null,description:"Whether keyboard navigation is circular.",name:"shouldFocusWrap",required:!1,type:{name:"boolean"}},defaultItems:{defaultValue:null,description:"The list of ComboBox items (uncontrolled).",name:"defaultItems",required:!1,type:{name:"Iterable<T>"}},onOpenChange:{defaultValue:null,description:"Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean, menuTrigger?: MenuTriggerAction) => void"}},inputValue:{defaultValue:null,description:"The value of the ComboBox input (controlled).",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"The default value of the ComboBox input (uncontrolled).",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"Handler that is called when the ComboBox input value changes.",name:"onInputChange",required:!1,type:{name:"(value: string) => void"}},allowsCustomValue:{defaultValue:null,description:"Whether the ComboBox allows a non-item matching input value to be set.",name:"allowsCustomValue",required:!1,type:{name:"boolean"}},menuTrigger:{defaultValue:{value:"'input'"},description:"The interaction required to display the ComboBox menu.",name:"menuTrigger",required:!1,type:{name:"enum",value:[{value:'"focus"'},{value:'"input"'},{value:'"manual"'}]}},defaultFilter:{defaultValue:null,description:"The filter function used to determine if a option should be included in the combo box list.",name:"defaultFilter",required:!1,type:{name:"(textValue: string, inputValue: string) => boolean"}},formValue:{defaultValue:{value:"'key'"},description:"Whether the text or key of the selected item is submitted as part of an HTML form.\nWhen `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.",name:"formValue",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"key"'}]}}}}}catch{}try{i.displayName="ComboBoxItem",i.__docgenInfo={description:"",displayName:"ComboBoxItem",props:{value:{defaultValue:null,description:"The object value that this item represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},textValue:{defaultValue:null,description:"A string representation of the item's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ListBoxItemRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ListBoxItemRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ListBoxItemRenderProps) => CSSProperties)"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}}}}}catch{}try{o.displayName="ComboBoxSection",o.__docgenInfo={description:"",displayName:"ComboBoxSection",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The object value that this section represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},children:{defaultValue:null,description:"Static child items or a function to render children.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the item cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},items:{defaultValue:null,description:"Item objects in the section.",name:"items",required:!1,type:{name:"Iterable<T>"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{n as C,i as a,o as b};
