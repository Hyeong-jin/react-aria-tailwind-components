import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{r as s}from"./index-Dl6G-zuu.js";import{a4 as y}from"./index-CKGhC0Va.js";import{T as m,a as C,C as n,R as f,b as a}from"./Table-Ctf0odss.js";import"./index-D1_ZHIBm.js";import"./Checkbox-Beq3OFD3.js";import"./Field-COFLQSMM.js";import"./utils-D1ukYlRK.js";import"./createLucideIcon-Dov-y89W.js";import"./check-D2t0c9Mn.js";const H={title:"COLLECTIONS/Table",component:m,parameters:{layout:"centered"},tags:["autodocs"]};let w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"},{id:5,name:"Proposal.ppt",date:"6/18/2022",type:"PowerPoint file"},{id:6,name:"Taxes.pdf",date:"12/6/2023",type:"PDF Document"},{id:7,name:"Photos",date:"8/2/2021",type:"File folder"},{id:8,name:"Documents",date:"3/18/2023",type:"File folder"},{id:9,name:"Budget.xls",date:"1/6/2024",type:"Excel file"}];const o=c=>{let[r,p]=s.useState({column:"name",direction:"ascending"}),u=s.useMemo(()=>{let t=w.slice().sort((x,g)=>x[r.column].localeCompare(g[r.column]));return r.direction==="descending"&&t.reverse(),t},[r]);return e.jsxs(m,{"aria-label":"Files",...c,sortDescriptor:r,onSortChange:p,children:[e.jsxs(C,{children:[e.jsx(n,{id:"name",isRowHeader:!0,allowsSorting:!0,children:"Name"}),e.jsx(n,{id:"type",allowsSorting:!0,children:"Type"}),e.jsx(n,{id:"date",allowsSorting:!0,children:"Date Modified"})]}),e.jsx(y,{items:u,children:t=>e.jsxs(f,{children:[e.jsx(a,{children:t.name}),e.jsx(a,{children:t.type}),e.jsx(a,{children:t.date})]})})]})};o.args={onRowAction:null,onCellAction:null,selectionMode:"multiple"};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
  let [sortDescriptor, setSortDescriptor] = useState({
    column: 'name',
    direction: 'ascending'
  });
  let items = useMemo(() => {
    // @ts-ignore
    let items = rows.slice().sort((a: any, b: any) => a[sortDescriptor.column].localeCompare(b[sortDescriptor.column]));
    if (sortDescriptor.direction === 'descending') {
      items.reverse();
    }
    return items;
  }, [sortDescriptor]);
  return <Table aria-label="Files" {...args} sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
      <TableHeader>
        <Column id="name" isRowHeader allowsSorting>
          Name
        </Column>
        <Column id="type" allowsSorting>
          Type
        </Column>
        <Column id="date" allowsSorting>
          Date Modified
        </Column>
      </TableHeader>
      <TableBody items={items}>
        {row => <Row>
            <Cell>{row.name}</Cell>
            <Cell>{row.type}</Cell>
            <Cell>{row.date}</Cell>
          </Row>}
      </TableBody>
    </Table>;
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const M=["Example"];export{o as Example,M as __namedExportsOrder,H as default};
