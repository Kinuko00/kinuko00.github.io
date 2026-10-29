/* Aprendamos IA — lógica del sitio (sin dependencias). */

(function () {
  "use strict";

  const CLAVE_PROGRESO = "aprendeIA.progreso";
  const CLAVE_AJUSTES = "aprendeIA.ajustes";

  // ── Almacenamiento seguro (puede fallar en modo privado) ──
  function leer(clave, porDefecto) {
    try {
      const valor = localStorage.getItem(clave);
      return valor ? JSON.parse(valor) : porDefecto;
    } catch (e) {
      return porDefecto;
    }
  }
  function guardar(clave, valor) {
    try { localStorage.setItem(clave, JSON.stringify(valor)); } catch (e) { /* sin almacenamiento */ }
  }

  function progreso() { return leer(CLAVE_PROGRESO, {}); }
  function progresoModulo(id) { return progreso()[id] || { respuestas: {}, ejercicios: {} }; }
  function guardarProgresoModulo(id, datos) {
    const todo = progreso();
    todo[id] = datos;
    guardar(CLAVE_PROGRESO, todo);
  }
  function moduloCompleto(modulo) {
    const p = progresoModulo(modulo.id);
    return Object.keys(p.respuestas || {}).length >= modulo.preguntas.length;
  }
  function cantidadCompletos() { return MODULOS.filter(moduloCompleto).length; }

  // ── Ajustes de lectura: tamaño de letra y contraste ──
  const TAMANOS = ["normal", "grande", "muy-grande"];

  function aplicarAjustes() {
    const ajustes = leer(CLAVE_AJUSTES, { tam: "normal", contraste: "normal" });
    document.documentElement.dataset.tam = ajustes.tam;
    document.documentElement.dataset.contraste = ajustes.contraste;
    const botonContraste = document.getElementById("btn-contraste");
    if (botonContraste) botonContraste.setAttribute("aria-pressed", String(ajustes.contraste === "alto"));
    return ajustes;
  }

  function prepararHerramientas() {
    const menos = document.getElementById("btn-letra-menos");
    const mas = document.getElementById("btn-letra-mas");
    const contraste = document.getElementById("btn-contraste");
    if (!menos) return;

    function cambiarTam(paso) {
      const ajustes = aplicarAjustes();
      const i = Math.min(TAMANOS.length - 1, Math.max(0, TAMANOS.indexOf(ajustes.tam) + paso));
      ajustes.tam = TAMANOS[i];
      guardar(CLAVE_AJUSTES, ajustes);
      aplicarAjustes();
    }
    menos.addEventListener("click", function () { cambiarTam(-1); });
    mas.addEventListener("click", function () { cambiarTam(1); });
    contraste.addEventListener("click", function () {
      const ajustes = aplicarAjustes();
      ajustes.contraste = ajustes.contraste === "alto" ? "normal" : "alto";
      guardar(CLAVE_AJUSTES, ajustes);
      aplicarAjustes();
    });
  }

  // ── Lectura en voz alta ──
  const voz = window.speechSynthesis;
  let botonHablando = null;

  function vozEspanol() {
    const voces = voz.getVoices();
    return voces.find(function (v) { return v.lang && v.lang.toLowerCase().startsWith("es"); }) || null;
  }

  function detenerLectura() {
    if (voz) voz.cancel();
    if (botonHablando) {
      botonHablando.textContent = "🔊 Escuchar";
      botonHablando.setAttribute("aria-pressed", "false");
      botonHablando = null;
    }
  }

  function botonEscuchar(elementoTexto) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "boton escuchar no-imprimir";
    boton.textContent = "🔊 Escuchar";
    boton.setAttribute("aria-pressed", "false");
    if (!voz) { boton.hidden = true; return boton; }

    boton.addEventListener("click", function () {
      if (botonHablando === boton) { detenerLectura(); return; }
      detenerLectura();
      const copia = elementoTexto.cloneNode(true);
      copia.querySelectorAll("button, .no-leer").forEach(function (n) { n.remove(); });
      const frase = new SpeechSynthesisUtterance(copia.textContent.replace(/\s+/g, " ").trim());
      frase.lang = "es-ES";
      const v = vozEspanol();
      if (v) { frase.voice = v; frase.lang = v.lang; }
      frase.rate = 0.9;
      frase.onend = detenerLectura;
      botonHablando = boton;
      boton.textContent = "⏹ Detener";
      boton.setAttribute("aria-pressed", "true");
      voz.speak(frase);
    });
    return boton;
  }

  // ── Botones de copiar en los pedidos de ejemplo ──
  function prepararCopiar(raiz) {
    raiz.querySelectorAll(".prompt").forEach(function (caja) {
      const texto = caja.textContent.trim();
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "boton copiar no-imprimir";
      boton.textContent = "📋 Copiar";
      boton.addEventListener("click", function () {
        const listo = function () {
          boton.textContent = "✅ Copiado. Péguelo en su asistente";
          setTimeout(function () { boton.textContent = "📋 Copiar"; }, 3000);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(texto).then(listo, function () { copiarRespaldo(texto); listo(); });
        } else {
          copiarRespaldo(texto); listo();
        }
      });
      caja.appendChild(document.createElement("br"));
      caja.appendChild(boton);
    });
  }
  function copiarRespaldo(texto) {
    const area = document.createElement("textarea");
    area.value = texto;
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); } catch (e) { /* nada */ }
    area.remove();
  }

  function crear(etiqueta, clase, html) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (html !== undefined) el.innerHTML = html;
    return el;
  }

  // ── Portada ──
  function renderPortada() {
    const destino = document.getElementById("lista-niveles");
    if (!destino) return;

    const hechos = cantidadCompletos();
    const porcentaje = Math.round((hechos / MODULOS.length) * 100);
    document.getElementById("texto-progreso").textContent =
      hechos === 0
        ? "Todavía no empezó. ¡Comience por el módulo 1!"
        : "Completó " + hechos + " de " + MODULOS.length + " módulos (" + porcentaje + "%).";
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
    document.querySelector(".barra").setAttribute("aria-valuenow", String(porcentaje));

    const siguiente = MODULOS.find(function (m) { return !moduloCompleto(m); });
    const continuar = document.getElementById("btn-continuar");
    if (siguiente) {
      continuar.href = "modulo.html?m=" + siguiente.id;
      continuar.textContent = hechos === 0 ? "▶ Empezar el curso" : "▶ Continuar con el módulo " + siguiente.id;
    } else {
      continuar.href = "diploma.html";
      continuar.textContent = "🎓 Ver mi diploma";
    }

    NIVELES.forEach(function (nivel) {
      const seccion = crear("section", "nivel");
      seccion.setAttribute("aria-labelledby", "nivel-" + nivel.numero);
      seccion.innerHTML =
        '<div class="nivel-titulo"><span class="insignia">Nivel ' + nivel.numero + "</span>" +
        '<h2 id="nivel-' + nivel.numero + '">' + nivel.nombre + "</h2></div>" +
        "<p>" + nivel.descripcion + "</p>";
      const lista = crear("ol", "lista-modulos");
      MODULOS.filter(function (m) { return m.nivel === nivel.numero; }).forEach(function (m) {
        const completo = moduloCompleto(m);
        const item = crear("li");
        item.innerHTML =
          '<a class="modulo-tarjeta' + (completo ? " completo" : "") + '" href="modulo.html?m=' + m.id + '">' +
          '<span class="modulo-numero" aria-hidden="true">' + (completo ? "✓" : m.id) + "</span>" +
          '<span class="modulo-info"><strong>Módulo ' + m.id + ": " + m.titulo + "</strong>" +
          "<span>" + m.resumen + "</span></span>" +
          '<span class="modulo-estado' + (completo ? " hecho" : "") + '">' +
          (completo ? "✔ Completado" : "⏱ 15 min") + "</span></a>";
        lista.appendChild(item);
      });
      seccion.appendChild(lista);
      destino.appendChild(seccion);
    });
  }

  // ── Página de módulo ──
  function renderModulo() {
    const destino = document.getElementById("modulo");
    if (!destino) return;

    const id = parseInt(new URLSearchParams(location.search).get("m"), 10) || 1;
    const modulo = MODULOS.find(function (m) { return m.id === id; }) || MODULOS[0];
    const nivel = NIVELES.find(function (n) { return n.numero === modulo.nivel; });
    document.title = "Módulo " + modulo.id + ": " + modulo.titulo + " · Aprendamos IA";

    // Encabezado del módulo
    destino.appendChild(crear("p", "migas", '<a href="index.html">← Volver al inicio</a>'));
    destino.appendChild(crear("div", "meta-modulo",
      '<span class="chip">Nivel ' + nivel.numero + ": " + nivel.nombre + "</span>" +
      '<span class="chip">Módulo ' + modulo.id + " de " + MODULOS.length + "</span>" +
      '<span class="chip">⏱ 15 minutos</span>'));
    destino.appendChild(crear("h1", "", modulo.titulo));
    destino.appendChild(crear("p", "", modulo.resumen));

    destino.appendChild(crear("ul", "plan-tiempo",
      "<li><strong>1. Ver o leer</strong>≈ 7 minutos</li>" +
      "<li><strong>2. Preguntas de repaso</strong>≈ 3 minutos</li>" +
      "<li><strong>3. Práctica</strong>≈ 5 minutos</li>"));

    const objetivos = crear("div", "tarjeta");
    objetivos.innerHTML = "<h2 style=\"margin-top:0\">En este módulo va a aprender a…</h2>" +
      '<ul class="objetivos">' + modulo.objetivos.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ul>";
    destino.appendChild(objetivos);

    // Video
    const video = crear("section", "video");
    video.setAttribute("aria-labelledby", "titulo-video");
    if (modulo.video.youtubeId) {
      video.innerHTML = '<h2 id="titulo-video" style="margin-top:0">🎬 Video de la clase</h2>' +
        '<div class="marco"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(modulo.video.youtubeId) +
        '" title="Video: ' + modulo.titulo + '" allowfullscreen loading="lazy"></iframe></div>';
    } else {
      video.innerHTML = '<h2 id="titulo-video" style="margin-top:0">🎬 ¿Prefiere ver un video?</h2>' +
        "<p>Puede buscar videos cortos sobre este tema en YouTube. Se abre en otra pestaña; para volver, cierre esa pestaña.</p>" +
        '<a class="boton" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' +
        encodeURIComponent(modulo.video.busqueda) + '">Buscar videos sobre “' + modulo.titulo + '”</a>' +
        "<p>Si prefiere leer, la lección de abajo cubre todo lo necesario. Use el botón <strong>🔊 Escuchar</strong> para que el sitio se la lea en voz alta.</p>";
    }
    destino.appendChild(video);

    // Lección
    destino.appendChild(crear("h2", "", "📖 La lección"));
    modulo.secciones.forEach(function (s) {
      const sec = crear("section", "seccion-lectura");
      const titulo = crear("h3", "", s.titulo);
      const cuerpo = crear("div", "", s.html);
      cuerpo.querySelectorAll("table").forEach(function (t) {
        const env = crear("div", "tabla-envoltura");
        t.parentNode.insertBefore(env, t);
        env.appendChild(t);
      });
      sec.appendChild(titulo);
      sec.appendChild(botonEscuchar(sec));
      sec.appendChild(cuerpo);
      destino.appendChild(sec);
    });

    const recordar = crear("section", "recordar");
    recordar.innerHTML = "<h2>📌 Para recordar</h2><ul>" +
      modulo.recordar.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>";
    recordar.insertBefore(botonEscuchar(recordar), recordar.children[1]);
    destino.appendChild(recordar);

    // Preguntas
    destino.appendChild(crear("h2", "", "✏️ Preguntas de repaso"));
    destino.appendChild(crear("p", "", "Elija una respuesta en cada pregunta. Le diremos enseguida si es correcta y por qué. ¡Equivocarse también es aprender!"));
    const cuestionario = crear("div", "tarjeta");
    destino.appendChild(cuestionario);
    renderCuestionario(modulo, cuestionario);

    // Ejercicios
    destino.appendChild(crear("h2", "", "🙌 Ejercicios prácticos"));
    destino.appendChild(crear("p", "", "Hágalos con calma, con el teléfono o la computadora a mano. Cuando termine cada uno, márquelo como hecho."));
    modulo.ejercicios.forEach(function (ej, i) {
      const tarjeta = crear("section", "tarjeta ejercicio");
      tarjeta.innerHTML = "<h3>Ejercicio " + (i + 1) + ": " + ej.titulo + "</h3>" +
        "<ol>" + ej.pasos.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol>" +
        (ej.consejo ? '<p class="consejo">💡 ' + ej.consejo + "</p>" : "");
      const etiqueta = crear("label", "marcar-hecho no-imprimir");
      const casilla = document.createElement("input");
      casilla.type = "checkbox";
      casilla.checked = !!progresoModulo(modulo.id).ejercicios[i];
      casilla.addEventListener("change", function () {
        const p = progresoModulo(modulo.id);
        p.ejercicios = p.ejercicios || {};
        p.ejercicios[i] = casilla.checked;
        guardarProgresoModulo(modulo.id, p);
      });
      etiqueta.appendChild(casilla);
      etiqueta.appendChild(document.createTextNode("Ya hice este ejercicio"));
      tarjeta.appendChild(etiqueta);
      destino.appendChild(tarjeta);
    });

    destino.appendChild(crear("div", "", '<div id="aviso-completo" aria-live="polite"></div>'));
    actualizarAvisoCompleto(modulo);

    // Navegación
    const nav = crear("nav", "navegacion-modulos no-imprimir");
    nav.setAttribute("aria-label", "Módulos anterior y siguiente");
    const anterior = MODULOS.find(function (m) { return m.id === modulo.id - 1; });
    const siguiente = MODULOS.find(function (m) { return m.id === modulo.id + 1; });
    nav.innerHTML =
      (anterior ? '<a class="boton grande" href="modulo.html?m=' + anterior.id + '">← Módulo ' + anterior.id + "</a>" : '<a class="boton grande" href="index.html">← Inicio</a>') +
      (siguiente ? '<a class="boton grande principal" href="modulo.html?m=' + siguiente.id + '">Módulo ' + siguiente.id + " →</a>" : '<a class="boton grande principal" href="diploma.html">🎓 Mi diploma</a>');
    destino.appendChild(nav);

    prepararCopiar(destino);
  }

  function renderCuestionario(modulo, contenedor) {
    contenedor.innerHTML = "";
    const p = progresoModulo(modulo.id);

    modulo.preguntas.forEach(function (preg, i) {
      const bloque = crear("div", "pregunta");
      const fieldset = document.createElement("fieldset");
      fieldset.appendChild(crear("legend", "", (i + 1) + ". " + preg.pregunta));
      const respuesta = crear("div", "");
      respuesta.setAttribute("aria-live", "polite");

      preg.opciones.forEach(function (texto, j) {
        const etiqueta = crear("label", "opcion");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "m" + modulo.id + "p" + i;
        radio.value = String(j);
        etiqueta.appendChild(radio);
        etiqueta.appendChild(crear("span", "", texto));
        radio.addEventListener("change", function () {
          const datos = progresoModulo(modulo.id);
          datos.respuestas = datos.respuestas || {};
          datos.respuestas[i] = j;
          guardarProgresoModulo(modulo.id, datos);
          mostrarCorreccion(fieldset, respuesta, preg, j);
          actualizarResultado(modulo, contenedor);
          actualizarAvisoCompleto(modulo);
        });
        fieldset.appendChild(etiqueta);
      });

      bloque.appendChild(fieldset);
      bloque.appendChild(respuesta);
      contenedor.appendChild(bloque);

      if (p.respuestas && p.respuestas[i] !== undefined) {
        fieldset.querySelectorAll("input")[p.respuestas[i]].checked = true;
        mostrarCorreccion(fieldset, respuesta, preg, p.respuestas[i]);
      }
    });

    contenedor.appendChild(crear("p", "resultado-cuestionario", ""));
    const reintentar = crear("button", "boton no-imprimir", "↺ Volver a responder las preguntas");
    reintentar.type = "button";
    reintentar.addEventListener("click", function () {
      const datos = progresoModulo(modulo.id);
      datos.respuestas = {};
      guardarProgresoModulo(modulo.id, datos);
      renderCuestionario(modulo, contenedor);
      actualizarAvisoCompleto(modulo);
    });
    contenedor.appendChild(reintentar);
    actualizarResultado(modulo, contenedor);
  }

  function mostrarCorreccion(fieldset, respuesta, preg, elegida) {
    const opciones = fieldset.querySelectorAll(".opcion");
    opciones.forEach(function (o, k) {
      o.classList.remove("correcta", "incorrecta");
      if (k === preg.correcta) o.classList.add("correcta");
      else if (k === elegida) o.classList.add("incorrecta");
    });
    const bien = elegida === preg.correcta;
    respuesta.className = "respuesta " + (bien ? "bien" : "mal");
    respuesta.innerHTML = (bien ? "✔ ¡Correcto!" : "✘ No es esa. La respuesta correcta está marcada en verde.") +
      "<span>" + preg.explicacion + "</span>";
  }

  function actualizarResultado(modulo, contenedor) {
    const p = progresoModulo(modulo.id);
    const respondidas = Object.keys(p.respuestas || {});
    const aciertos = respondidas.filter(function (k) { return p.respuestas[k] === modulo.preguntas[k].correcta; }).length;
    const total = modulo.preguntas.length;
    const resultado = contenedor.querySelector(".resultado-cuestionario");
    if (respondidas.length < total) {
      resultado.textContent = "Respondió " + respondidas.length + " de " + total + " preguntas.";
    } else {
      resultado.textContent = "Resultado: " + aciertos + " de " + total + " correctas. " +
        (aciertos === total ? "¡Excelente! 🎉" : aciertos >= total / 2 ? "¡Muy bien! Puede repasar la lección y volver a intentarlo." : "Le recomendamos repasar la lección con calma y volver a intentarlo.");
    }
  }

  function actualizarAvisoCompleto(modulo) {
    const aviso = document.getElementById("aviso-completo");
    if (!aviso) return;
    if (moduloCompleto(modulo)) {
      aviso.className = "aviso-completo";
      aviso.textContent = cantidadCompletos() === MODULOS.length
        ? "🎓 ¡Terminó todo el curso! Ya puede imprimir su diploma."
        : "✔ ¡Módulo " + modulo.id + " completado! Cuando quiera, siga con el próximo.";
    } else {
      aviso.className = "";
      aviso.textContent = "";
    }
  }

  // ── Glosario ──
  function renderGlosario() {
    const destino = document.getElementById("glosario");
    if (!destino) return;
    const lista = crear("dl", "glosario-lista");
    GLOSARIO.slice().sort(function (a, b) { return a.termino.localeCompare(b.termino, "es"); }).forEach(function (g) {
      lista.appendChild(crear("dt", "", g.termino));
      lista.appendChild(crear("dd", "", g.definicion));
    });
    destino.appendChild(botonEscuchar(lista));
    destino.appendChild(lista);
  }

  // ── Diploma ──
  function renderDiploma() {
    const destino = document.getElementById("diploma");
    if (!destino) return;
    const hechos = cantidadCompletos();
    const faltan = MODULOS.filter(function (m) { return !moduloCompleto(m); });
    const estado = document.getElementById("estado-diploma");

    if (faltan.length) {
      estado.innerHTML = "<p>Completó <strong>" + hechos + " de " + MODULOS.length + "</strong> módulos. " +
        "Para recibir el diploma, responda las preguntas de repaso de los módulos que faltan:</p><ul>" +
        faltan.map(function (m) { return '<li><a href="modulo.html?m=' + m.id + '">Módulo ' + m.id + ": " + m.titulo + "</a></li>"; }).join("") +
        "</ul>";
      destino.hidden = true;
      return;
    }

    estado.innerHTML = "<p>🎉 ¡Felicitaciones! Completó los " + MODULOS.length + " módulos. Escriba su nombre y toque “Imprimir”.</p>";
    const campo = document.getElementById("campo-nombre");
    const nombre = document.getElementById("nombre-diploma");
    const ajustes = leer(CLAVE_AJUSTES, {});
    campo.value = ajustes.nombre || "";
    nombre.textContent = campo.value || " ";
    campo.addEventListener("input", function () {
      nombre.textContent = campo.value || " ";
      const a = leer(CLAVE_AJUSTES, {});
      a.nombre = campo.value;
      guardar(CLAVE_AJUSTES, a);
    });
    document.getElementById("fecha-diploma").textContent =
      new Date().toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" });
    document.getElementById("btn-imprimir").addEventListener("click", function () { window.print(); });
  }

  // ── Inicio ──
  aplicarAjustes();
  document.addEventListener("DOMContentLoaded", function () {
    prepararHerramientas();
    renderPortada();
    renderModulo();
    renderGlosario();
    renderDiploma();
    if (voz) voz.getVoices();
    window.addEventListener("pagehide", detenerLectura);
  });
})();
