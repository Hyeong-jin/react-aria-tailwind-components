import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{aq as r}from"./index-CKGhC0Va.js";import{B as s}from"./Button-Cj8flKvI.js";import{T as o}from"./Tooltip-CeBklrBN.js";import{c as p}from"./createLucideIcon-Dov-y89W.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";const l=p("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]),m=p("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]),j={title:"OVERLAYS/Tooltip",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e=t=>a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(r,{children:[a.jsx(s,{variant:"secondary",className:"px-2",children:a.jsx(m,{className:"h-5 w-5"})}),a.jsx(o,{...t,children:"Save"})]}),a.jsxs(r,{children:[a.jsx(s,{variant:"secondary",className:"px-2",children:a.jsx(l,{className:"h-5 w-5"})}),a.jsx(o,{...t,children:"Print"})]})]});var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => <div className="flex gap-2">
    <TooltipTrigger>
      <Button variant="secondary" className="px-2">
        <SaveIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Save</Tooltip>
    </TooltipTrigger>
    <TooltipTrigger>
      <Button variant="secondary" className="px-2">
        <PrinterIcon className="h-5 w-5" />
      </Button>
      <Tooltip {...args}>Print</Tooltip>
    </TooltipTrigger>
  </div>`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const f=["Example"];export{e as Example,f as __namedExportsOrder,j as default};
