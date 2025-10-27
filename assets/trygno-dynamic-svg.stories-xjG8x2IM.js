const r={title:"Components/Core/Dynamic SVG",component:"trygno-dynamic-svg",tags:["autodocs"],argTypes:{replacementText:{control:{type:"text"}},label:{control:{type:"text"}}}},a=({replacementText:t,label:n})=>`
    <trygno-dynamic-svg
      replacement-text="${t}" 
      label="${n}" 
    />
  `,e=a.bind({});e.args={replacementText:"AB 12345",label:""};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  replacementText,
  label
}) => \`
    <trygno-dynamic-svg
      replacement-text="\${replacementText}" 
      label="\${label}" 
    />
  \``,...e.parameters?.docs?.source}}};const o=["LicensePlate"];export{e as LicensePlate,o as __namedExportsOrder,r as default};
