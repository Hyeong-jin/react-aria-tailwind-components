import{j as o}from"./jsx-runtime-CKrituN3.js";import{a as j}from"./utils-B75MjL0w.js";import{B as f}from"./Button-CeeEdyyX.js";import{C as s,a as e,b as n}from"./ComboBox-C6bTpgN_.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./Field-DIzNbEPX.js";import"./ListBox-B-jQA-LD.js";import"./check-yUcLlJWT.js";import"./createLucideIcon-DdzWpsi8.js";import"./Popover-DQI4vFc7.js";import"./chevron-down-DbyoNoN6.js";const L={title:"PICKERS/ComboBox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{labelPosition:{options:["top","left","right","bottom"],control:"radio"}},args:{label:"Ice cream flavor"}},a=t=>o.jsxs(s,{...t,children:[o.jsx(e,{children:"Chocolate"}),o.jsx(e,{id:"mint",children:"Mint"}),o.jsx(e,{children:"Strawberry"}),o.jsx(e,{children:"Vanilla"})]}),r=t=>o.jsx(a,{...t});r.args={disabledKeys:["mint"]};const m=t=>o.jsxs(s,{...t,children:[o.jsxs(n,{title:"Fruit",children:[o.jsx(e,{id:"Apple",children:"Apple"}),o.jsx(e,{id:"Banana",children:"Banana"}),o.jsx(e,{id:"Orange",children:"Orange"}),o.jsx(e,{id:"Honeydew",children:"Honeydew"}),o.jsx(e,{id:"Grapes",children:"Grapes"}),o.jsx(e,{id:"Watermelon",children:"Watermelon"}),o.jsx(e,{id:"Cantaloupe",children:"Cantaloupe"}),o.jsx(e,{id:"Pear",children:"Pear"})]}),o.jsxs(n,{title:"Vegetable",children:[o.jsx(e,{id:"Cabbage",children:"Cabbage"}),o.jsx(e,{id:"Broccoli",children:"Broccoli"}),o.jsx(e,{id:"Carrots",children:"Carrots"}),o.jsx(e,{id:"Lettuce",children:"Lettuce"}),o.jsx(e,{id:"Spinach",children:"Spinach"}),o.jsx(e,{id:"Bok Choy",children:"Bok Choy"}),o.jsx(e,{id:"Cauliflower",children:"Cauliflower"}),o.jsx(e,{id:"Potatoes",children:"Potatoes"})]})]});m.args={label:"Preferred fruit or vegetable"};const i=t=>o.jsxs(j,{className:"flex flex-col items-start gap-2",children:[o.jsx(a,{...t}),o.jsx(f,{type:"submit",variant:"secondary",children:"Submit"})]});i.args={isRequired:!0};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: any) => <ComboBox {...args}>
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem id="mint">Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var x,b,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:"(args: any) => <Example {...args} />",...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var B,p,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(args: any) => <ComboBox {...args}>
    <ComboBoxSection title="Fruit">
      <ComboBoxItem id="Apple">Apple</ComboBoxItem>
      <ComboBoxItem id="Banana">Banana</ComboBoxItem>
      <ComboBoxItem id="Orange">Orange</ComboBoxItem>
      <ComboBoxItem id="Honeydew">Honeydew</ComboBoxItem>
      <ComboBoxItem id="Grapes">Grapes</ComboBoxItem>
      <ComboBoxItem id="Watermelon">Watermelon</ComboBoxItem>
      <ComboBoxItem id="Cantaloupe">Cantaloupe</ComboBoxItem>
      <ComboBoxItem id="Pear">Pear</ComboBoxItem>
    </ComboBoxSection>
    <ComboBoxSection title="Vegetable">
      <ComboBoxItem id="Cabbage">Cabbage</ComboBoxItem>
      <ComboBoxItem id="Broccoli">Broccoli</ComboBoxItem>
      <ComboBoxItem id="Carrots">Carrots</ComboBoxItem>
      <ComboBoxItem id="Lettuce">Lettuce</ComboBoxItem>
      <ComboBoxItem id="Spinach">Spinach</ComboBoxItem>
      <ComboBoxItem id="Bok Choy">Bok Choy</ComboBoxItem>
      <ComboBoxItem id="Cauliflower">Cauliflower</ComboBoxItem>
      <ComboBoxItem id="Potatoes">Potatoes</ComboBoxItem>
    </ComboBoxSection>
  </ComboBox>`,...(I=(p=m.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => <Form className="flex flex-col items-start gap-2">
    <Example {...args} />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const W=["Example","DisabledItems","Sections","Validation"];export{r as DisabledItems,a as Example,m as Sections,i as Validation,W as __namedExportsOrder,L as default};
