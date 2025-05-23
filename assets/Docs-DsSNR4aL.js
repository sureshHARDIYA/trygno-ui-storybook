import{j as n}from"./jsx-runtime-DmjsAZbE.js";import{useMDXComponents as I}from"./index-Dx3rDv5p.js";import"./index-DUHgOAYI.js";import{I as V}from"./constants-C9b0xXi6.js";import{c as R,e as o}from"./DocsRenderer-CFRXHY34-TYKcPrrd.js";const X=t=>`
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
`,K={argTypes:{iconName:{options:V,control:{type:"select"}},iconColor:{options:["primary","secondary"],control:{type:"select"}},iconSize:{options:["small","medium","large"],control:{type:"select"}},variant:{options:["bordered","standard"],control:{type:"select"},default:"bordered"},hasNavIcon:{control:{type:"boolean"}}},title:"Components/Recipie/List/List Item",component:"trygno-list-element",parameters:{docs:{page:_}},decorators:[X]},U=({id:t,iconColor:e,iconName:O,iconSize:N,hasNavIcon:W,titleSlot:D,descriptionSlot:E,pillsSlot:A,rightTextSlot:B,variant:P="bordered"})=>`
    <trygno-list-element 
      id="${t}"
      icon-name="${O}"
      icon-color="${e}"
      icon-size="${N}"
      has-nav-icon="${W??!0}"
      variant="${P}
    >
      ${D}
      ${E} 
      ${A}
      ${B}
    </trygno-list-element>
  `,r=U.bind({});r.args={iconName:"tryg-house",iconColor:"primary",iconSize:"medium",titleSlot:'<h2 slot="title">Standalone Item</h2>',descriptionSlot:'<span slot="description">No parent list wrapper</span>',pillsSlot:'<trygno-badge slot="pills">gjelder fra 24.09.2024</trygno-badge>',variant:"bordered"};const i=()=>`
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
    </trygno-card>`,q=()=>`
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
`,d=q.bind({});var p,m,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
  \``,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var h,u,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => \`
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
  \``,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,f,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => \`
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
  \``,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var x,j,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => \`
  <trygno-card  heading="Forsikringer du har endret" variant="bordered">
      <trygno-list-element icon-name="tryg-cat" icon-color="primary" icon-size="medium">
        <h2 slot="title">Katteforsikring</h2>
        <span slot="description">Maximus</span>
        <trygno-badge slot="pills">Starter 24.09.2024</trygno-badge>
      </trygno-list-element>
      <h3 slot="footer" style="margin: 0;">Totalpris 225 kr/mnd</h3>
    </trygno-card>
  \``,...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,T,z;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`() => \` <trygno-card variant="bordered">
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
    </trygno-card>\``,...(z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var C,L,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => \` <trygno-card variant="bordered">
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
    </trygno-card>\``,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var $,F,H;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`() => \`
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
\``,...(H=(F=d.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const G=["Default","SimpleListWithCard","ListWithIcon","SummaryCard","ListOfLinks","ListOfLinksHoverable","AdvancedListWithCard"],en=Object.freeze(Object.defineProperty({__proto__:null,AdvancedListWithCard:d,Default:r,ListOfLinks:c,ListOfLinksHoverable:l,ListWithIcon:s,SimpleListWithCard:i,SummaryCard:a,__namedExportsOrder:G,default:K},Symbol.toStringTag,{value:"Module"}));function g(t){const e={code:"code",h2:"h2",hr:"hr",p:"p",...I(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(R,{title:"Components/Recipie/List/List Item"}),`
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
`,n.jsx(o,{of:l})]})}function _(t={}){const{wrapper:e}={...I(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(g,{...t})}):g(t)}const tn=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{tn as D,en as t};
