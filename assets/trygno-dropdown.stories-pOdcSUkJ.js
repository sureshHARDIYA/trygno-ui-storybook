const m={title:"Components/Core/Dropdown",component:"trygno-dropdown",tags:["autodocs"],argTypes:{options:{control:"object",defaultValue:[{label:"8 000 km",value:"8"},{label:"2 000 km",value:"12"},{label:"16 000 km",value:"16"},{label:"20 000 km",value:"20"},{label:"25 000 km",value:"25"},{label:"30 000 km",value:"30"},{label:"Ubegrenset kjørelengde",value:"99"}]},selectedItem:{control:"text",defaultValue:""},placeholder:{control:"text",defaultValue:"Select an option"},required:{control:"boolean",defaultValue:!1},error:{control:"text",defaultValue:""},label:{control:"text",defaultValue:"Label"}},parameters:{docs:{page:null}}},t=r=>`
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
  `,e=t.bind({});e.args={options:[{label:"8 000 km",value:"8"},{label:"2 000 km",value:"12"},{label:"16 000 km",value:"16"},{label:"20 000 km",value:"20"},{label:"25 000 km",value:"25"},{label:"30 000 km",value:"30"},{label:"Ubegrenset kjørelengde",value:"99"}],selectedItem:"",placeholder:"Select an option",required:!1,error:""};const l=t.bind({});l.args={...e.args,selectedItem:"Option 2"};const o=t.bind({});o.args={...e.args,error:"This field is required"};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => \`
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
  \``,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,p,i;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`args => \`
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
  \``,...(i=(p=l.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => \`
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
  \``,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["DefaultDropdown","PreselectedDropdown","DropdownWithError"];export{e as DefaultDropdown,o as DropdownWithError,l as PreselectedDropdown,b as __namedExportsOrder,m as default};
