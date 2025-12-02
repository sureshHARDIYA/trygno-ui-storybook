const y={title:"Components/Core/Button",component:"trygno-button",tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"select"}},theme:{options:["default","danger","inverse"],control:{type:"select"}},type:{options:["button","submit","reset"],control:{type:"select"}},disabled:{control:{type:"boolean"}}},parameters:{docs:{page:null}}},o=({variant:s,theme:i,type:d,disabled:c,content:p})=>`
  <trygno-button variant="${s}" theme="${i}" type="${d}" ${c?"disabled":""}>
    ${p}
  </trygno-button>
`,t=o.bind({});t.args={variant:"primary",theme:"default",type:"button",disabled:!1,content:"Primary Default Button"};const e=o.bind({});e.args={variant:"secondary",theme:"danger",type:"button",disabled:!1,content:"Secondary Danger Button"};const n=o.bind({});n.args={variant:"tertiary",theme:"inverse",type:"button",disabled:!1,content:"Tertiary Inverse Button"};const a=o.bind({});a.args={variant:"primary",theme:"default",type:"button",disabled:!0,content:"Disabled Button"};const r=o.bind({});r.args={variant:"primary",theme:"default",type:"button",disabled:!1,content:"Large Primary Button"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...r.parameters?.docs?.source}}};const m=["PrimaryDefault","SecondaryDanger","TertiaryInverse","DisabledButton","LargePrimaryButton"];export{a as DisabledButton,r as LargePrimaryButton,t as PrimaryDefault,e as SecondaryDanger,n as TertiaryInverse,m as __namedExportsOrder,y as default};
