import{j as e}from"./jsx-runtime-DQFc-wkB.js";import{useMDXComponents as i}from"./index-BjypYOp6.js";import"./_commonjsHelpers-Cpj98o6Y.js";function r(s){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h1,{id:"getting-started-with-trygno-ui",children:["Getting Started with ",e.jsx(n.code,{children:"trygno-ui"})]}),`
`,e.jsxs(n.p,{children:["Welcome! This guide will help you set up ",e.jsx(n.code,{children:"trygno-ui"})," locally and start contributing."]}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsx(n.p,{children:"Before getting started, make sure you have the following installed:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Node.js"})," (recommended: latest LTS version)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"npm"})," as your package manager"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Git"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Turbo"})," (installed globally)",e.jsx(n.br,{}),`
`,"👉 ",e.jsx(n.a,{href:"https://turbo.build/repo/docs/getting-started/installation#installing-turbo",rel:"nofollow",children:"Install Turbo"})]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["⚠️ Ensure your npm proxy is configured. Example ",e.jsx(n.code,{children:".npmrc"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`registry = "https://dkdc2supdevw002.prd1.prdroot.net:9443/nexus/content/groups/npm-all"
strict-ssl = false
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"getting-started-locally",children:"Getting started locally"}),`
`,e.jsx(n.p,{children:"Follow these steps one by one."}),`
`,e.jsx(n.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone https://gitlab.devops.prdroot.net/service/jee/change-calculator/trygno-ui.git
cd trygno-ui
`})}),`
`,e.jsx(n.h3,{id:"2-install-dependencies",children:"2. Install Dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
`})}),`
`,e.jsx(n.h3,{id:"3-navigate-to-the-core-package",children:"3. Navigate to the Core Package"}),`
`,e.jsxs(n.p,{children:["Most of the development happens in the ",e.jsx(n.code,{children:"@trygno/core-ui"})," package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd packages/stencil-library
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"running-locally",children:"Running Locally"}),`
`,e.jsx(n.p,{children:"You have two options:"}),`
`,e.jsx(n.h3,{id:"option-a-run-stencil-dev-server",children:"Option A: Run Stencil Dev Server"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
npm run build
npm run start
`})}),`
`,e.jsx(n.h3,{id:"option-b-run-storybook",children:"Option B: Run Storybook"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install
npm run storybook
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips-for-a-smooth-experience",children:"Tips for a Smooth Experience"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"npm run start"})," during development. It provides better feedback and fewer caching issues than Storybook."]}),`
`,e.jsxs(n.li,{children:["If dependencies don’t seem to update, try:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Deleting ",e.jsx(n.code,{children:"node_modules"})]}),`
`,e.jsxs(n.li,{children:["Clearing npm cache ",e.jsx(n.code,{children:"npm cache clean --force"})]}),`
`,e.jsxs(n.li,{children:["Reinstalling with ",e.jsx(n.code,{children:"npm install"})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Packages are published to both GitLab and Nexus. After installing, check ",e.jsx(n.code,{children:"package-lock.json"})," to confirm the correct source."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.p,{children:"That’s it! You’re now ready to start building and contributing 🚀"})]})}function c(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default};
