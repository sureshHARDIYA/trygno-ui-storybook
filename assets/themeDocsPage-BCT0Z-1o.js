import{j as e}from"./jsx-runtime-DmjsAZbE.js";import{useMDXComponents as i}from"./index-Dx3rDv5p.js";import"./index-GdYruCKg.js";import{c,e as l}from"./DocsRenderer-CFRXHY34-BijLfQKV.js";const m={argTypes:{theme:{control:{type:"radio"},options:["NoDefault","NoEnter"],description:"Type of theme"}},title:"Components/Core/ThemeProvider",component:"trygno-theme-provider",parameters:{docs:{page:d}}},p=({theme:t,slotContent:o})=>`
  <trygno-theme-provider theme="${t}">${o}
</trygno-theme-provider>
`,r=p.bind({});r.args={theme:"NoDefault",slotContent:"<trygno-button variant='primary'>Themed Button</trygno-button>"};var s,a,h;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`({
  theme,
  slotContent
}) => \`
  <trygno-theme-provider theme="\${theme}">\${slotContent}
</trygno-theme-provider>
\``,...(h=(a=r.parameters)==null?void 0:a.docs)==null?void 0:h.source}}};const u=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));function n(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Components/Core/ThemeProvider"}),`
`,e.jsx(o.h1,{id:"theme-provider",children:"Theme provider"}),`
`,e.jsx(o.p,{children:"The theme provider component is a non-visual component, designed to help you set the correct theme for your components."}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["Provide the Theme Provider with the theme you want to use. Right now we have only 2 themes: ",e.jsx(o.code,{children:"NoDefault"})," and ",e.jsx(o.code,{children:"NoEnter"}),"."]}),`
`,e.jsx(o.p,{children:"The component will load the correct styles for the brand and branch you provide."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<trygno-theme-provider theme="NoDefault" />
`})}),`
`,e.jsx(o.p,{children:"You are responsible for pairing the correct brand and branch. If you provide an incorrect theme, the component will not load the correct styles."}),`
`,e.jsx(o.h3,{id:"fonts",children:"Fonts"}),`
`,e.jsx(o.p,{children:`The Theme Provider will only load the CSS for basic values for the brand and branch you provide.
You will have to make sure that your page has the correct fonts loaded.`}),`
`,e.jsx(o.p,{children:"For example codebase:"}),`
`,e.jsx(l,{of:r})]})}function d(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}const x=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"}));export{x as a,j as t};
