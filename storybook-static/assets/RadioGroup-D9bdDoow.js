import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{i,L as m,e as p,M as h}from"./index-CKGhC0Va.js";import{L as f,D as v,a as b}from"./Field-COFLQSMM.js";import{f as y,c as g,a as V}from"./utils-D1ukYlRK.js";const q=i({base:"flex gap-2",variants:{orientation:{horizontal:"gap-4 flex-row",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}});function t({labelAlign:l,labelPosition:n,orientation:s,...e}){const{base:o,label:d}=y();return a.jsxs(m,{...e,className:p(e.className,(u,c)=>o({labelAlign:l||"start",labelPosition:n||"top",...c,className:u})),children:[a.jsx(f,{className:d({isRequired:e.isRequired,isInvalid:e.isInvalid,isDisabled:e.isDisabled}),children:e.label}),a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsx("div",{className:q({orientation:s}),children:e.children}),e.description&&a.jsx(v,{children:e.description}),a.jsx(b,{children:e.errorMessage})]})]})}const x=i({extend:V,base:"w-5 h-5 outline-offset-2 rounded-full border-2 bg-white dark:bg-zinc-900 transition-all",variants:{isSelected:{false:"border-gray-400 dark:border-zinc-400 group-pressed:border-gray-500 dark:group-pressed:border-zinc-300",true:"border-[7px] border-gray-700 dark:border-slate-300 forced-colors:!border-[Highlight] group-pressed:border-gray-800 dark:group-pressed:border-slate-200"},isInvalid:{true:"border-red-700 dark:border-red-600 group-pressed:border-red-800 dark:group-pressed:border-red-700 forced-colors:!border-[Mark]"},isDisabled:{true:"border-gray-200 dark:border-zinc-700 forced-colors:!border-[GrayText]"}}});function r(l){return a.jsx(h,{...l,className:g(l.className,"group flex items-center gap-2 text-sm text-gray-800 transition disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText]"),children:n=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:x(n)}),l.children]})})}try{t.displayName="RadioGroup",t.__docgenInfo={description:"",displayName:"RadioGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelAlign:{defaultValue:null,description:"",name:"labelAlign",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},labelPosition:{defaultValue:null,description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"side"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string | ((validation: ValidationResult) => string)"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"Whether the input is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},validationBehavior:{defaultValue:{value:"'native'"},description:`Whether to use native HTML form validation to prevent form submission
when the value is missing or invalid, or mark the field as required
or invalid via ARIA.`,name:"validationBehavior",required:!1,type:{name:"enum",value:[{value:'"native"'},{value:'"aria"'}]}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: string) => void"}},isReadOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"isReadOnly",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",required:!1,type:{name:"string"}},isRequired:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"isRequired",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the input value is invalid.",name:"isInvalid",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:'A function that returns an error message if a given value is invalid.\nValidation errors are displayed to the user when the form is submitted\nif `validationBehavior="native"`. For realtime validation, use the `isInvalid`\nprop instead.',name:"validate",required:!1,type:{name:"(value: string) => true | ValidationError"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: RadioGroupRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: RadioGroupRenderProps) => CSSProperties)"}},orientation:{defaultValue:{value:"'vertical'"},description:"The axis the Radio Button(s) should align with.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}try{r.displayName="Radio",r.__docgenInfo={description:"",displayName:"Radio",props:{value:{defaultValue:null,description:`The value of the radio button, used when submitting an HTML form.
See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Value).`,name:"value",required:!0,type:{name:"string"}},isDisabled:{defaultValue:null,description:`Whether the radio button is disabled or not.
Shows that a selection exists, but is not available in that circumstance.`,name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",required:!1,type:{name:"(e: FocusEvent<Element, Element>) => void"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the element's focus status changes.",name:"onFocusChange",required:!1,type:{name:"(isFocused: boolean) => void"}},onKeyDown:{defaultValue:null,description:"Handler that is called when a key is pressed.",name:"onKeyDown",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onKeyUp:{defaultValue:null,description:"Handler that is called when a key is released.",name:"onKeyUp",required:!1,type:{name:"(e: KeyboardEvent) => void"}},onHoverStart:{defaultValue:null,description:"Handler that is called when a hover interaction starts.",name:"onHoverStart",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverEnd:{defaultValue:null,description:"Handler that is called when a hover interaction ends.",name:"onHoverEnd",required:!1,type:{name:"(e: HoverEvent) => void"}},onHoverChange:{defaultValue:null,description:"Handler that is called when the hover state changes.",name:"onHoverChange",required:!1,type:{name:"(isHovering: boolean) => void"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: RadioRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: RadioRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: RadioRenderProps) => CSSProperties)"}}}}}catch{}export{t as R,r as a};
