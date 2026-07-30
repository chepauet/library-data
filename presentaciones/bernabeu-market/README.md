# Propuesta Bernabéu Market — Odiseum

Presentación de la propuesta de colaboración (Optimización web & sistema de pedidos QR),
reconstruida a partir del PDF de la versión nueva pero **sin las manchas**.

## Qué eran las manchas

Dos cosas distintas, las dos del efecto "liquid glass" del HTML original:

1. **Cada tarjeta llevaba dentro una copia difuminada de la foto de fondo**
   (`<img class="frost">`, reposicionada por JS en cada repintado). Al imprimir, esa capa
   se convertía en un borrón sucio dentro de la propia tarjeta.
2. **La foto a sangre detrás de las páginas de contenido.** Este es el problema de fondo y
   no se arregla con ajustes: en esas páginas las tarjetas ocupan casi toda la superficie,
   así que de la foto solo asoma un borde irregular y desenfocado entre ellas. Eso siempre
   se lee como un borrón, no como una imagen. Se probó a subir el velo (la foto quedaba
   como una silueta sin forma, peor) y a bajarlo (volvían a asomar las manchas).

## Qué se ha cambiado

Las fotos se mantienen: son la dirección de arte de la marca. Pero solo donde tienen
espacio para leerse como fotografía.

- **Se elimina la capa `frost`.** Cada tarjeta es ahora un panel casi opaco y uniforme.
- **Portada y cierre (`.slide.hero`): foto a sangre**, con un velo suave. Son las dos
  páginas con poco texto, así que la imagen se ve entera y luce.
- **Páginas de contenido: sin foto.** Superficie lisa de marca, en tres tonos que rotan
  (`data-tone="a|b|c"`), degradados sobre negro cálido. Cero textura entre tarjetas, cero
  manchas posibles.
- Exportación a PDF a 1600×900 px a sangre (antes 1650×950 con margen blanco).
- El logo va incrustado como SVG (`assets/odiseum-logo-white.svg`), no como PNG.

De las cinco fotos originales se usan dos: `angel` (portada) y `birds` (cierre). Las otras
quedan en `assets/fondos/` por si se quieren rotar o recuperar.

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
