/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  trailingComma: 'none',
  printWidth: 80,
  tabWidth: 2,
  bracketSpacing: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss']
}
