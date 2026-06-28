---
name: x-algorithm
description: >-
  Escribe y optimiza hilos/posts para X (Twitter) usando el análisis del código
  fuente del algoritmo "For You" de xAI (mayo 2026). Úsala cuando el usuario
  quiera redactar un tweet o mini-hilo, mejorar el alcance de un post, o entender
  por qué el algoritmo amplifica/penaliza cierto contenido.
---

# X Algorithm — redacción y optimización de hilos

Skill para crear contenido en X (Twitter) que juega a favor del algoritmo del
"For You", basada en el análisis del código fuente publicado por xAI.

## Referencia

El documento completo de insights está en
[`INSIGHTS_algoritmo_X.md`](./INSIGHTS_algoritmo_X.md) (18 secciones, cada
afirmación citada al archivo de origen). Léelo cuando necesites el detalle de
una palanca concreta.

## Reglas de oro al redactar (resumen accionable)

1. **Optimiza dwell + reply, no likes.** El tiempo de permanencia
   (`dwell`, `cont_dwell_time`) y las respuestas pesan más que un like. El primer
   tweet debe retener: gancho fuerte, legible, que invite a quedarse.
2. **Evita `not_dwelled`.** Un post que la gente ignora con scroll *resta* al
   score. El clickbait que no engancha es peor que no publicar.
3. **Cruza el gate de "min-traction" en los primeros 30-60 min.** Sin engagement
   temprano, el post nunca entra al Banger Screen ni genera embedding de calidad
   → no hay descubrimiento out-of-network. Publica en horario punta de tu
   audiencia y activa a tu red pronto.
4. **Publica ORIGINAL.** Retweets y replies no pasan por el Banger Screen.
5. **Hilos: solo cuenta el mejor tweet.** `DedupConversationFilter` deja un único
   tweet por conversación en el feed. Encadenar respuestas NO ocupa más feed; el
   tweet 1 debe poder ganarse el alcance por sí solo.
6. **Espacia tus posts.** La *Author Diversity Decay* recorta exponencialmente
   cada post extra tuyo en un mismo feed.
7. **Idioma = el del lector objetivo.** El `language_code` viaja como feature.
   Para audiencia US, escribe en inglés.
8. **Calidad real > AI slop.** Existe un `slop_score` explícito. LLM + edición
   humana, nunca generación cruda.
9. **Ventana de vida: 0-12 h.** A las 80 h el post está muerto para For You.
10. **Frases citables + preguntas abiertas** disparan quote y reply (señales
    pesadas).

## Cómo construir un mini-hilo

- **Tweet 1 = el todo.** Tiene que funcionar solo (gancho + promesa) porque es el
  único que la mayoría verá en el feed. Termina con flecha/continuación (👇).
- Cada tweet ≤ 280 caracteres; uno por idea; ritmo de lectura rápido.
- Cierra con una pregunta o CTA que invite a responder (señal `reply`).
- Cita y frases memorables al servicio del mensaje (señal `quote`/`retweet`).

## Estilo del usuario

> (Pendiente: incorporar los ejemplos de estilo que el usuario aporte —
> tono, longitud, uso de emojis, vocabulario, estructura preferida.)
