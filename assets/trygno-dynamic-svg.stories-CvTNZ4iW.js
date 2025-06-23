const s={title:"Components/Core/Dynamic SVG",component:"trygno-dynamic-svg",tags:["autodocs"],argTypes:{replacementText:{control:{type:"text"}},label:{control:{type:"text"}}}},c=({replacementText:r,label:o})=>`
    <trygno-dynamic-svg
      replacement-text="${r}" 
      label="${o}" 
    />
  `,e=c.bind({});e.args={replacementText:"AB 12345",label:""};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  replacementText,
  label
}) => \`
    <trygno-dynamic-svg
      replacement-text="\${replacementText}" 
      label="\${label}" 
    />
  \``,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const l=["LicensePlate"];export{e as LicensePlate,l as __namedExportsOrder,s as default};
