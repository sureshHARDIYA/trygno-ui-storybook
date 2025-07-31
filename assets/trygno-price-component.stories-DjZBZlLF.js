const R={title:"Components/Recipie/Price/Price Component",component:"trygno-price-component",tags:["autodocs"],argTypes:{totalPriceText:{control:{type:"text"},description:"Text to display for the total price"},oldPriceText:{control:{type:"text"},description:"Text to display for the old price"},suffix:{control:{type:"text"},description:"Suffix which appends with price, it could kr/mnd or kr"},priceValue:{control:{type:"number"},description:"Value of the current price"},oldPriceValue:{control:{type:"number"},description:"Value of the old price"},isLoadingDetails:{control:{type:"boolean"},description:"Whether the price details are loading"},isSticky:{control:{type:"boolean"},description:"decides if the price component should be sticky"}}},f=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  ></trygno-price-component>
`,w=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  >Additional payment information</trygno-price-component>
`,E=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  ><p slot="price-spinner">Loading spinner slot</p></trygno-price-component>
`,l=f.bind({});l.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd"};const s=f.bind({});s.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr"};const p=f.bind({});p.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd",isSticky:!1};const d=f.bind({});d.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!1};const u=w.bind({});u.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd",isSticky:!1};const e=w.bind({});e.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!1};const x=E.bind({});e.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!0};var g,P,m;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  ></trygno-price-component>
\``,...(m=(P=l.parameters)==null?void 0:P.docs)==null?void 0:m.source}}};var y,$,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  ></trygno-price-component>
\``,...(T=($=s.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,k,S;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  ></trygno-price-component>
\``,...(S=(k=p.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,h,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  ></trygno-price-component>
\``,...(L=(h=d.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var v,W,b;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  >Additional payment information</trygno-price-component>
\``,...(b=(W=u.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var A,O,F;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  >Additional payment information</trygno-price-component>
\``,...(F=(O=e.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,C,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`({
  totalPriceText,
  oldPriceText,
  priceValue,
  oldPriceValue,
  isLoadingDetails,
  suffix,
  isSticky
}) => \`
  <trygno-price-component
    total-price-text="\${totalPriceText}"
    old-price-text="\${oldPriceText}"
    price-value="\${priceValue}"
    suffix="\${suffix}"
    old-price-value="\${oldPriceValue}"
    is-loading-details="\${isLoadingDetails}"
    is-sticky="\${isSticky}"
  ><p slot="price-spinner">Loading spinner slot</p></trygno-price-component>
\``,...(_=(C=x.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const j=["DefaultStickyPrice","StickyWithOldPrice","DefaultPrice","WithOldPrice","DefaultPriceWithAdditionalInfo","WithOldPriceAndAdditionalInfo","WithOldPriceWithSpinner"];export{p as DefaultPrice,u as DefaultPriceWithAdditionalInfo,l as DefaultStickyPrice,s as StickyWithOldPrice,d as WithOldPrice,e as WithOldPriceAndAdditionalInfo,x as WithOldPriceWithSpinner,j as __namedExportsOrder,R as default};
