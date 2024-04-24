import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as f}from"./utils-B75MjL0w.js";import{B as g}from"./Button-BZMr8mcK.js";import{T as o}from"./TextField-Bc219LKd.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Field-9uzV38nj.js";const N={title:"FORMS/TextField",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{options:["top","left","right","bottom"],control:"radio"}},args:{label:"Field Name"}},s=t=>e.jsx(o,{...t}),a=t=>e.jsxs(f,{className:"flex flex-col items-start gap-2",children:[e.jsx(o,{...t}),e.jsx(g,{type:"submit",variant:"secondary",children:"Submit"})]});a.args={isRequired:!0};const r=t=>e.jsxs(f,{className:"flex flex-col items-start gap-2",children:[e.jsx(o,{...t}),e.jsx(g,{type:"submit",variant:"secondary",children:"Submit"})]});r.args={labelPosition:"left",isRequired:!0};var i,m,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"(args: any) => <TextField {...args} />",...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <TextField {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const v=["Example","Validation","LabelLeft"];export{s as Example,r as LabelLeft,a as Validation,v as __namedExportsOrder,N as default};
