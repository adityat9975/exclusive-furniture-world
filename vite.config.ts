import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// base "./" and a single-file build let dist/index.html open by double-click.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
});
