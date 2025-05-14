const _={title:"Components/Core/Accordion",component:"trygno-accordion-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Determines if the accordion is expanded."},variant:{options:["border","noborder"],control:{type:"select"},description:"The variant of the accordion button."},chevronIconSlot:{options:["prefix","postfix"],control:{type:"select"},description:"Determines the position of the chevron icon."},leadingIcon:{control:{type:"text"},description:"Icon name to display before the header."},screenReaderCollapseText:{control:{type:"text"},description:"Text for screen readers when collapsed."},screenReaderExpandedText:{control:{type:"text"},description:"Text for screen readers when expanded."},hideContentSlot:{control:{type:"boolean"},description:"Hides the content slot if true."},content:{control:{type:"text"},description:"Content to be displayed inside the accordion."},label:{control:{type:"text"},description:"Label for the accordion header."}}},r=n=>`
  <trygno-accordion-button
    is-expanded="${n.isExpanded}"
    variant="${n.variant}"
    chevron-icon-slot="${n.chevronIconSlot}"
    leading-icon="${n.leadingIcon}"
    screen-reader-collapse-text="${n.screenReaderCollapseText}"
    screen-reader-expanded-text="${n.screenReaderExpandedText}"
    hide-content-slot="${n.hideContentSlot}"
  >
    <span slot="label">${n.label}</span>
    ${n.hideContentSlot?"":`<div slot="inner-content-slot">${n.content}</div>`}
  </trygno-accordion-button>
`,e=r.bind({});e.args={isExpanded:!1,variant:"border",chevronIconSlot:"postfix",leadingIcon:"none",screenReaderCollapseText:"Collapsed",screenReaderExpandedText:"Expanded",hideContentSlot:!1,label:"Accordion Header",content:"<p>Accordion content goes here</p>"};const o=r.bind({});o.args={...e.args,variant:"border"};const t=r.bind({});t.args={...e.args,variant:"noborder"};const a=r.bind({});a.args={...e.args,variant:"underline",hideContentSlot:!0};const s=r.bind({});s.args={...e.args,isExpanded:!0,variant:"noborder"};const d=r.bind({});d.args={...e.args,leadingIcon:"check-circle"};const c=r.bind({});c.args={...e.args,chevronIconSlot:"prefix"};const i=r.bind({});i.args={...e.args,hideContentSlot:!0};var l,p,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,$,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(h=($=o.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var v,b,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var S,C,m;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(m=(C=a.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};var y,I,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(E=(I=s.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,R,f;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(f=(R=d.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var V,B,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var D,H,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`args => \`
  <trygno-accordion-button
    is-expanded="\${args.isExpanded}"
    variant="\${args.variant}"
    chevron-icon-slot="\${args.chevronIconSlot}"
    leading-icon="\${args.leadingIcon}"
    screen-reader-collapse-text="\${args.screenReaderCollapseText}"
    screen-reader-expanded-text="\${args.screenReaderExpandedText}"
    hide-content-slot="\${args.hideContentSlot}"
  >
    <span slot="label">\${args.label}</span>
    \${!args.hideContentSlot ? \`<div slot="inner-content-slot">\${args.content}</div>\` : ''}
  </trygno-accordion-button>
\``,...(L=(H=i.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const w=["Default","BorderVariant","NoBorderVariant","UnderlineVariant","Expanded","LeadingIcon","PrefixChevronIcon","HiddenContentSlot"];export{o as BorderVariant,e as Default,s as Expanded,i as HiddenContentSlot,d as LeadingIcon,t as NoBorderVariant,c as PrefixChevronIcon,a as UnderlineVariant,w as __namedExportsOrder,_ as default};
