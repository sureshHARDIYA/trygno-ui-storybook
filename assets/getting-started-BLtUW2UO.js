import{j as n}from"./index-_k1vW10U.js";import{useMDXComponents as l}from"./index-DD0U_lpG.js";import"./_commonjsHelpers-CqkleIqs.js";function r(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.h1,{id:"getting-started-with-trygno-ui",children:["Getting Started with ",n.jsx(e.code,{children:"trygno-ui"})]}),`
`,n.jsxs(e.p,{children:["Welcome! This guide will help you set up ",n.jsx(e.code,{children:"trygno-ui"})," locally and start contributing."]}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before getting started, make sure you have the following installed:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Node.js"})," (recommended: latest LTS version)"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"npm"})," as your package manager"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Git"})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Lerna"})," (installed globally)"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://lerna.js.org/docs/getting-started",rel:"nofollow",children:"Install lerna"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --global lerna

`})}),`
`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["⚠️ Ensure your npm proxy is configured. Example ",n.jsx(e.code,{children:".npmrc"}),":"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`registry = "https://dkdc2supdevw002.prd1.prdroot.net:9443/nexus/content/groups/npm-all"
strict-ssl = false
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"getting-started-locally",children:"Getting started locally"}),`
`,n.jsx(e.p,{children:"Follow these steps one by one."}),`
`,n.jsx(e.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://gitlab.devops.prdroot.net/service/jee/change-calculator/trygno-ui.git
cd trygno-ui
`})}),`
`,n.jsx(e.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install
`})}),`
`,n.jsx(e.h3,{id:"3-navigate-to-the-core-package",children:"3. Navigate to the Core Package"}),`
`,n.jsxs(e.p,{children:["Most of the development happens in the ",n.jsx(e.code,{children:"@trygno/core-ui"})," package."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`cd packages/stencil-library
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"running-locally",children:"Running Locally"}),`
`,n.jsx(e.p,{children:"You have two options:"}),`
`,n.jsx(e.h3,{id:"option-a-run-stencil-dev-server",children:"Option A: Run Stencil Dev Server"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install
npm run build
npm run start
`})}),`
`,n.jsx(e.h3,{id:"option-b-run-storybook",children:"Option B: Run Storybook"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install
npm run storybook
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"tips-for-a-smooth-experience",children:"Tips for a Smooth Experience"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Prefer ",n.jsx(e.code,{children:"npm run start"})," during development. It provides better feedback and fewer caching issues than Storybook."]}),`
`,n.jsxs(e.li,{children:["If dependencies don’t seem to update, try:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Deleting ",n.jsx(e.code,{children:"node_modules"})]}),`
`,n.jsxs(e.li,{children:["Clearing npm cache ",n.jsx(e.code,{children:"npm cache clean --force"})]}),`
`,n.jsxs(e.li,{children:["Reinstalling with ",n.jsx(e.code,{children:"npm install"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["Packages are published to both GitLab and Nexus. After installing, check ",n.jsx(e.code,{children:"package-lock.json"})," to confirm the correct source."]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:"That’s it! You’re now ready to start building and contributing 🚀"})]})}function o(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{o as default};
