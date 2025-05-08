const w={title:"Components/Shared/Summary/SummaryDropdown",component:"trygno-summary-dropdown",tags:["autodocs"],argTypes:{iconName:{control:{type:"text"},description:"Name of the icon to display."},productName:{control:{type:"text"},description:"Name of the product being summarized."},displayIdentifier:{control:{type:"text"},description:"Display identifier or additional product info."},price:{control:{type:"text"},description:"Price information for the product."},editButtonText:{control:{type:"text"},description:"Text for the Edit button."},cancelButtonText:{control:{type:"text"},description:"Text for the Cancel button."},collapseText:{control:{type:"text"},description:"Text shown on the collapse/expand button."},collapseId:{control:{type:"text"},description:"Unique ID for the collapse section."},expandedSlotContent:{control:{type:"text"},description:"Content to render inside the expanded collapse slot."},isOpenSummaryDropdown:{control:{type:"boolean"},description:"Boolean to open/show expanded collapse."}}},a=e=>`
  <trygno-summary-dropdown
    icon-name="${e.iconName}"
    product-name="${e.productName}"
    display-identifier="${e.displayIdentifier}"
    price="${e.price}"
    edit-button-text="${e.editButtonText}"
    cancel-button-text="${e.cancelButtonText}"
    collapse-text="${e.collapseText}"
    collapse-id="${e.collapseId}"
    is-open-summary-dropdown="${e.isOpenSummaryDropdown}"
  >
    <div slot="actions-button"></div>
    <div slot="expanded-slot">${e.expandedSlotContent}</div>
  </trygno-summary-dropdown>
`,t=a.bind({});t.args={iconName:"tryg-car",productName:"Bilforsikring",displayIdentifier:"AB12345",price:"250 Kr/mnd",editButtonText:"Edit",cancelButtonText:"Cancel",collapseText:"Skjul detaljer",collapseId:"1",isOpenSummaryDropdown:!1,expandedSlotContent:"<p>Expanded detailed content here.</p>"};const n=a.bind({});n.args={...t.args,editButtonText:"",cancelButtonText:""};const r=a.bind({});r.args={...t.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `};const o=a.bind({});o.args={...t.args};o.parameters={viewport:{defaultViewport:"iphone12"}};var d,s,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
  <trygno-summary-dropdown
    icon-name="\${args.iconName}"
    product-name="\${args.productName}"
    display-identifier="\${args.displayIdentifier}"
    price="\${args.price}"
    edit-button-text="\${args.editButtonText}"
    cancel-button-text="\${args.cancelButtonText}"
    collapse-text="\${args.collapseText}"
    collapse-id="\${args.collapseId}"
    is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
  >
    <div slot="actions-button"></div>
    <div slot="expanded-slot">\${args.expandedSlotContent}</div>
  </trygno-summary-dropdown>
\``,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => \`
  <trygno-summary-dropdown
    icon-name="\${args.iconName}"
    product-name="\${args.productName}"
    display-identifier="\${args.displayIdentifier}"
    price="\${args.price}"
    edit-button-text="\${args.editButtonText}"
    cancel-button-text="\${args.cancelButtonText}"
    collapse-text="\${args.collapseText}"
    collapse-id="\${args.collapseId}"
    is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
  >
    <div slot="actions-button"></div>
    <div slot="expanded-slot">\${args.expandedSlotContent}</div>
  </trygno-summary-dropdown>
\``,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,u,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
  <trygno-summary-dropdown
    icon-name="\${args.iconName}"
    product-name="\${args.productName}"
    display-identifier="\${args.displayIdentifier}"
    price="\${args.price}"
    edit-button-text="\${args.editButtonText}"
    cancel-button-text="\${args.cancelButtonText}"
    collapse-text="\${args.collapseText}"
    collapse-id="\${args.collapseId}"
    is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
  >
    <div slot="actions-button"></div>
    <div slot="expanded-slot">\${args.expandedSlotContent}</div>
  </trygno-summary-dropdown>
\``,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,$;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
  <trygno-summary-dropdown
    icon-name="\${args.iconName}"
    product-name="\${args.productName}"
    display-identifier="\${args.displayIdentifier}"
    price="\${args.price}"
    edit-button-text="\${args.editButtonText}"
    cancel-button-text="\${args.cancelButtonText}"
    collapse-text="\${args.collapseText}"
    collapse-id="\${args.collapseId}"
    is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
  >
    <div slot="actions-button"></div>
    <div slot="expanded-slot">\${args.expandedSlotContent}</div>
  </trygno-summary-dropdown>
\``,...($=(g=o.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};const T=["Default","WithoutEditCancel","ExpandedCollapseSlot","MobileView"];export{t as Default,r as ExpandedCollapseSlot,o as MobileView,n as WithoutEditCancel,T as __namedExportsOrder,w as default};
