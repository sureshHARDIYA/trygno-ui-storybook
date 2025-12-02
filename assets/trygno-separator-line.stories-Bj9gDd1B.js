const s={title:"Components/Core/SeparatorLine",component:"trygno-separator-line",tags:["autodocs"],argTypes:{margin:{control:{type:"select"},options:["top","bottom","both","none","custom"],description:"Controls the margin around the separator line.",defaultValue:"bottom"}}},e=t=>`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="${t.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
`,r=e.bind({});r.args={margin:"bottom"};const n=e.bind({});n.args={margin:"top"};const a=e.bind({});a.args={margin:"both"};const o=e.bind({});o.args={margin:"none"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...o.parameters?.docs?.source}}};const p=["Default","TopMargin","BothMargins","NoMargin"];export{a as BothMargins,r as Default,o as NoMargin,n as TopMargin,p as __namedExportsOrder,s as default};
