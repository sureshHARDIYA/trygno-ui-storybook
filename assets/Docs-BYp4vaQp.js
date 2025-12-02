import{j as n}from"./index-_k1vW10U.js";import{useMDXComponents as p}from"./index-DD0U_lpG.js";import{b as j,C as o}from"./blocks-DR02H8eR.js";import{I as S}from"./constants-C_-d2Orp.js";const w=t=>`
  <style>
    trygno-card:first-child {
      --tui-card-content-padding: 0;
    }
    trygno-card {
      --tui-card-content-padding: 0;
    }
    trygno-card trygno-list-element {
      --tui-list-element-padding-left: 16px;
    }
    trygno-list-element > h2 {
      font-size: 24px;
    }
  </style>
  ${t()}
`,T={argTypes:{iconName:{options:S,control:{type:"select"}},iconColor:{options:["primary","secondary"],control:{type:"select"}},iconSize:{options:["small","medium","large"],control:{type:"select"}},variant:{options:["bordered","standard"],control:{type:"select"},default:"bordered"},hasNavIcon:{control:{type:"boolean"}}},title:"Components/Recipie/List/List Item",component:"trygno-list-element",parameters:{docs:{page:m}},decorators:[w]},z=({id:t,iconColor:e,iconName:y,iconSize:h,hasNavIcon:u,titleSlot:v,descriptionSlot:b,pillsSlot:f,rightTextSlot:k,variant:x="bordered"})=>`
    <trygno-list-element 
      id="${t}"
      icon-name="${y}"
      icon-color="${e}"
      icon-size="${h}"
      has-nav-icon="${u??!0}"
      variant="${x}
    >
      ${v}
      ${b} 
      ${f}
      ${k}
    </trygno-list-element>
  `,r=z.bind({});r.args={iconName:"tryg-house",iconColor:"primary",iconSize:"medium",titleSlot:'<h2 slot="title">Standalone Item</h2>',descriptionSlot:'<span slot="description">No parent list wrapper</span>',pillsSlot:'<trygno-badge slot="pills">gjelder fra 24.09.2024</trygno-badge>',variant:"bordered"};const i=()=>`
    <trygno-card  heading="Hva skjer videre?">
      <trygno-list-wrapper>
        <trygno-list-element icon-name="heart">
          <span slot="description">Vi har mottatt din aksept på tilbudet. Takk!</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-headsett">
          <span slot="description">Vi jobber nå med å opprette forsikringene dine. Hvis vi mangler noe informasjon kontakter vi deg.</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="file-text">
          <span slot="description">Forsikringsdokumentene vil komme på Min bedrift før forsikringene trer i kraft.</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>
  `,s=()=>`
  <trygno-list-wrapper>
      <trygno-list-element icon-name="heart">
        <span slot="description">Du er trygt forsikret og endringen gjelder fra 24.09.2024 . Skjer det noe med din firbeinte venn, melder du skade på tryg.no eller på Min side.</span>
      </trygno-list-element>
    
      <trygno-list-element icon-name="tryg-headsett">
        <span slot="description">Vi jobber nå med å opprette forsikringene dine. Hvis vi mangler noe informasjon kontakter vi deg.</span>
      </trygno-list-element>
    
      <trygno-list-element icon-name="file-text">
        <span slot="description">Forsikringsdokumentene vil komme på Min bedrift før forsikringene trer i kraft.</span>
      </trygno-list-element>
    </trygno-list-wrapper>
  `,a=()=>`
  <trygno-card  heading="Forsikringer du har endret" variant="bordered">
      <trygno-list-element icon-name="tryg-cat" icon-color="primary" icon-size="medium">
        <h2 slot="title">Katteforsikring</h2>
        <span slot="description">Maximus</span>
        <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
      </trygno-list-element>
      <h3 slot="footer" style="margin: 0;">Totalpris 225 kr/mnd</h3>
    </trygno-card>
  `,c=()=>` <trygno-card variant="bordered">
      <header slot="title">
        <h2>
          <span>Mine</span>
          <strong>forsikringer
          </strong>
        </h2>
      </header>

      <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Huseforsikring</h2>
          <span slot="description">Benshaugen 8, 5144 Fyllingsdalen</span>
          <div slot="rightText">
            2023 kr/mnd
          </div>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Pet Coverage</h2>
          <span slot="description">Maximus</span>
          <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
          <span slot="rightText">234 kr/mnd</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-dog" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Barneforsikring</h2>
          <span slot="description">Avik</span>
          <span slot="rightText">
            150 kr/mnd
          </span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small"> 
          <h2 slot="title">Husforsikring</h2>
          <span slot="description">Tjørnhaugen 158</span>
          <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>`,l=()=>` <trygno-card variant="bordered">
      <header slot="title">
        <h2>
          <span>Mine</span>
          <strong>forsikringer
          </strong>
        </h2>
      </header>

      <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Huseforsikring</h2>
          <span slot="description">Benshaugen 8, 5144 Fyllingsdalen</span>
          <div slot="rightText">
            2023 kr/mnd
          </div>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Pet Coverage</h2>
          <span slot="description">Maximus</span>
          <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
          <span slot="rightText">234 kr/mnd</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-dog" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Barneforsikring</h2>
          <span slot="description">Avik</span>
          <span slot="rightText">
            150 kr/mnd
          </span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true"> 
          <h2 slot="title">Husforsikring</h2>
          <span slot="description">Tjørnhaugen 158</span>
          <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>`,C=()=>`
<trygno-card  heading="Oppsummering av endring" variant="bordered" id="firstCard">
    <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-boat" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Electric Scooter Insurance</h2>
      <span slot="description">Freev 2024</span>
        <trygno-badge slot="pills">Starts 23.12.2025</trygno-badge>      
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Pet Coverage</h2>
      <span slot="description">Covers up to 10 000 kr in vet fees</span>
      <div slot="pills">
        <trygno-badge>Fyll ut helseerklæring</trygno-badge>
      </div>
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-dog" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Child Accident</h2>
      <span slot="description">Worldwide protection</span>
      <span slot="rightText">
        150 kr/mnd
      </span>
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-house" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true"> 
      <h2 slot="title">Husforsikring</h2>
      <span slot="description">Fire & Theft</span>
      <div slot="pills">
        <trygno-badge variant="warning">Fyll ut helseerklæring</trygno-badge>
      </div>
      <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
    </trygno-list-element>
    </trygno-list-wrapper>
     <h3 slot="footer" style="margin: 0;">Totalpris 225 kr/mnd</h3>
</trygno-card>
`,d=C.bind({});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  id,
  iconColor,
  iconName,
  iconSize,
  hasNavIcon,
  titleSlot,
  descriptionSlot,
  pillsSlot,
  rightTextSlot,
  variant = "bordered"
}) => \`
    <trygno-list-element 
      id="\${id}"
      icon-name="\${iconName}"
      icon-color="\${iconColor}"
      icon-size="\${iconSize}"
      has-nav-icon="\${hasNavIcon ?? true}"
      variant="\${variant}
    >
      \${titleSlot}
      \${descriptionSlot} 
      \${pillsSlot}
      \${rightTextSlot}
    </trygno-list-element>
  \``,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <trygno-card  heading="Hva skjer videre?">
      <trygno-list-wrapper>
        <trygno-list-element icon-name="heart">
          <span slot="description">Vi har mottatt din aksept på tilbudet. Takk!</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-headsett">
          <span slot="description">Vi jobber nå med å opprette forsikringene dine. Hvis vi mangler noe informasjon kontakter vi deg.</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="file-text">
          <span slot="description">Forsikringsdokumentene vil komme på Min bedrift før forsikringene trer i kraft.</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>
  \``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
  <trygno-list-wrapper>
      <trygno-list-element icon-name="heart">
        <span slot="description">Du er trygt forsikret og endringen gjelder fra 24.09.2024 . Skjer det noe med din firbeinte venn, melder du skade på tryg.no eller på Min side.</span>
      </trygno-list-element>
    
      <trygno-list-element icon-name="tryg-headsett">
        <span slot="description">Vi jobber nå med å opprette forsikringene dine. Hvis vi mangler noe informasjon kontakter vi deg.</span>
      </trygno-list-element>
    
      <trygno-list-element icon-name="file-text">
        <span slot="description">Forsikringsdokumentene vil komme på Min bedrift før forsikringene trer i kraft.</span>
      </trygno-list-element>
    </trygno-list-wrapper>
  \``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
  <trygno-card  heading="Forsikringer du har endret" variant="bordered">
      <trygno-list-element icon-name="tryg-cat" icon-color="primary" icon-size="medium">
        <h2 slot="title">Katteforsikring</h2>
        <span slot="description">Maximus</span>
        <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
      </trygno-list-element>
      <h3 slot="footer" style="margin: 0;">Totalpris 225 kr/mnd</h3>
    </trygno-card>
  \``,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \` <trygno-card variant="bordered">
      <header slot="title">
        <h2>
          <span>Mine</span>
          <strong>forsikringer
          </strong>
        </h2>
      </header>

      <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Huseforsikring</h2>
          <span slot="description">Benshaugen 8, 5144 Fyllingsdalen</span>
          <div slot="rightText">
            2023 kr/mnd
          </div>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Pet Coverage</h2>
          <span slot="description">Maximus</span>
          <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
          <span slot="rightText">234 kr/mnd</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-dog" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small">
          <h2 slot="title">Barneforsikring</h2>
          <span slot="description">Avik</span>
          <span slot="rightText">
            150 kr/mnd
          </span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small"> 
          <h2 slot="title">Husforsikring</h2>
          <span slot="description">Tjørnhaugen 158</span>
          <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>\``,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \` <trygno-card variant="bordered">
      <header slot="title">
        <h2>
          <span>Mine</span>
          <strong>forsikringer
          </strong>
        </h2>
      </header>

      <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Huseforsikring</h2>
          <span slot="description">Benshaugen 8, 5144 Fyllingsdalen</span>
          <div slot="rightText">
            2023 kr/mnd
          </div>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Pet Coverage</h2>
          <span slot="description">Maximus</span>
          <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
          <span slot="rightText">234 kr/mnd</span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-dog" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true">
          <h2 slot="title">Barneforsikring</h2>
          <span slot="description">Avik</span>
          <span slot="rightText">
            150 kr/mnd
          </span>
        </trygno-list-element>
      
        <trygno-list-element icon-name="tryg-house" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="small" is-hoverable="true"> 
          <h2 slot="title">Husforsikring</h2>
          <span slot="description">Tjørnhaugen 158</span>
          <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
        </trygno-list-element>
      </trygno-list-wrapper>
    </trygno-card>\``,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<trygno-card  heading="Oppsummering av endring" variant="bordered" id="firstCard">
    <trygno-list-wrapper>
        <trygno-list-element icon-name="tryg-boat" has-nav-icon="true" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Electric Scooter Insurance</h2>
      <span slot="description">Freev 2024</span>
        <trygno-badge slot="pills">Starts 23.12.2025</trygno-badge>      
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-cat" has-nav-icon variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Pet Coverage</h2>
      <span slot="description">Covers up to 10 000 kr in vet fees</span>
      <div slot="pills">
        <trygno-badge>Fyll ut helseerklæring</trygno-badge>
      </div>
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-dog" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true">
      <h2 slot="title">Child Accident</h2>
      <span slot="description">Worldwide protection</span>
      <span slot="rightText">
        150 kr/mnd
      </span>
    </trygno-list-element>
  
    <trygno-list-element icon-name="tryg-house" variant="bordered" icon-color="primary" icon-size="medium" hide-icon-on-mobile="true"> 
      <h2 slot="title">Husforsikring</h2>
      <span slot="description">Fire & Theft</span>
      <div slot="pills">
        <trygno-badge variant="warning">Fyll ut helseerklæring</trygno-badge>
      </div>
      <span slot="rightText"> <strong>450 </strong>kr/mnd</span>
    </trygno-list-element>
    </trygno-list-wrapper>
     <h3 slot="footer" style="margin: 0;">Totalpris 225 kr/mnd</h3>
