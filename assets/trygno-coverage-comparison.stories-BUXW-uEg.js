const o={title:"Components/Recipie/Coverage/Trygno Coverage Comparison",component:"trygno-coverage-comparison",tags:["autodocs"],argTypes:{coveragelist:{control:{type:"object"},description:"List of coverage options for comparison",defaultValue:[]}}},r=i=>`
  <trygno-coverage-comparison
    coveragelist='${JSON.stringify(i.coveragelist)}'
    term-link='{"linkText": "Se fullstendige vilkår (åpnes i ny fane)", "linkHref": "https://www.tryg.no/sn/dyreforsikring/index/katteforsikring.html"}'
  ></trygno-coverage-comparison>
`,e=r.bind({});e.args={coveragelist:[{coverageName:"Coverage 1",coveragePrice:"1500 kr",code:"comp-plan-001",isRecommendedCoverage:!0,includedCoveredItem:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0}]},{coverageName:"Coverage 2",code:"basic-plan-002",isRecommendedCoverage:!1,includedCoveredItem:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!1,additionalList:"Additional details"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0}]}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: any) => \`
  <trygno-coverage-comparison
    coveragelist='\${JSON.stringify(args.coveragelist)}'
    term-link='{"linkText": "Se fullstendige vilkår (åpnes i ny fane)", "linkHref": "https://www.tryg.no/sn/dyreforsikring/index/katteforsikring.html"}'
  ></trygno-coverage-comparison>
\``,...e.parameters?.docs?.source}}};const n=["DefaultComparison"];export{e as DefaultComparison,n as __namedExportsOrder,o as default};
