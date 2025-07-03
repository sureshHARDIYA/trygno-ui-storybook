const d={title:"Components/Core/ListItem",component:"trygno-list-item",tags:["autodocs"],argTypes:{listItems:{control:"object",description:"An array of strings representing the list items",defaultValue:[]}}},i=({listItems:u})=>`
  <trygno-list-item
    list-items='${JSON.stringify(u)}'
  ></trygno-list-item>
`,t=i.bind({});t.args={listItems:["Item 1","Item 2","Item 3"]};const s=i.bind({});s.args={listItems:[]};const e=i.bind({});e.args={listItems:["Custom Item A","Custom Item B","Custom Item C"]};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,a,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,g,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const y=["DefaultList","EmptyList","CustomList"];export{e as CustomList,t as DefaultList,s as EmptyList,y as __namedExportsOrder,d as default};
