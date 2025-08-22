const i={title:"Components/Core/Expandable",component:"trygno-expandable-button",tags:["autodocs"],argTypes:{isExpanded:{control:{type:"boolean"},description:"Determines if the expandable is expanded."},variant:{options:["border","noborder"],control:{type:"select"},description:"The variant of the expandable button."},chevronIconSlot:{options:["prefix","postfix"],control:{type:"select"},description:"Determines the position of the chevron icon."},leadingIcon:{control:{type:"text"},description:"Icon name to display before the header."},screenReaderCollapseText:{control:{type:"text"},description:"Text for screen readers when collapsed."},screenReaderExpandedText:{control:{type:"text"},description:"Text for screen readers when expanded."},hideContentSlot:{control:{type:"boolean"},description:"Hides the content slot if true."},content:{control:{type:"text"},description:"Content to be displayed inside the expandable."},label:{control:{type:"text"},description:"Label for the expandable header."}}},a=n=>`
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
`,e=a.bind({});e.args={isExpanded:!1,variant:"border",chevronIconSlot:"postfix",leadingIcon:"none",screenReaderCollapseText:"Collapsed",screenReaderExpandedText:"Expanded",hideContentSlot:!1,label:"Expandable Header",content:"<p>Expandable content goes here</p>"};const t=a.bind({});t.args={...e.args,variant:"border"};const r=a.bind({});r.args={...e.args,variant:"noborder"};const o=a.bind({});o.args={...e.args,variant:"underline",hideContentSlot:!0};const s=a.bind({});s.args={...e.args,isExpanded:!0,variant:"noborder"};const d=a.bind({});d.args={...e.args,leadingIcon:"check-circle"};const l=a.bind({});l.args={...e.args,chevronIconSlot:"prefix"};const c=a.bind({});c.args={...e.args,hideContentSlot:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => \`
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
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => \`
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
\``,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => \`
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
\``,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => \`
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
\``,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => \`
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
\``,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => \`
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
\``,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => \`
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
\``,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => \`
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
\``,...c.parameters?.docs?.source}}};const p=["Default","BorderVariant","NoBorderVariant","UnderlineVariant","Expanded","LeadingIcon","PrefixChevronIcon","HiddenContentSlot"];export{t as BorderVariant,e as Default,s as Expanded,c as HiddenContentSlot,d as LeadingIcon,r as NoBorderVariant,l as PrefixChevronIcon,o as UnderlineVariant,p as __namedExportsOrder,i as default};
