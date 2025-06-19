const d={title:"Components/Recipie/Legehelp",component:"trygno-legehelp",tags:["autodocs"],argTypes:{isHorizontallyCentered:{control:{type:"boolean"}},maxWidth:{control:{type:"text"}}},parameters:{docs:{page:null}}},i=({slotContent:r,heading:l,maxWidth:a,isHorizontallyCentered:s})=>`
      <trygno-legehelp heading="${l}" max-width="${a}" is-horizontally-centered="${s}">
        ${r}
        <div slot="footer">© Powered by stenciljs</div>
      </trygno-legehelp>
    `,e=i.bind({});e.args={heading:"Last ned Tryg Legehjelp appen",slotContent:"Tryg Legehjelp appen gir deg den digitale helsetjenesten rett på mobilen.",isHorizontallyCentered:!0};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  slotContent,
  heading,
  maxWidth,
  isHorizontallyCentered
}) => \`
      <trygno-legehelp heading="\${heading}" max-width="\${maxWidth}" is-horizontally-centered="\${isHorizontallyCentered}">
        \${slotContent}
        <div slot="footer">© Powered by stenciljs</div>
      </trygno-legehelp>
    \``,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,d as default};
