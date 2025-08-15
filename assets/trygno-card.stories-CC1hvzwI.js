const i={title:"Components/Core/Card",component:"trygno-card",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["colored","bordered","shadowed"]}},parameters:{docs:{page:null}}},r=({slotContent:t,heading:a,variant:s})=>`
    <trygno-card heading="${a}" variant="${s}">
      ${t}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  `,e=r.bind({});e.args={heading:"Hva skjer videre?",variant:"colored",slotContent:"Du er trygt forsikret og endringen gjelder fra 10.07.2024 . Skjer det noe, melder du skade på tryg.no eller på Min side."};const n=r.bind({});n.args={heading:"Oppsummering av endring",slotContent:"Using HTML to add your copyright symbol is a best practice that ensures consistency and accessibility, making it the preferred method over using an image. If you used an image instead, it would be more work to ensure it looks good across devices and browsers. Plus, you can easily change the size and color of the symbol with CSS.",variant:"bordered"};const o=r.bind({});o.args={heading:"Shadow Oppsummering av endring",slotContent:'<div style="padding: 15px 10px;">Using HTML to add your copyright symbol is a best practice that ensures consistency and accessibility, making it the preferred method over using an image. If you used an image instead, it would be more work to ensure it looks good across devices and browsers. Plus, you can easily change the size and color of the symbol with CSS.</div>',variant:"shadowed"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...o.parameters?.docs?.source}}};const d=["Default","WithBorder","WithShadow"];export{e as Default,n as WithBorder,o as WithShadow,d as __namedExportsOrder,i as default};
