import{j as e}from"./index-_k1vW10U.js";import{useMDXComponents as p}from"./index-DD0U_lpG.js";import{b as $,C as t,A as w}from"./blocks-DR02H8eR.js";const v={title:"Components/Core/Pagination",component:"trygno-pagination",argTypes:{pages:{control:"number",defaultValue:{summary:10},description:"The total number of pages",type:{name:"number",required:!0}},rangeSize:{control:"number",defaultValue:{summary:1},description:"The number of pages to display at once",type:{name:"number",required:!0}},current:{control:"number",defaultValue:{summary:1},description:"The current page",type:{name:"number",required:!0}},hideFirstButton:{control:"boolean",defaultValue:{summary:!1},description:"Hides the first page button",type:{name:"boolean"}},hideLastButton:{control:"boolean",defaultValue:{summary:!1},description:"Hides the last page button",type:{name:"boolean"}},hideEllipsis:{control:"boolean",defaultValue:{summary:!1},description:"Hides the ellipsis",type:{name:"boolean"}},hideInactiveArrows:{control:"boolean",defaultValue:{summary:!1},description:"Hides the inactive arrows",type:{name:"boolean"}},isMobile:{control:"boolean",defaultValue:{summary:!1},description:"Enables the mobile view",type:{name:"boolean"}}},parameters:{docs:{page:g}}},h=({pages:i,rangeSize:n,current:m,hideFirstButton:b,hideLastButton:x,hideEllipsis:j,hideInactiveArrows:f,isMobile:y})=>`
    <trygno-pagination
      pages="${i}"
      range-size="${n}"
      current="${m}"
      hide-first-button="${b}"
      hide-last-button="${x}"
      hide-ellipsis="${j}"
      hide-inactive-arrows="${f}"
      is-mobile="${y}"
      style="margin: 2rem"
    ></trygno-pagination>
  `,s=h.bind({});s.args={pages:10,rangeSize:1,current:1,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!1,hideInactiveArrows:!1,isMobile:!1};const r=h.bind({});r.args={pages:10,rangeSize:1,current:1,hideFirstButton:!0,hideLastButton:!0,hideEllipsis:!1,hideInactiveArrows:!1,isMobile:!1};const a=h.bind({});a.args={pages:100,rangeSize:2,current:50,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!0,hideInactiveArrows:!1,isMobile:!1};const o=h.bind({});o.args={pages:10,rangeSize:1,current:1,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!1,hideInactiveArrows:!0,isMobile:!1};const l=h.bind({});l.args={pages:100,rangeSize:2,current:1,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!1,hideInactiveArrows:!1,isMobile:!1};const d=h.bind({});d.args={pages:20,rangeSize:2,current:10,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!1,hideInactiveArrows:!1,isMobile:!1};const c=h.bind({});c.args={pages:20,rangeSize:2,current:20,hideFirstButton:!1,hideLastButton:!1,hideEllipsis:!1,hideInactiveArrows:!1,isMobile:!1};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  pages,
  rangeSize,
  current,
  hideFirstButton,
  hideLastButton,
  hideEllipsis,
  hideInactiveArrows,
  isMobile
}) => \`
    <trygno-pagination
      pages="\${pages}"
      range-size="\${rangeSize}"
      current="\${current}"
      hide-first-button="\${hideFirstButton}"
      hide-last-button="\${hideLastButton}"
      hide-ellipsis="\${hideEllipsis}"
      hide-inactive-arrows="\${hideInactiveArrows}"
      is-mobile="\${isMobile}"
      style="margin: 2rem"
    ></trygno-pagination>
  \``,...c.parameters?.docs?.source}}};const B=["Default","NoFirstOrLastArrows","HideEllipsis","HideInactiveArrows","ManyPages","MiddlePage","LastPage"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:s,HideEllipsis:a,HideInactiveArrows:o,LastPage:c,ManyPages:l,MiddlePage:d,NoFirstOrLastArrows:r,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));function u(i){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...p(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx($,{title:"Components/Core/Pagination"}),`
`,e.jsxs(n.h1,{id:"pagination-experimental",children:["Pagination ",e.jsx("trygno-badge",{children:"Experimental"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"trygno-pagination"})," component is a robust, accessible pagination control built with Web Components.",e.jsx(n.br,{}),`
`,"Features include configurable page range, ellipsis, arrow controls, and accessibility best practices.",e.jsx(n.br,{}),`
`,"It emits an ",e.jsx(n.code,{children:"update"})," event with the selected page number, making it easy to integrate with application state."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage-scenarios",children:"Usage Scenarios"}),`
`,e.jsx(n.p,{children:"Below are examples demonstrating the different configurations and features of the pagination component."}),`
`,e.jsx(n.h3,{id:"default-pagination",children:"Default Pagination"}),`
`,e.jsx(t,{of:s}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"without-first--last-arrows",children:"Without First & Last Arrows"}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"hide-ellipsis",children:"Hide Ellipsis"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"hide-inactive-arrows",children:"Hide Inactive Arrows"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"many-pages",children:"Many Pages"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"middle-page-selected",children:"Middle Page Selected"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"last-page-selected",children:"Last Page Selected"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(w,{of:S}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"update"}),": Emitted with the new page number when pagination changes."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses semantic HTML (",e.jsx(n.code,{children:"<nav>"}),", ",e.jsx(n.code,{children:"<ul>"}),", ",e.jsx(n.code,{children:"<button>"}),")"]}),`
`,e.jsx(n.li,{children:"ARIA attributes for screen reader support"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`]}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.p,{children:["The following methods are exposed for programmatic control of pagination.",e.jsx(n.br,{}),`
`,"These methods can be called via JS on the custom element."]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Method Name"}),e.jsx("th",{children:"Arguments"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example Usage"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setCurrent"})}),e.jsx("td",{children:"number (page)"}),e.jsx("td",{children:"Sets the current page to the given number"}),e.jsx("td",{children:e.jsx("code",{children:"el.setCurrent(5)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setFirst"})}),e.jsx("td",{children:"none"}),e.jsx("td",{children:"Sets current page to the first page"}),e.jsx("td",{children:e.jsx("code",{children:"el.setFirst()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"setLast"})}),e.jsx("td",{children:"none"}),e.jsx("td",{children:"Sets current page to the last page"}),e.jsx("td",{children:e.jsx("code",{children:"el.setLast()"})})]})]})]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"How to use the methods:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const el = document.querySelector("trygno-pagination");
// Go to page 3
el.setCurrent(3);
// Go to first page
el.setFirst();
// Go to last page
el.setLast();
`})}),`
`,e.jsxs(n.p,{children:["These methods will update the component and emit the ",e.jsx(n.code,{children:"update"})," event as if the user interacted with the UI."]})]})}function g(i={}){const{wrapper:n}={...p(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(u,{...i})}):u(i)}const z=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));export{z as D,S as T};
