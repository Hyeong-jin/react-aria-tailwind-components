import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{$ as l,ab as p}from"./index-CKGhC0Va.js";import{B as n}from"./Button-Cj8flKvI.js";import{D as i}from"./Dialog-Bh-sMmMj.js";import{P as t}from"./Popover-CRf8CYbi.js";import{c as m}from"./createLucideIcon-Dov-y89W.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";const x=m("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),N={title:"OVERLAYS/Popover",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{showArrow:!0}},a=c=>e.jsxs(l,{children:[e.jsx(n,{variant:"icon","aria-label":"Help",children:e.jsx(x,{className:"h-4 w-4"})}),e.jsx(t,{...c,className:"max-w-[250px]",children:e.jsxs(i,{children:[e.jsx(p,{slot:"title",className:"mb-2 text-lg font-semibold",children:"Help"}),e.jsx("p",{className:"text-sm",children:"For help accessing your account, please contact support."})]})})]});var o,r,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => <DialogTrigger>
    <Button variant="icon" aria-label="Help">
      <HelpCircle className="h-4 w-4" />
    </Button>
    <Popover {...args} className="max-w-[250px]">
      <Dialog>
        <Heading slot="title" className="mb-2 text-lg font-semibold">
          Help
        </Heading>
        <p className="text-sm">
          For help accessing your account, please contact support.
        </p>
      </Dialog>
    </Popover>
  </DialogTrigger>`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const $=["Example"];export{a as Example,$ as __namedExportsOrder,N as default};
