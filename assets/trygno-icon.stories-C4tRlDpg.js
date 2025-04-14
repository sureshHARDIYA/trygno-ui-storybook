const g=["apple-store-logo","alert-circle","alert-octagon","alert-triangle","arrow-down","arrow-left","arrow-right","arrow-up","check-circle","check","chevron-down","chevron-left","chevron-right","chevron-up","download","file-text","google-play-store","heart","heart-Handshake","help-circle","minus-circle","minus","plaster","tryg-check-circle","tryg-gravid","tryg-kroner","thumbs-up","thumbs-down","x-octagon","x-square","x","tag","tryg-car","tryg-child","tryg-content","tryg-house","tryg-motorsykkel","tryg-travel","tryg-logo","tryg-cat","tryg-cat-red","tryg-dog-red","tryg-dog","slide-right","tryg-scooter","slide-left","tryg-lifebuoy","edit-pen","tryg-check","minus-red","info-circle","warning-triangle","tryg-boat"],y={title:"Components/Core/Icon",component:"trygno-icon",tags:["autodocs"],argTypes:{name:{options:g,control:{type:"select"}},size:{control:{type:"text"}},color:{control:{type:"color"}},stroke:{control:{type:"color"}},label:{control:{type:"text"}}},parameters:{docs:{page:null}}},i=({name:n,size:c,color:l,stroke:a,label:s})=>`
    <trygno-icon
      name="${n}"
      size="${c}"
      color="${l}"
      stroke="${a}"
      label="${s}"
    ></trygno-icon>
  `,e=i.bind({});e.args={name:"tryg-check-circle",size:"48px",label:"Alert Circle Icon",color:"white",stroke:"black"};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  name,
  size,
  color,
  stroke,
  label
}) => \`
    <trygno-icon
      name="\${name}"
      size="\${size}"
      color="\${color}"
      stroke="\${stroke}"
      label="\${label}"
    ></trygno-icon>
  \``,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const p=["DefaultIcon"];export{e as DefaultIcon,p as __namedExportsOrder,y as default};
