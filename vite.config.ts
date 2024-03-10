import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dynamicImport from "vite-plugin-dynamic-import";
import { fileURLToPath, URL } from "url";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@constants": fileURLToPath(
        new URL("./src/core/constants", import.meta.url)
      ),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/core/routers", import.meta.url)),
      "@guards": fileURLToPath(new URL("./src/core/guards", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@helpers": fileURLToPath(new URL("./src/core/helpers", import.meta.url)),
      "@types": fileURLToPath(new URL("./src/core/types", import.meta.url)),
      "@stores": fileURLToPath(new URL("./src/core/stores", import.meta.url)),
      "@interfaces": fileURLToPath(
        new URL("./src/shared/interfaces", import.meta.url)
      ),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [vue(), dynamicImport()],
});
