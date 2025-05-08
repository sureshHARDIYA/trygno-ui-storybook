const l={title:"Components/Core/Dialog",component:"trygno-dialog",tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"Controls whether the dialog is open or closed",defaultValue:!1},closeOnEscape:{control:"boolean",description:"Enables closing the dialog when the Escape key is pressed",defaultValue:!0}},parameters:{docs:{story:{height:"500px"}}}},s=({closeOnEscape:a,isOpen:r,content:i})=>`
 <div>
 <trygno-button variant="primary"onclick="javascript: document.querySelector('trygno-dialog')?.openModal()">Open Modal</trygno-button>
  <trygno-dialog
    id="my-dialog"
    is-open=${r}
    close-on-escape=${a}
  >
    ${i}
  </trygno-dialog>
  <div>
`,e=s.bind({});e.args={isOpen:!1,closeOnEscape:!0,content:`
        <p>If you need to reconfigure any of the individual Essentials addons, install them manually by following the installation instructions, and depending on the method of choice, register them in your Storybook configuration file (i.e., .storybook/main.js|ts) and adjust the configuration to suit your needs. For example:</p>
        <trygno-alert variant="danger">
        <trygno-icon name="alert-circle" color="#F8E2E2" stroke="#CE0303" slot="icon-left"></trygno-icon>
        Vi kan dessverre ikke tilby gravidforsikring hvis det er funnet unormale tilstander ved fosteret.</trygno-alert>
        <p>The actions addon is used to display data received by event handler (callback) arguments in your stories.</p>
    `};var o,n,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  closeOnEscape,
  isOpen,
  content
}) => \`
 <div>
 <trygno-button variant="primary"onclick="javascript: document.querySelector('trygno-dialog')?.openModal()">Open Modal</trygno-button>
  <trygno-dialog
    id="my-dialog"
    is-open=\${isOpen}
    close-on-escape=\${closeOnEscape}
  >
    \${content}
  </trygno-dialog>
  <div>
\``,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,l as default};
