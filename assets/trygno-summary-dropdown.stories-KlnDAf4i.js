const{action:l}=__STORYBOOK_MODULE_ACTIONS__,I={title:"Components/Recipie/Summary/SummaryDropdown",component:"trygno-summary-dropdown",tags:["autodocs"],argTypes:{iconName:{control:{type:"text"},description:"Name of the icon to display."},productName:{control:{type:"text"},description:"Name of the product being summarized."},displayIdentifier:{control:{type:"text"},description:"Display identifier or additional product info."},price:{control:{type:"text"},description:"Price information for the product."},editButtonText:{control:{type:"text"},description:"Text for the Edit button."},cancelButtonText:{control:{type:"text"},description:"Text for the Cancel button."},collapseText:{control:{type:"text"},description:"Text shown on the collapse button."},expandedText:{control:{type:"text"},description:"Text shown on the expand button."},collapseId:{control:{type:"text"},description:"Unique ID for the collapse section."},expandedSlotContent:{control:{type:"text"},description:"Content to render inside the expanded collapse slot."},isOpenSummaryDropdown:{control:{type:"boolean"},description:"Boolean to open/show expanded collapse."},showCollapseButton:{control:{type:"boolean"},description:"Boolean to show/hide collapse/expanded button."}}},o=n=>{const s=document.createElement("div");return s.innerHTML=`
    <trygno-summary-dropdown
      icon-name="${n.iconName}"
      product-name="${n.productName}"
      display-identifier="${n.displayIdentifier}"
      price="${n.price}"
      edit-button-text="${n.editButtonText}"
      cancel-button-text="${n.cancelButtonText}"
      collapse-text="${n.collapseText}"
      expanded-text="${n.expandedText}"
      collapse-id="${n.collapseId}"
      is-open-summary-dropdown="${n.isOpenSummaryDropdown}"
      show-collapse-button="${n.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">${n.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  `,requestAnimationFrame(()=>{const c=s.querySelector("trygno-summary-dropdown");c&&(c.addEventListener("clickEdit",n.clickEdit||(()=>{})),c.addEventListener("clickCancel",n.clickCancel||(()=>{})))}),s},e=o.bind({});e.args={iconName:"tryg-car",productName:"Bilforsikring",displayIdentifier:"AB12345",price:"250 Kr/mnd",editButtonText:"Edit",cancelButtonText:"Cancel",collapseText:"Vis detaljer",expandedText:"Skjul detaljer",showCollapseButton:!0,collapseId:"1",isOpenSummaryDropdown:!1,expandedSlotContent:"<p>Expanded detailed content here.</p>",clickEdit:l("Edit button clicked"),clickCancel:l("Cancel button clicked")};const r=o.bind({});r.args={...e.args,editButtonText:"",cancelButtonText:""};const a=o.bind({});a.args={...e.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `};const d=o.bind({});d.args={...e.args,editButtonText:"",cancelButtonText:"",showCollapseButton:!1};const t=o.bind({});t.args={...e.args};t.parameters={viewport:{defaultViewport:"iphone12"}};const i=o.bind({});i.args={...e.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `,clickEdit:()=>{console.log("Edit clicked → triggered...")},clickCancel:()=>{console.log("Cancel clicked → triggered...")}};var p,u,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,$,C;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var T,v,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var b,S,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,f,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const container = document.createElement("div");
  container.innerHTML = \`
    <trygno-summary-dropdown
      icon-name="\${args.iconName}"
      product-name="\${args.productName}"
      display-identifier="\${args.displayIdentifier}"
      price="\${args.price}"
      edit-button-text="\${args.editButtonText}"
      cancel-button-text="\${args.cancelButtonText}"
      collapse-text="\${args.collapseText}"
      expanded-text="\${args.expandedText}"
      collapse-id="\${args.collapseId}"
      is-open-summary-dropdown="\${args.isOpenSummaryDropdown}"
      show-collapse-button="\${args.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">\${args.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  \`;
  requestAnimationFrame(() => {
    const dropdown = container.querySelector("trygno-summary-dropdown");
    if (dropdown) {
      dropdown.addEventListener("clickEdit", args.clickEdit || (() => {}));
      dropdown.addEventListener("clickCancel", args.clickCancel || (() => {}));
    }
  });
  return container;
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const L=["Default","WithoutEditCancel","ExpandedCollapseSlot","WithoutEditCancelCollapse","MobileView","CancelButtonWithPopup"];export{i as CancelButtonWithPopup,e as Default,a as ExpandedCollapseSlot,t as MobileView,r as WithoutEditCancel,d as WithoutEditCancelCollapse,L as __namedExportsOrder,I as default};
