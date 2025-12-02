import{j as e}from"./index-_k1vW10U.js";import{useMDXComponents as l}from"./index-DD0U_lpG.js";import"./blocks-DR02H8eR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-DFWwc32C.js";function s(r){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{id:"styling-web-components-example-trygno-alert",children:["Styling Web Components (Example: ",e.jsx(n.code,{children:"<trygno-alert>"}),")"]}),`
`,e.jsx(n.p,{children:"You can style Stencil (and other web components) in several ways, using:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CSS custom properties"})," (variables)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Shadow DOM parts"})," (",e.jsx(n.code,{children:"part"})," and ",e.jsx(n.code,{children:"::part"}),")"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Inline styles"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Global CSS overrides"})}),`
`]}),`
`,e.jsx(n.p,{children:"Below is a guide with code snippets for each method."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1️⃣-overriding-css-variables-globally",children:"1️⃣ Overriding CSS Variables Globally"}),`
`,e.jsx(n.p,{children:"You can override the CSS variables for all alerts in your app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --tui-alert-success-bg-color: #e8ffe3;
  --tui-alert-success-border-color: #19ae23;
  --tui-alert-font-size: 1.2rem;
}
`})}),`
`,e.jsxs(n.p,{children:["This affects ",e.jsx(n.strong,{children:"all"})," ",e.jsx(n.code,{children:"<trygno-alert>"})," components."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2️⃣-overriding-css-variables-inline-per-instance",children:"2️⃣ Overriding CSS Variables Inline (Per Instance)"}),`
`,e.jsx(n.p,{children:"Override styles for just one alert by setting variables inline:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<trygno-alert
  variant="success"
  style="
    --tui-alert-success-bg-color: gold;
    --tui-alert-success-border-color: orange;
    --tui-alert-font-size: 2rem;
  "
>
  Custom-styled success alert!
</trygno-alert>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3️⃣-styling-shadow-dom-parts",children:"3️⃣ Styling Shadow DOM Parts"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"trygno-alert"})," component exposes ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:"Shadow Parts"})," for deeper styling.",e.jsx(n.br,{}),`
`,"You can style them using the ",e.jsx(n.code,{children:"::part"})," selector in your CSS:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`trygno-alert::part(alertContainer) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

trygno-alert::part(alertMessage) {
  font-weight: bold;
  color: #1a2a42;
}

trygno-alert::part(alertLeftIcon),
trygno-alert::part(alertRightIcon) {
  opacity: 0.8;
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," Shadow parts let you target inner elements even when a component uses Shadow DOM."]}),`
`]}),`
`,e.jsx(n.p,{children:"And in your CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`trygno-alert::part(alertContainer) {
  box-shadow: 0 2px 8px #c00;
}
`})}),`
`,e.jsx(n.h2,{id:"-summary",children:"🚀 Summary"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices for styling web components:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prefer CSS variables for theme/token-based control."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:"::part"})," for deep, targeted styling of inner elements."]}),`
`,e.jsx(n.li,{children:"Use inline styles for quick, per-instance tweaks."}),`
`,e.jsxs(n.li,{children:["For app-wide changes, set variables in ",e.jsx(n.code,{children:":root"})," or global CSS."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Need more styling hooks? Check if the component exposes new CSS variables or parts."}),`
`]}),`
`,e.jsx(n.hr,{})]})}function h(r={}){const{wrapper:n}={...l(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
