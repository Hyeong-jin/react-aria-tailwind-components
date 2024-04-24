import{j as e}from"./jsx-runtime-CKrituN3.js";import{i as o,al as g,am as v,m as s,an as p,j as w,e as x,y as S,ao as T,ap as m,aq as N,t as V,D as h,ar as q,o as z,as as C}from"./utils-B75MjL0w.js";import{C as f}from"./Checkbox-sTNJQYps.js";import{c as A}from"./createLucideIcon-DdzWpsi8.js";const _=A("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);function d(t){return e.jsx(g,{className:"relative max-h-[280px] w-[550px] scroll-pt-[2.281rem] overflow-auto rounded-lg border dark:border-zinc-600",children:e.jsx(v,{...t,className:"border-separate border-spacing-0"})})}const R=o({extend:s,base:"px-2 h-5 flex-1 flex gap-1 items-center overflow-hidden"}),k=o({extend:s,base:"w-px px-[8px] translate-x-[8px] box-content py-1 h-5 bg-clip-content bg-gray-400 dark:bg-zinc-500 forced-colors:bg-[ButtonBorder] cursor-col-resize rounded resizing:bg-blue-600 forced-colors:resizing:bg-[Highlight] resizing:w-[2px] resizing:pl-[7px] -outline-offset-2"});function i(t){return e.jsx(p,{...t,className:w(t.className,"cursor-default text-start text-sm font-semibold text-gray-700 dark:text-zinc-300 [&:focus-within]:z-20 [&:hover]:z-20"),children:x(t.children,(a,{allowsSorting:n,sortDirection:l})=>e.jsxs("div",{className:"flex items-center",children:[e.jsxs(S,{role:"presentation",tabIndex:-1,className:R,children:[e.jsx("span",{className:"truncate",children:a}),n&&e.jsx("span",{className:`flex h-4 w-4 items-center justify-center transition ${l==="descending"?"rotate-180":""}`,children:l&&e.jsx(_,{"aria-hidden":!0,className:"h-4 w-4 text-gray-500 dark:text-zinc-400 forced-colors:text-[ButtonText]"})})]}),!t.width&&e.jsx(T,{className:k})]}))})}function c(t){let{selectionBehavior:a,selectionMode:n,allowsDragging:l}=m();return e.jsxs(N,{...t,className:V("sticky top-0 z-10 rounded-t-lg border-b bg-gray-100/60 backdrop-blur-md supports-[-moz-appearance:none]:bg-gray-100 dark:border-b-zinc-700 dark:bg-zinc-700/60 dark:supports-[-moz-appearance:none]:bg-zinc-700 forced-colors:bg-[Canvas]",t.className),children:[l&&e.jsx(i,{}),a==="toggle"&&e.jsx(p,{width:36,minWidth:36,className:"cursor-default p-2 text-start text-sm font-semibold",children:n==="multiple"&&e.jsx(f,{slot:"selection"})}),e.jsx(h,{items:t.columns,children:t.children})]})}const $=o({extend:s,base:"group/row relative cursor-default select-none -outline-offset-2 text-gray-900 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700/60 selected:bg-blue-100 selected:hover:bg-blue-200 dark:selected:bg-blue-700/30 dark:selected:hover:bg-blue-700/40"});function u({id:t,columns:a,children:n,...l}){let{selectionBehavior:y,allowsDragging:b}=m();return e.jsxs(q,{id:t,...l,className:$,children:[b&&e.jsx(r,{children:e.jsx(z,{slot:"drag",children:"≡"})}),y==="toggle"&&e.jsx(r,{children:e.jsx(f,{slot:"selection"})}),e.jsx(h,{items:a,children:n})]})}const P=o({extend:s,base:"border-b dark:border-b-zinc-700 group-last/row:border-b-0 [--selected-border:theme(colors.blue.200)] dark:[--selected-border:theme(colors.blue.900)] group-selected/row:border-[--selected-border] [:has(+[data-selected])_&]:border-[--selected-border] p-2 truncate -outline-offset-2"});function r(t){return e.jsx(C,{...t,className:P})}try{d.displayName="Table",d.__docgenInfo={description:"",displayName:"Table",props:{children:{defaultValue:null,description:"The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.",name:"children",required:!1,type:{name:"ReactNode"}},selectionBehavior:{defaultValue:{value:'"toggle"'},description:"How multiple selection should behave in the collection.",name:"selectionBehavior",required:!1,type:{name:"enum",value:[{value:'"toggle"'},{value:'"replace"'}]}},disabledBehavior:{defaultValue:{value:'"selection"'},description:"Whether `disabledKeys` applies to all interactions, or only selection.",name:"disabledBehavior",required:!1,type:{name:"enum",value:[{value:'"all"'},{value:'"selection"'}]}},onRowAction:{defaultValue:null,description:"Handler that is called when a user performs an action on the row.",name:"onRowAction",required:!1,type:{name:"(key: Key) => void"}},dragAndDropHooks:{defaultValue:null,description:"The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the Table.",name:"dragAndDropHooks",required:!1,type:{name:"DragAndDropHooks"}},disabledKeys:{defaultValue:null,description:"A list of row keys to disable.",name:"disabledKeys",required:!1,type:{name:"Iterable<Key>"}},disallowEmptySelection:{defaultValue:null,description:"Whether the collection allows empty selection.",name:"disallowEmptySelection",required:!1,type:{name:"boolean"}},onSelectionChange:{defaultValue:null,description:"Handler that is called when the selection changes.",name:"onSelectionChange",required:!1,type:{name:"(keys: Selection) => any"}},selectionMode:{defaultValue:null,description:"The type of selection that is allowed in the collection.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"none"'},{value:'"multiple"'}]}},selectedKeys:{defaultValue:null,description:"The currently selected keys in the collection (controlled).",name:"selectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},defaultSelectedKeys:{defaultValue:null,description:"The initial selected keys in the collection (uncontrolled).",name:"defaultSelectedKeys",required:!1,type:{name:'Iterable<Key> | "all"'}},sortDescriptor:{defaultValue:null,description:"The current sorted column and direction.",name:"sortDescriptor",required:!1,type:{name:"SortDescriptor"}},onSortChange:{defaultValue:null,description:"Handler that is called when the sorted column or direction changes.",name:"onSortChange",required:!1,type:{name:"(descriptor: SortDescriptor) => any"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: TableRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: TableRenderProps) => CSSProperties)"}},onScroll:{defaultValue:null,description:"Handler that is called when a user scrolls. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event).",name:"onScroll",required:!1,type:{name:"(e: UIEvent<HTMLTableElement, UIEvent>) => void"}}}}}catch{}try{i.displayName="Column",i.__docgenInfo={description:"",displayName:"Column",props:{allowsSorting:{defaultValue:null,description:"Whether the column allows sorting.",name:"allowsSorting",required:!1,type:{name:"boolean"}},isRowHeader:{defaultValue:null,description:"Whether a column is a [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and should be announced by assistive technology during row navigation.",name:"isRowHeader",required:!1,type:{name:"boolean"}},textValue:{defaultValue:null,description:"A string representation of the column's contents, used for accessibility announcements.",name:"textValue",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"The width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.",name:"width",required:!1,type:{name:"ColumnSize"}},defaultWidth:{defaultValue:null,description:"The default width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.",name:"defaultWidth",required:!1,type:{name:"ColumnSize"}},minWidth:{defaultValue:null,description:"The minimum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.",name:"minWidth",required:!1,type:{name:"ColumnStaticSize"}},maxWidth:{defaultValue:null,description:"The maximum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.",name:"maxWidth",required:!1,type:{name:"ColumnStaticSize"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ColumnRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ColumnRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ColumnRenderProps) => CSSProperties)"}}}}}catch{}try{c.displayName="TableHeader",c.__docgenInfo={description:"",displayName:"TableHeader",props:{columns:{defaultValue:null,description:"A list of table columns.",name:"columns",required:!1,type:{name:"T[]"}},children:{defaultValue:null,description:"A list of `Column(s)` or a function. If the latter, a list of columns must be provided using the `columns` prop.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},dependencies:{defaultValue:null,description:"Values that should invalidate the column cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{u.displayName="Row",u.__docgenInfo={description:"",displayName:"Row",props:{columns:{defaultValue:null,description:"A list of columns used when dynamically rendering cells.",name:"columns",required:!1,type:{name:"Iterable<T>"}},children:{defaultValue:null,description:"The cells within the row. Supports static items or a function for dynamic rendering.",name:"children",required:!1,type:{name:"ReactNode | ((item: T) => ReactElement<any, string | JSXElementConstructor<any>>)"}},value:{defaultValue:null,description:"The object value that this row represents. When using dynamic collections, this is set automatically.",name:"value",required:!1,type:{name:"object"}},dependencies:{defaultValue:null,description:"Values that should invalidate the cell cache when using dynamic collections.",name:"dependencies",required:!1,type:{name:"any[]"}},textValue:{defaultValue:null,description:"A string representation of the row's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: RowRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: RowRenderProps) => CSSProperties)"}},href:{defaultValue:null,description:"A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},rel:{defaultValue:null,description:"The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).",name:"rel",required:!1,type:{name:"string"}},download:{defaultValue:null,description:"Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).",name:"download",required:!1,type:{name:"string | boolean"}},ping:{defaultValue:null,description:"A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).",name:"ping",required:!1,type:{name:"string"}},referrerPolicy:{defaultValue:null,description:"How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).",name:"referrerPolicy",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"no-referrer"'},{value:'"no-referrer-when-downgrade"'},{value:'"origin"'},{value:'"origin-when-cross-origin"'},{value:'"same-origin"'},{value:'"strict-origin"'},{value:'"strict-origin-when-cross-origin"'},{value:'"unsafe-url"'}]}}}}}catch{}try{r.displayName="Cell",r.__docgenInfo={description:"",displayName:"Cell",props:{textValue:{defaultValue:null,description:"A string representation of the cell's contents, used for features like typeahead.",name:"textValue",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: CellRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: CellRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: CellRenderProps) => CSSProperties)"}}}}}catch{}export{i as C,u as R,d as T,c as a,r as b};
