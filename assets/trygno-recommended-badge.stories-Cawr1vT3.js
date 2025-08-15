const s={title:"Components/Core/Badge",component:"trygno-recommended-badge",argTypes:{text:{control:{type:"text"},description:"The text to display inside the badge"},borderVariant:{options:["border","no-border"],control:{type:"select"},description:"Determines whether the badge has a border"},isRecommendedAriaHidden:{control:{type:"boolean"},description:"Hides the badge from assistive technologies if true"}}},o=({text:n,borderVariant:a,isRecommendedAriaHidden:t})=>`
  <trygno-recommended-badge
    text="${n}"
    border-variant="${a}"
    aria-hidden="${t?"true":"false"}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
`,i=({text:n,borderVariant:a,isRecommendedAriaHidden:t})=>`
  <trygno-recommended-badge
    text="${n}"
    border-variant="${a}"
    aria-hidden="${t?"true":"false"}"
  ></trygno-recommended-badge>
`,e=o.bind({});e.args={text:"Recommended",borderVariant:"border",isRecommendedAriaHidden:!1};const r=o.bind({});r.args={text:"Recommended",borderVariant:"no-border",isRecommendedAriaHidden:!1};const d=i.bind({});d.args={text:"Recommended",borderVariant:"no-border",isRecommendedAriaHidden:!1};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? "true" : "false"}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
\``,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? "true" : "false"}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
\``,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? "true" : "false"}"
  ></trygno-recommended-badge>
\``,...d.parameters?.docs?.source}}};const m=["Default","NoBorder","Badage"];export{d as Badage,e as Default,r as NoBorder,m as __namedExportsOrder,s as default};
