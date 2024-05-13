import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{a6 as g}from"./index-CKGhC0Va.js";import{B as h}from"./Button-Cj8flKvI.js";import{M as o,a as n,b as i,c}from"./Menu-Cy1roZSD.js";import{c as y}from"./createLucideIcon-Dov-y89W.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./utils-D1ukYlRK.js";import"./ListBox-D_1Vepqf.js";import"./check-D2t0c9Mn.js";import"./Popover-CRf8CYbi.js";const S=y("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),A={title:"COLLECTIONS/Menu",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r=s=>e.jsxs(g,{children:[e.jsx(h,{variant:"secondary",className:"px-2",children:e.jsx(S,{className:"h-5 w-5"})}),e.jsxs(o,{...s,children:[e.jsx(n,{id:"new",children:"New…"}),e.jsx(n,{id:"open",children:"Open…"}),e.jsx(i,{}),e.jsx(n,{id:"save",children:"Save"}),e.jsx(n,{id:"saveAs",children:"Save as…"}),e.jsx(i,{}),e.jsx(n,{id:"print",children:"Print…"})]})]}),t=s=>e.jsx(r,{...s});t.args={disabledKeys:["save"]};const a=s=>e.jsxs(g,{children:[e.jsx(h,{variant:"secondary",className:"px-2",children:e.jsx(S,{className:"h-5 w-5"})}),e.jsxs(o,{...s,children:[e.jsxs(c,{title:"Your Content",children:[e.jsx(n,{id:"repos",children:"Repositories"}),e.jsx(n,{id:"projects",children:"Projects"}),e.jsx(n,{id:"organizations",children:"Organizations"}),e.jsx(n,{id:"stars",children:"Stars"}),e.jsx(n,{id:"sponsors",children:"Sponsors"})]}),e.jsxs(c,{title:"Your Account",children:[e.jsx(n,{id:"profile",children:"Profile"}),e.jsx(n,{id:"status",children:"Set status"}),e.jsx(n,{id:"sign-out",children:"Sign out"})]})]})]});var u,m,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => <MenuTrigger>
    <Button variant="secondary" className="px-2">
      <MoreHorizontal className="h-5 w-5" />
    </Button>
    <Menu {...args}>
      <MenuItem id="new">New…</MenuItem>
      <MenuItem id="open">Open…</MenuItem>
      <MenuSeparator />
      <MenuItem id="save">Save</MenuItem>
      <MenuItem id="saveAs">Save as…</MenuItem>
      <MenuSeparator />
      <MenuItem id="print">Print…</MenuItem>
    </Menu>
  </MenuTrigger>`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,p,M;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"(args: any) => <Example {...args} />",...(M=(p=t.parameters)==null?void 0:p.docs)==null?void 0:M.source}}};var x,j,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`(args: any) => <MenuTrigger>
    <Button variant="secondary" className="px-2">
      <MoreHorizontal className="h-5 w-5" />
    </Button>
    <Menu {...args}>
      <MenuSection title="Your Content">
        <MenuItem id="repos">Repositories</MenuItem>
        <MenuItem id="projects">Projects</MenuItem>
        <MenuItem id="organizations">Organizations</MenuItem>
        <MenuItem id="stars">Stars</MenuItem>
        <MenuItem id="sponsors">Sponsors</MenuItem>
      </MenuSection>
      <MenuSection title="Your Account">
        <MenuItem id="profile">Profile</MenuItem>
        <MenuItem id="status">Set status</MenuItem>
        <MenuItem id="sign-out">Sign out</MenuItem>
      </MenuSection>
    </Menu>
  </MenuTrigger>`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const C=["Example","DisabledItems","Sections"];export{t as DisabledItems,r as Example,a as Sections,C as __namedExportsOrder,A as default};
