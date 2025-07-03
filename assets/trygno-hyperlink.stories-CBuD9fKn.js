const c={title:"Components/Core/Hyperlink",component:"trygno-hyperlink",tags:["autodocs"],argTypes:{externalLink:{control:"text"},linkText:{control:"text"},preLinkText:{control:"text"},postLinkText:{control:"text"},download:{control:"boolean"},targetVal:{control:"boolean"},altText:{control:"text"},titleVal:{control:"text"},variant:{control:"text"}},parameters:{docs:{page:null}}},r=t=>`
  <trygno-hyperlink
    external-link="${t.externalLink}"
    link-text="${t.linkText}"
    pre-ink-text="${t.preLinkText}"
    post-link-text="${t.postLinkText}"
    download="${t.download}"
    target-vVal="${t.targetVal}"
    alt-text="${t.altText}"
    title-val="${t.titleVal}"
    variant="${t.variant}"
  ></trygno-hyperlink>
`,e=r.bind({});e.args={externalLink:"https://tryg.no",linkText:"Example Link",preLinkText:"",postLinkText:"",download:!1,targetVal:!1,altText:"",titleVal:""};const n=r.bind({});n.args={externalLink:"https://tryg.no",linkText:"Last ned fullstendige vilkår",preLinkText:"",postLinkText:"",download:!1,targetVal:!1,altText:"",titleVal:"",variant:"underline"};const a=r.bind({});a.args={externalLink:"/path/to/test.pdf",linkText:"Download File",preLinkText:"",postLinkText:"",download:!0,targetVal:!1,altText:"",titleVal:"Download File"};var l,o,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
  <trygno-hyperlink
    external-link="\${args.externalLink}"
    link-text="\${args.linkText}"
    pre-ink-text="\${args.preLinkText}"
    post-link-text="\${args.postLinkText}"
    download="\${args.download}"
    target-vVal="\${args.targetVal}"
    alt-text="\${args.altText}"
    title-val="\${args.titleVal}"
    variant="\${args.variant}"
  ></trygno-hyperlink>
\``,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,x,k;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => \`
  <trygno-hyperlink
    external-link="\${args.externalLink}"
    link-text="\${args.linkText}"
    pre-ink-text="\${args.preLinkText}"
    post-link-text="\${args.postLinkText}"
    download="\${args.download}"
    target-vVal="\${args.targetVal}"
    alt-text="\${args.altText}"
    title-val="\${args.titleVal}"
    variant="\${args.variant}"
  ></trygno-hyperlink>
\``,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var p,g,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
  <trygno-hyperlink
    external-link="\${args.externalLink}"
    link-text="\${args.linkText}"
    pre-ink-text="\${args.preLinkText}"
    post-link-text="\${args.postLinkText}"
    download="\${args.download}"
    target-vVal="\${args.targetVal}"
    alt-text="\${args.altText}"
    title-val="\${args.titleVal}"
    variant="\${args.variant}"
  ></trygno-hyperlink>
\``,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const $=["DefaultLink","PrimaryLink","DownloadLink"];export{e as DefaultLink,a as DownloadLink,n as PrimaryLink,$ as __namedExportsOrder,c as default};
