const{action:p}=__STORYBOOK_MODULE_ACTIONS__,u={title:"Components/Recipie/Summary/SummaryDropdown",component:"trygno-summary-dropdown",tags:["autodocs"],argTypes:{iconName:{control:{type:"text"},description:"Name of the icon to display."},productName:{control:{type:"text"},description:"Name of the product being summarized."},displayIdentifier:{control:{type:"text"},description:"Display identifier or additional product info."},price:{control:{type:"text"},description:"Price information for the product."},editButtonText:{control:{type:"text"},description:"Text for the Edit button."},cancelButtonText:{control:{type:"text"},description:"Text for the Cancel button."},collapseText:{control:{type:"text"},description:"Text shown on the collapse button."},expandedText:{control:{type:"text"},description:"Text shown on the expand button."},collapseId:{control:{type:"text"},description:"Unique ID for the collapse section."},expandedSlotContent:{control:{type:"text"},description:"Content to render inside the expanded collapse slot."},isOpenSummaryDropdown:{control:{type:"boolean"},description:"Boolean to open/show expanded collapse."},isOngoing:{control:{type:"boolean"},description:"Boolean to show ongoing or completed."},showCollapseButton:{control:{type:"boolean"},description:"Boolean to show/hide collapse/expanded button."}}},t=n=>{const c=document.createElement("div");return c.innerHTML=`
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
      is-ongoing="${n.isOngoing}"
      show-collapse-button="${n.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">${n.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  `,requestAnimationFrame(()=>{const l=c.querySelector("trygno-summary-dropdown");l&&(l.addEventListener("clickEdit",n.clickEdit||(()=>{})),l.addEventListener("clickCancel",n.clickCancel||(()=>{})))}),c},e=t.bind({});e.args={iconName:"tryg-car",productName:"Bilforsikring",displayIdentifier:"AB12345",price:"250 Kr/mnd",editButtonText:"Edit",cancelButtonText:"Cancel",collapseText:"Vis detaljer",expandedText:"Skjul detaljer",showCollapseButton:!0,collapseId:"1",isOpenSummaryDropdown:!1,isOngoing:!1,expandedSlotContent:"<p>Expanded detailed content here.</p>",clickEdit:p("Edit button clicked"),clickCancel:p("Cancel button clicked")};const r=t.bind({});r.args={...e.args,editButtonText:"",cancelButtonText:""};const a=t.bind({});a.args={...e.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `};const d=t.bind({});d.args={...e.args,editButtonText:"",cancelButtonText:"",showCollapseButton:!1};const o=t.bind({});o.args={...e.args};o.parameters={viewport:{defaultViewport:"iphone12"}};const i=t.bind({});i.args={...e.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `,clickEdit:()=>{console.log("Edit clicked → triggered...")},clickCancel:()=>{console.log("Cancel clicked → triggered...")}};const s=t.bind({});s.args={...e.args,isOngoing:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
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
      is-ongoing="\${args.isOngoing}"
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
}`,...s.parameters?.docs?.source}}};const m=["Default","WithoutEditCancel","ExpandedCollapseSlot","WithoutEditCancelCollapse","MobileView","CancelButtonWithPopup","OngoingDropdown"];export{i as CancelButtonWithPopup,e as Default,a as ExpandedCollapseSlot,o as MobileView,s as OngoingDropdown,r as WithoutEditCancel,d as WithoutEditCancelCollapse,m as __namedExportsOrder,u as default};
