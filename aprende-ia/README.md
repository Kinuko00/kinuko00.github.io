# Aprendamos IA 🌱

Curso web de inteligencia artificial desde cero,
en **español** y **chino mandarín** (一起学AI, caracteres simplificados).
Son **10 módulos de unos 15 minutos** en 4 niveles:

| Nivel | Módulos |
|---|---|
| 1. Primeros pasos | 1. ¿Qué es la IA? · 2. La IA que ya usa sin saberlo · 3. Conozca a los asistentes de IA |
| 2. Manos a la obra | 4. Cómo pedirle las cosas a la IA · 5. La IA en la vida diaria · 6. Hablar con la IA y mostrarle fotos |
| 3. Con buen criterio | 7. Cuando la IA se equivoca · 8. Seguridad, privacidad y estafas con IA |
| 4. Profundizando | 9. ¿Cómo funciona la IA por dentro? · 10. Mi plan personal con la IA |

Cada módulo tiene: objetivos, plan de tiempo (≈7 min de lección, ≈3 de preguntas, ≈5 de práctica),
lección de texto con botón **🔊 Escuchar** (lectura en voz alta), resumen “Para recordar”,
**preguntas de repaso** con corrección y explicación inmediatas, y **ejercicios prácticos** con pedidos de ejemplo
que se copian con un toque.

También incluye: ajuste de tamaño de letra y alto contraste, progreso guardado en el navegador,
glosario, un diploma imprimible al terminar y una página **💾 Mi avance** con un código para
guardar el progreso y recuperarlo en otro dispositivo.

## Cómo verlo

Es un sitio estático, sin instalación. Abra `index.html` en el navegador, o publíquelo con GitHub Pages.

## Idiomas

El botón **🌐 中文 / 🌐 Español** del encabezado cambia el idioma, y la elección se recuerda.
Si el navegador está en chino, el sitio abre en chino. También se puede forzar con `?lang=zh` o `?lang=es`
en la dirección (por ejemplo `index.html?lang=zh`). El progreso se comparte entre los dos idiomas.

## Cómo editar

- Contenido en español: `js/contenido.js`. Contenido en chino: `js/contenido-zh.js`.
  Los dos archivos tienen la misma estructura (mismos módulos, preguntas y respuestas correctas);
  si cambia una pregunta en un idioma, cámbiela también en el otro.
- Textos de la interfaz (botones, títulos, mensajes): `js/textos.js`.
- El código de avance depende de la cantidad de preguntas, opciones y ejercicios de cada módulo.
  Si agrega o quita preguntas o ejercicios, los códigos anotados antes dejan de servir.

## Al publicar cambios

Las páginas cargan los archivos con un número de versión (`?v=4`). Después de cambiar un archivo de `css/` o `js/`,
suba ese número en los cinco `.html` (por ejemplo a `?v=5`) para que los navegadores no muestren la versión anterior.
