# Verificación de la demo

Fecha: 3 de octubre de 2026. Next.js 16.3.8, build de producción local en Windows, navegador Edge sin interfaz.

## Resultado

- `npm install`: completado; lockfile incluido.
- `npm run typecheck`: correcto.
- `npm run lint`: correcto, sin errores ni advertencias.
- `npm run build`: correcto; página principal, robots y favicon prerenderizados.
- `npm run test:ui`: correcto en 375, 390, 768, 1024 y 1440 px, con altura de 900 px.
- Sin desbordamiento horizontal de página, anclas rotas, imágenes sin texto alternativo, errores JavaScript ni errores de consola.
- Los ocho elementos de imagen cargaron correctamente en los cinco tamaños.
- Menú móvil, diálogos, Escape, restauración de foco y enlace para saltar al contenido comprobados.
- Axe WCAG 2 A/AA y WCAG 2.1 AA: cero incidencias detectadas en los cinco tamaños y en el aviso de contacto.
- `robots` metadata, `/robots.txt` y cabecera de noindex preparados.
- Revisión visual de capturas móviles, tablet y escritorio. Se corrigió la resolución del hero en pantallas verticales.

Las comprobaciones automáticas no equivalen a una certificación de accesibilidad ni sustituyen pruebas con usuarios de lectores de pantalla.

## Rendimiento local

Cinco archivos WebP: 406.072 bytes totales (aproximadamente 397 KiB). El hero tiene prioridad de carga; las otras imágenes usan carga diferida de next/image. Google Fonts se descarga durante el build y se sirve localmente mediante next/font. No hay mapas, trackers ni recursos gráficos de terceros en runtime.

Las muestras locales registraron CLS 0 y aproximadamente 138 KB de transferencia de scripts. LCP: 2,456 s en la primera carga de 375 px; entre 0,312 y 0,436 s en las siguientes muestras. Son pruebas locales sin limitación de CPU o red, con cachés calientes en las cargas posteriores, y no predicen las métricas reales de un teléfono o Netlify. Volver a medir después del despliegue.

## Dependencias

`npm audit --omit=dev`: cero vulnerabilidades de producción. El audit completo reporta cinco avisos altos en la cadena de herramientas de lint (`braces`, `micromatch`, `fast-glob`, plugin y configuración de ESLint de Next.js). El arreglo automático ofrecido implicaba bajar la versión principal de Next.js/ESLint; no se aplicó esa regresión. Estos paquetes se usan durante desarrollo y comprobaciones, y no forman parte del frontend desplegado.

## Artefactos

`test-results/ui-report.json` y capturas `hero-{ancho}.png` / `page-{ancho}.png` se generan mediante `npm run test:ui`. Se mantienen fuera del control de versiones.
