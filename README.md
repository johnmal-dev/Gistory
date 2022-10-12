get api/v1/:user
{
  user
  results: 13
  repos: [
{
  description: description,
  html_url: html_url
},
{
  description: description,
  html_url: html_url
},
{
  description: description,
  html_url: html_url
}
],
}

# TAILWIND

- npm i tailwindcss
- npm install -D tailwindcss postcss autoprefixer(google)
- npx tailwindcss init (creates config file)
- Config: content: path to js/html
- Create input.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
- link stylesheet on html