</trygno-card>
\``,...d.parameters?.docs?.source}}};const L=["Default","SimpleListWithCard","ListWithIcon","SummaryCard","ListOfLinks","ListOfLinksHoverable","AdvancedListWithCard"],I=Object.freeze(Object.defineProperty({__proto__:null,AdvancedListWithCard:d,Default:r,ListOfLinks:c,ListOfLinksHoverable:l,ListWithIcon:s,SimpleListWithCard:i,SummaryCard:a,__namedExportsOrder:L,default:T},Symbol.toStringTag,{value:"Module"}));function g(t){const e={code:"code",h2:"h2",hr:"hr",p:"p",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(j,{title:"Components/Recipie/List/List Item"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-list-item-element-experimental",children:"✨ List Item Element (experimental)"}),`
`,n.jsx(e.p,{children:"This component is experimental. The component provides different props to render product list on different pages. We present different possible UI that are commonly found in Norwegian applications."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"standalone-list-element",children:"Standalone List Element"}),`
`,n.jsxs(e.p,{children:["List element can be used as standalone element as well. When used alone without ",n.jsx(e.code,{children:"<trygno-list>"})," component, it will be rendered as ",n.jsx(e.code,{children:"div"}),"."]}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(e.h2,{id:"simple-list",children:"Simple List"}),`
`,n.jsx(e.p,{children:"If you just want to display list of items with icons:"}),`
`,n.jsx(o,{of:s}),`
`,n.jsxs(e.h2,{id:"simple-list-with-trygno-card",children:["Simple List with ",n.jsx(e.code,{children:"<trygno-card>"})]}),`
`,n.jsx(e.p,{children:"If you just want to display list of items with icons inside card."}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(e.h2,{id:"card-with-standalone-list-item-for-summary-page",children:"Card with standalone list item for summary page"}),`
`,n.jsx(o,{of:a}),`
`,n.jsxs(e.h2,{id:"list-element-with-trygno-card-and-trygno-list",children:["List Element with ",n.jsx(e.code,{children:"trygno-card"})," and ",n.jsx(e.code,{children:"trygno-list"})]}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h2,{id:"list-elements-with-list-of-links",children:"List elements with list of links"}),`
`,n.jsx(o,{of:l})]})}function m(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(g,{...t})}):g(t)}const _=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));export{_ as D,I as t};
