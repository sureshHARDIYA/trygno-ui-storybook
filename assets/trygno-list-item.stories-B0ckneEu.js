const o={title:"Components/Core/ListItem",component:"trygno-list-item",tags:["autodocs"],argTypes:{listItems:{control:"object",description:"An array of strings representing the list items",defaultValue:[]}}},i=({listItems:r})=>`
  <trygno-list-item
    list-items='${JSON.stringify(r)}'
  ></trygno-list-item>
`,t=i.bind({});t.args={listItems:["Item 1","Item 2","Item 3"]};const s=i.bind({});s.args={listItems:[]};const e=i.bind({});e.args={listItems:["Custom Item A","Custom Item B","Custom Item C"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  listItems
}) => \`
  <trygno-list-item
    list-items='\${JSON.stringify(listItems)}'
  ></trygno-list-item>
\``,...e.parameters?.docs?.source}}};const m=["DefaultList","EmptyList","CustomList"];export{e as CustomList,t as DefaultList,s as EmptyList,m as __namedExportsOrder,o as default};
