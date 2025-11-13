const s={title:"Components/Core/Input",component:"trygno-input",tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Label for the input field"},helpText:{control:{type:"text"},description:"Helpful text for the input field"},error:{control:{type:"text"},description:"Error message on field"},disabled:{control:{type:"boolean"}}},parameters:{docs:{page:null}}},l=({label:n,helpText:i,disabled:d,inputId:a,error:o=""})=>`
  <div style="width: 348px;">
    <trygno-input label="${n}" help-text="${i}" disabled="${d}" error="${o}"  input-id="${a}"/>
  </div>
`,e=l.bind({});e.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!1,inputId:"input-id1"};const t=l.bind({});t.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!0,inputId:"input-id2"};const r=l.bind({});r.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!1,error:"Something was wrong with the user input",inputId:"input-id3"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...r.parameters?.docs?.source}}};const p=["Default","Disabled","WithError"];export{e as Default,t as Disabled,r as WithError,p as __namedExportsOrder,s as default};
