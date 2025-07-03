const c={title:"Components/Core/Infobox",component:"trygno-infobox",tags:["autodocs"],argTypes:{icon:{control:"text",defaultValue:"tryg-cat"},componentId:{control:"text"},iconPosition:{control:{type:"radio"},options:["left","right"]},color:{control:{type:"radio"},options:["grey","beige","custom"]}},parameters:{docs:{page:null}}},i=n=>`
  <trygno-infobox
    icon="${n.icon}"
    component-id="${n.componentId}"
    icon-position="${n.iconPosition}"
    color="${n.color}"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox>
`,o=i.bind({});o.args={icon:"tryg-cat",componentId:"default-infobox",iconPosition:"left",color:"grey"};var t,e,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => \`
  <trygno-infobox
    icon="\${args.icon}"
    component-id="\${args.componentId}"
    icon-position="\${args.iconPosition}"
    color="\${args.color}"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox>
\``,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const a=["DefaultInfobox"];export{o as DefaultInfobox,a as __namedExportsOrder,c as default};
