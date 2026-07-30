# Propuesta Bernabéu Market — Odiseum

Presentación de la propuesta de colaboración (Optimización web & sistema de pedidos QR),
reconstruida a partir del PDF de la versión nueva pero **sin las manchas**.

## Qué había mal

El PDF original se exportaba desde un HTML cuyos fondos eran fotos con desenfoque de
movimiento, y cada tarjeta llevaba encima una copia difuminada de esa misma foto
(el efecto "liquid glass"). Al imprimir, esas capas se convertían en manchones oscuros
y moteados que atravesaban las tarjetas y el texto, sobre todo en las páginas 2, 4 y 8.

## Qué se ha cambiado

- Fondos: las cinco fotos desenfocadas se sustituyen por cinco degradados lisos en la
  paleta de Odiseum (`ember`, `slate`, `amber`, `pine`, `night`). No hay ni una sola
  imagen rasterizada en el PDF, así que no puede aparecer ninguna mancha.
- Tarjetas: el efecto glass se consigue con relleno translúcido + borde, sin la imagen
  difuminada de fondo que había que reposicionar por JS.
- Se retiran las sombras de texto y las sombras fuertes de caja, que emborronaban la
  lectura sobre los fondos oscuros.
- Exportación a PDF a 1600×900 px a sangre (antes 1650×950 con margen blanco).
- El logo de Odiseum va incrustado como SVG (`assets/odiseum-logo-white.svg`), no como PNG.

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

## Cómo usarla

Abre el HTML en el navegador. Abajo a la derecha hay cuatro botones:

- **Editar texto** — haz clic en cualquier texto y escribe. Se guarda solo en el navegador.
  Si una tarjeta se queda sin espacio se marca en rojo y las fuentes se reajustan solas.
- **Restablecer** — descarta los cambios y vuelve al original.
- **Descargar HTML** — te bajas una copia con los cambios ya aplicados.
- **Exportar a PDF** — imprime a PDF. En el diálogo: márgenes «Ninguno» y gráficos de fondo activados.
