import{j as e}from"./jsx-runtime-KoT_NyIo.js";import{useMDXComponents as S}from"./index-BWyNtJX2.js";import{b as _,C as i,A as V}from"./blocks-D36E1thC.js";const P={title:"Components/Core/Select",component:"trygno-select",argTypes:{componentId:{control:"text",defaultValue:"example-component-id",description:"The id of the select element",type:{name:"string",required:!1}},multiple:{control:"boolean",defaultValue:!1,description:"Enables multi-select",type:{name:"boolean"}},validationStatus:{control:{type:"select"},options:["error","success","warning","none"],defaultValue:"none",description:"Visual state of the component",type:{name:"select"}},helperText:{control:"text",defaultValue:"Select one of the following document.",description:"The helper text of the select element",type:{name:"string",required:!1}}},parameters:{docs:{page:w}}},c=({multiple:n,componentId:t,placeholder:M,validationStatus:C,errorMessage:I,slot:A,suffix:d,prefix:a,labelSlot:p,helperText:h})=>`<trygno-select
  multiple=${n}
  component-id="${t}"
  placeholder="${M}"
  validation-status="${C}"
  error-message="${I}"
  name="periode"
  skidding="0"
  strategy="absolute"
  value='["DokumentType2"]'
>
${p||"<span slot='label'>Default Label</span>"}
${h?`<span slot="helper-text">${h}</span>`:""}
${a||""}
${d||""}
${A}
</trygno-select>`,s=c.bind({});s.args={multiple:!1,componentId:"document-type-select-single",placeholder:"Velg dokumenttype",validationStatus:"none",errorMessage:"",slot:`
  <trygno-select-option value="DokumentType1" show-checkbox="true" index="0">DokumentType1</trygno-select-option>
<trygno-select-option value="DokumentType2" show-checkbox="true" index="1">DokumentType2</trygno-select-option>
<trygno-select-option value="DokumentType3" show-checkbox="true" index="2">DokumentType3</trygno-select-option>
<trygno-select-option value="DokumentType4" show-checkbox="true" index="3">DokumentType4</trygno-select-option>
<trygno-select-option value="DokumentType5" show-checkbox="true" index="4">DokumentType5</trygno-select-option>`,labelSlot:'<h3 slot="label">Velg dokumenttype</h3>',helperText:"Velg en av følgende dokumenttyper."};const o=c.bind({});o.args={multiple:!0,componentId:"document-type-select-multiple",placeholder:"Velg dokumenttype",validationStatus:"none",errorMessage:"",slot:`
  <trygno-select-option value="DokumentType1" show-checkbox="true" index="0">DokumentType1</trygno-select-option>
<trygno-select-option value="DokumentType2" show-checkbox="true" index="1">DokumentType2</trygno-select-option>
<trygno-select-option value="DokumentType3" show-checkbox="true" index="2">DokumentType3</trygno-select-option>
<trygno-select-option value="DokumentType4" show-checkbox="true" index="3">DokumentType4</trygno-select-option>
<trygno-select-option value="DokumentType5" show-checkbox="true" index="4">DokumentType5</trygno-select-option>`};o.parameters={docs:{story:{inline:!0,minHeight:"300px"}}};const l=c.bind({});l.args={multiple:!0,componentId:"document-type-select-multiple",placeholder:"Velg dokumenttype",validationStatus:"none",errorMessage:"",suffix:'<trygno-icon name="arrow-down" slot="suffix"></trygno-icon>',slot:`
  <trygno-select-option value="DokumentType1" show-checkbox="true" index="0">DokumentType1</trygno-select-option>
<trygno-select-option value="DokumentType2" show-checkbox="true" index="1">DokumentType2</trygno-select-option>
<trygno-select-option value="DokumentType3" show-checkbox="true" index="2">DokumentType3</trygno-select-option>
<trygno-select-option value="DokumentType4" show-checkbox="true" index="3">DokumentType4</trygno-select-option>
<trygno-select-option value="DokumentType5" show-checkbox="true" index="4">DokumentType5</trygno-select-option>`};const r=c.bind({});r.args={multiple:!0,componentId:"document-type-select-multiple",placeholder:"Choose your car model",validationStatus:"none",errorMessage:"",prefix:'<trygno-icon name="tryg-car" slot="prefix"></trygno-icon>',slot:`
      <trygno-select-option value="Tesla" show-checkbox="true" index="0">Tesla</trygno-select-option>
      <trygno-select-option value="BMW" show-checkbox="true" index="1">BMW</trygno-select-option>
      <trygno-select-option value="Toyota" show-checkbox="true" index="2">Toyota</trygno-select-option>
      <trygno-select-option value="Porsche" show-checkbox="true" index="3">Porsche</trygno-select-option>
      <trygno-select-option value="Audi" show-checkbox="true" index="4">Audi</trygno-select-option>
      <trygno-select-option value="Mercedes" show-checkbox="true" index="5">Mercedes</trygno-select-option>
      <trygno-select-option value="Volvo" show-checkbox="true" index="6">Volvo</trygno-select-option>
      <trygno-select-option value="Ford" show-checkbox="true" index="7">Ford</trygno-select-option>
      <trygno-select-option value="Hyundai" show-checkbox="true" index="8">Hyundai</trygno-select-option>
      <trygno-select-option value="Kia" show-checkbox="true" index="9">Kia</trygno-select-option>
    `,labelSlot:'<h3 slot="label">Choose your car model</h3>'};var u,j,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
  multiple,
  componentId,
  placeholder,
  validationStatus,
  errorMessage,
  slot,
  suffix,
  prefix,
  labelSlot,
  helperText
}) => \`<trygno-select
  multiple=\${multiple}
  component-id="\${componentId}"
  placeholder="\${placeholder}"
  validation-status="\${validationStatus}"
  error-message="\${errorMessage}"
  name="periode"
  skidding="0"
  strategy="absolute"
  value='["DokumentType2"]'
>
\${labelSlot ? labelSlot : "<span slot='label'>Default Label</span>"}
\${helperText ? \`<span slot="helper-text">\${helperText}</span>\` : ""}
\${prefix ? prefix : ""}
\${suffix ? suffix : ""}
\${slot}
</trygno-select>\``,...(m=(j=s.parameters)==null?void 0:j.docs)==null?void 0:m.source}}};var y,g,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  multiple,
  componentId,
  placeholder,
  validationStatus,
  errorMessage,
  slot,
  suffix,
  prefix,
  labelSlot,
  helperText
}) => \`<trygno-select
  multiple=\${multiple}
  component-id="\${componentId}"
  placeholder="\${placeholder}"
  validation-status="\${validationStatus}"
  error-message="\${errorMessage}"
  name="periode"
  skidding="0"
  strategy="absolute"
  value='["DokumentType2"]'
>
\${labelSlot ? labelSlot : "<span slot='label'>Default Label</span>"}
\${helperText ? \`<span slot="helper-text">\${helperText}</span>\` : ""}
\${prefix ? prefix : ""}
\${suffix ? suffix : ""}
\${slot}
</trygno-select>\``,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`({
  multiple,
  componentId,
  placeholder,
  validationStatus,
  errorMessage,
  slot,
  suffix,
  prefix,
  labelSlot,
  helperText
}) => \`<trygno-select
  multiple=\${multiple}
  component-id="\${componentId}"
  placeholder="\${placeholder}"
  validation-status="\${validationStatus}"
  error-message="\${errorMessage}"
  name="periode"
  skidding="0"
  strategy="absolute"
  value='["DokumentType2"]'
>
\${labelSlot ? labelSlot : "<span slot='label'>Default Label</span>"}
\${helperText ? \`<span slot="helper-text">\${helperText}</span>\` : ""}
\${prefix ? prefix : ""}
\${suffix ? suffix : ""}
\${slot}
</trygno-select>\``,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var T,$,D;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`({
  multiple,
  componentId,
  placeholder,
  validationStatus,
  errorMessage,
  slot,
  suffix,
  prefix,
  labelSlot,
  helperText
}) => \`<trygno-select
  multiple=\${multiple}
  component-id="\${componentId}"
  placeholder="\${placeholder}"
  validation-status="\${validationStatus}"
  error-message="\${errorMessage}"
  name="periode"
  skidding="0"
  strategy="absolute"
  value='["DokumentType2"]'
>
\${labelSlot ? labelSlot : "<span slot='label'>Default Label</span>"}
\${helperText ? \`<span slot="helper-text">\${helperText}</span>\` : ""}
\${prefix ? prefix : ""}
\${suffix ? suffix : ""}
\${slot}
</trygno-select>\``,...(D=($=r.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const O=["Default","Multiple","Suffix","Prefix"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Multiple:o,Prefix:r,Suffix:l,__namedExportsOrder:O,default:P},Symbol.toStringTag,{value:"Module"}));function x(n){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",...S(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Components/Core/Select"}),`
`,e.jsxs(t.h1,{id:"select-experimental",children:["Select ",e.jsx("trygno-badge",{children:"Experimental"})]}),`
`,e.jsx(t.p,{children:"The trygno-select component is a customizable, accessible dropdown built with Web Components. It supports single and multi-select modes, slot-based content (label, prefix, suffix, options), and integrates with forms using native behavior. It emits a custom bqSelect event on selection, which can be captured for further actions."}),`
`,e.jsx(t.h3,{id:"default-select",children:"Default Select"}),`
`,e.jsx(i,{of:s}),`
`,e.jsx(t.h3,{id:"multiple",children:"Multiple"}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(t.h3,{id:"suffix",children:"Suffix"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h3,{id:"prefix",children:"Prefix"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(V,{of:E}),`
`,e.jsxs(t.h2,{id:"accessibility-audit-trygno-select",children:["Accessibility Audit: ",e.jsx("code",{children:"trygno-select"})]}),`
`,e.jsx("p",{children:e.jsxs(t.p,{children:["This table confirms that the latest implementation of ",e.jsx("code",{children:"trygno-select"})," fulfills WCAG and ARIA best practices."]})}),`
`,e.jsx(t.h3,{id:"input-accessibility",children:"Input Accessibility"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Feature"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Notes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'role="combobox"'})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Correctly applied"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-expanded"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Reflects open/closed state"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-controls"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Points to listbox id"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-activedescendant"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Dynamically set to focused option id"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-invalid"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:'"true"'})," only when ",e.jsx("code",{children:'validationStatus === "error"'})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-required"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Conditionally set if ",e.jsx("code",{children:"required === true"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-describedby"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Dynamically includes helper and/or error message ids"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-labelledby"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Dynamically set based on label slot presence"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"aria-disabled"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Set based on ",e.jsx("code",{children:"disabled"})," prop"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Screen reader live region"}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Uses ",e.jsx("code",{children:'aria-live="polite"'})," in a visually hidden element"]})})]})]})]}),`
`,e.jsx(t.h3,{id:"keyboard-navigation",children:"Keyboard Navigation"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Behavior"}),e.jsx("th",{children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:"Enter"})," / ",e.jsx("code",{children:"Space"})]})}),e.jsx("td",{children:"Opens dropdown and selects focused item"}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:"ArrowUp"})," / ",e.jsx("code",{children:"ArrowDown"})]})}),e.jsx("td",{children:"Navigates options, opens panel if closed"}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:"Home"})," / ",e.jsx("code",{children:"End"})]})}),e.jsx("td",{children:"Jump to first/last option"}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:[e.jsx("code",{children:"PageUp"})," / ",e.jsx("code",{children:"PageDown"})]})}),e.jsx("td",{children:"Jumps by 5 options"}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Escape"})}),e.jsx("td",{children:"Closes the dropdown"}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Tab"})}),e.jsx("td",{children:e.jsxs(t.p,{children:["Closes listbox if on last visible option (",e.jsx("code",{children:"bqCloseOnTabOut"}),")"]})}),e.jsx("td",{children:"✅"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Typing letters"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Jumps to matching option (",e.jsx("code",{children:"onComboType"}),")"]})}),e.jsx("td",{children:"✅"})]})]})]}),`
`,e.jsx(t.h3,{id:"option-level-aria",children:"Option-Level ARIA"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Option Feature"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Notes"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<trygno-select-option>"})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:"Ensures screen readers treat items as options"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(t.p,{children:["Unique ",e.jsx("code",{children:"id"})," per option"]})}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Used for ",e.jsx("code",{children:"aria-activedescendant"})," in parent"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Screen reader announcements"}),e.jsx("td",{children:"✅"}),e.jsx("td",{children:e.jsxs(t.p,{children:["Done via live region: ",e.jsx("code",{children:'"x: valgt"'})]})})]})]})]})]})}function w(n={}){const{wrapper:t}={...S(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(x,{...n})}):x(n)}const U=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"}));export{U as D,E as T};
