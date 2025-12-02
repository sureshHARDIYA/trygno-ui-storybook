const l={title:"Components/Core/Label",component:"trygno-label",tags:["autodocs"],argTypes:{for:{control:{type:"text"},description:"The id of the element the label is associated with"},inputId:{control:{type:"text"},description:"The id to be used for the label"}},parameters:{docs:{page:null}}},n=({for:r,inputId:s,slotContent:a})=>`
  <trygno-label for="${r}" input-id="${s}">
    ${a}
  </trygno-label>
`,t=n.bind({});t.args={for:"input-field",inputId:"input1",slotContent:"Label Text"};const o=n.bind({});o.args={for:"",inputId:"input2",slotContent:"Label Without For"};const e=n.bind({});e.args={for:"unique-input",inputId:"unique-input",slotContent:"Label with Unique Id"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  for: htmlFor,
  inputId,
  slotContent
}) => \`
  <trygno-label for="\${htmlFor}" input-id="\${inputId}">
    \${slotContent}
  </trygno-label>
\``,...e.parameters?.docs?.source}}};const i=["Default","WithoutFor","UniqueId"];export{t as Default,e as UniqueId,o as WithoutFor,i as __namedExportsOrder,l as default};
