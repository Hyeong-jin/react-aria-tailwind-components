import{j as a}from"./jsx-runtime-Du8NFWEI.js";import{v as l}from"./index-CKGhC0Va.js";import{B as o}from"./Button-Cj8flKvI.js";import{C as p}from"./Checkbox-CAwPfIVz.js";import{T as d,S as s}from"./Toolbar-DAjerEWu.js";import{T as n}from"./ToggleButton-BPc5Sgbi.js";import{c as r}from"./createLucideIcon-Dov-y89W.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./Field-D12m9y4t.js";import"./check-D2t0c9Mn.js";const x=r("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]),u=r("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]),y=r("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]),S={title:"CONTENT/Toolbar",component:d,parameters:{layout:"centered"},tags:["autodocs"]},e=t=>a.jsxs(d,{"aria-label":"Text formatting",...t,children:[a.jsxs(l,{"aria-label":"Style",className:"contents",children:[a.jsx(n,{"aria-label":"Bold",className:"p-2.5",children:a.jsx(x,{className:"h-4 w-4"})}),a.jsx(n,{"aria-label":"Italic",className:"p-2.5",children:a.jsx(u,{className:"h-4 w-4"})}),a.jsx(n,{"aria-label":"Underline",className:"p-2.5",children:a.jsx(y,{className:"h-4 w-4"})})]}),a.jsx(s,{orientation:t.orientation==="vertical"?"horizontal":"vertical"}),a.jsxs(l,{"aria-label":"Clipboard",className:"contents",children:[a.jsx(o,{variant:"secondary",children:"Copy"}),a.jsx(o,{variant:"secondary",children:"Paste"}),a.jsx(o,{variant:"secondary",children:"Cut"})]}),a.jsx(s,{orientation:t.orientation==="vertical"?"horizontal":"vertical"}),a.jsx(p,{children:"Night Mode"})]});var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => <Toolbar aria-label="Text formatting" {...args}>
    <Group aria-label="Style" className="contents">
      <ToggleButton aria-label="Bold" className="p-2.5">
        <BoldIcon className="h-4 w-4" />
      </ToggleButton>
      <ToggleButton aria-label="Italic" className="p-2.5">
        <ItalicIcon className="h-4 w-4" />
      </ToggleButton>
      <ToggleButton aria-label="Underline" className="p-2.5">
        <UnderlineIcon className="h-4 w-4" />
      </ToggleButton>
    </Group>
    <Separator orientation={args.orientation === 'vertical' ? 'horizontal' : 'vertical'} />
    <Group aria-label="Clipboard" className="contents">
      <Button variant="secondary">Copy</Button>
      <Button variant="secondary">Paste</Button>
      <Button variant="secondary">Cut</Button>
    </Group>
    <Separator orientation={args.orientation === 'vertical' ? 'horizontal' : 'vertical'} />
    <Checkbox>Night Mode</Checkbox>
  </Toolbar>`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const w=["Example"];export{e as Example,w as __namedExportsOrder,S as default};
