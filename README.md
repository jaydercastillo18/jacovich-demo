# Jacovich — demo conceptual

Propuesta editorial premium de KALILOGIC TECH. **Sitio no oficial**, sin backend ni reservas reales. Las imágenes son originales generadas con IA para esta demostración; no representan las instalaciones ni al equipo del negocio.

## Ejecutar

Requiere Node.js 22 y npm en el PATH.

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Para producción:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Pruebas de navegador (servidor de producción activo en el puerto 3000):

```bash
npx playwright install chromium
npm run test:ui
```

En Windows también se puede utilizar Edge instalado: `$env:UI_BROWSER_CHANNEL='msedge'; npm run test:ui`. Las pruebas cubren los cinco anchos solicitados, imágenes, anclas, metadata, consola, menú, foco, Escape y WCAG AA mediante axe. Las capturas e informes quedan en `test-results/` (excluido de Git).

## Arquitectura

- `src/app`: App Router, composición de la página, estilos globales, metadata, favicon y robots.
- `src/sections`: Hero, SocialProof, Services, Experience, Gallery, Team, Testimonials, BookingCTA y Location.
- `src/components`: Navbar, Footer, MobileCTA, SectionHeading, Reveal y ContactProvider/ContactAction.
- `src/data/business.ts`: datos editables, navegación, contactos, servicios, cifras, imágenes, equipo y ejemplos de reseñas.
- `src/types/business.ts`: contratos de los datos y canales de contacto.
- `public/images`: cinco imágenes WebP locales, con carga diferida salvo el hero.
- `netlify.toml`: build, publicación y cabecera contra indexación.

Las secciones son Server Components salvo la galería. Las interacciones se aíslan en componentes cliente. El menú y los avisos usan `dialog` nativo con cierre Escape y gestión de foco del navegador. La página incorpora enlace para saltar al contenido, foco visible, navegación por anclas y respeto por movimiento reducido.

## Antes de mostrar al propietario

Editar `src/data/business.ts`:

1. Confirmar nombre comercial y zona; `San Isidro · Lima` es referencial. Actualizar `areaConfirmed` únicamente al confirmar.
2. Reemplazar `phone`, `address` y `hours` (actualmente `null`).
3. Configurar `links.booking`, `links.whatsapp`, `links.instagram`, `links.maps` con URLs completas verificadas. Por ejemplo, WhatsApp utiliza `https://wa.me/` seguido del número internacional sin espacios. Mientras sean `null`, los botones abren el aviso de demo y no envían solicitudes.
4. Confirmar los servicios y precios. Todos muestran «Consultar».
5. Verificar `proof.rating`, `proof.reviews`, `proof.experience`; son cifras de ejemplo. Mantener `proof.isDemo: true` hasta comprobarlas.
6. Reemplazar el equipo ficticio, sus especialidades y los retratos por datos y fotos autorizados.
7. Mantener los textos de reseña como ejemplos o sustituirlos por reseñas autorizadas; actualizar también la etiqueta en Testimonials si se cambia su naturaleza.
8. Sustituir las imágenes del hero, experiencia y galería con fotografías autorizadas. Revisar los avisos de imagen de concepto de sus secciones.

El footer, metadata, `robots.txt` y la cabecera `X-Robots-Tag` identifican la demo y evitan indexación. No quitar estas protecciones mientras siga siendo una demo.

## Netlify

1. Subir el proyecto a un repositorio Git propio (incluir `package-lock.json`; excluir `node_modules` y `.next`).
2. En Netlify: **Add new project → Import an existing project** y conectar ese repositorio.
3. Elegir la rama a publicar y dejar el directorio base en la raíz del repositorio.
4. Build command: `npm run build`. Publish directory: `.next`. Node: `22`, configurado en `netlify.toml`.
5. Publicar con **Deploy project**. Netlify detecta Next.js e instala su adaptador automáticamente. No se necesitan variables de entorno.
6. Revisar en la URL publicada imágenes, botones, móvil, `/robots.txt` y cabecera `X-Robots-Tag: noindex, nofollow`.
7. Compartir esa URL como **propuesta de diseño no oficial**.

No subir `.next` manualmente como un sitio HTML estático: este proyecto utiliza el adaptador de Next.js de Netlify.

Referencia: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/

## Imágenes originales

Generadas con la herramienta integrada imagegen y optimizadas con Sharp. Prompts completos: `docs/image-prompts.md`. `scripts/prepare-images.cjs` conserva el proceso de optimización; su uso no es necesario para instalar, ejecutar o desplegar.
