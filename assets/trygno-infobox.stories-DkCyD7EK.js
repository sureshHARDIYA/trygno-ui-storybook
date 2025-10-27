const e={title:"Components/Core/Infobox",component:"trygno-infobox",tags:["autodocs"],argTypes:{icon:{control:"text",defaultValue:"tryg-cat"},componentId:{control:"text"},iconPosition:{control:{type:"radio"},options:["left","right"]},color:{control:{type:"radio"},options:["grey","beige","custom"]}},parameters:{docs:{page:null}}},t=n=>`
  <trygno-infobox
    icon="${n.icon}"
    component-id="${n.componentId}"
    icon-position="${n.iconPosition}"
    color="${n.color}"
  >
    Vi anbefaler Katt Ekstra. 
  </trygno-infobox>
`,o=t.bind({});o.args={icon:"tryg-cat",componentId:"default-infobox",iconPosition:"left",color:"grey"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => \`
  <trygno-infobox
    icon="\${args.icon}"
    component-id="\${args.componentId}"
    icon-position="\${args.iconPosition}"
    color="\${args.color}"
  >
    Vi anbefaler Katt Ekstra. 
  </trygno-infobox>
\``,...o.parameters?.docs?.source}}};const r=["DefaultInfobox"];export{o as DefaultInfobox,r as __namedExportsOrder,e as default};
