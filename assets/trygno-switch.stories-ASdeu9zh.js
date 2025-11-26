const p={title:"Components/Core/Switch",component:"trygno-switch",tags:["autodocs"],argTypes:{label:{control:{type:"text"},description:"Label displayed next to the switch"},checked:{control:{type:"boolean"},description:"Whether the switch is toggled on"},activeColor:{control:{type:"color"},description:"Background color when switch is active"},inactiveColor:{control:{type:"color"},description:"Background color when switch is inactive"},sliderColor:{control:{type:"color"},description:"Color of the slider knob"},inputId:{control:{type:"text"},description:"Unique ID for the input element"},name:{control:{type:"text"},description:"Name attribute for the input element"}},parameters:{docs:{page:null}}},t=({label:i,checked:r,activeColor:c,inactiveColor:l,sliderColor:a,inputId:s,name:d})=>`
  <div style="display: flex; align-items: center; gap: 12px;">
    <trygno-switch
      label="${i}"
      checked="${r}"
      active-color="${c}"
      inactive-color="${l}"
      slider-color="${a}"
      input-id="${s}"
      name="${d}"
    ></trygno-switch>
  </div>
`,e=t.bind({});e.args={label:"Enable feature",checked:!1,activeColor:"#105b64",inactiveColor:"#ccc",sliderColor:"#fff",inputId:"switch-id1",name:"switch-name"};const o=t.bind({});o.args={label:"Feature enabled",checked:!0,activeColor:"#105b64",inactiveColor:"#ccc",sliderColor:"#fff",inputId:"switch-id2",name:"switch-name"};const n=t.bind({});n.args={label:"Custom Colors",checked:!0,activeColor:"#28a745",inactiveColor:"#f0f0f0",sliderColor:"#000",inputId:"switch-id3",name:"switch-name"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  activeColor,
  inactiveColor,
  sliderColor,
  inputId,
  name
}) => \`
  <div style="display: flex; align-items: center; gap: 12px;">
    <trygno-switch
      label="\${label}"
      checked="\${checked}"
      active-color="\${activeColor}"
      inactive-color="\${inactiveColor}"
      slider-color="\${sliderColor}"
      input-id="\${inputId}"
      name="\${name}"
    ></trygno-switch>
  </div>
\``,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  activeColor,
  inactiveColor,
  sliderColor,
  inputId,
  name
}) => \`
  <div style="display: flex; align-items: center; gap: 12px;">
    <trygno-switch
      label="\${label}"
      checked="\${checked}"
      active-color="\${activeColor}"
      inactive-color="\${inactiveColor}"
      slider-color="\${sliderColor}"
      input-id="\${inputId}"
      name="\${name}"
    ></trygno-switch>
  </div>
\``,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  checked,
  activeColor,
  inactiveColor,
  sliderColor,
  inputId,
  name
}) => \`
  <div style="display: flex; align-items: center; gap: 12px;">
    <trygno-switch
      label="\${label}"
      checked="\${checked}"
      active-color="\${activeColor}"
      inactive-color="\${inactiveColor}"
      slider-color="\${sliderColor}"
      input-id="\${inputId}"
      name="\${name}"
    ></trygno-switch>
  </div>
\``,...n.parameters?.docs?.source}}};const h=["Default","Checked","CustomColors"];export{o as Checked,n as CustomColors,e as Default,h as __namedExportsOrder,p as default};
