import{j as e}from"./index-_k1vW10U.js";import{useMDXComponents as t}from"./index-DD0U_lpG.js";import"./_commonjsHelpers-CqkleIqs.js";function r(s){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"consumer-usage-guide",children:"Consumer Usage Guide"}),`
`,e.jsxs(n.p,{children:["This guide explains how to integrate the Stencil-based Core UI web components (",e.jsx(n.code,{children:"@trygno/core-ui"}),") and their Vue wrappers (",e.jsx(n.code,{children:"@trygno/vue-library"}),") into a Vue 3 application."]}),`
`,e.jsxs(n.p,{children:["TLDR; Vue wrappers handle reactivity (",e.jsx(n.code,{children:"v-model"}),") for you. Raw Web Components don’t.",e.jsx(n.br,{}),`
`,"📎 Example repo: ",e.jsx(n.a,{href:"https://gitlab.devops.prdroot.net/service/jee/tryg-insurance-platform/widgets/house-frontend-mvp",rel:"nofollow",children:"Tryg House Frontend MVP"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"-table-of-contents",children:"📚 Table of Contents"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#1-create-a-new-vue-3-application",children:"Create a new Vue 3 application"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#2-install-the-packages",children:"Install the packages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#3-update-vite-configuration",children:"Update Vite configuration"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#4-register-the-stencil-runtime-and-vue-plugin",children:"Register the Stencil runtime and Vue plugin"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["a. ",e.jsx(n.a,{href:"#a-create-a-file-named-trygno-ui-setupts-and-configure-runtime-polyfills",children:e.jsx(n.code,{children:"trygno-ui-setup.ts"})})]}),`
`,e.jsxs(n.li,{children:["b. ",e.jsxs(n.a,{href:"#b-edit-srcmaints-to-load-the-core-ui-web-components-and-install-the-vue-wrapper-plugin-before-mounting",children:[e.jsx(n.code,{children:"main.ts"})," setup"]})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#5-import-style-tokens-into-your-global-scss-file",children:"Import style tokens into global SCSS"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#6-use-the-components-in-your-vue-templates",children:"Use the components in Vue templates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#notes",children:"Notes on Web Component integration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-repository",children:"Example Repository"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#support",children:"Support Contact"})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"1-create-a-new-vue-3-application",children:"1. Create a new Vue 3 application"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# using npm
npm init vue@3 my-app

# or using yarn
yarn create vue@3 my-app

# or using pnpm
pnpm create vue@3 my-app
`})}),`
`,e.jsx(n.p,{children:"Follow the interactive prompts to select your desired features."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"2-install-the-packages",children:"2. Install the packages"}),`
`,e.jsx(n.p,{children:"Navigate into your project directory and install both packages:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`cd my-app

npm install @trygno/core-ui @trygno/vue-library
# or
yarn add @trygno/core-ui @trygno/vue-library
# or
pnpm add @trygno/core-ui @trygno/vue-library
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"3-update-vite-configuration",children:"3. Update Vite configuration"}),`
`,e.jsxs(n.p,{children:["Open ",e.jsx(n.code,{children:"vite.config.ts"})," and configure Vue to treat hyphenated tags as custom elements:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue({
      template: {
         isCustomElement: (tag) =>
            tag.startsWith("trygno")
        }
      },
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"4-register-the-stencil-runtime-and-vue-plugin",children:"4. Register the Stencil runtime and Vue plugin"}),`
`,e.jsxs(n.p,{children:["a. Create a file named ",e.jsx(n.code,{children:"trygno-ui-setup.ts"})," and configure runtime polyfills:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// if you don't care about supporting edge and IE11 you can omit the 'applyPolyfills'
import { defineCustomElements } from "@trygno/core-ui/dist/loader";

// Calling the imported functions to setup UI library
defineCustomElements(window);
`})}),`
`,e.jsxs(n.p,{children:["b. Edit ",e.jsx(n.code,{children:"src/main.ts"})," to load the Core UI web components and install the Vue wrapper plugin before mounting:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import "./config/trygno-ui-setup.ts";

/** Other codes .... */
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"step-5-import-style-tokens-into-your-global-scss-file",children:"Step 5: Import style tokens into your global scss file."}),`
`,e.jsxs(n.p,{children:["Copy CSS Variables from these ",e.jsx(n.a,{href:"https://gitlab.devops.prdroot.net/service/jee/change-calculator/private/endring-app/-/blob/main/src/assets/css/_style.scss?ref_type=heads",rel:"nofollow",children:"2 files"})," and paste into your global scss file."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use "./themes/NoDefault.scss" as *;
@use "./themes/NoEnter.scss" as *;
`})}),`
`,e.jsx(n.h2,{id:"6-use-the-components-in-your-vue-templates",children:"6. Use the components in your Vue templates"}),`
`,e.jsx(n.p,{children:"Now you can import and use the wrapped components just like any other Vue component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<script setup lang="ts">
import { ref } from "vue";
import { TrygnoInput, TrygnoButton } from "@trygno/vue-library";

import FormLayout from "../../layout/FormLayout.vue";
import { useCustomerStore } from "@/store/customerStore.ts";
import LoadingSpinner from "@/components/generic/LoadingSpinner.vue";
import { useGetOrCreateCustomerService } from "@/composable/service/getOrCreateCustomerService.ts";

const customerStore = useCustomerStore();
const isCustomerLoading = ref(false);
const isCustomerFetchSuccessful = ref(true);

const ssn = ref(customerStore.getSsn);
const isSsnValid = ref(true);
const errorMessage = ref("");

const validateSsn = () => {
  if (!ssn?.value) {
    errorMessage.value = "Fødselsnummer må fylles ut!";
    isSsnValid.value = false;
    return;
  }

  if (ssn?.value && ssn.value.length !== 11) {
    errorMessage.value = "Ugyldig fødselsnummer!";
    isSsnValid.value = false;

    return;
  }

  isSsnValid.value = true;
  errorMessage.value = "";
};

const emits = defineEmits<{
  (e: "move-forward"): void;
}>();

const validateAndMoveToNextSection = async () => {
  isCustomerFetchSuccessful.value = true;
  validateSsn();
  if (!isSsnValid.value) return;

  if (ssn.value) {
    try {
      isCustomerLoading.value = true;
      const customer = await useGetOrCreateCustomerService(ssn.value);
      if (customer !== undefined) {
        customerStore.setCustomer(customer);
      }
    } catch (error) {
      isCustomerFetchSuccessful.value = false;
      errorMessage.value = "Beklager! Vi kunne ikke hente opplysninger. Er fødselsnummer riktig?";
      console.error("customer could not be fetched!");
    } finally {
      isCustomerLoading.value = false;
    }
  }

  if (isCustomerFetchSuccessful.value) {
    emits("move-forward");
  }
};
<\/script>

<template>
  <FormLayout>
    <template #header>
      <h2>Hvem er du?</h2>
    </template>

    <template #content>
      <TrygnoInput id="ssn" label="Fødselsnummer:" type="text" v-model="ssn" :error="errorMessage"> </TrygnoInput>
    </template>

    <template #action>
      <TrygnoButton text="Neste" @click="validateAndMoveToNextSection">
        <LoadingSpinner v-if="isCustomerLoading" size="small" />
        Neste
      </TrygnoButton>
    </template>
  </FormLayout>
</template>

<style scoped></style>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"You can use standard Vue form patterns (validation libraries, watchers, computed props) seamlessly."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Raw Web Components don’t support ",e.jsx(n.code,{children:"v-model"}),"."]})," Standard custom elements expose properties and dispatch events, but they don’t implement Vue’s ",e.jsx(n.code,{children:"modelValue"}),"/",e.jsx(n.code,{children:"update:modelValue"})," pattern out of the box."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Vue wrappers bridge that gap."})," Each wrapped component from ",e.jsx(n.code,{children:"@trygno/vue-library"})," exposes a ",e.jsx(n.code,{children:"modelValue"})," prop and emits an ",e.jsx(n.code,{children:"update:modelValue"})," event when its internal state changes."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-repository",children:"Example Repository"}),`
`,e.jsxs(n.p,{children:["Here is an example repository configured with ",e.jsx(n.code,{children:"@trygno/vue-library"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://gitlab.devops.prdroot.net/service/jee/tryg-insurance-platform/widgets/house-frontend-mvp",rel:"nofollow",children:"https://gitlab.devops.prdroot.net/service/jee/tryg-insurance-platform/widgets/house-frontend-mvp"})}),`
`,e.jsx(n.h3,{id:"support",children:"Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Contact Suresh Kumar Mukhiya (suresh.mukhiya@tryg.no) if you require any assistance."}),`
`]})]})}function a(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{a as default};
