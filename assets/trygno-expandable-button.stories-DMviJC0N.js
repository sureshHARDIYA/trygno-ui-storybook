const w={title:"Components/Core/Expandable",component:"trygno-expandable-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Determines if the expandable is expanded."},variant:{options:["border","noborder"],control:{type:"select"},description:"The variant of the expandable button."},chevronIconSlot:{options:["prefix","postfix"],control:{type:"select"},description:"Determines the position of the chevron icon."},leadingIcon:{control:{type:"text"},description:"Icon name to display before the header."},screenReaderCollapseText:{control:{type:"text"},description:"Text for screen readers when collapsed."},screenReaderExpandedText:{control:{type:"text"},description:"Text for screen readers when expanded."},hideContentSlot:{control:{type:"boolean"},description:"Hides the content slot if true."},content:{control:{type:"text"},description:"Content to be displayed inside the expandable."},label:{control:{type:"text"},description:"Label for the expandable header."}}},a=n=>`
  <trygno-expandable-button
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
  </trygno-expandable-button>
`,e=a.bind({});e.args={isExpanded:!1,variant:"border",chevronIconSlot:"postfix",leadingIcon:"none",screenReaderCollapseText:"Collapsed",screenReaderExpandedText:"Expanded",hideContentSlot:!1,label:"Expandable Header",content:"<p>Expandable content goes here</p>"};const t=a.bind({});t.args={...e.args,variant:"border"};const r=a.bind({});r.args={...e.args,variant:"noborder"};const o=a.bind({});o.args={...e.args,variant:"underline",hideContentSlot:!0};const s=a.bind({});s.args={...e.args,isExpanded:!0,variant:"noborder"};const d=a.bind({});d.args={...e.args,leadingIcon:"check-circle"};const l=a.bind({});l.args={...e.args,chevronIconSlot:"prefix"};const c=a.bind({});c.args={...e.args,hideContentSlot:!0};var i,p,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,$,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(b=($=t.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var h,v,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var S,C,m;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(m=(C=o.parameters)==null?void 0:C.docs)==null?void 0:m.source}}};var y,E,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var T,R,f;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(f=(R=d.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var V,B,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(D=(B=l.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,L,_;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => \`
  <trygno-expandable-button
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
  </trygno-expandable-button>
\``,...(_=(L=c.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const N=["Default","BorderVariant","NoBorderVariant","UnderlineVariant","Expanded","LeadingIcon","PrefixChevronIcon","HiddenContentSlot"];export{t as BorderVariant,e as Default,s as Expanded,c as HiddenContentSlot,d as LeadingIcon,r as NoBorderVariant,l as PrefixChevronIcon,o as UnderlineVariant,N as __namedExportsOrder,w as default};
