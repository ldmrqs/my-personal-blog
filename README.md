## personal blog
i always enjoyed the idea of exposing my thoughts online. i overcame my self-awareness and decided to do so.

## inspiration
do you remember when the internet used to be fun? yeah, me too. i love the web 1.0, so my personal website is a tribute to that.

## tech stack
- [astro](https://astro.build/) (static site generator)
- css
- javascript
- markdown (blog posts)

## project structure
```
src/
  layouts/        # shared page layouts (header, sidebar, footer)
  pages/          # site pages (.astro files)
  content/posts/  # blog posts as .md files
  styles/         # css
public/           # static assets (images, gifs, js)
```

## writing a new post
create a file in `src/content/posts/` with this format:
```markdown
---
title: "my post title"
date: "Feb 7, 2026"
description: "a short description"
---

your content here...
```
it will automatically show up on the homepage and posts page.

## commands
- `npm run dev` — start dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview the build locally