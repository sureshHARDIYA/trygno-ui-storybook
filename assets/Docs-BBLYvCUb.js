import{j as e}from"./index-_k1vW10U.js";import{useMDXComponents as s}from"./index-DD0U_lpG.js";import{b as m,C as n}from"./blocks-DR02H8eR.js";const g={argTypes:{label:{description:"Label for the combobox input",control:"text",defaultValue:"Choose your company"},helptext:{description:"Help text displayed under the label",control:"text",defaultValue:"Select the company you are affiliated with"},placeholder:{description:"Placeholder shown in the input field",control:"text",defaultValue:"Search here"},options:{description:'JSON string of options (e.g., [{ label: "A", value: "a" }])',control:"object",defaultValue:JSON.stringify([{label:"Company A",value:"a"},{label:"Company B",value:"b"}])},selectedItem:{description:"The value of the item that should be selected by default",control:"text",defaultValue:""},NoOptionFoundText:{name:"NoOptionFoundText",description:"Text to display when no options match the input",control:"text",defaultValue:"No results found!"},highlightMatch:{description:"Whether matching text in the dropdown is highlighted",control:"boolean",defaultValue:!0},dropdownExpanded:{description:"Emitted when the dropdown is opened",action:"dropdownExpanded",table:{category:"Events"}},dropdownCollapsed:{description:"Emitted when the dropdown is closed",action:"dropdownCollapsed",table:{category:"Events"}},optionSelected:{description:"Emitted when an option is selected",action:"optionSelected",table:{category:"Events"}}},title:"Components/Core/Combobox",component:"trygno-combobox",parameters:{docs:{page:c}}},r=({options:t,id:o,label:d,helptext:b,placeholder:p,selectedItem:h,highlightMatch:u})=>`
  <trygno-combobox 
    id="${o}"
    label="${d}"
    helptext="${b}"
    placeholder="${p}"
    selected-item="${h??""}"
    options='${t}'
    highlight-match="${u??!0}"
  ></trygno-combobox>
`,l=r.bind({});l.args={options:'["Apple", "Apricoat", "Berry", "Banana", "Coconut", "Durian", "Grapes", "Kiwi", "Lychee", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"]',label:"Choose your fruits",helptext:"Pick of the day is Banana",selectedItem:"Banana",placeholder:"Start typing to search fruits",id:"fruit-combobox-selector"};const a=r.bind({});a.args={id:"company-selector-combobox",label:"Choose your company",helptext:"Select the company you are affiliated with",placeholder:"Start typing to search companies",options:'[ {"label": "Techify", "value": "techify"}, {"label": "Techify Global", "value": "techify-global"}, {"label": "Techify Global Solutions", "value": "techify-global-solutions"}, {"label": "Techify Global Solutions Ltd", "value": "techify-global-solutions-ltd"}, {"label": "Neo", "value": "neo"}, {"label": "Neo Systems", "value": "neo-systems"}, {"label": "Neo Systems Group", "value": "neo-systems-group"}, {"label": "Neo Systems Group Corp", "value": "neo-systems-group-corp"}, {"label": "Zenware", "value": "zenware"}, {"label": "Zenware Labs", "value": "zenware-labs"}, {"label": "Zenware Labs International", "value": "zenware-labs-international"}, {"label": "Zenware Labs International Inc", "value": "zenware-labs-international-inc"}, {"label": "Infinitas", "value": "infinitas"}, {"label": "Infinitas Technologies", "value": "infinitas-technologies"}, {"label": "Infinitas Technologies Limited", "value": "infinitas-technologies-ltd"}, {"label": "Infinitas Technologies Limited Group", "value": "infinitas-technologies-ltd-group"}, {"label": "Bluebird", "value": "bluebird"}, {"label": "Bluebird Ventures", "value": "bluebird-ventures"}, {"label": "Bluebird Ventures Group", "value": "bluebird-ventures-group"}, {"label": "Bluebird Ventures Group AS", "value": "bluebird-ventures-group-as"},{"label": "Qbit", "value": "qbit"}, {"label": "Qbit Systems", "value": "qbit-systems"}, {"label": "Qbit Systems Solutions", "value": "qbit-systems-solutions"}, {"label": "Qbit Systems Solutions AB", "value": "qbit-systems-solutions-ab"},{"label": "Skyloop", "value": "skyloop"}, {"label": "Skyloop Tech", "value": "skyloop-tech"}, {"label": "Skyloop Tech Services", "value": "skyloop-tech-services"}, {"label": "Skyloop Tech Services Limited", "value": "skyloop-tech-services-limited"}, {"label": "Brightify", "value": "brightify"}, {"label": "Brightify Labs", "value": "brightify-labs"}, {"label": "Brightify Labs Nordic", "value": "brightify-labs-nordic"}, {"label": "Brightify Labs Nordic AS", "value": "brightify-labs-nordic-as"}, {"label": "Omnix", "value": "omnix"}, {"label": "Omnix Cloud", "value": "omnix-cloud"}, {"label": "Omnix Cloud Systems", "value": "omnix-cloud-systems"}, {"label": "Omnix Cloud Systems Europe", "value": "omnix-cloud-systems-europe"}, {"label": "Codexa", "value": "codexa"}, {"label": "Codexa Digital", "value": "codexa-digital"}, {"label": "Codexa Digital Agency", "value": "codexa-digital-agency"}, {"label": "Codexa Digital Agency AB", "value": "codexa-digital-agency-ab"}]'};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  options,
  id,
  label,
  helptext,
  placeholder,
  selectedItem,
  highlightMatch
}) => \`
  <trygno-combobox 
    id="\${id}"
    label="\${label}"
    helptext="\${helptext}"
    placeholder="\${placeholder}"
    selected-item="\${selectedItem ?? ""}"
    options='\${options}'
    highlight-match="\${highlightMatch ?? true}"
  ></trygno-combobox>
\``,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  options,
  id,
  label,
  helptext,
  placeholder,
  selectedItem,
  highlightMatch
}) => \`
  <trygno-combobox 
    id="\${id}"
    label="\${label}"
    helptext="\${helptext}"
    placeholder="\${placeholder}"
    selected-item="\${selectedItem ?? ""}"
    options='\${options}'
    highlight-match="\${highlightMatch ?? true}"
  ></trygno-combobox>
\``,...a.parameters?.docs?.source}}};const y=["Default","AdvancedUsage"],w=Object.freeze(Object.defineProperty({__proto__:null,AdvancedUsage:a,Default:l,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));function i(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Components/Core/Combobox"}),`
`,e.jsx(o.h1,{id:"combobox-typeahead",children:"Combobox (Typeahead)"}),`
`,e.jsxs(o.p,{children:["This component is still experimental. The ",e.jsx(o.code,{children:"<trygno-combobox>"})," is an accessible and customizable dropdown component with built-in support for keyboard navigation, screen readers, and auto-suggestions. Inspired by Material UI’s Autocomplete, it allows users to filter and select options by typing."]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-features",children:"✨ Features"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Fully accessible (ARIA, keyboard navigation)"}),`
`,e.jsx(o.li,{children:"Searchable dropdown with filtering"}),`
`,e.jsx(o.li,{children:"Works with strings or object-based options"}),`
`,e.jsx(o.li,{children:"Custom labels, help texts, and placeholders"}),`
`,e.jsx(o.li,{children:"Controlled selection support"}),`
`]}),`
`,e.jsx(o.hr,{}),`
`,e.jsx(o.h2,{id:"-usage",children:"📦 Usage"}),`
`,e.jsx(o.p,{children:"Options as array of string."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<trygno-combobox
  id="fruit-combobox"
  label="Choose your fruits"
  helptext="Pick of the day is Banana"
  placeholder="Start typing to search fruits"
  selected-item="Banana"
  options='["Apple", "Apricoat", "Berry", "Banana", "Coconut", "Durian", "Grapes", "Kiwi", "Lychee", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"]'
></trygno-combobox>
`})}),`
`,e.jsx(o.p,{children:"This should render the following combobox."}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(o.h3,{id:"advance-usage",children:"Advance Usage"}),`
`,e.jsx(o.p,{children:"Options as array of object."}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(o.h2,{id:"accessiblity",children:"Accessiblity"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["We support Accessiblity patterns defined by ",e.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/",rel:"nofollow",children:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/."})]}),`
`]})]})}function c(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}const S=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"}));export{S as D,w as t};
