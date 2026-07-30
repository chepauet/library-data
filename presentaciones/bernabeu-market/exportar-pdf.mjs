// Exporta la presentación a PDF sin pasar por el diálogo de impresión del
// navegador. Da siempre el mismo resultado, en cualquier máquina.
//
//   npm i playwright && npx playwright install chromium
//   node exportar-pdf.mjs [entrada.html] [salida.pdf]
//
// Por qué existe: el diálogo de impresión de Safari compone en bitmaps de baja
// resolución las capas blandas (filtros, sombras difusas, degradados radiales
// apilados), y de ahí salían las manchas. El CSS de impresión ya sustituye todo
// eso por color opaco, pero este script elimina también la variable de "qué
// navegador y con qué ajustes se exportó".

import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const entrada = resolve(process.argv[2] ?? 'Propuesta-Bernabeu-Market.html');
const salida = resolve(process.argv[3] ?? 'Propuesta-Bernabeu-Market.pdf');

const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1700, height: 1000 } });

const avisos = [];
pagina.on('console', (m) => {
  if (m.type() === 'warning' || m.text().startsWith('AUDIT')) avisos.push(m.text());
});

await pagina.goto(pathToFileURL(entrada).href);
await pagina.waitForTimeout(1200); // deja que paint() y autofit() terminen

await pagina.pdf({
  path: salida,
  width: '1600px',
  height: '900px',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});

await navegador.close();

for (const a of avisos) console.log(a);
console.log(`\n${salida}`);
console.log('11 páginas de 1600x900 px a sangre.');
console.log('Si algún aviso dice OVERFLOW, una tarjeta se ha quedado sin espacio:');
console.log('acorta ese texto en el HTML y vuelve a exportar.');
