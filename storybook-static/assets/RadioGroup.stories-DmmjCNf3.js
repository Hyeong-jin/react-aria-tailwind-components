import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{a as m}from"./index-CKGhC0Va.js";import{B as u}from"./Button-Cj8flKvI.js";import{R as d,a as s}from"./RadioGroup-BWA5_P2Q.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./Field-D12m9y4t.js";const v={title:"FORMS/RadioGroup",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelAlign:{options:["start","center","end"],control:"radio"},labelPosition:{options:["top","side"],control:"radio"}},args:{label:"Favorite sport",isDisabled:!1,isRequired:!1,description:"Select your favorite sport.",children:a.jsxs(a.Fragment,{children:[a.jsx(s,{value:"soccer",children:"Soccer"}),a.jsx(s,{value:"baseball",children:"Baseball"}),a.jsx(s,{value:"basketball",children:"Basketball"})]})}},r={args:{}},e=p=>a.jsxs(m,{className:"flex flex-col items-start gap-2",children:[a.jsx(d,{...p}),a.jsx(u,{type:"submit",variant:"secondary",children:"Submit"})]});e.args={isRequired:!0};var o,t,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <RadioGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const S=["Default","Validation"];export{r as Default,e as Validation,S as __namedExportsOrder,v as default};
