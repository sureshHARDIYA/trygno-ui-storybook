const a={title:"Components/Recipie/Legehelp",component:"trygno-legehelp",tags:["autodocs"],argTypes:{isHorizontallyCentered:{control:{type:"boolean"}},maxWidth:{control:{type:"text"}}},parameters:{docs:{page:null}}},l=({slotContent:t,heading:n,maxWidth:o,isHorizontallyCentered:r})=>`
      <trygno-legehelp heading="${n}" max-width="${o}" is-horizontally-centered="${r}">
        ${t}
        <div slot="footer">© Powered by stenciljs</div>
      </trygno-legehelp>
    `,e=l.bind({});e.args={heading:"Last ned Tryg Legehjelp appen",slotContent:"Tryg Legehjelp appen gir deg den digitale helsetjenesten rett på mobilen.",isHorizontallyCentered:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  slotContent,
  heading,
  maxWidth,
  isHorizontallyCentered
}) => \`
      <trygno-legehelp heading="\${heading}" max-width="\${maxWidth}" is-horizontally-centered="\${isHorizontallyCentered}">
        \${slotContent}
        <div slot="footer">© Powered by stenciljs</div>
      </trygno-legehelp>
    \``,...e.parameters?.docs?.source}}};const s=["Default"];export{e as Default,s as __namedExportsOrder,a as default};
