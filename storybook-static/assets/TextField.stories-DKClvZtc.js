import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{a as g}from"./index-CKGhC0Va.js";import{B as f}from"./Button-Cj8flKvI.js";import{T as o}from"./TextField-C_esAF8L.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./Field-D12m9y4t.js";const h={title:"FORMS/TextField",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{options:["top","side"],control:"radio"},labelAlign:{options:["start","center","end"],control:"radio"}},args:{label:"Field Name"}},t=a=>e.jsx(o,{...a}),r=a=>e.jsxs(g,{className:"flex flex-col gap-2",children:[e.jsx(o,{...a}),e.jsx(f,{type:"submit",variant:"secondary",children:"Submit"})]});r.args={isRequired:!0};const s=a=>e.jsxs(g,{className:"flex flex-col gap-2",children:[e.jsx(o,{...a}),e.jsx(f,{type:"submit",variant:"secondary",children:"Submit"})]});s.args={labelPosition:"side",isRequired:!0};var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"(args: any) => <TextField {...args} />",...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col gap-2">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col gap-2">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const v=["Example","Validation","LabelPosition_Side"];export{t as Example,s as LabelPosition_Side,r as Validation,v as __namedExportsOrder,h as default};
