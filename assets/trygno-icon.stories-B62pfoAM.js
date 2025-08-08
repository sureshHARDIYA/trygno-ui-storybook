import{I as t}from"./constants-QQvmqtPn.js";const c={title:"Components/Core/Icon",component:"trygno-icon",tags:["autodocs"],argTypes:{name:{options:t,control:{type:"select"}},label:{control:{type:"text"}}},parameters:{docs:{page:null}}},r=({name:n,label:o})=>`
    <p>${n}</p>
    <trygno-icon
      name="${n}"
      label="${o}"
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
