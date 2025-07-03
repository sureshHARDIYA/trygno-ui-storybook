const u={title:"Components/Core/Card",component:"trygno-card",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["colored","bordered","shadowed"]}},parameters:{docs:{page:null}}},r=({slotContent:p,heading:y,variant:m})=>`
    <trygno-card heading="${y}" variant="${m}">
      ${p}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  `,e=r.bind({});e.args={heading:"Hva skjer videre?",variant:"colored",slotContent:"Du er trygt forsikret og endringen gjelder fra 10.07.2024 . Skjer det noe, melder du skade på tryg.no eller på Min side."};const n=r.bind({});n.args={heading:"Oppsummering av endring",slotContent:"Using HTML to add your copyright symbol is a best practice that ensures consistency and accessibility, making it the preferred method over using an image. If you used an image instead, it would be more work to ensure it looks good across devices and browsers. Plus, you can easily change the size and color of the symbol with CSS.",variant:"bordered"};const o=r.bind({});o.args={heading:"Shadow Oppsummering av endring",slotContent:'<div style="padding: 15px 10px;">Using HTML to add your copyright symbol is a best practice that ensures consistency and accessibility, making it the preferred method over using an image. If you used an image instead, it would be more work to ensure it looks good across devices and browsers. Plus, you can easily change the size and color of the symbol with CSS.</div>',variant:"shadowed"};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,l,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`({
  slotContent,
  heading,
  variant
}) => \`
    <trygno-card heading="\${heading}" variant="\${variant}">
      \${slotContent}
      <div slot="footer">© Powered by stenciljs</div>
    </trygno-card>
  \``,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const v=["Default","WithBorder","WithShadow"];export{e as Default,n as WithBorder,o as WithShadow,v as __namedExportsOrder,u as default};
