import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{a as m}from"./index-CKGhC0Va.js";import{B as x}from"./Button-Cj8flKvI.js";import{_ as d,C as r}from"./Checkbox-CAwPfIVz.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./Field-D12m9y4t.js";import"./createLucideIcon-Dov-y89W.js";import"./check-D2t0c9Mn.js";const F={title:"FORMS/PresetableCheckboxGroup",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{options:["vertical","horizontal"],control:"radio"},labelPosition:{options:["top","side"],control:"radio"},labelAlign:{options:["start","center","end"],control:"radio"}},args:{label:"Cities",isDisabled:!1,isRequired:!1,description:"",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{value:"seoul",children:"Seoul"}),e.jsx(r,{value:"incheon",children:"Incheon"}),e.jsx(r,{value:"sf",children:"San Francisco"}),e.jsx(r,{value:"ny",children:"New York"}),e.jsx(r,{value:"sydney",children:"Sydney"}),e.jsx(r,{value:"london",children:"London"}),e.jsx(r,{value:"tokyo",children:"Tokyo"}),e.jsx(r,{value:"paris",children:"Paris"}),e.jsx(r,{value:"leon",children:"Leon"})]})}},u=[{label:"Korea",value:"incheon, seoul"},{label:"Austrailia",value:"sydney"},{label:"USA",value:"sf,ny"},{label:"United Kingdom",value:"london"},{label:"France",value:"paris, leon"}],a={args:{presets:u}},o=p=>e.jsxs(m,{className:"flex flex-col items-start gap-2",children:[e.jsx(d,{...p}),e.jsx(x,{type:"submit",variant:"secondary",children:"Submit"})]});o.args={isRequired:!0,presets:u};var s,t,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    presets
  }
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var l,i,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <PresetableCheckboxGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const P=["Default","Validation"];export{a as Default,o as Validation,P as __namedExportsOrder,F as default};
