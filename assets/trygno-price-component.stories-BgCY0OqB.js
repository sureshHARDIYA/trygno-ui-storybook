const m={title:"Components/Recipie/Price/Price Component",component:"trygno-price-component",tags:["autodocs"],argTypes:{totalPriceText:{control:{type:"text"},description:"Text to display for the total price"},oldPriceText:{control:{type:"text"},description:"Text to display for the old price"},suffix:{control:{type:"text"},description:"Suffix which appends with price, it could kr/mnd or kr"},priceValue:{control:{type:"number"},description:"Value of the current price"},oldPriceValue:{control:{type:"number"},description:"Value of the old price"},isLoadingDetails:{control:{type:"boolean"},description:"Whether the price details are loading"},isSticky:{control:{type:"boolean"},description:"decides if the price component should be sticky"}}},f=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  ></trygno-price-component>
`,g=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  >Additional payment information</trygno-price-component>
`,P=({totalPriceText:i,oldPriceText:t,priceValue:r,oldPriceValue:o,isLoadingDetails:n,suffix:c,isSticky:a})=>`
  <trygno-price-component
    total-price-text="${i}"
    old-price-text="${t}"
    price-value="${r}"
    suffix="${c}"
    old-price-value="${o}"
    is-loading-details="${n}"
    is-sticky="${a}"
  ><p slot="price-spinner">Loading spinner slot</p></trygno-price-component>
`,l=f.bind({});l.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd"};const s=f.bind({});s.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr"};const p=f.bind({});p.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd",isSticky:!1};const d=f.bind({});d.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!1};const u=g.bind({});u.args={totalPriceText:"Foreløpig pris:",oldPriceText:"",priceValue:1490,oldPriceValue:"",isLoadingDetails:!0,suffix:"kr/mnd",isSticky:!1};const e=g.bind({});e.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!1};const x=P.bind({});e.args={totalPriceText:"Foreløpig pris:",oldPriceText:"Tidligere pris",priceValue:1490,oldPriceValue:1,isLoadingDetails:!0,suffix:"kr",isSticky:!0};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
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
\``,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
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
\``,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
\``,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
\``,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
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
\``,...u.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
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
\``,...e.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`({
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
\``,...x.parameters?.docs?.source}}};const y=["DefaultStickyPrice","StickyWithOldPrice","DefaultPrice","WithOldPrice","DefaultPriceWithAdditionalInfo","WithOldPriceAndAdditionalInfo","WithOldPriceWithSpinner"];export{p as DefaultPrice,u as DefaultPriceWithAdditionalInfo,l as DefaultStickyPrice,s as StickyWithOldPrice,d as WithOldPrice,e as WithOldPriceAndAdditionalInfo,x as WithOldPriceWithSpinner,y as __namedExportsOrder,m as default};
