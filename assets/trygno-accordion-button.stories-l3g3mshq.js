const D={title:"Components/Core/Accordion",component:"trygno-accordion-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Determines if the accordion is expanded."},variant:{options:["border","noborder"],control:{type:"select"},description:"The variant of the accordion button."},chevronIconSlot:{options:["prefix","postfix"],control:{type:"select"},description:"Determines the position of the chevron icon."},leadingIcon:{control:{type:"text"},description:"Icon name to display before the header."},screenReaderCollapseText:{control:{type:"text"},description:"Text for screen readers when collapsed."},screenReaderExpandedText:{control:{type:"text"},description:"Text for screen readers when expanded."},hideContentSlot:{control:{type:"boolean"},description:"Hides the content slot if true."},content:{control:{type:"text"},description:"Content to be displayed inside the accordion."},label:{control:{type:"text"},description:"Label for the accordion header."}}},o=n=>`
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
`,e=o.bind({});e.args={isExpanded:!1,variant:"border",chevronIconSlot:"postfix",leadingIcon:"none",screenReaderCollapseText:"Collapsed",screenReaderExpandedText:"Expanded",hideContentSlot:!1,label:"Accordion Header",content:"<p>Accordion content goes here</p>"};const r=o.bind({});r.args={...e.args,variant:"border"};const t=o.bind({});t.args={...e.args,variant:"noborder"};const a=o.bind({});a.args={...e.args,isExpanded:!0,variant:"noborder"};const s=o.bind({});s.args={...e.args,leadingIcon:"check-circle"};const d=o.bind({});d.args={...e.args,chevronIconSlot:"prefix"};const c=o.bind({});c.args={...e.args,hideContentSlot:!0};var i,l,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
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
\``,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,x,$;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => \`
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
\``,...($=(x=r.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var h,v,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
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
\``,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var u,S,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => \`
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
\``,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var m,y,I;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => \`
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
\``,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,T,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => \`
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
\``,...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var f,B,A;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`args => \`
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
\``,...(A=(B=c.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const H=["Default","BorderVariant","NoBorderVariant","Expanded","LeadingIcon","PrefixChevronIcon","HiddenContentSlot"];export{r as BorderVariant,e as Default,a as Expanded,c as HiddenContentSlot,s as LeadingIcon,t as NoBorderVariant,d as PrefixChevronIcon,H as __namedExportsOrder,D as default};
