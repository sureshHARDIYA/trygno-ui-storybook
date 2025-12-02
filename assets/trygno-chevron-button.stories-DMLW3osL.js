const s={title:"Components/Core/ChevronButton",component:"trygno-chevron-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Controls whether the chevron is expanded (rotated) or not.",defaultValue:!1},variant:{control:{type:"select"},options:["primary","secondary"],description:"Selects the chevron style variant.",defaultValue:"primary"}}},t=o=>`
  <trygno-chevron-button
    is-expanded="${o.isExpanded}"
    variant="${o.variant}"
  ></trygno-chevron-button>
`,r=t.bind({});r.args={isExpanded:!1,variant:"primary"};const a=t.bind({});a.args={isExpanded:!0,variant:"primary"};const n=t.bind({});n.args={isExpanded:!1,variant:"secondary"};const e=t.bind({});e.args={isExpanded:!0,variant:"secondary"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => \`
  <trygno-chevron-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
  ></trygno-chevron-button>
\``,...e.parameters?.docs?.source}}};const d=["Default","Expanded","SecondaryVariant","ExpandedSecondary"];export{r as Default,a as Expanded,e as ExpandedSecondary,n as SecondaryVariant,d as __namedExportsOrder,s as default};
