import{j as a,ag as c,l as m,a as n,F as p}from"./utils-2ykXyvw8.js";import{L as f}from"./Field-BP2ue7Hu.js";import{c as h}from"./createLucideIcon-DdzWpsi8.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const y=h("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function r({label:e,...o}){return a(c,{...o,className:m(o.className,"flex flex-col gap-1"),children:({percentage:l,valueText:u})=>n(p,{children:[n("div",{className:"flex justify-between gap-2",children:[a(f,{children:e}),n("span",{className:`text-sm ${l>=80?"text-red-600 dark:text-red-500":"text-gray-600 dark:text-zinc-400"}`,children:[l>=80&&a(y,{"aria-label":"Alert",className:"inline-block w-4 h-4 align-text-bottom"})," "+u]})]}),a("div",{className:"w-64 h-2 rounded-full bg-gray-300 dark:bg-zinc-700 outline outline-1 -outline-offset-1 outline-transparent relative",children:a("div",{className:`absolute top-0 left-0 h-full rounded-full ${b(l)} forced-colors:bg-[Highlight]`,style:{width:l+"%"}})})]})})}function b(e){return e<70?"bg-green-600":e<80?"bg-orange-500":"bg-red-600"}try{r.displayName="Meter",r.__docgenInfo={description:"",displayName:"Meter",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},formatOptions:{defaultValue:{value:"{style: 'percent'}"},description:"The display format of the value label.",name:"formatOptions",required:!1,type:{name:"NumberFormatOptions"}},value:{defaultValue:{value:"0"},description:"The current value (controlled).",name:"value",required:!1,type:{name:"number"}},minValue:{defaultValue:{value:"0"},description:"The smallest value allowed for the input.",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"100"},description:"The largest value allowed for the input.",name:"maxValue",required:!1,type:{name:"number"}},valueLabel:{defaultValue:null,description:"The content to display as the value's label (e.g. 1 of 4).",name:"valueLabel",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: MeterRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: MeterRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: MeterRenderProps) => CSSProperties)"}}}}}catch{}const M={component:r,parameters:{layout:"centered"},tags:["autodocs"]},t=e=>a(r,{...e});t.args={label:"Storage space",value:80};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"(args: any) => <Meter {...args} />",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["Example"];export{t as Example,S as __namedExportsOrder,M as default};
