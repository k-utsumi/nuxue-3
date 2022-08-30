import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
      compilerOptions: {
        strictNullChecks: true,
      },
    },
  },
});
