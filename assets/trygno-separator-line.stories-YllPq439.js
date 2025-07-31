const v={title:"Components/Core/SeparatorLine",component:"trygno-separator-line",tags:["autodocs"],argTypes:{margin:{control:{type:"select"},options:["top","bottom","both","none","custom"],description:"Controls the margin around the separator line.",defaultValue:"bottom"}}},e=y=>`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="${y.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
`,r=e.bind({});r.args={margin:"bottom"};const n=e.bind({});n.args={margin:"top"};const a=e.bind({});a.args={margin:"both"};const o=e.bind({});o.args={margin:"none"};var t,s,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var i,g,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var c,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,b,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
  <div style="padding: 20px; background: #f9f9f9;">
    <p>Content above</p>
    <trygno-separator-line margin="\${args.margin}"></trygno-separator-line>
    <p>Content below</p>
  </div>
\``,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const C=["Default","TopMargin","BothMargins","NoMargin"];export{a as BothMargins,r as Default,o as NoMargin,n as TopMargin,C as __namedExportsOrder,v as default};
