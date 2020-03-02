const postcss = require('postcss');

let config = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  defaultExtractor: content =>
    content.match(/[\w-/.:]+(?<!:)/g) || [],
};

module.exports = postcss.plugin('tailwind-purgecss', function (opts) {
  if (process.env.NODE_ENV !== 'production') return () => { };
  const purgecss = require('@fullhuman/postcss-purgecss');
  return purgecss(Object.assign(config, opts));
});
