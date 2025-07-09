const I={title:"Components/Core/Button",component:"trygno-button",tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"select"}},theme:{options:["default","danger","inverse"],control:{type:"select"}},type:{options:["button","submit","reset"],control:{type:"select"}},disabled:{control:{type:"boolean"}}},parameters:{docs:{page:null}}},o=({variant:B,theme:D,type:S,disabled:P,content:T})=>`
  <trygno-button variant="${B}" theme="${D}" type="${S}" ${P?"disabled":""}>
    ${T}
  </trygno-button>
`,t=o.bind({});t.args={variant:"primary",theme:"default",type:"button",disabled:!1,content:"Primary Default Button"};const e=o.bind({});e.args={variant:"secondary",theme:"danger",type:"button",disabled:!1,content:"Secondary Danger Button"};const n=o.bind({});n.args={variant:"tertiary",theme:"inverse",type:"button",disabled:!1,content:"Tertiary Inverse Button"};const a=o.bind({});a.args={variant:"primary",theme:"default",type:"button",disabled:!0,content:"Disabled Button"};const r=o.bind({});r.args={variant:"primary",theme:"default",type:"button",disabled:!1,content:"Large Primary Button"};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...(y=(p=e.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var m,u,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,g,$;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...($=(g=a.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`({
  variant,
  theme,
  type,
  disabled,
  content
}) => \`
  <trygno-button variant="\${variant}" theme="\${theme}" type="\${type}" \${disabled ? 'disabled' : ''}>
    \${content}
  </trygno-button>
\``,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const L=["PrimaryDefault","SecondaryDanger","TertiaryInverse","DisabledButton","LargePrimaryButton"];export{a as DisabledButton,r as LargePrimaryButton,t as PrimaryDefault,e as SecondaryDanger,n as TertiaryInverse,L as __namedExportsOrder,I as default};
