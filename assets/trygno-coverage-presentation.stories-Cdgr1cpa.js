const u={title:"Components/Recipie/Coverage/Coverage Presentation",component:"trygno-coverage-presentation",tags:["autodocs"],argTypes:{coverageName:{control:{type:"text"},description:"Name of the coverage option"},coverageCode:{control:{type:"text"},description:"Unique code for the coverage"},coverageDescription:{control:{type:"text"},description:"Detailed description of the coverage"},priceText:{control:{type:"text"},description:"Text showing the price"},buttonText:{control:{type:"text"},description:"Text for the accordion button"},recommendedText:{control:{type:"text"},description:"Text indicating recommended coverage"},checked:{control:{type:"boolean"},description:"Whether the coverage is selected"},isRecommendedCoverage:{control:{type:"boolean"},description:"Indicates if the coverage is recommended"},includeditemlist:{control:{type:"object"},description:"List of included items in the coverage"},downloadTermText:{control:{type:"text"},description:"Text for the download button"},downloadTermLink:{control:{type:"text"},description:"Link for the download button"}}},r=({coverageName:d,coverageCode:i,coverageDescription:c,priceText:a,buttonText:s,recommendedText:m,checked:l,isRecommendedCoverage:g,includeditemlist:p,downloadTermText:v,downloadTermLink:x})=>`
  <trygno-coverage-presentation
    coverage-name="${d}"
    coverage-code="${i}"
    coverage-description="${c}"
    price-text="${a}"
    button-text="${s}"
    recommended-text="${m}"
    checked="${l}"
    is-recommended-coverage="${g}"
    includeditemlist='${JSON.stringify(p)}'
    download-term-text="${v}"
    download-term-link="${x}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
`,e=r.bind({});e.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1200 kr",buttonText:"View Included Items",recommendedText:"Recommended Coverage",checked:!0,isRecommendedCoverage:!0,includeditemlist:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0,additionalList:""},{mainHeader:"Not Included item 3",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}],downloadTermText:"Download Terms",downloadTermLink:"https://tryg.no"};const o=r.bind({});o.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1200 kr",buttonText:"View Included Items",recommendedText:"",checked:!0,isRecommendedCoverage:!0,includeditemlist:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"}],downloadTermText:"Download Terms"};const t=r.bind({});t.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1490 Kr",buttonText:"",recommendedText:"",checked:!1,isRecommendedCoverage:!1,includeditemlist:[],downloadTermText:""};const n=r.bind({});n.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"",buttonText:"",recommendedText:"",checked:!1,isRecommendedCoverage:!1,includeditemlist:[],downloadTermText:""};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  coverageName,
  coverageCode,
  coverageDescription,
  priceText,
  buttonText,
  recommendedText,
  checked,
  isRecommendedCoverage,
  includeditemlist,
  downloadTermText,
  downloadTermLink
}) => \`
  <trygno-coverage-presentation
    coverage-name="\${coverageName}"
    coverage-code="\${coverageCode}"
    coverage-description="\${coverageDescription}"
    price-text="\${priceText}"
    button-text="\${buttonText}"
    recommended-text="\${recommendedText}"
    checked="\${checked}"
    is-recommended-coverage="\${isRecommendedCoverage}"
    includeditemlist='\${JSON.stringify(includeditemlist)}'
    download-term-text="\${downloadTermText}"
    download-term-link="\${downloadTermLink}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  coverageName,
  coverageCode,
  coverageDescription,
  priceText,
  buttonText,
  recommendedText,
  checked,
  isRecommendedCoverage,
  includeditemlist,
  downloadTermText,
  downloadTermLink
}) => \`
  <trygno-coverage-presentation
    coverage-name="\${coverageName}"
    coverage-code="\${coverageCode}"
    coverage-description="\${coverageDescription}"
    price-text="\${priceText}"
    button-text="\${buttonText}"
    recommended-text="\${recommendedText}"
    checked="\${checked}"
    is-recommended-coverage="\${isRecommendedCoverage}"
    includeditemlist='\${JSON.stringify(includeditemlist)}'
    download-term-text="\${downloadTermText}"
    download-term-link="\${downloadTermLink}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
\``,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  coverageName,
  coverageCode,
  coverageDescription,
  priceText,
  buttonText,
  recommendedText,
  checked,
  isRecommendedCoverage,
  includeditemlist,
  downloadTermText,
  downloadTermLink
}) => \`
  <trygno-coverage-presentation
    coverage-name="\${coverageName}"
    coverage-code="\${coverageCode}"
    coverage-description="\${coverageDescription}"
    price-text="\${priceText}"
    button-text="\${buttonText}"
    recommended-text="\${recommendedText}"
    checked="\${checked}"
    is-recommended-coverage="\${isRecommendedCoverage}"
    includeditemlist='\${JSON.stringify(includeditemlist)}'
    download-term-text="\${downloadTermText}"
    download-term-link="\${downloadTermLink}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
\``,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  coverageName,
  coverageCode,
  coverageDescription,
  priceText,
  buttonText,
  recommendedText,
  checked,
  isRecommendedCoverage,
  includeditemlist,
  downloadTermText,
  downloadTermLink
}) => \`
  <trygno-coverage-presentation
    coverage-name="\${coverageName}"
    coverage-code="\${coverageCode}"
    coverage-description="\${coverageDescription}"
    price-text="\${priceText}"
    button-text="\${buttonText}"
    recommended-text="\${recommendedText}"
    checked="\${checked}"
    is-recommended-coverage="\${isRecommendedCoverage}"
    includeditemlist='\${JSON.stringify(includeditemlist)}'
    download-term-text="\${downloadTermText}"
    download-term-link="\${downloadTermLink}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
\``,...n.parameters?.docs?.source}}};const T=["DefaultCoverage","NotRecommendedCoverage","CoverageWithPrice","CoverageWithoutPrice"];export{t as CoverageWithPrice,n as CoverageWithoutPrice,e as DefaultCoverage,o as NotRecommendedCoverage,T as __namedExportsOrder,u as default};
