// webpack.mix.js
const tailwindcss = require("tailwindcss");
let mix = require("laravel-mix");

mix
    .js("src/app.js", "assets")
    .sass("src/app.scss", "assets")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("tailwind.config.js")],
    });