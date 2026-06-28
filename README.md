# CodexArt Web

Sitio web corporativo de **CodexArt Development Innovating**, empresa tecnológica mexicana especializada en desarrollo de sistemas ERP, diseño web y soporte técnico, con sede en Tabasco, México.

---

## Stack Tecnologico

| Capa | Tecnologia | Version |
|------|-----------|---------|
| Framework principal | [Astro](https://astro.build/) | ^5.7.12 |
| UI interactiva | [React](https://react.dev/) | ^19.1.0 |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) | ^4.1.6 |
| Lenguaje | TypeScript | via tsconfig strict |
| Despliegue | [Netlify](https://www.netlify.com/) | via @astrojs/netlify |
| Iconos | Font Awesome | 6.4.0 (CDN) |

El proyecto usa **Astro** como generador de sitio estático (SSG). Las páginas se renderizan en el servidor en tiempo de compilación. Los componentes de React se montan en el cliente solo donde se requiere interactividad (islands architecture).

---

## Estructura de directorios

```
codexart_web-ea4b3/
├── netlify/
│   └── edge-functions/
│       └── rewrite.js          # Redirección geográfica (AU vs resto)
│
├── public/                     # Assets estáticos servidos tal cual
│   ├── logos/
│   │   ├── cdx-logo.png
│   │   ├── codexart.svg
│   │   ├── codexart_white.svg
│   │   └── logo.svg
│   ├── fondo_computer.jpg
│   ├── erp_example.jpg
│   ├── pagina_web.jpg
│   ├── domain.jpg
│   ├── soporte_tecnico.jpg
│   ├── servicios.jpg
│   └── favicon.svg
│
├── src/
│   ├── assets/                 # Assets procesados por Astro (SVG inline, etc.)
│   │   ├── astro.svg
│   │   └── background.svg
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.astro        # Navbar principal (desktop + mobile)
│   │   ├── Footer.astro        # Pie de pagina
│   │   ├── SideMenu.astro      # Menu lateral para movil
│   │   ├── SocialIcons.tsx     # Iconos de redes sociales (React)
│   │   └── WhatsAppButton.tsx  # Boton flotante de WhatsApp (React)
│   │
│   ├── layouts/
│   │   └── Layout.astro        # Layout maestro: <html>, <head>, Header, Footer
│   │
│   ├── pages/                  # Enrutamiento basado en archivos
│   │   ├── index.astro         # /         → Inicio
│   │   ├── nosotros.astro      # /nosotros  → Quienes somos
│   │   ├── contactanos.astro   # /contactanos → Formulario de contacto
│   │   └── servicios.astro     # /servicios → Listado de servicios
│   │
│   └── styles/
│       └── global.css          # Imports de Tailwind + utilidades personalizadas
│
├── astro.config.mjs            # Configuracion de Astro (Vite, React, Netlify)
├── tailwind.config.cjs         # Configuracion de Tailwind y sistema de temas
├── tsconfig.json               # TypeScript (extiende astro/tsconfigs/strict)
├── renovate.json               # Actualizacion automatica de dependencias
└── package.json
```

---

## Paginas y rutas

| Ruta | Archivo | Descripcion |
|------|---------|-------------|
| `/` | `src/pages/index.astro` | Pagina principal. Presenta los servicios con sistema de pestanas (ERP, Web, Dominio, Soporte) implementado con JavaScript vanilla. |
| `/nosotros/` | `src/pages/nosotros.astro` | Pagina "Quienes somos". Descripcion de la empresa, valores y equipo. |
| `/contactanos/` | `src/pages/contactanos.astro` | Formulario de contacto con campos de nombre, email y mensaje. |
| `/servicios/` | `src/pages/servicios.astro` | Catalogo completo de servicios ofrecidos. |

---

## Componentes

### Layout (`src/layouts/Layout.astro`)

Layout base que envuelve todas las paginas. Recibe la prop `title` para el `<title>` del documento. Incluye:

- Meta tags basicos y viewport
- Favicon desde `/logos/logo.svg`
- Font Awesome 6.4.0 via CDN
- `<Header />` al inicio del `<body>`
- `<slot />` para el contenido de cada pagina
- `<Footer />` al final

### Header (`src/components/Header.astro`)

Navbar responsivo con dos modos:

- **Desktop (md+):** Logo, enlaces de navegacion, iconos sociales y boton de WhatsApp en linea.
- **Movil:** Logo y hamburger que abre el `SideMenu`.

La ruta activa se detecta con `Astro.url.pathname` y se resalta con un borde inferior azul (`border-b-sky-500`).

Menu de navegacion definido como array de objetos `{ name, href, icon }` — agregar un nuevo enlace solo requiere anadir una entrada al array.

### SideMenu (`src/components/SideMenu.astro`)

Menu lateral deslizable para pantallas moviles. Se activa con el boton hamburger del Header. Incluye los mismos enlaces del menu principal mas los iconos sociales.

### SocialIcons (`src/components/SocialIcons.tsx`) — React

Componente React que renderiza enlaces a las redes sociales de CodexArt:

- Facebook: `facebook.com/codexart`
- Instagram: `instagram.com/codexart`
- LinkedIn: `linkedin.com/company/codexart`
- YouTube: `youtube.com/codexart`

### WhatsAppButton (`src/components/WhatsAppButton.tsx`) — React

Boton que abre una conversacion de WhatsApp con el numero de la empresa (`9931830220`) via `wa.me`.

---

## Configuracion

### `astro.config.mjs`

```js
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [react()]
});
```

- El plugin de Tailwind se carga desde Vite (no como plugin de PostCSS).
- La integracion de React habilita componentes `.tsx` e islands.
- El adaptador de Netlify se puede agregar aqui para despliegue SSR/edge.

### `tailwind.config.cjs`

Define un sistema de temas con paletas de color variables. Los temas disponibles son:

| Tema | Color primario |
|------|---------------|
| `default` | Teal 600 |
| `blue` | Blue 600 |
| `cyan` | Cyan |
| `rose` | Rose |
| `purple` | Purple 600 |
| `amber` | Amber |

> **Nota:** El sistema de temas requiere los archivos `src/@fuse/tailwind/utils/generate-palette.js` y `src/@fuse/tailwind/plugins/theming.js`. Si estos no existen, Tailwind no compilara correctamente. La configuracion activa en desarrollo usa unicamente el plugin de Vite (`@tailwindcss/vite`) que ignora `tailwind.config.cjs`.

### `tsconfig.json`

Extiende `astro/tsconfigs/strict`. Configuracion relevante:

- `"jsx": "react-jsx"` con `"jsxImportSource": "react"` para componentes React.
- Incluye tipos `.astro` automaticamente.

---

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo en localhost:4321
npm run build     # Compilacion de produccion → ./dist/
npm run preview   # Vista previa de la compilacion de produccion
npm run astro     # Acceso directo al CLI de Astro
```

---

## Instalacion y desarrollo local

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd codexart_web-ea4b3

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

El servidor arranca en `http://localhost:4321` con hot reload automatico.

---

## Despliegue

El proyecto esta configurado para desplegarse en **Netlify**.

### Netlify Edge Functions

El archivo `netlify/edge-functions/rewrite.js` implementa redirecciones basadas en la ubicacion geografica del visitante (ejemplo: Australia recibe contenido diferente).

### Renovate

`renovate.json` configura el bot de Renovate para actualizaciones automaticas de dependencias npm mediante Pull Requests.

### Variables de entorno

Actualmente no se usan variables de entorno. Los valores de contacto estan hardcodeados en los componentes:

| Variable | Valor |
|----------|-------|
| WhatsApp | `9931830220` |
| Email | `contacto@codexart.com` |
| RFC | `CID240924518` |
| Ubicacion | Tabasco, Mexico |

Se recomienda mover estos valores a variables de entorno (`.env`) para facilitar su mantenimiento.

---

## Arquitectura de componentes

```
Layout.astro
└── <html>
    ├── <head> (meta, Font Awesome, favicon)
    └── <body>
        ├── Header.astro
        │   ├── SocialIcons.tsx   (React island)
        │   ├── WhatsAppButton.tsx (React island)
        │   └── SideMenu.astro
        ├── <main>
        │   └── <slot /> → contenido de cada pagina
        └── Footer.astro
```

Los componentes `.tsx` de React se renderizan como **Astro Islands**: solo se hidratan en el cliente donde hay interactividad, manteniendo el resto de la pagina como HTML estatico.

---

## Estilos

- **Tailwind CSS** es el sistema de estilos principal (utility-first).
- Las clases globales y utilidades personalizadas se definen en `src/styles/global.css`.
- Clases personalizadas del proyecto: `.cdx-button`, `.index-section`, `.index-soluciones`, `.service-section`, `.header-class`.
- El diseno es **mobile-first** con el breakpoint `md:` (768px) como punto principal de quiebre.
- Los iconos se cargan con **Font Awesome** via CDN (clases `fa-solid`, `fab`).
