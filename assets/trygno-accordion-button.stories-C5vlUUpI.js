const l={title:"Components/Core/Accordion",component:"trygno-accordion-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Determines if the accordion is expanded."},variant:{options:["border","noborder"],control:{type:"select"},description:"The variant of the accordion button."},chevronIconSlot:{options:["prefix","postfix"],control:{type:"select"},description:"Determines the position of the chevron icon."},leadingIcon:{control:{type:"text"},description:"Icon name to display before the header."},screenReaderCollapseText:{control:{type:"text"},description:"Text for screen readers when collapsed."},screenReaderExpandedText:{control:{type:"text"},description:"Text for screen readers when expanded."},hideContentSlot:{control:{type:"boolean"},description:"Hides the content slot if true."},content:{control:{type:"text"},description:"Content to be displayed inside the accordion."},label:{control:{type:"text"},description:"Label for the accordion header."}}},r=n=>`
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
`,e=r.bind({});e.args={isExpanded:!1,variant:"border",chevronIconSlot:"postfix",leadingIcon:"none",screenReaderCollapseText:"Collapsed",screenReaderExpandedText:"Expanded",hideContentSlot:!1,label:"Accordion Header",content:"<p>Accordion content goes here</p>"};const o=r.bind({});o.args={...e.args,variant:"border"};const t=r.bind({});t.args={...e.args,variant:"noborder"};const a=r.bind({});a.args={...e.args,variant:"underline",hideContentSlot:!0};const s=r.bind({});s.args={...e.args,isExpanded:!0,variant:"noborder"};const d=r.bind({});d.args={...e.args,leadingIcon:"check-circle"};const c=r.bind({});c.args={...e.args,chevronIconSlot:"prefix"};const i=r.bind({});i.args={...e.args,hideContentSlot:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => \`
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
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => \`
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
\``,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => \`
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
\``,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => \`
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
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => \`
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
\``,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => \`
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
\``,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => \`
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
\``,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => \`
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
\``,...i.parameters?.docs?.source}}};const p=["Default","BorderVariant","NoBorderVariant","UnderlineVariant","Expanded","LeadingIcon","PrefixChevronIcon","HiddenContentSlot"];export{o as BorderVariant,e as Default,s as Expanded,i as HiddenContentSlot,d as LeadingIcon,t as NoBorderVariant,c as PrefixChevronIcon,a as UnderlineVariant,p as __namedExportsOrder,l as default};
