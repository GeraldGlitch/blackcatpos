# BlackCatPOS Web - Landing Page

## Descripción
Landing page estática para promocionar BlackCatPOS, un sistema POS de escritorio.

## Tech Stack
- **HTML5** - Single page
- **Tailwind CSS** - CDN (`cdn.tailwindcss.com`)
- **Google Fonts Inter** - CDN
- **Vanilla JS** - Animaciones, menú mobile, scroll effects
- **SVG** - Favicon/icon

## Estructura
```
/
├── index.html          # Landing page (único archivo)
├── terminos.html       # Página Términos de Uso
├── style.css           # Vacío (placeholder)
├── icon.svg            # Favicon 1080x1080
├── version.json        # Versión app desktop
├── devmessage.json     # Test mensajes dev
├── images/
│   ├── login.png
│   ├── logos.png
│   └── main-dashboard.png
└── .agents/
    ├── gg.md           # Reglas dev
    ├── agents.md       # Este archivo
    ├── db.md           # Estructura DB
    └── map.md          # Pantallas y flujo
```

## Enlaces externos
- **Descarga app**: `https://geraldglitch.itch.io/pooppos`
- **Tutorial YouTube**: `https://www.youtube.com/embed/DcoOU_vywM8`

## Notas
- Sin build tools, sin package.json, sin backend
- Hosteable como archivos estáticos (GitHub Pages, cualquier static server)
- App desktop real NO está en este repo
