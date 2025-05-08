const I={title:"Components/Shared/Coverage/Coverage Presentation",component:"trygno-coverage-presentation",tags:["autodocs"],argTypes:{coverageName:{control:{type:"text"},description:"Name of the coverage option"},coverageCode:{control:{type:"text"},description:"Unique code for the coverage"},coverageDescription:{control:{type:"text"},description:"Detailed description of the coverage"},priceText:{control:{type:"text"},description:"Text showing the price"},buttonText:{control:{type:"text"},description:"Text for the accordion button"},recommendedText:{control:{type:"text"},description:"Text indicating recommended coverage"},checked:{control:{type:"boolean"},description:"Whether the coverage is selected"},isRecommendedCoverage:{control:{type:"boolean"},description:"Indicates if the coverage is recommended"},includeditemlist:{control:{type:"object"},description:"List of included items in the coverage"},downloadTermText:{control:{type:"text"},description:"Text for the download button"},downloadTermLink:{control:{type:"text"},description:"Link for the download button"}}},r=({coverageName:T,coverageCode:$,coverageDescription:f,priceText:y,buttonText:b,recommendedText:C,checked:k,isRecommendedCoverage:w,includeditemlist:h,downloadTermText:N,downloadTermLink:D})=>`
  <trygno-coverage-presentation
    coverage-name="${T}"
    coverage-code="${$}"
    coverage-description="${f}"
    price-text="${y}"
    button-text="${b}"
    recommended-text="${C}"
    checked="${k}"
    is-recommended-coverage="${w}"
    includeditemlist='${JSON.stringify(h)}'
    download-term-text="${N}"
    download-term-link="${D}"
  ><div slot="additional-info">  <trygno-infobox
    icon="tryg-cat"
    color="custom"
  >
    <p>Vi anbefaler Katt Ekstra.</p>
  </trygno-infobox></div></trygno-coverage-presentation>
`,e=r.bind({});e.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1200 kr",buttonText:"View Included Items",recommendedText:"Recommended Coverage",checked:!0,isRecommendedCoverage:!0,includeditemlist:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 2",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"},{mainHeader:"Included item 3",description:"Included item description.",isIncluded:!0,additionalList:""},{mainHeader:"Not Included item 3",description:"Not Included item description.",isIncluded:!1,additionalList:"Additional details 1, Additional details 2"}],downloadTermText:"Download Terms",downloadTermLink:"https://tryg.no"};const o=r.bind({});o.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1200 kr",buttonText:"View Included Items",recommendedText:"",checked:!0,isRecommendedCoverage:!0,includeditemlist:[{mainHeader:"Included item 1",description:"Included item description.",isIncluded:!0,additionalList:"Additional details 1, Additional details 2"}],downloadTermText:"Download Terms"};const t=r.bind({});t.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"1490 Kr",buttonText:"",recommendedText:"",checked:!1,isRecommendedCoverage:!1,includeditemlist:[],downloadTermText:""};const n=r.bind({});n.args={coverageName:"Coverage Name",coverageCode:"000-000001",coverageDescription:"<strong>Description of coverage</strong> Test description.",priceText:"",buttonText:"",recommendedText:"",checked:!1,isRecommendedCoverage:!1,includeditemlist:[],downloadTermText:""};var d,i,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
\``,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var a,s,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
\``,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var l,g,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
\``,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,x,u;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
\``,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const L=["DefaultCoverage","NotRecommendedCoverage","CoverageWithPrice","CoverageWithoutPrice"];export{t as CoverageWithPrice,n as CoverageWithoutPrice,e as DefaultCoverage,o as NotRecommendedCoverage,L as __namedExportsOrder,I as default};
