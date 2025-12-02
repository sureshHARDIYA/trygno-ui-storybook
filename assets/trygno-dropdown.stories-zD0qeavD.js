const a={title:"Components/Core/Dropdown",component:"trygno-dropdown",tags:["autodocs"],argTypes:{options:{control:"object",defaultValue:[{label:"8 000 km",value:"8"},{label:"2 000 km",value:"12"},{label:"16 000 km",value:"16"},{label:"20 000 km",value:"20"},{label:"25 000 km",value:"25"},{label:"30 000 km",value:"30"},{label:"Ubegrenset kjørelengde",value:"99"}]},selectedItem:{control:"text",defaultValue:""},placeholder:{control:"text",defaultValue:"Select an option"},required:{control:"boolean",defaultValue:!1},error:{control:"text",defaultValue:""},label:{control:"text",defaultValue:"Label"}},parameters:{docs:{page:null}}},t=r=>`
    <trygno-dropdown
      options='${JSON.stringify(r.options)}'
      selected-item="${r.selectedItem}"
      placeholder="${r.placeholder}"
      required="${r.required}"
      error="${r.error}"
      label="${r.label}"
    > 
      <h3 slot="label" id="select-your-contry-label-id">Hvilken kjørelengde ønsker du? *</h3>
      <p slot="help-text">Kjørelengde er hvor langt du kjører i løpet av et år. </p>
      </trygno-dropdown>
  `,e=t.bind({});e.args={options:[{label:"8 000 km",value:"8"},{label:"2 000 km",value:"12"},{label:"16 000 km",value:"16"},{label:"20 000 km",value:"20"},{label:"25 000 km",value:"25"},{label:"30 000 km",value:"30"},{label:"Ubegrenset kjørelengde",value:"99"}],selectedItem:"",placeholder:"Select an option",required:!1,error:""};const l=t.bind({});l.args={...e.args,selectedItem:"Option 2"};const o=t.bind({});o.args={...e.args,error:"This field is required"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => \`
    <trygno-dropdown
      options='\${JSON.stringify(args.options)}'
      selected-item="\${args.selectedItem}"
      placeholder="\${args.placeholder}"
      required="\${args.required}"
      error="\${args.error}"
      label="\${args.label}"
    > 
      <h3 slot="label" id="select-your-contry-label-id">Hvilken kjørelengde ønsker du? *</h3>
      <p slot="help-text">Kjørelengde er hvor langt du kjører i løpet av et år. </p>
      </trygno-dropdown>
  \``,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => \`
    <trygno-dropdown
      options='\${JSON.stringify(args.options)}'
      selected-item="\${args.selectedItem}"
      placeholder="\${args.placeholder}"
      required="\${args.required}"
      error="\${args.error}"
      label="\${args.label}"
    > 
      <h3 slot="label" id="select-your-contry-label-id">Hvilken kjørelengde ønsker du? *</h3>
      <p slot="help-text">Kjørelengde er hvor langt du kjører i løpet av et år. </p>
      </trygno-dropdown>
  \``,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => \`
    <trygno-dropdown
      options='\${JSON.stringify(args.options)}'
      selected-item="\${args.selectedItem}"
      placeholder="\${args.placeholder}"
      required="\${args.required}"
      error="\${args.error}"
      label="\${args.label}"
    > 
      <h3 slot="label" id="select-your-contry-label-id">Hvilken kjørelengde ønsker du? *</h3>
      <p slot="help-text">Kjørelengde er hvor langt du kjører i løpet av et år. </p>
      </trygno-dropdown>
  \``,...o.parameters?.docs?.source}}};const n=["DefaultDropdown","PreselectedDropdown","DropdownWithError"];export{e as DefaultDropdown,o as DropdownWithError,l as PreselectedDropdown,n as __namedExportsOrder,a as default};
