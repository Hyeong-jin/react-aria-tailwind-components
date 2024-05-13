import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{B as r}from"./Button-Cj8flKvI.js";import{D as n}from"./DateField-CBanjDty.js";import{F as m}from"./Form-DQI0t-pJ.js";import{T as l}from"./TextField-C_esAF8L.js";import"./index-Dl6G-zuu.js";import"./index-CKGhC0Va.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./Field-D12m9y4t.js";const B={title:"FORMS/Form",component:m,parameters:{layout:"centered"},tags:["autodocs"]},t=o=>e.jsxs(m,{...o,children:[e.jsx(l,{label:"Email",name:"email",type:"email",isRequired:!0}),e.jsx(n,{label:"Birth date",isRequired:!0}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{type:"submit",children:"Submit"}),e.jsx(r,{type:"reset",variant:"secondary",children:"Reset"})]})]});var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const R=["Example"];export{t as Example,R as __namedExportsOrder,B as default};
