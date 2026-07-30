# Propuesta Bernabéu Market — Odiseum

Presentación de la propuesta de colaboración (Optimización web & sistema de pedidos QR),
reconstruida a partir del PDF de la versión nueva pero **sin las manchas**.

## Qué eran las manchas

Dos cosas distintas, las dos del efecto "liquid glass" del HTML original:

1. **La foto de la bandada de estorninos** (`birds`) estaba asignada a las páginas 2 y 8,
   las dos más densas. El manchón negro moteado de los pájaros caía justo detrás de las
   tarjetas y del texto.
2. **Cada tarjeta llevaba dentro una copia difuminada de la foto de fondo**
   (`<img class="frost">`, reposicionada por JS en cada repintado). Al imprimir, esa capa
   se convertía en un borrón sucio dentro de la propia tarjeta.

## Qué se ha cambiado

Las fotos se mantienen: son la dirección de arte de la marca.

- **Se elimina la capa `frost`.** Cada tarjeta pasa a tener un velo oscuro propio, opaco y
  uniforme. El texto nunca se apoya directamente sobre la foto, así que da igual lo que
  pase por detrás de la tarjeta.
- **Velo general sobre la foto**, para que ninguna zona oscura de la imagen compita con el
  texto de cabecera, que sí va directo sobre ella (y por eso conserva sombra de legibilidad).
- **Reasignación de fondos.** `birds` (la bandada) se queda solo en el cierre, que casi no
  tiene texto y es donde luce. Las páginas densas usan `surf` y `roll`, las más suaves.
  `eames` (el cartel de puntos negros) sale del rotativo: detrás de una tarjeta siempre se
  leía como moteado.
- Exportación a PDF a 1600×900 px a sangre (antes 1650×950 con margen blanco).
- El logo va incrustado como SVG (`assets/odiseum-logo-white.svg`), no como PNG.

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
| `assets/fondos/` | Las cuatro fotos de fondo en uso, a 1280×720. |

## Cómo usarla

Abre el HTML en el navegador. Abajo a la derecha hay cuatro botones:

- **Editar texto** — haz clic en cualquier texto y escribe. Se guarda solo en el navegador.
  Si una tarjeta se queda sin espacio se marca en rojo y las fuentes se reajustan solas.
- **Restablecer** — descarta los cambios y vuelve al original.
- **Descargar HTML** — te bajas una copia con los cambios ya aplicados.
- **Exportar a PDF** — imprime a PDF. En el diálogo: márgenes «Ninguno» y gráficos de fondo activados.

## Nota sobre el peso del PDF

Son 6,4 MB: once páginas a sangre con foto de fondo. No lo recomprimas con
`PyMuPDF.rewrite_images()` — descarta los degradados de los velos y las tarjetas salen
planas (comprobado: diferencia media de hasta 35/255 por canal frente al original).
Si hace falta bajar peso, reduce la calidad de los JPEG de `assets/fondos/` y vuelve a
exportar.
