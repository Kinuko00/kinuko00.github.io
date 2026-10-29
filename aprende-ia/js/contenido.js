/*
 * Contenido del curso "Aprendamos IA".
 * Cada módulo está pensado para unos 15 minutos:
 *   ~7 min de lectura (o video), ~3 min de preguntas y ~5 min de práctica.
 *
 * Para agregar un video propio, complete "video.youtubeId" con el código
 * del video de YouTube (lo que aparece después de "watch?v=").
 * Si queda vacío, se muestra un botón para buscar videos sobre el tema.
 */

const NIVELES = [
  { numero: 1, nombre: "Primeros pasos", descripcion: "Qué es la inteligencia artificial y dónde la encontramos todos los días." },
  { numero: 2, nombre: "Manos a la obra", descripcion: "Cómo conversar con un asistente de IA y usarlo en la vida diaria." },
  { numero: 3, nombre: "Con buen criterio", descripcion: "Cuándo desconfiar, cómo verificar y cómo protegerse de estafas." },
  { numero: 4, nombre: "Profundizando", descripcion: "Cómo funciona por dentro y cómo armar su propio plan de uso." }
];

const MODULOS = [
  // ───────────────────────────── NIVEL 1 ─────────────────────────────
  {
    id: 1,
    nivel: 1,
    titulo: "¿Qué es la inteligencia artificial?",
    resumen: "Una explicación sencilla, sin palabras técnicas, de qué es la IA y qué no es.",
    objetivos: [
      "Explicar con sus propias palabras qué es la inteligencia artificial.",
      "Distinguir la IA real de la que aparece en las películas.",
      "Perderle el miedo: la IA es una herramienta, como la calculadora."
    ],
    video: { youtubeId: "", busqueda: "qué es la inteligencia artificial explicado fácil" },
    secciones: [
      {
        titulo: "Una idea sencilla",
        html: `
          <p>La <strong>inteligencia artificial</strong> (la llamamos <strong>IA</strong>) es un tipo de programa de computadora que
          <strong>aprende a partir de muchísimos ejemplos</strong> para hacer tareas que antes solo podíamos hacer las personas:
          entender lo que decimos, reconocer una cara en una foto, traducir un texto o responder una pregunta.</p>
          <p>Piense en cómo aprendió usted a reconocer si un tomate está maduro. Nadie le dio una regla exacta: vio cientos de tomates
          y con el tiempo “se le hizo el ojo”. La IA hace algo parecido, pero con millones de ejemplos y a gran velocidad.</p>`
      },
      {
        titulo: "Lo que la IA NO es",
        html: `
          <ul>
            <li><strong>No es un robot de película</strong> con sentimientos o intenciones propias.</li>
            <li><strong>No es una persona</strong> escondida detrás de la pantalla, aunque a veces lo parezca.</li>
            <li><strong>No lo sabe todo</strong> y puede equivocarse (lo veremos en el Nivel 3).</li>
          </ul>
          <p>Es una <strong>herramienta</strong>. Igual que una calculadora suma más rápido que nosotros sin “entender” los números,
          la IA puede escribir o conversar sin tener conciencia.</p>`
      },
      {
        titulo: "¿Por qué se habla tanto de ella ahora?",
        html: `
          <p>La IA existe desde hace más de 60 años, pero en los últimos años dio un gran salto: ahora cualquier persona puede
          <strong>conversar con ella escribiendo o hablando</strong>, en español, desde el teléfono. Ya no hace falta saber de computación.</p>
          <p>Eso significa que usted puede pedirle cosas como: <em>“Explícame qué significa esta palabra de la carta del banco”</em>
          o <em>“Dame una receta con lo que tengo en la heladera”</em>.</p>`
      },
      {
        titulo: "Una comparación para recordar",
        html: `
          <div class="caja-ejemplo">
            <p>La IA es como un <strong>ayudante muy leído</strong>: leyó millones de libros y páginas, responde rápido y con
            buena voluntad, pero <strong>a veces se confunde y no siempre lo admite</strong>. Por eso usted sigue siendo quien decide.</p>
          </div>`
      }
    ],
    recordar: [
      "La IA es un programa que aprende de muchos ejemplos.",
      "No tiene sentimientos ni intenciones: es una herramienta.",
      "Hoy se puede usar conversando, en español, desde el teléfono.",
      "Puede equivocarse: usted siempre tiene la última palabra."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál es la mejor descripción de la inteligencia artificial?",
        opciones: [
          "Un robot con sentimientos que piensa como una persona.",
          "Un programa que aprende de muchos ejemplos para hacer tareas.",
          "Una persona que contesta mensajes desde una oficina."
        ],
        correcta: 1,
        explicacion: "La IA es un programa que aprende de ejemplos. No tiene sentimientos ni hay una persona contestando."
      },
      {
        pregunta: "¿La IA puede equivocarse?",
        opciones: ["Nunca, siempre tiene razón.", "Sí, a veces se equivoca.", "Solo si está apagada."],
        correcta: 1,
        explicacion: "Sí. La IA comete errores, a veces con mucha seguridad. Por eso conviene verificar lo importante."
      },
      {
        pregunta: "¿Qué comparación se parece más a cómo aprende la IA?",
        opciones: [
          "Aprender a reconocer un tomate maduro después de ver muchos.",
          "Memorizar el número de teléfono de un amigo.",
          "Encender la luz con un interruptor."
        ],
        correcta: 0,
        explicacion: "Como nosotros con la experiencia, la IA aprende viendo muchísimos ejemplos."
      },
      {
        pregunta: "¿Hace falta saber de computación para usar la IA hoy?",
        opciones: ["Sí, hay que saber programar.", "No, se puede usar conversando en español."],
        correcta: 1,
        explicacion: "Los asistentes actuales entienden el idioma de todos los días, escrito o hablado."
      }
    ],
    ejercicios: [
      {
        titulo: "Explíquelo con sus palabras",
        pasos: [
          "Tome papel y lápiz (o la libreta de notas del teléfono).",
          "Escriba en 2 o 3 líneas qué es la IA, como si se lo contara a un nieto o a una amiga.",
          "Compare lo que escribió con la sección “Para recordar”. ¿Le faltó algo?"
        ],
        consejo: "No hay respuestas perfectas. Lo importante es que la explicación tenga sentido para usted."
      },
      {
        titulo: "Películas y realidad",
        pasos: [
          "Piense en una película o serie donde aparezca un robot o una computadora inteligente.",
          "Anote una cosa que esa máquina hacía y que la IA real NO hace (por ejemplo: tener emociones)."
        ],
        consejo: "Separar la fantasía de la realidad ayuda a perderle el miedo a la tecnología."
      }
    ]
  },

  {
    id: 2,
    nivel: 1,
    titulo: "La IA que ya usa sin saberlo",
    resumen: "Descubra todos los lugares donde la IA ya le ayuda: el teléfono, el correo, los mapas y más.",
    objetivos: [
      "Reconocer al menos cinco usos de la IA en la vida diaria.",
      "Entender que ya es usuario de IA, aunque no lo supiera.",
      "Ganar confianza para dar el siguiente paso."
    ],
    video: { youtubeId: "", busqueda: "inteligencia artificial en la vida cotidiana ejemplos" },
    secciones: [
      {
        titulo: "Buenas noticias: usted ya usa IA",
        html: `
          <p>Mucha gente cree que nunca usó inteligencia artificial, pero casi todos la usamos a diario. Veamos algunos ejemplos.</p>`
      },
      {
        titulo: "En el teléfono",
        html: `
          <ul>
            <li><strong>El teclado que adivina la palabra</strong> que va a escribir: eso es IA.</li>
            <li><strong>El dictado por voz</strong>: cuando toca el micrófono y el teléfono escribe lo que usted dice.</li>
            <li><strong>Los asistentes de voz</strong> como “Ok Google”, “Oye Siri” o Alexa.</li>
            <li><strong>Las fotos</strong>: el teléfono reconoce caras y agrupa las fotos de cada nieto automáticamente.</li>
          </ul>`
      },
      {
        titulo: "En la casa y en la calle",
        html: `
          <ul>
            <li><strong>Los mapas (Google Maps, Waze)</strong> calculan el camino más rápido según el tránsito.</li>
            <li><strong>El correo electrónico</strong> separa solo los mensajes basura (“spam”).</li>
            <li><strong>YouTube, Netflix o Spotify</strong> le recomiendan videos, películas o música según lo que le gusta.</li>
            <li><strong>El banco</strong> detecta compras extrañas con su tarjeta y le avisa.</li>
            <li><strong>Los traductores</strong> como Google Traductor, incluso apuntando la cámara a un cartel.</li>
          </ul>`
      },
      {
        titulo: "La novedad: los asistentes que conversan",
        html: `
          <p>Lo nuevo de estos años son los <strong>asistentes conversacionales</strong>: programas a los que uno les escribe o les habla
          como a una persona y responden con textos completos. Los conocerá en el próximo módulo.</p>
          <div class="caja-ejemplo"><p>Si ya usó el dictado por voz o el GPS, <strong>ya tiene experiencia con la IA</strong>.
          Lo que viene es solo un paso más.</p></div>`
      }
    ],
    recordar: [
      "El teclado, el dictado y los asistentes de voz usan IA.",
      "Los mapas, el filtro de spam y las recomendaciones también.",
      "El banco usa IA para detectar fraudes.",
      "Usted ya es usuario de IA: lo que sigue es aprender a pedirle cosas."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de estas cosas usa inteligencia artificial?",
        opciones: ["Una linterna.", "El GPS que calcula el camino más rápido.", "Un reloj de cuerda."],
        correcta: 1,
        explicacion: "El GPS analiza el tránsito y elige la mejor ruta: eso es IA."
      },
      {
        pregunta: "Cuando el correo separa los mensajes basura (spam), ¿qué está usando?",
        opciones: ["Inteligencia artificial.", "Una persona que lee sus correos.", "Nada, es casualidad."],
        correcta: 0,
        explicacion: "Un programa aprendió a reconocer mensajes basura viendo millones de ejemplos."
      },
      {
        pregunta: "¿Qué es el “dictado por voz”?",
        opciones: [
          "Que el teléfono lea sus mensajes en voz alta.",
          "Que el teléfono escriba lo que usted dice en voz alta.",
          "Una llamada de voz."
        ],
        correcta: 1,
        explicacion: "Toca el micrófono del teclado, habla, y el teléfono escribe sus palabras. Muy útil si las letras son pequeñas."
      },
      {
        pregunta: "¿Qué tienen de nuevo los asistentes conversacionales?",
        opciones: [
          "Que se puede conversar con ellos y responden con textos completos.",
          "Que solo funcionan en inglés.",
          "Que reemplazan al teléfono."
        ],
        correcta: 0,
        explicacion: "Se les puede escribir o hablar como a una persona, en español."
      }
    ],
    ejercicios: [
      {
        titulo: "Búsqueda del tesoro en su teléfono",
        pasos: [
          "Abra cualquier aplicación de mensajes (por ejemplo WhatsApp).",
          "Empiece a escribir “Buenos” y mire si el teclado le sugiere la palabra “días”. ¡Eso es IA!",
          "Ahora toque el ícono del micrófono 🎤 del teclado (no el de grabar audio) y diga: “Hola, estoy aprendiendo inteligencia artificial”.",
          "Mire cómo aparece el texto escrito. Puede borrarlo sin enviarlo."
        ],
        consejo: "Si no encuentra el micrófono, pídale a alguien de confianza que le muestre dónde está en su teclado. Vale la pena: lo usará mucho."
      },
      {
        titulo: "Mi lista de IA",
        pasos: [
          "Anote tres aparatos o aplicaciones que usa en casa.",
          "Al lado de cada uno, escriba si cree que usa IA y para qué (por ejemplo: “YouTube – me recomienda videos”)."
        ],
        consejo: "Esta lista le servirá para darse cuenta de cuánto ya sabe."
      }
    ]
  },

  {
    id: 3,
    nivel: 1,
    titulo: "Conozca a los asistentes de IA",
    resumen: "ChatGPT, Gemini, Copilot, Claude y Meta AI: qué son, cómo se usan y cómo empezar gratis.",
    objetivos: [
      "Conocer los asistentes de IA más usados.",
      "Saber cómo acceder a uno desde el teléfono o la computadora.",
      "Reconocer las partes de la pantalla de un asistente."
    ],
    video: { youtubeId: "", busqueda: "cómo usar ChatGPT para principiantes adultos mayores" },
    secciones: [
      {
        titulo: "¿Qué es un asistente de IA?",
        html: `
          <p>Es una aplicación o página web donde usted <strong>escribe (o dice) una pregunta o un pedido</strong>, y la IA le
          <strong>responde</strong>. Se parece a un chat de WhatsApp, pero del otro lado hay un programa.</p>`
      },
      {
        titulo: "Los más conocidos",
        html: `
          <table class="tabla">
            <thead><tr><th>Nombre</th><th>Empresa</th><th>Dónde se encuentra</th></tr></thead>
            <tbody>
              <tr><td><strong>ChatGPT</strong></td><td>OpenAI</td><td>App “ChatGPT” o chatgpt.com</td></tr>
              <tr><td><strong>Gemini</strong></td><td>Google</td><td>App “Gemini” o gemini.google.com (viene en muchos Android)</td></tr>
              <tr><td><strong>Copilot</strong></td><td>Microsoft</td><td>App “Copilot” o copilot.microsoft.com</td></tr>
              <tr><td><strong>Claude</strong></td><td>Anthropic</td><td>App “Claude” o claude.ai</td></tr>
              <tr><td><strong>Meta AI</strong></td><td>Meta</td><td>Dentro de WhatsApp (el círculo de colores)</td></tr>
            </tbody>
          </table>
          <p>Todos tienen una <strong>versión gratuita</strong> que alcanza para todo este curso. <strong>Elija uno solo</strong> para empezar;
          funcionan de manera muy parecida.</p>`
      },
      {
        titulo: "Cómo empezar",
        html: `
          <ol>
            <li>Descargue la aplicación <strong>oficial</strong> desde la tienda de su teléfono (Play Store en Android, App Store en iPhone).
            Fíjese que el nombre de la empresa sea el correcto.</li>
            <li>Muchas piden <strong>iniciar sesión</strong> con su cuenta de Google, Apple o un correo electrónico.</li>
            <li>Si la aplicación le ofrece un plan pago, puede tocar <strong>“Ahora no”</strong> o cerrar ese mensaje: la versión gratuita es suficiente.</li>
          </ol>
          <div class="caja-alerta"><p><strong>Cuidado:</strong> hay aplicaciones falsas que imitan a las verdaderas para cobrar o robar datos.
          Ante la duda, pida ayuda a un familiar o en la biblioteca o centro de jubilados de su barrio.</p></div>`
      },
      {
        titulo: "Las partes de la pantalla",
        html: `
          <ul>
            <li><strong>La caja de texto</strong> (abajo): donde escribe su mensaje. Suele decir “Pregunta lo que quieras” o “Escribe un mensaje”.</li>
            <li><strong>El micrófono 🎤</strong>: para hablar en lugar de escribir.</li>
            <li><strong>La flecha ➤</strong>: para enviar el mensaje.</li>
            <li><strong>El clip 📎 o el signo +</strong>: para agregar una foto o un documento.</li>
            <li><strong>“Nuevo chat”</strong>: para empezar una conversación sobre otro tema.</li>
          </ul>`
      }
    ],
    recordar: [
      "Un asistente de IA es como un chat donde responde un programa.",
      "Los más conocidos: ChatGPT, Gemini, Copilot, Claude y Meta AI.",
      "La versión gratuita alcanza. Elija uno solo para empezar.",
      "Descargue siempre la aplicación oficial."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de estos es un asistente de inteligencia artificial?",
        opciones: ["Gemini", "Facebook Marketplace", "La calculadora"],
        correcta: 0,
        explicacion: "Gemini es el asistente de IA de Google. Otros son ChatGPT, Copilot, Claude y Meta AI."
      },
      {
        pregunta: "¿Hace falta pagar para usar un asistente de IA?",
        opciones: ["Sí, siempre.", "No, todos tienen una versión gratuita."],
        correcta: 1,
        explicacion: "La versión gratuita es suficiente para aprender y para el uso diario."
      },
      {
        pregunta: "¿Para qué sirve el botón “Nuevo chat”?",
        opciones: [
          "Para llamar a un técnico.",
          "Para empezar una conversación nueva sobre otro tema.",
          "Para borrar la aplicación."
        ],
        correcta: 1,
        explicacion: "Conviene abrir un chat nuevo cuando cambia de tema, así la IA no mezcla las cosas."
      },
      {
        pregunta: "¿Dónde conviene descargar la aplicación?",
        opciones: [
          "Desde un enlace que me mandaron por mensaje.",
          "Desde la tienda oficial del teléfono, revisando el nombre de la empresa."
        ],
        correcta: 1,
        explicacion: "Los enlaces que llegan por mensaje pueden ser falsos. Use la Play Store o la App Store."
      }
    ],
    ejercicios: [
      {
        titulo: "Elegir e instalar mi asistente",
        pasos: [
          "Elija UN asistente de la tabla (si usa WhatsApp, Meta AI ya está ahí; si tiene Android, Gemini suele venir instalado).",
          "Si hace falta, descárguelo desde la tienda oficial de su teléfono.",
          "Ábralo e identifique: la caja de texto, el micrófono y la flecha de enviar."
        ],
        consejo: "Hacerlo acompañado la primera vez está perfecto. ¡Aprender juntos es más divertido!"
      },
      {
        titulo: "Mi primer saludo",
        pasos: [
          "En la caja de texto escriba el siguiente mensaje y tóquele la flecha para enviarlo:",
          "<span class=\"prompt\">Hola, tengo 67 años y estoy aprendiendo a usar la inteligencia artificial. ¿Me explicas en pocas palabras qué puedes hacer por mí?</span>",
          "Lea la respuesta con calma. Puede cambiar la edad por la suya."
        ],
        consejo: "No se puede “romper” nada. Si la respuesta es muy larga, escriba: “Más corto, por favor”."
      }
    ]
  },

  // ───────────────────────────── NIVEL 2 ─────────────────────────────
  {
    id: 4,
    nivel: 2,
    titulo: "Cómo pedirle las cosas a la IA",
    resumen: "El secreto de una buena respuesta es un buen pedido. Aprenda la receta de los tres ingredientes.",
    objetivos: [
      "Escribir pedidos claros con contexto.",
      "Pedir que la IA corrija o mejore su respuesta.",
      "Usar la conversación como un ida y vuelta."
    ],
    video: { youtubeId: "", busqueda: "cómo escribir buenas preguntas a ChatGPT prompts principiantes" },
    secciones: [
      {
        titulo: "Hablarle como a un ayudante nuevo",
        html: `
          <p>Imagine que contrata a un ayudante muy capaz, pero que <strong>todavía no sabe nada de usted</strong>. Si le dice solo “hacé una torta”,
          no sabrá para cuántos, de qué sabor ni si algún invitado es diabético. Con la IA pasa lo mismo: <strong>cuanto más claro el pedido, mejor la respuesta</strong>.</p>
          <p>Al mensaje que le escribimos a la IA se lo llama a veces <em>“prompt”</em> (palabra en inglés que significa “indicación”). Es simplemente <strong>el pedido</strong>.</p>`
      },
      {
        titulo: "La receta: tres ingredientes",
        html: `
          <ol>
            <li><strong>Qué quiere:</strong> la tarea. <em>“Dame una receta de torta…”</em></li>
            <li><strong>Para quién o para qué:</strong> el contexto. <em>“…para 8 personas, una es diabética…”</em></li>
            <li><strong>Cómo lo quiere:</strong> el formato. <em>“…con pasos cortos y numerados, y letra para leer sin anteojos”.</em></li>
          </ol>
          <div class="comparacion">
            <div class="caja-mal"><p class="etiqueta">Pedido flojo</p><p>“Receta de torta.”</p></div>
            <div class="caja-bien"><p class="etiqueta">Pedido claro</p><p>“Dame una receta de torta de manzana sin azúcar para 8 personas. Uno de los invitados es diabético. Escribe los pasos cortos y numerados.”</p></div>
          </div>`
      },
      {
        titulo: "Es una conversación: puede pedir cambios",
        html: `
          <p>No tiene que acertar a la primera. Después de la respuesta puede seguir escribiendo:</p>
          <ul>
            <li><span class="prompt">Explícalo más simple.</span></li>
            <li><span class="prompt">Hazlo más corto.</span></li>
            <li><span class="prompt">Dame otro ejemplo.</span></li>
            <li><span class="prompt">No entendí la palabra “interés compuesto”, ¿qué significa?</span></li>
          </ul>
          <p>La IA <strong>recuerda lo que hablaron en ese mismo chat</strong>, así que no hace falta repetir todo.</p>`
      },
      {
        titulo: "Un truco muy útil",
        html: `
          <div class="caja-ejemplo"><p>Cuando no sepa bien cómo pedir algo, escriba:
          <span class="prompt">Quiero hacer ___. Antes de responder, hazme las preguntas que necesites para ayudarme mejor.</span>
          La IA le hará preguntas y usted solo tendrá que contestarlas.</p></div>
          <p>Y recuerde: <strong>no hace falta ser formal ni tener buena ortografía</strong>. La IA entiende aunque haya errores.</p>`
      }
    ],
    recordar: [
      "Cuanto más claro el pedido, mejor la respuesta.",
      "Tres ingredientes: qué quiere, para quién o para qué, y cómo lo quiere.",
      "Puede pedir cambios: “más simple”, “más corto”, “otro ejemplo”.",
      "Si no sabe cómo pedirlo, pídale a la IA que le haga preguntas."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de estos pedidos dará una mejor respuesta?",
        opciones: [
          "“Viaje.”",
          "“Sugiéreme 3 paseos de un día cerca de Córdoba para una pareja de 68 años, con poco caminar.”",
          "“Decime algo.”"
        ],
        correcta: 1,
        explicacion: "Dice qué quiere (paseos), para quién (pareja de 68 años) y cómo (3 opciones, poco caminar)."
      },
      {
        pregunta: "Si la respuesta es muy complicada, ¿qué conviene hacer?",
        opciones: [
          "Cerrar la aplicación y no volver a usarla.",
          "Escribir: “Explícalo más simple, por favor”.",
          "Empezar todo de nuevo en otro teléfono."
        ],
        correcta: 1,
        explicacion: "Es una conversación: puede pedir que lo explique de otra manera las veces que quiera."
      },
      {
        pregunta: "¿Qué son los tres ingredientes de un buen pedido?",
        opciones: [
          "Saludo, despedida y firma.",
          "Qué quiero, para quién o para qué, y cómo lo quiero.",
          "Nombre, edad y dirección."
        ],
        correcta: 1,
        explicacion: "Tarea, contexto y formato. ¡Y no hace falta dar datos personales como la dirección!"
      },
      {
        pregunta: "¿Hace falta escribir sin errores de ortografía?",
        opciones: ["Sí, si no, no entiende nada.", "No, la IA entiende aunque haya errores."],
        correcta: 1,
        explicacion: "Escriba tranquilo. La IA entiende el lenguaje de todos los días."
      }
    ],
    ejercicios: [
      {
        titulo: "De pedido flojo a pedido claro",
        pasos: [
          "Primero envíe este pedido flojo: <span class=\"prompt\">Receta de sopa.</span>",
          "Luego abra un chat nuevo y envíe este pedido claro: <span class=\"prompt\">Dame una receta de sopa de verduras fácil, para 2 personas, baja en sal. Escribe los ingredientes en una lista y los pasos numerados.</span>",
          "Compare las dos respuestas. ¿Cuál le resulta más útil?"
        ],
        consejo: "Cambie “sopa de verduras” por su plato favorito."
      },
      {
        titulo: "Pedir cambios",
        pasos: [
          "Sobre la respuesta anterior, escriba: <span class=\"prompt\">Hazlo más corto.</span>",
          "Después escriba: <span class=\"prompt\">¿Qué puedo usar si no tengo zapallo?</span>",
          "Observe cómo la IA recuerda de qué estaban hablando."
        ],
        consejo: "Practique el ida y vuelta: es la habilidad más importante de todo el curso."
      }
    ]
  },

  {
    id: 5,
    nivel: 2,
    titulo: "La IA en la vida diaria",
    resumen: "Ideas prácticas: escribir mensajes, entender documentos, organizar el día, cocinar y aprender.",
    objetivos: [
      "Usar la IA para escribir y mejorar mensajes.",
      "Pedir explicaciones de textos difíciles.",
      "Organizar actividades, compras y viajes."
    ],
    video: { youtubeId: "", busqueda: "usos prácticos de la inteligencia artificial en la vida diaria" },
    secciones: [
      {
        titulo: "Escribir mensajes y cartas",
        html: `
          <p>La IA es una excelente ayuda para escribir cuando no encontramos las palabras:</p>
          <ul>
            <li><span class="prompt">Ayúdame a escribir un mensaje cariñoso para el cumpleaños 15 de mi nieta Sofía. Que sea corto y alegre.</span></li>
            <li><span class="prompt">Escribe una carta formal para pedirle al administrador del edificio que arreglen la luz del pasillo.</span></li>
            <li><span class="prompt">Corrige la ortografía de este texto sin cambiar lo que digo: (pegue su texto)</span></li>
          </ul>`
      },
      {
        titulo: "Entender textos difíciles",
        html: `
          <p>Cartas del banco, prospectos de medicamentos, contratos o noticias: puede copiar el texto y pedir que se lo expliquen.</p>
          <ul>
            <li><span class="prompt">Explícame en palabras simples qué quiere decir este párrafo: (pegue el texto)</span></li>
            <li><span class="prompt">¿Qué significa “débito automático” y cómo lo puedo cancelar en general?</span></li>
          </ul>
          <div class="caja-alerta"><p><strong>Importante:</strong> antes de pegar un documento, <strong>borre sus datos personales</strong>
          (número de documento, de cuenta, dirección). Lo veremos en el módulo 8.</p></div>`
      },
      {
        titulo: "Organizar el día, las compras y los paseos",
        html: `
          <ul>
            <li><span class="prompt">Hazme una lista de compras para una semana de comidas sencillas para una persona. Organízala por sección del supermercado.</span></li>
            <li><span class="prompt">Tengo turno con el médico el martes, la reunión del club el jueves y quiero caminar 3 veces por semana. Ármame un plan semanal.</span></li>
            <li><span class="prompt">Vamos a visitar Mendoza 3 días en abril. Somos dos personas de 70 años. Sugiéreme un itinerario tranquilo.</span></li>
          </ul>`
      },
      {
        titulo: "Aprender y entretenerse",
        html: `
          <ul>
            <li><span class="prompt">Enséñame 5 palabras en italiano para mi viaje, con su pronunciación.</span></li>
            <li><span class="prompt">Cuéntame la historia del tango en 5 minutos de lectura.</span></li>
            <li><span class="prompt">Juguemos a las adivinanzas: tú me das pistas y yo adivino.</span></li>
            <li><span class="prompt">Recomiéndame 3 libros parecidos a “Cien años de soledad”.</span></li>
          </ul>
          <div class="caja-ejemplo"><p>Piense en la IA como una <strong>ayuda para pensar y empezar</strong>, no como alguien que hace las cosas por usted.
          El toque personal lo pone usted.</p></div>`
      }
    ],
    recordar: [
      "La IA ayuda a escribir mensajes, cartas y a corregir textos.",
      "Puede explicar documentos difíciles en palabras simples.",
      "Sirve para organizar compras, la semana o un viaje.",
      "Borre siempre sus datos personales antes de pegar un documento."
    ],
    preguntas: [
      {
        pregunta: "Recibió una carta del banco con palabras que no entiende. ¿Qué puede hacer con la IA?",
        opciones: [
          "Pegar la carta completa con su número de cuenta.",
          "Copiar el párrafo difícil, sin datos personales, y pedir que lo explique en palabras simples.",
          "Nada, la IA no sirve para eso."
        ],
        correcta: 1,
        explicacion: "La IA es muy buena explicando, pero no comparta números de cuenta ni de documento."
      },
      {
        pregunta: "¿Cuál es un buen uso de la IA para organizarse?",
        opciones: [
          "Pedirle que arme una lista de compras por sección del supermercado.",
          "Darle la clave de la tarjeta para que pague.",
          "Pedirle que vaya al supermercado por usted."
        ],
        correcta: 0,
        explicacion: "La IA ayuda a planificar. Nunca le dé claves ni datos de tarjetas."
      },
      {
        pregunta: "Si la IA le escribe un mensaje de cumpleaños, ¿qué conviene hacer?",
        opciones: [
          "Enviarlo sin leerlo.",
          "Leerlo, cambiar lo que quiera y agregarle su toque personal.",
          "Reenviarlo a todos sus contactos."
        ],
        correcta: 1,
        explicacion: "La IA da un punto de partida. El cariño y los detalles los pone usted."
      }
    ],
    ejercicios: [
      {
        titulo: "Un mensaje para alguien querido",
        pasos: [
          "Piense en una persona a la que quiera mandarle un mensaje (cumpleaños, agradecimiento, saludo).",
          "Pídale a la IA: <span class=\"prompt\">Ayúdame a escribir un mensaje corto para agradecerle a mi vecina Marta que me regó las plantas mientras estuve de viaje. Que sea cálido y sencillo.</span>",
          "Cambie lo que no le guste. Puede pedir: “más informal” o “agrega que le voy a llevar un budín”.",
          "Si le gusta, cópielo y envíelo por WhatsApp."
        ],
        consejo: "Para copiar un texto: mantenga el dedo apretado sobre la respuesta y elija “Copiar”. Muchas apps tienen también un botón de copiar 📋."
      },
      {
        titulo: "Mi semana organizada",
        pasos: [
          "Anote 3 o 4 actividades que tiene esta semana.",
          "Escríbale a la IA: “Tengo estas actividades: ___. Ármame un plan semanal sencillo, con un rato de descanso cada día.”",
          "Revise si el plan tiene sentido para usted."
        ],
        consejo: "Puede pedirle que lo haga “en forma de tabla” o “para imprimir”."
      }
    ]
  },

  {
    id: 6,
    nivel: 2,
    titulo: "Hablar con la IA y mostrarle fotos",
    resumen: "Use la voz en lugar del teclado y la cámara para identificar plantas, leer letra chica o traducir.",
    objetivos: [
      "Conversar con la IA usando solo la voz.",
      "Enviar una foto y hacer preguntas sobre ella.",
      "Conocer usos prácticos de la cámara con IA."
    ],
    video: { youtubeId: "", busqueda: "cómo usar modo de voz y cámara en ChatGPT o Gemini tutorial" },
    secciones: [
      {
        titulo: "Si escribir le cuesta, ¡hable!",
        html: `
          <p>Todos los asistentes permiten usar la voz de dos maneras:</p>
          <ol>
            <li><strong>Dictado (🎤 micrófono):</strong> usted habla, el texto se escribe solo, y luego toca enviar.</li>
            <li><strong>Modo conversación (suele ser un ícono de ondas de sonido 〰️ o unas barritas):</strong> se conversa como en una llamada.
            La IA le responde en voz alta y usted contesta hablando.</li>
          </ol>
          <p>La primera vez el teléfono le pedirá <strong>permiso para usar el micrófono</strong>. Toque “Permitir”.</p>`
      },
      {
        titulo: "Consejos para hablarle",
        html: `
          <ul>
            <li>Hable con normalidad, ni muy rápido ni gritando.</li>
            <li>Si se equivoca, puede decir: <em>“No, perdón, quise decir…”</em>.</li>
            <li>Para interrumpir la respuesta, toque la pantalla o el botón de pausa.</li>
            <li>Busque un lugar sin mucho ruido.</li>
          </ul>`
      },
      {
        titulo: "La cámara: la IA que “ve”",
        html: `
          <p>Tocando el <strong>clip 📎, el signo + o el ícono de cámara</strong>, puede sacar o elegir una foto y preguntar sobre ella:</p>
          <ul>
            <li>🌿 <span class="prompt">¿Qué planta es esta y cómo la cuido?</span></li>
            <li>🔍 <span class="prompt">Léeme en letra grande lo que dice esta etiqueta.</span></li>
            <li>🍽️ <span class="prompt">Tengo estos ingredientes en la heladera, ¿qué puedo cocinar?</span></li>
            <li>🌍 <span class="prompt">Traduce al español este menú.</span></li>
            <li>📺 <span class="prompt">¿Para qué sirve cada botón de este control remoto?</span></li>
          </ul>`
      },
      {
        titulo: "Con cuidado",
        html: `
          <div class="caja-alerta">
            <p>No envíe fotos de <strong>documentos de identidad, tarjetas, recetas médicas con sus datos</strong> ni de otras personas sin su permiso.</p>
            <p>Para <strong>medicamentos</strong>: la IA puede ayudarle a leer la letra chica, pero las dudas sobre dosis consúltelas siempre con su médico o farmacéutico.</p>
          </div>`
      }
    ],
    recordar: [
      "Puede dictar con el micrófono o conversar en modo voz.",
      "La primera vez hay que darle permiso al micrófono y a la cámara.",
      "Con una foto puede identificar plantas, leer letra chica o traducir.",
      "No envíe fotos de documentos ni datos personales."
    ],
    preguntas: [
      {
        pregunta: "¿Qué hace el modo conversación por voz?",
        opciones: [
          "Permite hablar con la IA y que responda en voz alta, como en una llamada.",
          "Llama a un familiar automáticamente.",
          "Graba sus conversaciones con otras personas."
        ],
        correcta: 0,
        explicacion: "Es como una charla: usted habla y la IA le contesta en voz alta."
      },
      {
        pregunta: "¿Cuál de estas fotos NO conviene enviarle a la IA?",
        opciones: ["Una planta del jardín.", "Su documento de identidad.", "El menú de un restaurante."],
        correcta: 1,
        explicacion: "Los documentos personales nunca deben compartirse con la IA."
      },
      {
        pregunta: "La IA leyó el prospecto de su medicamento. ¿Qué hace si tiene dudas sobre la dosis?",
        opciones: [
          "Sigo lo que dice la IA sin consultar.",
          "Consulto con mi médico o farmacéutico.",
          "Tomo el doble por las dudas."
        ],
        correcta: 1,
        explicacion: "La IA ayuda a leer, pero en salud la palabra final la tiene el profesional."
      }
    ],
    ejercicios: [
      {
        titulo: "Una charla por voz",
        pasos: [
          "Abra su asistente y busque el ícono del micrófono 🎤 o del modo voz 〰️.",
          "Diga: “Hola, contame una curiosidad sobre los pájaros de mi país”. (Puede nombrar su país).",
          "Escuche la respuesta y haga una pregunta más sobre lo que le contó."
        ],
        consejo: "Si no funciona, revise que el volumen esté alto y que haya permitido el uso del micrófono."
      },
      {
        titulo: "La IA mira por usted",
        pasos: [
          "Busque una planta, un objeto de la cocina o la etiqueta de un producto.",
          "En su asistente, toque el 📎 o + y luego “Cámara”. Saque la foto.",
          "Escriba o diga: <span class=\"prompt\">¿Qué es esto y para qué sirve?</span>",
          "Compare la respuesta con lo que usted ya sabe. ¿Acertó?"
        ],
        consejo: "Este ejercicio también le muestra que la IA puede equivocarse: ¡póngala a prueba!"
      }
    ]
  },

  // ───────────────────────────── NIVEL 3 ─────────────────────────────
  {
    id: 7,
    nivel: 3,
    titulo: "Cuando la IA se equivoca",
    resumen: "La IA puede inventar datos con total seguridad. Aprenda a detectarlo y a verificar.",
    objetivos: [
      "Entender por qué la IA a veces inventa respuestas.",
      "Aplicar tres formas sencillas de verificar.",
      "Saber en qué temas siempre hay que consultar a un profesional."
    ],
    video: { youtubeId: "", busqueda: "por qué la inteligencia artificial se equivoca alucinaciones explicado" },
    secciones: [
      {
        titulo: "Seguro… pero equivocado",
        html: `
          <p>La IA está hecha para <strong>dar respuestas que suenen bien</strong>. Casi siempre aciertan, pero a veces
          <strong>inventa</strong> datos, fechas, nombres o direcciones, y lo dice con la misma seguridad que cuando acierta.
          A estos errores se los llama <strong>“alucinaciones”</strong>.</p>
          <div class="caja-ejemplo"><p>Es como ese conocido que <strong>nunca dice “no sé”</strong>: si le pregunta una dirección que no conoce,
          igual le indica un camino.</p></div>`
      },
      {
        titulo: "Dónde se equivoca más",
        html: `
          <ul>
            <li><strong>Noticias muy recientes</strong> (puede no estar actualizada).</li>
            <li><strong>Datos muy precisos:</strong> horarios, precios, teléfonos, direcciones.</li>
            <li><strong>Citas y referencias:</strong> puede inventar libros o frases de personas famosas.</li>
            <li><strong>Cálculos largos</strong> y cosas sobre lugares o personas poco conocidas.</li>
          </ul>`
      },
      {
        titulo: "Tres formas sencillas de verificar",
        html: `
          <ol>
            <li><strong>Pregúntele de dónde lo sacó:</strong> <span class="prompt">¿Cómo sabes eso? ¿Dónde puedo confirmarlo?</span></li>
            <li><strong>Compare con una fuente confiable:</strong> la página oficial del organismo, el banco, la farmacia o un diario conocido.</li>
            <li><strong>Consulte a una persona:</strong> un profesional, un familiar o la persona que atiende el servicio.</li>
          </ol>
          <p>Regla práctica: <strong>cuanto más importante es la decisión, más hay que verificar.</strong></p>`
      },
      {
        titulo: "Temas en los que la IA no reemplaza a nadie",
        html: `
          <div class="caja-alerta">
            <ul>
              <li>🩺 <strong>Salud:</strong> síntomas, diagnósticos, dosis de medicamentos → su médico.</li>
              <li>💰 <strong>Dinero:</strong> inversiones, préstamos, jubilación → su banco o un asesor.</li>
              <li>⚖️ <strong>Temas legales:</strong> herencias, contratos, trámites → un abogado o el organismo oficial.</li>
            </ul>
            <p>La IA sí puede ayudarle a <strong>preparar preguntas</strong> para llevar a la consulta:
            <span class="prompt">Tengo turno con el cardiólogo. Ayúdame a preparar 5 preguntas sobre mi presión alta.</span></p>
          </div>`
      }
    ],
    recordar: [
      "La IA a veces inventa datos con mucha seguridad (“alucinaciones”).",
      "Verifique: pregunte la fuente, compare y consulte a una persona.",
      "Cuanto más importante la decisión, más hay que verificar.",
      "Salud, dinero y temas legales: siempre un profesional."
    ],
    preguntas: [
      {
        pregunta: "¿Qué es una “alucinación” de la IA?",
        opciones: [
          "Cuando la IA ve fantasmas.",
          "Cuando la IA inventa un dato y lo presenta como verdadero.",
          "Cuando la pantalla parpadea."
        ],
        correcta: 1,
        explicacion: "La IA puede inventar información que suena muy convincente."
      },
      {
        pregunta: "La IA le dice el horario de atención de una oficina pública. ¿Qué hace?",
        opciones: [
          "Voy directamente, seguro que es así.",
          "Lo confirmo en la página oficial o llamando por teléfono.",
          "Le pregunto a la IA dos veces y listo."
        ],
        correcta: 1,
        explicacion: "Horarios, precios y direcciones son datos donde la IA suele equivocarse. Confírmelos."
      },
      {
        pregunta: "¿Cuál es un buen uso de la IA en temas de salud?",
        opciones: [
          "Reemplazar la consulta médica.",
          "Preparar preguntas para llevarle al médico.",
          "Decidir la dosis de un medicamento."
        ],
        correcta: 1,
        explicacion: "La IA puede ayudarle a organizarse, pero el diagnóstico y el tratamiento son del profesional."
      },
      {
        pregunta: "Según la regla práctica, ¿cuándo hay que verificar más?",
        opciones: [
          "Cuanto más importante es la decisión.",
          "Solo los domingos.",
          "Nunca, la IA es infalible."
        ],
        correcta: 0,
        explicacion: "Para una receta de cocina, poco riesgo. Para dinero o salud, verifique siempre."
      }
    ],
    ejercicios: [
      {
        titulo: "Detective de errores",
        pasos: [
          "Pregúntele a la IA algo que usted conozca muy bien: su barrio, su oficio, la historia de su club o de su pueblo.",
          "Por ejemplo: <span class=\"prompt\">Cuéntame la historia del barrio ___ de la ciudad de ___.</span>",
          "Lea con atención: ¿encuentra algún error o dato inventado?",
          "Si encuentra uno, dígaselo: “Eso no es correcto, en realidad…”. Mire cómo responde."
        ],
        consejo: "Usted sabe cosas que la IA no sabe. Su experiencia vale mucho."
      },
      {
        titulo: "Preparar una consulta",
        pasos: [
          "Piense en su próximo turno médico, trámite o visita al banco.",
          "Pida: <span class=\"prompt\">Tengo una consulta sobre ___. Ayúdame a preparar una lista de preguntas para no olvidarme nada.</span>",
          "Copie la lista en un papel o guárdela en el teléfono para llevarla."
        ],
        consejo: "Este es uno de los usos más útiles y seguros de la IA."
      }
    ]
  },

  {
    id: 8,
    nivel: 3,
    titulo: "Seguridad, privacidad y estafas con IA",
    resumen: "Qué datos nunca compartir y cómo reconocer estafas nuevas, como voces clonadas y videos falsos.",
    objetivos: [
      "Saber qué información no compartir con la IA.",
      "Reconocer estafas que usan IA: voces clonadas, videos y fotos falsas.",
      "Armar un plan familiar de seguridad con una palabra clave."
    ],
    video: { youtubeId: "", busqueda: "estafas con inteligencia artificial clonación de voz cómo protegerse" },
    secciones: [
      {
        titulo: "Lo que nunca se comparte",
        html: `
          <p>Las conversaciones con la IA pueden guardarse y, en algunos casos, ser revisadas para mejorar el servicio.
          Por eso, <strong>nunca escriba</strong>:</p>
          <ul>
            <li>🔑 Contraseñas, claves del banco o PIN.</li>
            <li>💳 Números de tarjetas o cuentas bancarias.</li>
            <li>🪪 Número de documento o de jubilación.</li>
            <li>🏠 Su dirección completa o datos de salud que lo identifiquen.</li>
          </ul>
          <p>Si necesita ayuda con un documento, <strong>reemplace los datos por XXXX</strong> antes de pegarlo.</p>`
      },
      {
        titulo: "Estafas nuevas: la voz clonada",
        html: `
          <p>Con la IA, los estafadores pueden <strong>imitar la voz de un familiar</strong> usando unos pocos segundos de un audio o video
          publicado en redes sociales. Luego llaman o mandan un audio de WhatsApp:</p>
          <div class="caja-mal"><p>“Abuela, soy yo, tuve un accidente, no le digas a mamá. Necesito que me transfieras plata ya.”</p></div>
          <p>Las señales de alarma son siempre las mismas: <strong>urgencia, secreto y dinero</strong>.</p>`
      },
      {
        titulo: "Fotos y videos falsos",
        html: `
          <p>La IA también puede crear <strong>fotos y videos falsos muy realistas</strong> (se los llama <em>“deepfakes”</em>), por ejemplo,
          un famoso o un médico conocido recomendando un producto milagroso o una inversión.</p>
          <ul>
            <li>Desconfíe de ofertas <strong>demasiado buenas</strong> o curas milagrosas.</li>
            <li>Ningún famoso le va a escribir personalmente para pedirle dinero.</li>
            <li>Mire los detalles: labios que no coinciden con la voz, manos raras, voz monótona.</li>
          </ul>`
      },
      {
        titulo: "Su plan de protección",
        html: `
          <div class="caja-bien">
            <ol>
              <li><strong>Pare:</strong> no actúe con apuro. Los bancos y la familia pueden esperar cinco minutos.</li>
              <li><strong>Corte y llame usted</strong> al número que tiene agendado de esa persona o del banco.</li>
              <li><strong>Palabra clave familiar:</strong> acuerde con su familia una palabra secreta que solo ustedes conozcan
              (por ejemplo, el nombre de una mascota de la infancia). Si alguien pide dinero “en nombre” de un familiar, pídale la palabra.</li>
              <li><strong>Cuéntelo:</strong> hablar de los intentos de estafa con otros protege a todos. No da vergüenza: les pasa a personas de todas las edades.</li>
            </ol>
          </div>`
      }
    ],
    recordar: [
      "Nunca comparta claves, tarjetas, documentos ni su dirección.",
      "La IA puede imitar voces: urgencia + secreto + dinero = alarma.",
      "Corte y llame usted al número que tiene agendado.",
      "Acuerde una palabra clave con su familia."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de estos datos puede compartir con la IA sin problema?",
        opciones: [
          "La clave del homebanking.",
          "Que le gusta cocinar y quiere recetas sin gluten.",
          "El número de su tarjeta de crédito."
        ],
        correcta: 1,
        explicacion: "Gustos y preferencias generales, sí. Claves y números de tarjetas, nunca."
      },
      {
        pregunta: "Recibe un audio con la voz de su nieto pidiendo plata urgente y en secreto. ¿Qué hace?",
        opciones: [
          "Transfiero rápido para ayudarlo.",
          "Corto, y llamo yo al número de mi nieto o a sus padres para confirmar.",
          "Le mando mis datos bancarios."
        ],
        correcta: 1,
        explicacion: "Urgencia, secreto y dinero son las señales de estafa. Confirme siempre llamando usted."
      },
      {
        pregunta: "¿Para qué sirve una palabra clave familiar?",
        opciones: [
          "Para confirmar que quien pide ayuda es realmente un familiar.",
          "Para entrar al WiFi.",
          "Para desbloquear el teléfono."
        ],
        correcta: 0,
        explicacion: "Una voz se puede imitar, pero la palabra secreta que acordaron solo la conocen ustedes."
      },
      {
        pregunta: "Ve un video de un médico famoso recomendando una pastilla milagrosa. ¿Qué piensa?",
        opciones: [
          "Puede ser un video falso hecho con IA; desconfío y consulto a mi médico.",
          "Si sale en video, es verdad.",
          "La compro antes de que se agote."
        ],
        correcta: 0,
        explicacion: "Los “deepfakes” imitan a personas conocidas. Las curas milagrosas son una señal de alarma."
      }
    ],
    ejercicios: [
      {
        titulo: "Nuestra palabra clave",
        pasos: [
          "Llame o visite a sus familiares más cercanos.",
          "Cuénteles lo que aprendió sobre las voces clonadas.",
          "Acuerden una palabra clave que no esté en redes sociales (no use fechas de cumpleaños ni nombres conocidos).",
          "Anótela en un lugar seguro, no en el teléfono."
        ],
        consejo: "Este ejercicio protege a toda la familia. ¡Puede que sus hijos y nietos también aprendan algo!"
      },
      {
        titulo: "¿Estafa o no?",
        pasos: [
          "Pídale a la IA: <span class=\"prompt\">Dame 3 ejemplos de mensajes de estafa comunes que reciben las personas mayores y explícame cómo reconocer cada uno.</span>",
          "Lea los ejemplos e identifique las señales: urgencia, secreto, dinero, enlaces extraños.",
          "Revise sus mensajes recientes: ¿recibió alguno parecido?"
        ],
        consejo: "Si tiene dudas sobre un mensaje real, puede pegar el texto (sin datos personales) y preguntar: “¿Esto parece una estafa?”. Pero ante la duda, no toque enlaces y consulte a alguien."
      }
    ]
  },

  // ───────────────────────────── NIVEL 4 ─────────────────────────────
  {
    id: 9,
    nivel: 4,
    titulo: "¿Cómo funciona la IA por dentro?",
    resumen: "Una mirada simple a cómo aprende la IA, por qué parece inteligente y cuáles son sus límites.",
    objetivos: [
      "Entender, en forma sencilla, cómo aprende un asistente de IA.",
      "Comprender por qué a veces se equivoca.",
      "Conocer algunas palabras que se escuchan en las noticias."
    ],
    video: { youtubeId: "", busqueda: "cómo funciona ChatGPT explicado de forma sencilla" },
    secciones: [
      {
        titulo: "Aprender leyendo muchísimo",
        html: `
          <p>Los asistentes como ChatGPT, Gemini o Claude se entrenaron <strong>leyendo una cantidad enorme de textos</strong>:
          libros, páginas web, artículos. Tanto que una persona no podría leerlo ni en miles de vidas.</p>
          <p>Leyendo tanto, el programa aprendió <strong>cómo se suelen combinar las palabras</strong>: qué palabra suele venir después de otra,
          cómo se responde una pregunta, cómo se escribe una receta o una carta.</p>`
      },
      {
        titulo: "El juego de completar la frase",
        html: `
          <div class="caja-ejemplo">
            <p>Si le digo: <em>“Más vale pájaro en mano que…”</em>, usted completa enseguida: <strong>“…cien volando”</strong>.</p>
            <p>La IA hace algo parecido: <strong>va eligiendo la palabra más probable</strong>, una tras otra, muy rápido, hasta armar una respuesta completa.</p>
          </div>
          <p>Por eso a veces se equivoca: elige lo que <strong>suena</strong> correcto, no necesariamente lo que <strong>es</strong> correcto.
          No “sabe” las cosas como una persona; reconoce patrones.</p>`
      },
      {
        titulo: "Palabras que escuchará en las noticias",
        html: `
          <dl class="glosario-lista">
            <dt>Algoritmo</dt><dd>Una serie de pasos o instrucciones, como una receta de cocina, que sigue una computadora.</dd>
            <dt>Entrenamiento</dt><dd>El proceso de “enseñarle” a la IA con muchos ejemplos.</dd>
            <dt>Modelo de lenguaje</dt><dd>El tipo de IA que entiende y escribe textos. Es el “cerebro” de los asistentes conversacionales.</dd>
            <dt>IA generativa</dt><dd>IA que crea cosas nuevas: textos, imágenes, música o videos.</dd>
            <dt>Datos</dt><dd>La información (textos, fotos, números) con la que aprende la IA.</dd>
          </dl>`
      },
      {
        titulo: "Sus límites (y por qué usted es importante)",
        html: `
          <ul>
            <li>No tiene experiencias, recuerdos de vida ni sentido común como usted.</li>
            <li>Puede repetir errores o prejuicios que había en los textos con los que aprendió.</li>
            <li>No siempre sabe lo que pasó ayer.</li>
          </ul>
          <p>Su <strong>experiencia de vida, su criterio y su sentido común</strong> son justamente lo que la IA no tiene. Juntos, ustedes forman un buen equipo.</p>`
      }
    ],
    recordar: [
      "La IA aprendió leyendo una cantidad enorme de textos.",
      "Arma respuestas eligiendo la palabra más probable, una tras otra.",
      "Por eso a veces “suena bien” pero se equivoca.",
      "Su experiencia y criterio complementan a la IA."
    ],
    preguntas: [
      {
        pregunta: "¿Cómo aprendió un asistente como ChatGPT o Gemini?",
        opciones: [
          "Leyendo una enorme cantidad de textos.",
          "Yendo a la escuela.",
          "Copiando las respuestas de una persona en tiempo real."
        ],
        correcta: 0,
        explicacion: "Se entrenó con muchísimos textos y aprendió cómo se combinan las palabras."
      },
      {
        pregunta: "¿Por qué la IA a veces se equivoca?",
        opciones: [
          "Porque lo hace a propósito.",
          "Porque elige lo que suena correcto, no siempre lo que es correcto.",
          "Porque el teléfono es viejo."
        ],
        correcta: 1,
        explicacion: "Reconoce patrones de palabras; no verifica los hechos como lo haría una persona."
      },
      {
        pregunta: "¿Qué es un “algoritmo”?",
        opciones: [
          "Un tipo de virus.",
          "Una serie de pasos o instrucciones, como una receta.",
          "Una marca de computadoras."
        ],
        correcta: 1,
        explicacion: "Un algoritmo es como una receta que sigue la computadora paso a paso."
      },
      {
        pregunta: "¿Qué es la “IA generativa”?",
        opciones: [
          "IA que crea textos, imágenes o música nuevos.",
          "IA que genera electricidad.",
          "IA que solo funciona en generadores."
        ],
        correcta: 0,
        explicacion: "Los asistentes conversacionales son un ejemplo de IA generativa."
      }
    ],
    ejercicios: [
      {
        titulo: "Juguemos a completar frases",
        pasos: [
          "Escríbale a la IA: <span class=\"prompt\">Juguemos: yo te digo el comienzo de un refrán y tú lo completas.</span>",
          "Pruebe con refranes de su país o de su familia, incluso algunos poco conocidos.",
          "¿Los completa bien? ¿Inventa alguno? Así verá en acción cómo “predice” palabras."
        ],
        consejo: "Si inventa un refrán, ¡acaba de ver una alucinación de cerca!"
      },
      {
        titulo: "Pedirle que se explique",
        pasos: [
          "Pregúntele: <span class=\"prompt\">Explícame cómo funcionas tú, como si yo tuviera 10 años.</span>",
          "Luego: <span class=\"prompt\">¿Qué cosas no puedes hacer bien?</span>",
          "Compare con lo que aprendió en este módulo."
        ],
        consejo: "La frase “como si tuviera 10 años” sirve para pedir explicaciones simples sobre cualquier tema."
      }
    ]
  },

  {
    id: 10,
    nivel: 4,
    titulo: "Mi plan personal con la IA",
    resumen: "Junte todo lo aprendido: proyectos para conectar con la familia, aprender y preservar recuerdos.",
    objetivos: [
      "Elegir dos o tres usos de la IA que le sirvan de verdad.",
      "Hacer un pequeño proyecto personal de principio a fin.",
      "Saber cómo seguir aprendiendo."
    ],
    video: { youtubeId: "", busqueda: "proyectos con inteligencia artificial para adultos mayores" },
    secciones: [
      {
        titulo: "Repaso del camino",
        html: `
          <p>¡Llegó al último módulo! Recordemos lo aprendido:</p>
          <ul>
            <li><strong>Nivel 1:</strong> qué es la IA, dónde está y cuáles son los asistentes.</li>
            <li><strong>Nivel 2:</strong> cómo pedirle cosas, usos diarios, voz y cámara.</li>
            <li><strong>Nivel 3:</strong> verificar, protegerse y cuidar sus datos.</li>
            <li><strong>Nivel 4:</strong> cómo funciona por dentro.</li>
          </ul>`
      },
      {
        titulo: "Ideas de proyectos",
        html: `
          <div class="tarjetas-ideas">
            <div class="idea"><h4>📖 Mis memorias</h4><p>Cuente en voz alta historias de su vida y pida a la IA que le ayude a ordenarlas y pasarlas en limpio para regalarle a la familia.</p>
              <p><span class="prompt">Te voy a contar cómo conocí a mi pareja. Ayúdame a escribirlo como un relato corto, manteniendo mis palabras.</span></p></div>
            <div class="idea"><h4>🍲 El recetario familiar</h4><p>Pase las recetas de la familia a un recetario prolijo, con ingredientes y pasos claros.</p>
              <p><span class="prompt">Ordena esta receta de mi abuela en ingredientes y pasos numerados: (dicte la receta)</span></p></div>
            <div class="idea"><h4>🌱 Aprender algo nuevo</h4><p>Un idioma, la historia de un lugar, jardinería o astronomía, con un “profesor” paciente.</p>
              <p><span class="prompt">Quiero aprender lo básico de jardinería en balcón. Dame una lección corta por día durante una semana.</span></p></div>
            <div class="idea"><h4>👨‍👩‍👧 Conectar con la familia</h4><p>Ideas de juegos, conversaciones o actividades para compartir con nietos.</p>
              <p><span class="prompt">Dame 5 ideas de actividades para hacer con mi nieto de 8 años en una tarde de lluvia, sin pantallas.</span></p></div>
          </div>`
      },
      {
        titulo: "Mis reglas de oro",
        html: `
          <div class="caja-bien">
            <ol>
              <li>Pido con claridad: qué, para quién y cómo.</li>
              <li>Converso: pido cambios hasta que me sirva.</li>
              <li>Verifico lo importante.</li>
              <li>Nunca comparto claves ni datos personales.</li>
              <li>Ante urgencia + secreto + dinero: corto y llamo yo.</li>
              <li>Uso la IA como ayuda, la última palabra es mía.</li>
            </ol>
          </div>`
      },
      {
        titulo: "Cómo seguir aprendiendo",
        html: `
          <ul>
            <li>Practique <strong>un poquito cada día</strong>: 10 minutos alcanzan.</li>
            <li>Pídale a la propia IA: <span class="prompt">Soy principiante. Proponme un pequeño desafío para practicar contigo hoy.</span></li>
            <li>Busque talleres en centros de jubilados, bibliotecas, universidades de la tercera edad o municipios.</li>
            <li>Enseñe a otra persona lo que aprendió: es la mejor manera de afianzarlo.</li>
          </ul>`
      }
    ],
    recordar: [
      "Elija 2 o 3 usos que le sirvan de verdad y practíquelos.",
      "Proyectos posibles: memorias, recetario, aprender algo nuevo, actividades con la familia.",
      "Siga sus reglas de oro: pedir claro, conversar, verificar y proteger sus datos.",
      "Practicar un poco cada día es la mejor forma de aprender."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál es una buena forma de seguir aprendiendo?",
        opciones: [
          "Practicar unos minutos cada día.",
          "Usarla una vez al año.",
          "Esperar a que alguien lo haga por mí."
        ],
        correcta: 0,
        explicacion: "La práctica frecuente, aunque sea corta, es lo que más ayuda."
      },
      {
        pregunta: "Quiere escribir sus memorias con ayuda de la IA. ¿Qué es lo más recomendable?",
        opciones: [
          "Que la IA invente una vida interesante.",
          "Contarle sus historias y pedirle ayuda para ordenarlas, manteniendo sus palabras.",
          "Copiar la biografía de otra persona."
        ],
        correcta: 1,
        explicacion: "La IA ayuda a ordenar y pasar en limpio. Las historias y la voz son suyas."
      },
      {
        pregunta: "¿Cuál NO es una de las reglas de oro?",
        opciones: [
          "Verifico lo importante.",
          "Le doy mis claves para que me ayude más rápido.",
          "La última palabra es mía."
        ],
        correcta: 1,
        explicacion: "Las claves y datos personales nunca se comparten."
      }
    ],
    ejercicios: [
      {
        titulo: "Mi primer proyecto",
        pasos: [
          "Elija uno de los cuatro proyectos de ideas (memorias, recetario, aprender algo, familia).",
          "Use el pedido de ejemplo, cambiándolo a su gusto.",
          "Converse con la IA al menos 3 veces para mejorar el resultado (más corto, más cálido, agregar un detalle…).",
          "Guarde o comparta el resultado con alguien querido."
        ],
        consejo: "No busque la perfección: el objetivo es disfrutar y animarse."
      },
      {
        titulo: "Mi plan semanal de práctica",
        pasos: [
          "Anote 3 cosas concretas en las que va a usar la IA esta semana (por ejemplo: lunes, lista de compras; miércoles, aprender 5 palabras en inglés; viernes, mensaje a un amigo).",
          "Pegue la lista en la heladera o un lugar visible.",
          "Al final de la semana, marque lo que hizo y piense qué le gustó más."
        ],
        consejo: "¡Felicitaciones por llegar hasta acá! Puede imprimir su diploma al terminar el curso."
      }
    ]
  }
];

