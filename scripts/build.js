require("esbuild").build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  inject: ["./src/jsx-runtime/jsx-runtime.ts"],
  outdir: "./dist",
  define: {
    NODE: false,
  },
  tsconfig: "esbuild.tsconfig.json",
});
