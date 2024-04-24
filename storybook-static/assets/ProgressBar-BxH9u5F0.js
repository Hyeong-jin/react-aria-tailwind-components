import{j as e}from"./jsx-runtime-CKrituN3.js";import{N as o,j as i}from"./utils-B75MjL0w.js";import{L as d}from"./Field-DIzNbEPX.js";function r({label:a,...l}){return e.jsx(o,{...l,className:i(l.className,"flex flex-col gap-1"),children:({percentage:n,valueText:s,isIndeterminate:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsx(d,{children:a}),e.jsx("span",{className:"text-sm text-gray-600 dark:text-zinc-400",children:s})]}),e.jsx("div",{className:"relative h-2 w-64 overflow-hidden rounded-full bg-gray-300 outline outline-1 -outline-offset-1 outline-transparent dark:bg-zinc-700",children:e.jsx("div",{className:`absolute top-0 h-full rounded-full bg-blue-600 dark:bg-blue-500 forced-colors:bg-[Highlight] ${t?"left-full duration-1000 ease-out animate-in slide-out-to-right-full repeat-infinite [--tw-enter-translate-x:calc(-16rem-100%)]":"left-0"}`,style:{width:(t?40:n)+"%"}})})]})})}try{r.displayName="ProgressBar",r.__docgenInfo={description:"",displayName:"ProgressBar",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},minValue:{defaultValue:{value:"0"},description:"The smallest value allowed for the input.",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The largest value allowed for the input.",name:"maxValue",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},isIndeterminate:{defaultValue:null,description:"Whether presentation is indeterminate when progress isn't known.",name:"isIndeterminate",required:!1,type:{name:"boolean"}},formatOptions:{defaultValue:{value:"{style: 'percent'}"},description:"The display format of the value label.",name:"formatOptions",required:!1,type:{name:"NumberFormatOptions"}},valueLabel:{defaultValue:null,description:"The content to display as the value's label (e.g. 1 of 4).",name:"valueLabel",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ProgressBarRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ProgressBarRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ProgressBarRenderProps) => CSSProperties)"}}}}}catch{}export{r as P};
