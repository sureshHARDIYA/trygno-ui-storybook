const c={title:"Components/Recipie/Coverage/Coverage Included Presentation",component:"coverage-included-presentation",tags:["autodocs"],argTypes:{includeditemlist:{control:{type:"text"},description:"List of included items in JSON string format"},resetAccordionState:{control:{type:"boolean"},description:"Reset accordion state when toggled"}}},d=({includeditemlist:n,resetAccordionState:o})=>`
  <coverage-included-presentation
    includeditemlist='${n}'
    reset-accordion-state='${o}'
  ></coverage-included-presentation>
`,e=d.bind({});e.args={includeditemlist:JSON.stringify([{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0,additionalList:""},{mainHeader:"Not Included item 3",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};const t=d.bind({});t.args={includeditemlist:JSON.stringify([{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};const i=d.bind({});i.args={includeditemlist:JSON.stringify([{mainHeader:"Not Included item",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}]),resetAccordionState:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  includeditemlist,
  resetAccordionState
}) => \`
  <coverage-included-presentation
    includeditemlist='\${includeditemlist}'
    reset-accordion-state='\${resetAccordionState}'
  ></coverage-included-presentation>
\``,...i.parameters?.docs?.source}}};const r=["DefaultAccordionState","IncludedAccordionState","NotIncludedAccordionState"];export{e as DefaultAccordionState,t as IncludedAccordionState,i as NotIncludedAccordionState,r as __namedExportsOrder,c as default};
