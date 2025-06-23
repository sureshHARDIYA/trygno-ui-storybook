const g={title:"Components/Core/Badge",component:"trygno-badge",tags:["autodocs"],argTypes:{variant:{options:["info","outline","success","highlight","warning","helpful"],control:{type:"select"}}},parameters:{docs:{page:null}}},s=({variant:r,text:o})=>`
    <trygno-badge
      variant="${r}"
    >
    ${o}  
    </trygno-badge>
  `,t=s.bind({});t.args={variant:"info",text:"Starter 10.07.2024"};var e,a,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`({
  variant,
  text
}) => \`
    <trygno-badge
      variant="\${variant}"
    >
    \${text}  
    </trygno-badge>
  \``,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["DefaultIcon"];export{t as DefaultIcon,c as __namedExportsOrder,g as default};
