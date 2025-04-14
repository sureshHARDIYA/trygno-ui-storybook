const d={title:"Components/Shared/Coverage/Trygno Coverage Comparison",component:"trygno-coverage-comparison",tags:["autodocs"],argTypes:{coveragelist:{control:{type:"object"},description:"List of coverage options for comparison",defaultValue:[]}}},t=n=>`
  <trygno-coverage-comparison
    coveragelist='${JSON.stringify(n.coveragelist)}'
    term-link='{"linkText": "Se fullstendige vilkår (åpnes i ny fane)", "linkHref": "https://www.tryg.no/sn/dyreforsikring/index/katteforsikring.html"}'
  ></trygno-coverage-comparison>
`,e=t.bind({});e.args={coveragelist:[{coverageName:"Coverage 1",coveragePrice:"1500 kr",code:"comp-plan-001",isRecommendedCoverage:!0,includedCoveredItem:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0}]},{coverageName:"Coverage 2",code:"basic-plan-002",isRecommendedCoverage:!1,includedCoveredItem:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!1,additionalList:"Additional details"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0}]}]};var i,r,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => \`
  <trygno-coverage-comparison
    coveragelist='\${JSON.stringify(args.coveragelist)}'
    term-link='{"linkText": "Se fullstendige vilkår (åpnes i ny fane)", "linkHref": "https://www.tryg.no/sn/dyreforsikring/index/katteforsikring.html"}'
  ></trygno-coverage-comparison>
\``,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const a=["DefaultComparison"];export{e as DefaultComparison,a as __namedExportsOrder,d as default};
