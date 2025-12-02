const i={title:"Components/Core/Radio",component:"trygno-radio",tags:["autodocs"],argTypes:{name:{control:"text",description:"The name attribute of the radio input"},inputId:{control:"text",description:"The id of the radio input"},value:{control:"text",description:"The value of the radio input"},checked:{control:"boolean",description:"If true, the radio button is checked"},slot:{control:"text",description:"HTML content to be displayed within the label"}}},n=({name:o,inputId:a,value:d,checked:r,slot:c})=>`
  <trygno-radio
    name="${o}"
    inputId="${a}"
    value="${d}"
    checked="${r}"
  >
    ${c}  
  </trygno-radio>
`,e=n.bind({});e.args={name:"default-radio",inputId:"default-radio",value:"default",checked:!1,slot:"Default Label"};const t=n.bind({});t.args={name:"checked-radio",inputId:"checked-radio",value:"checked",checked:!0,slot:"Default Label"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  name,
  inputId,
  value,
  checked,
  slot
}) => \`
  <trygno-radio
    name="\${name}"
    inputId="\${inputId}"
    value="\${value}"
    checked="\${checked}"
  >
    \${slot}  
  </trygno-radio>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  name,
  inputId,
  value,
  checked,
  slot
}) => \`
  <trygno-radio
    name="\${name}"
    inputId="\${inputId}"
    value="\${value}"
    checked="\${checked}"
  >
    \${slot}  
  </trygno-radio>
\``,...t.parameters?.docs?.source}}};const s=["DefaultRadio","CheckedRadio"];export{t as CheckedRadio,e as DefaultRadio,s as __namedExportsOrder,i as default};
