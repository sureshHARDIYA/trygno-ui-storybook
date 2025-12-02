import{j as e}from"./index-_k1vW10U.js";import{useMDXComponents as a}from"./index-DD0U_lpG.js";import{b as i,P as c,c as d}from"./blocks-DR02H8eR.js";const l={title:"Components/Core/Badge",component:"trygno-badge",argTypes:{variant:{options:["info","outline","success","highlight","warning","helpful"],control:{type:"select"}}},parameters:{docs:{page:s}}},g=({variant:o,text:n})=>`
    <trygno-badge
      variant="${o}"
    >
    ${n}  
    </trygno-badge>
  `,t=g.bind({});t.args={variant:"info",text:"Starter 10.07.2024"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  variant,
  text
}) => \`
    <trygno-badge
      variant="\${variant}"
    >
    \${text}  
    </trygno-badge>
  \``,...t.parameters?.docs?.source}}};const u=["DefaultBadge"],b=Object.freeze(Object.defineProperty({__proto__:null,DefaultBadge:t,__namedExportsOrder:u,default:l},Symbol.toStringTag,{value:"Module"}));function r(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:b}),`
`,e.jsx(n.h1,{id:"badge",children:"Badge"}),`
`,e.jsx(n.p,{children:"A badge is a visual indicator or icon used to represent a specific achievement, status, or attribute. It is often displayed on a user's profile, dashboard, or other relevant interface elements. Badges can be used to incentivize user engagement, recognize accomplishments, or provide a quick way to communicate information about a user or item."}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"styling",children:"Styling"}),`
`,e.jsx(n.p,{children:"Consumers can override the default badge styles using CSS custom properties (CSS variables). These variables are defined in the :host scope and can be customized in your global stylesheet or within a specific component context."}),`
`,e.jsx(n.p,{children:"To override a badge style, redefine the relevant CSS variable in your scope. For example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-CSS",children:`:root {
  --tui-badge-success-bg-color: #28a745; /* Custom green */
  --tui-badge-success-color: #ffffff;    /* Custom text color */
}

`})}),`
`,e.jsx(n.h3,{id:"exposed-variables",children:"Exposed variables"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`--tui-badge-color
--tui-badge-width-mobile
--tui-badge-info-bg-color
--tui-badge-helpful-bg-color
--tui-badge-success-bg-color
--tui-badge-success-color
--tui-badge-warning-bg-color
--tui-badge-warning-color
--tui-badge-highlight-bg-color
--tui-badge-highlight-color
--tui-badge-outline-bg-color
--tui-badge-outline-border-color
--tui-badge-preference-bg-color
--tui-badge-preference-color
`})})]})}function s(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}const f=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));export{f as D,b as T};
