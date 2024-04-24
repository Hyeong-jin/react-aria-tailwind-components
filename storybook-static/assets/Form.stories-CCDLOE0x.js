import{j as e}from"./jsx-runtime-CKrituN3.js";import{B as r}from"./Button-BZMr8mcK.js";import{D as n}from"./DateField-Tu-CF-xt.js";import{F as m}from"./Form-BnX3UpLn.js";import{T as l}from"./TextField-Bc219LKd.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-B75MjL0w.js";import"./index-BtM5VmRH.js";import"./Field-9uzV38nj.js";const B={title:"FORMS/Form",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t=o=>e.jsxs(m,{...o,children:[e.jsx(l,{label:"Email",name:"email",type:"email",isRequired:!0}),e.jsx(n,{label:"Birth date",isRequired:!0}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{type:"submit",children:"Submit"}),e.jsx(r,{type:"reset",variant:"secondary",children:"Reset"})]})]});var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const R=["Example"];export{t as Example,R as __namedExportsOrder,B as default};
