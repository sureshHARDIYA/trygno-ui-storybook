import{v as U}from"./v4-CtRu48qb.js";const{addons:z}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:G}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:f}=__STORYBOOK_MODULE_GLOBAL__;var J=Object.defineProperty,Q=(e,n)=>{for(var t in n)J(e,t,{get:n[t],enumerable:!0})},X="storybook/actions",Z=`${X}/action-event`,ee={depth:10,clearOnStoryChange:!0,limit:50},W=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:W(t,n)},ne=e=>!!(typeof e=="object"&&e&&W(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),te=e=>{if(ne(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},oe=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?U():Date.now().toString(36)+Math.random().toString(36).substring(2);function y(e,n={}){let t={...ee,...n},o=function(...a){var E,T;if(n.implicit){let _=(E="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:E.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(_){let p=!((T=globalThis==null?void 0:globalThis.FEATURES)!=null&&T.disallowImplicitActionsInRenderV8),v=new G({phase:_.phase,name:e,deprecated:p});if(p)console.warn(v);else throw v}}let r=z.getChannel(),i=oe(),l=5,w=a.map(te),Y=a.length>1?w:w[0],H={id:i,count:0,data:{name:e,args:Y},options:{...t,maxDepth:l+(t.depth||3),allowFunction:t.allowFunction||!1}};r.emit(Z,H)};return o.isAction=!0,o.implicit=n.implicit,o}const{definePreview:pe}=__STORYBOOK_MODULE_PREVIEW_API__,{global:$}=__STORYBOOK_MODULE_GLOBAL__;var re={};Q(re,{argsEnhancers:()=>de,loaders:()=>ce});var V=(e,n)=>typeof n[e]>"u"&&!(e in n),ae=e=>{let{initialArgs:n,argTypes:t,id:o,parameters:{actions:a}}=e;if(!a||a.disable||!a.argTypesRegex||!t)return{};let r=new RegExp(a.argTypesRegex);return Object.entries(t).filter(([i])=>!!r.test(i)).reduce((i,[l,w])=>(V(l,n)&&(i[l]=y(l,{implicit:!0,id:o})),i),{})},ie=e=>{let{initialArgs:n,argTypes:t,parameters:{actions:o}}=e;return o!=null&&o.disable||!t?{}:Object.entries(t).filter(([a,r])=>!!r.action).reduce((a,[r,i])=>(V(r,n)&&(a[r]=y(typeof i.action=="string"?i.action:r)),a),{})},de=[ie,ae],O=!1,se=e=>{let{parameters:{actions:n}}=e;if(!(n!=null&&n.disable)&&!O&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in $&&typeof $.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let t=$.__STORYBOOK_TEST_ON_MOCK_CALL__;t((o,a)=>{let r=o.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(i=>r.startsWith(i)))&&y(r)(a)}),O=!0}},ce=[se];const ue={title:"Components/Shared/Summary/SummaryDropdown",component:"trygno-summary-dropdown",tags:["autodocs"],argTypes:{iconName:{control:{type:"text"},description:"Name of the icon to display."},productName:{control:{type:"text"},description:"Name of the product being summarized."},displayIdentifier:{control:{type:"text"},description:"Display identifier or additional product info."},price:{control:{type:"text"},description:"Price information for the product."},editButtonText:{control:{type:"text"},description:"Text for the Edit button."},cancelButtonText:{control:{type:"text"},description:"Text for the Cancel button."},collapseText:{control:{type:"text"},description:"Text shown on the collapse button."},expandedText:{control:{type:"text"},description:"Text shown on the expand button."},collapseId:{control:{type:"text"},description:"Unique ID for the collapse section."},expandedSlotContent:{control:{type:"text"},description:"Content to render inside the expanded collapse slot."},isOpenSummaryDropdown:{control:{type:"boolean"},description:"Boolean to open/show expanded collapse."},showCollapseButton:{control:{type:"boolean"},description:"Boolean to show/hide collapse/expanded button."}}},c=e=>{const n=document.createElement("div");return n.innerHTML=`
    <trygno-summary-dropdown
      icon-name="${e.iconName}"
      product-name="${e.productName}"
      display-identifier="${e.displayIdentifier}"
      price="${e.price}"
      edit-button-text="${e.editButtonText}"
      cancel-button-text="${e.cancelButtonText}"
      collapse-text="${e.collapseText}"
      expanded-text="${e.expandedText}"
      collapse-id="${e.collapseId}"
      is-open-summary-dropdown="${e.isOpenSummaryDropdown}"
      show-collapse-button="${e.showCollapseButton}"
    >
      <div slot="actions-button"></div>
      <div slot="expanded-slot">${e.expandedSlotContent}</div>
    </trygno-summary-dropdown>
  `,requestAnimationFrame(()=>{const t=n.querySelector("trygno-summary-dropdown");t&&(t.addEventListener("clickEdit",e.clickEdit||(()=>{})),t.addEventListener("clickCancel",e.clickCancel||(()=>{})))}),n},d=c.bind({});d.args={iconName:"tryg-car",productName:"Bilforsikring",displayIdentifier:"AB12345",price:"250 Kr/mnd",editButtonText:"Edit",cancelButtonText:"Cancel",collapseText:"Vis detaljer",expandedText:"Skjul detaljer",showCollapseButton:!0,collapseId:"1",isOpenSummaryDropdown:!1,expandedSlotContent:"<p>Expanded detailed content here.</p>",clickEdit:y("Edit button clicked"),clickCancel:y("Cancel button clicked")};const u=c.bind({});u.args={...d.args,editButtonText:"",cancelButtonText:""};const m=c.bind({});m.args={...d.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `};const g=c.bind({});g.args={...d.args,editButtonText:"",cancelButtonText:"",showCollapseButton:!1};const s=c.bind({});s.args={...d.args};s.parameters={viewport:{defaultViewport:"iphone12"}};const x=c.bind({});x.args={...d.args,isOpenSummaryDropdown:!0,expandedSlotContent:`
    <ul>
      <li>Coverage: 100%</li>
      <li>Roadside Assistance Included</li>
      <li>Annual Check-up Free</li>
    </ul>
  `,clickEdit:()=>{console.log("Edit clicked → triggered...")},clickCancel:()=>{console.log("Cancel clicked → triggered...")}};var h,b,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var S,B,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var I,L,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
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
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var A,D,N;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
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
}`,...(N=(D=g.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,P,j;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
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
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var q,F,K;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
}`,...(K=(F=x.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const me=["Default","WithoutEditCancel","ExpandedCollapseSlot","WithoutEditCancelCollapse","MobileView","CancelButtonWithPopup"];export{x as CancelButtonWithPopup,d as Default,m as ExpandedCollapseSlot,s as MobileView,u as WithoutEditCancel,g as WithoutEditCancelCollapse,me as __namedExportsOrder,ue as default};
