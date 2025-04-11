const m={title:"Components/Core/Radio",component:"trygno-radio",tags:["autodocs"],argTypes:{name:{control:"text",description:"The name attribute of the radio input"},inputId:{control:"text",description:"The id of the radio input"},value:{control:"text",description:"The value of the radio input"},checked:{control:"boolean",description:"If true, the radio button is checked"},slot:{control:"text",description:"HTML content to be displayed within the label"}}},i=({name:s,inputId:u,value:l,checked:p,slot:h})=>`
  <trygno-radio
    name="${s}"
    inputId="${u}"
    value="${l}"
    checked="${p}"
  >
    ${h}  
  </trygno-radio>
`,e=i.bind({});e.args={name:"default-radio",inputId:"default-radio",value:"default",checked:!1,slot:"Default Label"};const t=i.bind({});t.args={name:"checked-radio",inputId:"checked-radio",value:"checked",checked:!0,slot:"Default Label"};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
\``,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var d,r,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
\``,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const k=["DefaultRadio","CheckedRadio"];export{t as CheckedRadio,e as DefaultRadio,k as __namedExportsOrder,m as default};
