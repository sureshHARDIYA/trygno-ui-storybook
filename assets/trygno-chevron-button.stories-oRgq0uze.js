const h={title:"Components/Core/ChevronButton",component:"trygno-chevron-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Controls whether the chevron is expanded (rotated) or not.",defaultValue:!1},variant:{control:{type:"select"},options:["primary","secondary"],description:"Selects the chevron style variant.",defaultValue:"primary"}}},t=o=>`
  <trygno-chevron-button
    is-expanded="${o.isExpanded}"
    variant="${o.variant}"
  ></trygno-chevron-button>
`,r=t.bind({});r.args={isExpanded:!1,variant:"primary"};const a=t.bind({});a.args={isExpanded:!0,variant:"primary"};const n=t.bind({});n.args={isExpanded:!1,variant:"secondary"};const e=t.bind({});e.args={isExpanded:!0,variant:"secondary"};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var m,l,x;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...(x=(l=e.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const b=["Default","Expanded","SecondaryVariant","ExpandedSecondary"];export{r as Default,a as Expanded,e as ExpandedSecondary,n as SecondaryVariant,b as __namedExportsOrder,h as default};
