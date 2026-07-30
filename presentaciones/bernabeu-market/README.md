# Propuesta Bernabéu Market — Odiseum

Presentación de la propuesta de colaboración (Optimización web & sistema de pedidos QR),
reconstruida a partir del PDF de la versión nueva pero **sin las manchas**.

## Qué eran las manchas

Dos cosas distintas, las dos del efecto "liquid glass" del HTML original:

1. **Cada tarjeta llevaba dentro una copia difuminada de la foto de fondo**
   (`<img class="frost">`, reposicionada por JS en cada repintado). Al imprimir, esa capa
   se convertía en un borrón sucio dentro de la propia tarjeta.
2. **El exportado desde el HTML.** Esta era la causa de fondo, y es la de la sección
   siguiente. Las fotos nunca fueron el problema.

## Qué se ha cambiado

Las once páginas llevan foto a sangre, como el original: son la dirección de arte de la
marca. Lo que se ha quitado son las capas que ensuciaban el exportado.

- **Se elimina la capa `frost`** (la copia difuminada de la foto dentro de cada tarjeta).
  Cada tarjeta es ahora un panel opaco y uniforme, así que el texto nunca se apoya sobre
  la imagen y da igual lo que pase por detrás.
- **Velo de cabecera** sobre la foto, para el antetítulo, el título y la entradilla, que sí
  van directos sobre ella. Al imprimir se sustituye por un velo plano y uniforme.
- **El camino de impresión es plano** (ver la sección siguiente). Es lo que arregla las
  manchas de verdad.
- Exportación a PDF a 1600×900 px a sangre (antes 1650×950 con margen blanco).
- El logo va incrustado como SVG (`assets/odiseum-logo-white.svg`), no como PNG.

Rotación de fondos: `angel`, `surf`, `roll`, `surf`, `eames`, `roll`, `surf`, `roll`,
`angel`, `surf`, `birds`. `birds` (la bandada de estorninos) se reserva para el cierre, que
casi no tiene texto y es donde luce. `eames` se usa una sola vez porque sus puntos negros
se notan en los huecos entre tarjetas.

El contenido es el de la versión nueva del PDF, no el del HTML antiguo. Incluye los
cambios que traía esa versión: 290 €/mes de mantenimiento (antes 190 €), lista de
mantenimiento ampliada a 9 puntos, interlinking y FAQs en la fase de SEO, y el nuevo
punto de potencial de mejora en GEO.

## Archivos

| Archivo | Qué es |
| --- | --- |
| `Propuesta-Bernabeu-Market.html` | La presentación. Un solo archivo, sin dependencias externas. |
| `Propuesta-Bernabeu-Market.pdf` | Export a PDF, 11 páginas 16:9. |
| `assets/` | Logos de Odiseum (logo e isotipo, blanco y negro, SVG y PNG). |
| `assets/fondos/` | Las cinco fotos de fondo, a 1280×720. |
| `exportar-pdf.mjs` | Regenera el PDF sin diálogo de impresión. |

## El exportado: de dónde venían las manchas

Esta fue la causa de fondo. El HTML original pedía al motor de impresión seis cosas que
no puede resolver en vectores y tiene que **componer en bitmaps de baja resolución**:

| Qué | Dónde estaba |
| --- | --- |
| `filter: drop-shadow()` | el logo — el peor, un filtro fuerza rasterizado siempre |
| `text-shadow` | antetítulo, h1, h2, entradilla, pie, marca y numeración |
| `box-shadow` difusa | todas las tarjetas |
| `radial-gradient` apilados con transparencia | los fondos de las páginas |
| `overflow:hidden` + `border-radius` | una capa de recorte por página |
| `opacity` | los números grandes |

Chromium las resuelve razonablemente bien; **Safari las convierte en manchas.** Por eso el
PDF salía sucio al exportarlo desde el HTML aunque en pantalla se viera perfecto.

La solución está en el bloque `@media print`: sustituye todas esas capas por color opaco.
No queda nada que rasterizar. Medida objetiva del cambio: el PDF pasó de **6,4 MB a
0,7 MB** (0,42 MB en la versión sin fotos), y cada página contiene exactamente **una
imagen: la fotografía**. Ni una sola capa rasterizada de más. Una foto es un bitmap y se
imprime limpia; lo que se rasterizaba mal eran las sombras, los filtros y los degradados.

Esas mismas reglas están duplicadas en `body.flatmode`, que es lo que activa el botón
**Vista de exportación**: te deja ver en pantalla exactamente lo que va a salir en el PDF
antes de exportarlo.

> Si tocas el CSS, mantén las dos copias sincronizadas: las reglas planas viven en
> `@media print` y en `body.flatmode`, y tienen que decir lo mismo. Y no metas sombras
> difusas, filtros ni degradados radiales sin añadir su neutralización a las dos.

## Cómo usarla

Abre el HTML en el navegador. Abajo a la derecha hay cinco botones:

- **Editar texto** — haz clic en cualquier texto y escribe. Se guarda solo en el navegador.
  Si una tarjeta se queda sin espacio se marca en rojo y las fuentes se reajustan solas.
- **Restablecer** — descarta los cambios y vuelve al original.
- **Descargar HTML** — te bajas una copia con los cambios ya aplicados.
- **Vista de exportación** — muestra en pantalla el aspecto plano que tendrá el PDF.
- **Exportar a PDF** — imprime a PDF. En el diálogo: márgenes «Ninguno» y gráficos de
  fondo activados.

### Exportado sin diálogo de impresión

Para quitar de la ecuación qué navegador y con qué ajustes se exportó:

```sh
npm i playwright && npx playwright install chromium
node exportar-pdf.mjs
```

Da siempre el mismo PDF y avisa si alguna tarjeta se ha quedado sin espacio.
