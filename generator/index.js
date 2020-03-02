module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "tailwindcss": "^1.2.0",
      "@fullhuman/postcss-purgecss": "^2.0.6",
      "@tailwindcss/ui": "^0.1.3",
      "alpinejs": "^2.0.2",
    }
  })

  api.injectImports(api.entryFile, `import './assets/tailwind.css'`);
  api.injectImports(api.entryFile, `import 'alpinejs'`)
  api.render('./template');



}
