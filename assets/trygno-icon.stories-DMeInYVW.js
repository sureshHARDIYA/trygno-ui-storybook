import{I as t}from"./constants-C_-d2Orp.js";const c={title:"Components/Core/Icon",component:"trygno-icon",tags:["autodocs"],argTypes:{name:{options:t.sort(),control:{type:"select"}},label:{control:{type:"text"}}},parameters:{docs:{page:null}}},r=({name:o,label:n})=>`
    <p>${o}</p>
    <trygno-icon
      name="${o}"
      label="${n}"
    ></trygno-icon>
  `,e=r.bind({});e.args={name:"tryg-check-circle",label:"Alert Circle Icon"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  name,
  label
}) => \`
    <p>\${name}</p>
    <trygno-icon
      name="\${name}"
      label="\${label}"
    ></trygno-icon>
  \``,...e.parameters?.docs?.source}}};const s=["DefaultIcon"];export{e as DefaultIcon,s as __namedExportsOrder,c as default};
