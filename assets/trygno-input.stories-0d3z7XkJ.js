const m={title:"Components/Core/Input",component:"trygno-input",tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Label for the input field"},helpText:{control:{type:"text"},description:"Helpful text for the input field"},error:{control:{type:"text"},description:"Error message on field"},disabled:{control:{type:"boolean"}}},parameters:{docs:{page:null}}},l=({label:c,helpText:h,disabled:x,inputId:g,error:$=""})=>`
  <div style="width: 348px;">
    <trygno-input label="${c}" help-text="${h}" disabled="${x}" error="${$}"  input-id="${g}"/>
  </div>
`,e=l.bind({});e.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!1,inputId:"input-id1"};const t=l.bind({});t.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!0,inputId:"input-id2"};const r=l.bind({});r.args={label:"Label",helpText:"Helpful text to guide the user",disabled:!1,error:"Something was wrong with the user input",inputId:"input-id3"};var n,i,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var p,u,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
  label,
  helpText,
  disabled,
  inputId,
  error = ''
}) => \`
  <div style="width: 348px;">
    <trygno-input label="\${label}" help-text="\${helpText}" disabled="\${disabled}" error="\${error}"  input-id="\${inputId}"/>
  </div>
\``,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const y=["Default","Disabled","WithError"];export{e as Default,t as Disabled,r as WithError,y as __namedExportsOrder,m as default};
