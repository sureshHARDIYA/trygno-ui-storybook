import{I as i}from"./constants-C9b0xXi6.js";const y={title:"Components/Core/Icon",component:"trygno-icon",tags:["autodocs"],argTypes:{name:{options:i,control:{type:"select"}},size:{control:{type:"text"}},color:{control:{type:"color"}},stroke:{control:{type:"color"}},label:{control:{type:"text"}}},parameters:{docs:{page:null}}},p=({name:r,size:c,color:s,stroke:l,label:a})=>`
    <trygno-icon
      name="${r}"
      size="${c}"
      color="${s}"
      stroke="${l}"
      label="${a}"
    ></trygno-icon>
  `,o=p.bind({});o.args={name:"tryg-check-circle",size:"48px",label:"Alert Circle Icon",color:"white",stroke:"black"};var e,n,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
  name,
  size,
  color,
  stroke,
  label
}) => \`
    <trygno-icon
      name="\${name}"
      size="\${size}"
      color="\${color}"
      stroke="\${stroke}"
      label="\${label}"
    ></trygno-icon>
  \``,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const g=["DefaultIcon"];export{o as DefaultIcon,g as __namedExportsOrder,y as default};
