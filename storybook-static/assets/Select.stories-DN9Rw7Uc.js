import{j as e}from"./jsx-runtime-CKrituN3.js";import{a as C}from"./utils-B75MjL0w.js";import{B as f}from"./Button-BZMr8mcK.js";import{S as o,a as t,b as s}from"./Select-DLEtW2l0.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Field-9uzV38nj.js";import"./ListBox-C-mXKWKs.js";import"./check-yUcLlJWT.js";import"./createLucideIcon-DdzWpsi8.js";import"./Popover-CSv0LJKy.js";import"./chevron-down-DbyoNoN6.js";const L={title:"PICKERS/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{options:["top","left","right","bottom"],control:"radio"}},args:{label:"Ice cream flavor"}},r=a=>e.jsxs(o,{...a,children:[e.jsx(t,{children:"Chocolate"}),e.jsx(t,{id:"mint",children:"Mint"}),e.jsx(t,{children:"Strawberry"}),e.jsx(t,{children:"Vanilla"})]}),l=a=>e.jsx(r,{...a});l.args={disabledKeys:["mint"]};const c=a=>e.jsxs(o,{...a,children:[e.jsxs(s,{title:"Fruit",children:[e.jsx(t,{id:"Apple",children:"Apple"}),e.jsx(t,{id:"Banana",children:"Banana"}),e.jsx(t,{id:"Orange",children:"Orange"}),e.jsx(t,{id:"Honeydew",children:"Honeydew"}),e.jsx(t,{id:"Grapes",children:"Grapes"}),e.jsx(t,{id:"Watermelon",children:"Watermelon"}),e.jsx(t,{id:"Cantaloupe",children:"Cantaloupe"}),e.jsx(t,{id:"Pear",children:"Pear"})]}),e.jsxs(s,{title:"Vegetable",children:[e.jsx(t,{id:"Cabbage",children:"Cabbage"}),e.jsx(t,{id:"Broccoli",children:"Broccoli"}),e.jsx(t,{id:"Carrots",children:"Carrots"}),e.jsx(t,{id:"Lettuce",children:"Lettuce"}),e.jsx(t,{id:"Spinach",children:"Spinach"}),e.jsx(t,{id:"Bok Choy",children:"Bok Choy"}),e.jsx(t,{id:"Cauliflower",children:"Cauliflower"}),e.jsx(t,{id:"Potatoes",children:"Potatoes"})]})]});c.args={label:"Preferred fruit or vegetable"};const i=a=>e.jsxs(C,{className:"flex flex-col items-start gap-2",children:[e.jsx(r,{...a}),e.jsx(f,{type:"submit",variant:"secondary",children:"Submit"})]});i.args={isRequired:!0};var n,m,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => <Select {...args}>
    <SelectItem>Chocolate</SelectItem>
    <SelectItem id="mint">Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
  </Select>`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var S,p,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:"(args: any) => <Example {...args} />",...(I=(p=l.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var x,u,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: any) => <Select {...args}>
    <SelectSection title="Fruit">
      <SelectItem id="Apple">Apple</SelectItem>
      <SelectItem id="Banana">Banana</SelectItem>
      <SelectItem id="Orange">Orange</SelectItem>
      <SelectItem id="Honeydew">Honeydew</SelectItem>
      <SelectItem id="Grapes">Grapes</SelectItem>
      <SelectItem id="Watermelon">Watermelon</SelectItem>
      <SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
      <SelectItem id="Pear">Pear</SelectItem>
    </SelectSection>
    <SelectSection title="Vegetable">
      <SelectItem id="Cabbage">Cabbage</SelectItem>
      <SelectItem id="Broccoli">Broccoli</SelectItem>
      <SelectItem id="Carrots">Carrots</SelectItem>
      <SelectItem id="Lettuce">Lettuce</SelectItem>
      <SelectItem id="Spinach">Spinach</SelectItem>
      <SelectItem id="Bok Choy">Bok Choy</SelectItem>
      <SelectItem id="Cauliflower">Cauliflower</SelectItem>
      <SelectItem id="Potatoes">Potatoes</SelectItem>
    </SelectSection>
  </Select>`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,j,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <Example {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const W=["Example","DisabledItems","Sections","Validation"];export{l as DisabledItems,r as Example,c as Sections,i as Validation,W as __namedExportsOrder,L as default};