const GLOSARIO = [
  { termino: "Inteligencia artificial (IA)", definicion: "Programas que aprenden de muchos ejemplos para hacer tareas como entender, escribir o reconocer imágenes." },
  { termino: "Asistente de IA", definicion: "Aplicación con la que se conversa por escrito o hablando: ChatGPT, Gemini, Copilot, Claude, Meta AI." },
  { termino: "Prompt (pedido)", definicion: "El mensaje o pedido que le escribimos o decimos a la IA." },
  { termino: "Chat", definicion: "Una conversación escrita. “Nuevo chat” empieza una conversación nueva." },
  { termino: "Dictado por voz", definicion: "Función que convierte lo que usted dice en texto escrito." },
  { termino: "Alucinación", definicion: "Cuando la IA inventa un dato y lo presenta como si fuera cierto." },
  { termino: "Deepfake", definicion: "Foto, audio o video falso creado con IA que imita a una persona real." },
  { termino: "Voz clonada", definicion: "Imitación de la voz de una persona hecha con IA, usada a veces en estafas." },
  { termino: "Algoritmo", definicion: "Serie de pasos que sigue una computadora, como una receta de cocina." },
  { termino: "Entrenamiento", definicion: "El proceso de enseñarle a la IA con muchos ejemplos." },
  { termino: "Modelo de lenguaje", definicion: "El tipo de IA que entiende y produce textos; el “cerebro” de los asistentes." },
  { termino: "IA generativa", definicion: "IA que crea contenido nuevo: textos, imágenes, música o videos." },
  { termino: "Spam", definicion: "Mensajes basura o no deseados, que el correo suele separar automáticamente." },
  { termino: "Privacidad", definicion: "El derecho a cuidar su información personal y decidir con quién la comparte." }
];
