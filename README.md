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

- npm install -D tailwindcss postcss autoprefixer(google)
- npx tailwindcss init (creates config file)
- Config: content: path to js/html
- Add to index.css:
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
