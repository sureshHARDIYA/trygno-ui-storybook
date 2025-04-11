const y={title:"Components/Core/Badge",component:"trygno-recommended-badge",tags:["autodocs"],argTypes:{text:{control:{type:"text"},description:"The text to display inside the badge"},borderVariant:{options:["border","no-border"],control:{type:"select"},description:"Determines whether the badge has a border"},isRecommendedAriaHidden:{control:{type:"boolean"},description:"Hides the badge from assistive technologies if true"}}},u=({text:n,borderVariant:a,isRecommendedAriaHidden:t})=>`
  <trygno-recommended-badge
    text="${n}"
    border-variant="${a}"
    aria-hidden="${t?"true":"false"}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
`,x=({text:n,borderVariant:a,isRecommendedAriaHidden:t})=>`
  <trygno-recommended-badge
    text="${n}"
    border-variant="${a}"
    aria-hidden="${t?"true":"false"}"
  ></trygno-recommended-badge>
`,e=u.bind({});e.args={text:"Recommended",borderVariant:"border",isRecommendedAriaHidden:!1};const r=u.bind({});r.args={text:"Recommended",borderVariant:"no-border",isRecommendedAriaHidden:!1};const d=x.bind({});d.args={text:"Recommended",borderVariant:"no-border",isRecommendedAriaHidden:!1};var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? 'true' : 'false'}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
\``,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,c,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? 'true' : 'false'}"
  >
    <span>Additional Content</span>
  </trygno-recommended-badge>
\``,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var g,p,l;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`({
  text,
  borderVariant,
  isRecommendedAriaHidden
}) => \`
  <trygno-recommended-badge
    text="\${text}"
    border-variant="\${borderVariant}"
    aria-hidden="\${isRecommendedAriaHidden ? 'true' : 'false'}"
  ></trygno-recommended-badge>
\``,...(l=(p=d.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const $=["Default","NoBorder","Badage"];export{d as Badage,e as Default,r as NoBorder,$ as __namedExportsOrder,y as default};
