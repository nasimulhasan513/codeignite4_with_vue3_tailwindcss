let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "public/js")
  .vue()
  .postCss("src/css/app.css", "public/css", [require("tailwindcss")]);

if (mix.inProduction()) {
  mix.version();
}
