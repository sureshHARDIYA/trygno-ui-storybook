const f={title:"Components/Core/Label",component:"trygno-label",tags:["autodocs"],argTypes:{for:{control:{type:"text"},description:"The id of the element the label is associated with"},inputId:{control:{type:"text"},description:"The id to be used for the label"}},parameters:{docs:{page:null}}},n=({for:m,inputId:b,slotContent:g})=>`
  <trygno-label for="${m}" input-id="${b}">
    ${g}
  </trygno-label>
`,t=n.bind({});t.args={for:"input-field",inputId:"input1",slotContent:"Label Text"};const o=n.bind({});o.args={for:"",inputId:"input2",slotContent:"Label Without For"};const e=n.bind({});e.args={for:"unique-input",inputId:"unique-input",slotContent:"Label with Unique Id"};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var l,i,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["Default","WithoutFor","UniqueId"];export{t as Default,e as UniqueId,o as WithoutFor,h as __namedExportsOrder,f as default};
