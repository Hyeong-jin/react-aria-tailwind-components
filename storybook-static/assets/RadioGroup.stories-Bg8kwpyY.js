import{j as a}from"./jsx-runtime-CKrituN3.js";import{a as p}from"./utils-B75MjL0w.js";import{B as u}from"./Button-BZMr8mcK.js";import{R as d,a as s}from"./RadioGroup-Dg4MSsUB.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Field-9uzV38nj.js";const v={title:"FORMS/RadioGroup",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{options:["top","left","right","bottom"],control:"radio"}},args:{label:"Favorite sport",isDisabled:!1,isRequired:!1,description:"",children:a.jsxs(a.Fragment,{children:[a.jsx(s,{value:"soccer",children:"Soccer"}),a.jsx(s,{value:"baseball",children:"Baseball"}),a.jsx(s,{value:"basketball",children:"Basketball"})]})}},r={args:{}},e=m=>a.jsxs(p,{className:"flex flex-col items-start gap-2",children:[a.jsx(d,{...m}),a.jsx(u,{type:"submit",variant:"secondary",children:"Submit"})]});e.args={isRequired:!0};var o,t,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,n,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <RadioGroup {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const B=["Default","Validation"];export{r as Default,e as Validation,B as __namedExportsOrder,v as default};
