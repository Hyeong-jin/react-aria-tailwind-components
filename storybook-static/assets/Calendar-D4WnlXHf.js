import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{i,a9 as o,H as u,I as c,J as f,s as m,aa as p,ab as h,ac as x,ad as b}from"./index-CKGhC0Va.js";import{B as t}from"./Button-Cj8flKvI.js";import{a as v}from"./utils-D1ukYlRK.js";import{C as l}from"./chevron-right-8iXnCjD5.js";import{c as y}from"./createLucideIcon-Dov-y89W.js";const n=y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),g=i({extend:v,base:"w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",variants:{isSelected:{false:"text-zinc-900 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 pressed:bg-gray-200 dark:pressed:bg-zinc-600",true:"bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]"},isDisabled:{true:"text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]"}}});function r({errorMessage:a,...d}){return e.jsxs(o,{...d,children:[e.jsx(V,{}),e.jsxs(u,{children:[e.jsx($,{}),e.jsx(c,{children:s=>e.jsx(f,{date:s,className:g})})]}),a&&e.jsx(m,{slot:"errorMessage",className:"text-sm text-red-600",children:a})]})}function V(){let{direction:a}=p();return e.jsxs("header",{className:"flex w-full items-center gap-1 px-1 pb-4",children:[e.jsx(t,{variant:"icon",slot:"previous",children:a==="rtl"?e.jsx(l,{"aria-hidden":!0}):e.jsx(n,{"aria-hidden":!0})}),e.jsx(h,{className:"mx-2 flex-1 text-center text-xl font-semibold text-zinc-900 dark:text-zinc-200"}),e.jsx(t,{variant:"icon",slot:"next",children:a==="rtl"?e.jsx(n,{"aria-hidden":!0}):e.jsx(l,{"aria-hidden":!0})})]})}function $(){return e.jsx(x,{children:a=>e.jsx(b,{className:"text-xs font-semibold text-gray-500",children:a})})}try{r.displayName="Calendar",r.__docgenInfo={description:"",displayName:"Calendar",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children of the component. A function may be provided to alter the children based on component state.",name:"children",required:!1,type:{name:"ReactNode | ((values: CalendarRenderProps) => ReactNode)"}},isDisabled:{defaultValue:{value:"false"},description:"Whether the calendar is disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"false"},description:"Whether to automatically focus the calendar when it mounts.",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocusChange:{defaultValue:null,description:"Handler that is called when the focused date changes.",name:"onFocusChange",required:!1,type:{name:"(date: CalendarDate) => void"}},isReadOnly:{defaultValue:{value:"false"},description:"Whether the calendar value is immutable.",name:"isReadOnly",required:!1,type:{name:"boolean"}},isInvalid:{defaultValue:null,description:"Whether the current selection is invalid according to application logic.",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The current value (controlled).",name:"value",required:!1,type:{name:"DateValue"}},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",required:!1,type:{name:"DateValue"}},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",required:!1,type:{name:"(value: MappedDateValue<T>) => void"}},style:{defaultValue:null,description:"The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.",name:"style",required:!1,type:{name:"CSSProperties | ((values: CalendarRenderProps) => CSSProperties)"}},className:{defaultValue:null,description:"The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.",name:"className",required:!1,type:{name:"string | ((values: CalendarRenderProps) => string)"}},minValue:{defaultValue:null,description:"The minimum allowed date that a user may select.",name:"minValue",required:!1,type:{name:"DateValue"}},maxValue:{defaultValue:null,description:"The maximum allowed date that a user may select.",name:"maxValue",required:!1,type:{name:"DateValue"}},pageBehavior:{defaultValue:{value:"visible"},description:"Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.",name:"pageBehavior",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"visible"'}]}},isDateUnavailable:{defaultValue:null,description:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.",name:"isDateUnavailable",required:!1,type:{name:"(date: DateValue) => boolean"}},focusedValue:{defaultValue:null,description:"Controls the currently focused date within the calendar.",name:"focusedValue",required:!1,type:{name:"DateValue"}},defaultFocusedValue:{defaultValue:null,description:"The date that is focused when the calendar first mounts (uncountrolled).",name:"defaultFocusedValue",required:!1,type:{name:"DateValue"}}}}}catch{}export{r as C,V as a,$ as b};
