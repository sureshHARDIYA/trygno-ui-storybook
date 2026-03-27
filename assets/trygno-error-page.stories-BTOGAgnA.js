const p={title:"Components/Page/ErrorPage",component:"error-page",tags:[],argTypes:{title:{control:{type:"text"}},message:{control:{type:"text"}},cardHeader:{control:{type:"text"}},cardDescription:{control:{type:"text"}},primaryButtontext:{control:{type:"text"}},secondaryButtontext:{control:{type:"text"}},primaryButtonAction:{table:{disable:!0}},secondaryButtonAction:{table:{disable:!0}}},parameters:{docs:{page:null}}},r=n=>()=>console.log(n),o=({title:n,message:a,cardHeader:s,cardDescription:i,primaryButtontext:c,secondaryButtontext:d})=>`
  <trygno-error-page
    title="${n}"
    message="${a}"
    card-header="${s}"
    card-description="${i}"
    primary-buttontext="${c}"
    secondary-buttontext="${d}"
  ></trygno-error-page>
`,t=o.bind({});t.args={title:"Oisann, noe gikk galt",message:"Det har skjedd en ukjent feil. Prøv igjen eller kontakt oss.",cardHeader:"Kontakt oss så hjelper vi deg",cardDescription:"Våre dyktige og hyggelige rådgivere hjelper deg gjerne",primaryButtontext:"Gå til Kundeservice",secondaryButtontext:"Tilbake til tryg.no",primaryButtonAction:r("Primary Button Pressed"),secondaryButtonAction:r("Secondary Button Pressed")};const e=o.bind({});e.args={title:"Dette var uventet!",message:"En tilpasset feilmelding vises her.",cardHeader:"Hjelp er på vei",cardDescription:"Supportteamet står klar",primaryButtontext:"Kontakt oss",secondaryButtontext:"Til forsiden",primaryButtonAction:r("Primary Custom Action"),secondaryButtonAction:r("Secondary Custom Action")};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  title,
  message,
  cardHeader,
  cardDescription,
  primaryButtontext,
  secondaryButtontext
}) => \`
  <trygno-error-page
    title="\${title}"
    message="\${message}"
    card-header="\${cardHeader}"
    card-description="\${cardDescription}"
    primary-buttontext="\${primaryButtontext}"
    secondary-buttontext="\${secondaryButtontext}"
  ></trygno-error-page>
\``,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  title,
  message,
  cardHeader,
  cardDescription,
  primaryButtontext,
  secondaryButtontext
}) => \`
  <trygno-error-page
    title="\${title}"
    message="\${message}"
    card-header="\${cardHeader}"
    card-description="\${cardDescription}"
    primary-buttontext="\${primaryButtontext}"
    secondary-buttontext="\${secondaryButtontext}"
  ></trygno-error-page>
\``,...e.parameters?.docs?.source}}};const g=["Default","Custom"];export{e as Custom,t as Default,g as __namedExportsOrder,p as default};
