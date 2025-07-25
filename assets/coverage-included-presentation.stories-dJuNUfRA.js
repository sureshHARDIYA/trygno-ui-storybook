const A={title:"Components/Recipie/Coverage/Coverage Included Presentation",component:"coverage-included-presentation",tags:["autodocs"],argTypes:{includeditemlist:{control:{type:"text"},description:"List of included items in JSON string format"},resetAccordionState:{control:{type:"boolean"},description:"Reset accordion state when toggled"}}},d=({includeditemlist:p,resetAccordionState:g})=>`
  <coverage-included-presentation
    includeditemlist='${p}'
    reset-accordion-state='${g}'
  ></coverage-included-presentation>
`,e=d.bind({});e.args={includeditemlist:JSON.stringify([{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0,additionalList:""},{mainHeader:"Not Included item 3",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};const t=d.bind({});t.args={includeditemlist:JSON.stringify([{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};const i=d.bind({});i.args={includeditemlist:JSON.stringify([{mainHeader:"Not Included item",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};var n,o,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...(c=(o=e.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,u,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const I=["DefaultAccordionState","IncludedAccordionState","NotIncludedAccordionState"];export{e as DefaultAccordionState,t as IncludedAccordionState,i as NotIncludedAccordionState,I as __namedExportsOrder,A as default};
