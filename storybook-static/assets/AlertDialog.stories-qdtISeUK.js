import{j as e,a as r,F as v,O as x,au as N,i as m,av as k,aw as q,N as _}from"./utils-2ykXyvw8.js";import{B as i}from"./Button-CNquFYCm.js";import{D as A}from"./Dialog-_s7q0w9a.js";import{c as p}from"./createLucideIcon-DdzWpsi8.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const D=p("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),S=p("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function l({title:a,variant:n,cancelLabel:f,actionLabel:h,onAction:y,children:g,...b}){return e(A,{role:"alertdialog",...b,children:({close:s})=>r(v,{children:[e(x,{slot:"title",className:"text-xl font-semibold leading-6 my-0",children:a}),e("div",{className:`w-6 h-6 absolute right-6 top-6 stroke-2 ${n==="destructive"?"text-red-500":"text-blue-500"}`,children:n==="destructive"?e(D,{"aria-hidden":!0}):e(S,{"aria-hidden":!0})}),e("p",{className:"mt-3 text-slate-500 dark:text-zinc-400",children:g}),r("div",{className:"mt-6 flex justify-end gap-2",children:[e(i,{variant:"secondary",onPress:s,children:f||"Cancel"}),e(i,{variant:n==="destructive"?"destructive":"primary",autoFocus:!0,onPress:N(y,s),children:h})]})]})})}try{l.displayName="AlertDialog",l.__docgenInfo={description:"",displayName:"AlertDialog",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"destructive"'},{value:'"info"'}]}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},cancelLabel:{defaultValue:null,description:"",name:"cancelLabel",required:!1,type:{name:"string"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:{value:"'dialog'"},description:"The accessibility role for the dialog.",name:"role",required:!1,type:{name:"enum",value:[{value:'"dialog"'},{value:'"alertdialog"'}]}}}}}catch{}const V=m({base:"fixed top-0 left-0 w-full h-[--visual-viewport-height] isolate z-20 bg-black/[15%] flex items-center justify-center p-4 text-center backdrop-blur-lg",variants:{isEntering:{true:"animate-in fade-in duration-200 ease-out"},isExiting:{true:"animate-out fade-out duration-200 ease-in"}}}),E=m({base:"w-full max-w-md max-h-full rounded-2xl bg-white dark:bg-zinc-800/70 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas] text-left align-middle text-slate-700 dark:text-zinc-300 shadow-2xl bg-clip-padding border border-black/10 dark:border-white/10",variants:{isEntering:{true:"animate-in zoom-in-105 ease-out duration-200"},isExiting:{true:"animate-out zoom-out-95 ease-in duration-200"}}});function o(a){return e(k,{...a,className:V,children:e(q,{...a,className:E})})}try{o.displayName="Modal",o.__docgenInfo={description:"",displayName:"Modal",props:{isEntering:{defaultValue:null,description:"Whether the modal is currently performing an entry animation.",name:"isEntering",required:!1,type:{name:"boolean"}},isExiting:{defaultValue:null,description:"Whether the modal is currently performing an exit animation.",name:"isExiting",required:!1,type:{name:"boolean"}},UNSTABLE_portalContainer:{defaultValue:{value:"document.body"},description:"The container element in which the overlay portal will be placed. This may have unknown behavior depending on where it is portalled to.",name:"UNSTABLE_portalContainer",required:!1,type:{name:"Element"}},isDismissable:{defaultValue:{value:"false"},description:"Whether to close the modal when the user interacts outside it.",name:"isDismissable",required:!1,type:{name:"boolean"}},isKeyboardDismissDisabled:{defaultValue:{value:"false"},description:"Whether pressing the escape key to close the modal should be disabled.",name:"isKeyboardDismissDisabled",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Whether the overlay is open by default (controlled).",name:"isOpen",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:null,description:"Whether the overlay is open by default (uncontrolled).",name:"defaultOpen",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Handler that is called when the overlay's open state changes.",name:"onOpenChange",required:!1,type:{name:"(isOpen: boolean) => void"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: ModalRenderProps) => ReactNode)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: ModalRenderProps) => string)"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: ModalRenderProps) => CSSProperties)"}}}}}catch{}const L={component:l,parameters:{layout:"centered"},tags:["autodocs"]},t=a=>r(_,{children:[e(i,{variant:"secondary",children:"Delete…"}),e(o,{children:e(l,{...a})})]});t.args={title:"Delete folder",children:'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',variant:"destructive",actionLabel:"Delete"};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: any) => <DialogTrigger>
    <Button variant="secondary">Delete…</Button>
    <Modal>
      <AlertDialog {...args} />
    </Modal>
  </DialogTrigger>`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const W=["Example"];export{t as Example,W as __namedExportsOrder,L as default};
