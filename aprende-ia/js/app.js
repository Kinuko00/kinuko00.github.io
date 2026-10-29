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
  function ajustes() { return leer(CLAVE_AJUSTES, {}); }
  function guardarAjuste(nombre, valor) {
    const a = ajustes();
    a[nombre] = valor;
    guardar(CLAVE_AJUSTES, a);
  }

  // ── Idioma: ?lang=zh en la dirección, luego lo elegido antes, luego el del navegador ──
  function elegirIdioma() {
    const pedido = new URLSearchParams(location.search).get("lang");
    if (pedido && IDIOMAS[pedido]) { guardarAjuste("idioma", pedido); return pedido; }
    const guardado = ajustes().idioma;
    if (guardado && IDIOMAS[guardado]) return guardado;
    return (navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "es";
  }
  const idioma = elegirIdioma();
  const datos = CONTENIDO[idioma];
  const MODULOS = datos.modulos;
  const NIVELES = datos.niveles;
  const GLOSARIO = datos.glosario;

  // Devuelve el texto de la interfaz, reemplazando {marcas} por valores.
  function t(clave, valores) {
    let texto = TEXTOS[idioma][clave];
    if (texto === undefined) texto = TEXTOS.es[clave];
    if (valores) {
      Object.keys(valores).forEach(function (k) { texto = texto.split("{" + k + "}").join(valores[k]); });
    }
    return texto;
  }

  function traducirPagina() {
    document.documentElement.lang = IDIOMAS[idioma].htmlLang;
    const titulo = document.body.dataset.titulo;
    if (titulo) document.title = t(titulo);
    document.querySelectorAll("[data-t]").forEach(function (el) { el.textContent = t(el.dataset.t); });
    document.querySelectorAll("[data-t-html]").forEach(function (el) { el.innerHTML = t(el.dataset.tHtml); });
    document.querySelectorAll("[data-t-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.dataset.tAria)); });
  }

  // El progreso es el mismo en los dos idiomas: los módulos y las preguntas coinciden.
  function progreso() { return leer(CLAVE_PROGRESO, {}); }
  function progresoModulo(id) { return progreso()[id] || { respuestas: {}, ejercicios: {} }; }
  function guardarProgresoModulo(id, datosModulo) {
    const todo = progreso();
    todo[id] = datosModulo;
    guardar(CLAVE_PROGRESO, todo);
  }
  function moduloCompleto(modulo) {
    const p = progresoModulo(modulo.id);
    return Object.keys(p.respuestas || {}).length >= modulo.preguntas.length;
  }
  function cantidadCompletos() { return MODULOS.filter(moduloCompleto).length; }

  // ── Ajustes de lectura: tamaño de letra, contraste e idioma ──
  const TAMANOS = ["normal", "grande", "muy-grande"];

  function aplicarAjustes() {
    const a = ajustes();
    document.documentElement.dataset.tam = a.tam || "normal";
    document.documentElement.dataset.contraste = a.contraste || "normal";
    const botonContraste = document.getElementById("btn-contraste");
    if (botonContraste) botonContraste.setAttribute("aria-pressed", String(a.contraste === "alto"));
  }

  function prepararHerramientas() {
    const menos = document.getElementById("btn-letra-menos");
    const mas = document.getElementById("btn-letra-mas");
    const contraste = document.getElementById("btn-contraste");
    const cambioIdioma = document.getElementById("btn-idioma");
    if (!menos) return;

    function cambiarTam(paso) {
      const actual = TAMANOS.indexOf(ajustes().tam || "normal");
      guardarAjuste("tam", TAMANOS[Math.min(TAMANOS.length - 1, Math.max(0, actual + paso))]);
      aplicarAjustes();
    }
    menos.addEventListener("click", function () { cambiarTam(-1); });
    mas.addEventListener("click", function () { cambiarTam(1); });
    contraste.addEventListener("click", function () {
      guardarAjuste("contraste", ajustes().contraste === "alto" ? "normal" : "alto");
      aplicarAjustes();
    });

    if (cambioIdioma) {
      const otro = idioma === "es" ? "zh" : "es";
      cambioIdioma.textContent = "🌐 " + IDIOMAS[otro].nombre;
      cambioIdioma.lang = IDIOMAS[otro].htmlLang;
      cambioIdioma.addEventListener("click", function () {
        detenerLectura();
        guardarAjuste("idioma", otro);
        const direccion = new URL(location.href);
        direccion.searchParams.delete("lang");
        location.href = direccion.toString();
      });
    }
  }

  // ── Lectura en voz alta ──
  const voz = window.speechSynthesis;
  let botonHablando = null;

  function vozDelIdioma() {
    const prefijo = idioma === "zh" ? "zh" : "es";
    const voces = voz.getVoices().filter(function (v) { return v.lang && v.lang.toLowerCase().startsWith(prefijo); });
    if (idioma === "zh") {
      // Preferimos mandarín de China continental antes que cantonés (zh-HK).
      return voces.find(function (v) { return /zh[-_]cn/i.test(v.lang); }) ||
        voces.find(function (v) { return !/hk/i.test(v.lang); }) || voces[0] || null;
    }
    return voces[0] || null;
  }

  function detenerLectura() {
    if (voz) voz.cancel();
    if (botonHablando) {
      botonHablando.textContent = t("escuchar");
      botonHablando.setAttribute("aria-pressed", "false");
      botonHablando = null;
    }
  }

  function botonEscuchar(elementoTexto) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "boton escuchar no-imprimir";
    boton.textContent = t("escuchar");
    boton.setAttribute("aria-pressed", "false");
    if (!voz) { boton.hidden = true; return boton; }

    boton.addEventListener("click", function () {
      if (botonHablando === boton) { detenerLectura(); return; }
      detenerLectura();
      const copia = elementoTexto.cloneNode(true);
      copia.querySelectorAll("button, .no-leer").forEach(function (n) { n.remove(); });
      const frase = new SpeechSynthesisUtterance(copia.textContent.replace(/\s+/g, " ").trim());
      frase.lang = IDIOMAS[idioma].vozLang;
      const v = vozDelIdioma();
      if (v) { frase.voice = v; frase.lang = v.lang; }
      frase.rate = 0.9;
      frase.onend = detenerLectura;
      botonHablando = boton;
      boton.textContent = t("detener");
      boton.setAttribute("aria-pressed", "true");
      voz.speak(frase);
    });
    return boton;
  }

  // ── Botones de copiar en los pedidos de ejemplo ──
  function prepararCopiar(raiz) {
    raiz.querySelectorAll(".prompt").forEach(function (caja) {
      const texto = caja.textContent.trim();
      caja.dataset.etiqueta = t("promptEtiqueta");
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "boton copiar no-imprimir";
      boton.textContent = t("copiar");
      boton.addEventListener("click", function () {
        const listo = function () {
          boton.textContent = t("copiado");
          setTimeout(function () { boton.textContent = t("copiar"); }, 3000);
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
    document.getElementById("texto-progreso").textContent = hechos === 0
      ? t("sinEmpezar")
      : t("progresoTexto", { h: hechos, t: MODULOS.length, p: porcentaje });
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
    document.querySelector(".barra").setAttribute("aria-valuenow", String(porcentaje));

    const siguiente = MODULOS.find(function (m) { return !moduloCompleto(m); });
    const continuar = document.getElementById("btn-continuar");
    if (siguiente) {
      continuar.href = "modulo.html?m=" + siguiente.id;
      continuar.textContent = hechos === 0 ? t("empezar") : t("continuar", { n: siguiente.id });
    } else {
      continuar.href = "diploma.html";
      continuar.textContent = t("verDiploma");
    }

    NIVELES.forEach(function (nivel) {
      const seccion = crear("section", "nivel");
      seccion.setAttribute("aria-labelledby", "nivel-" + nivel.numero);
      seccion.innerHTML =
        '<div class="nivel-titulo"><span class="insignia">' + t("nivel", { n: nivel.numero }) + "</span>" +
        '<h2 id="nivel-' + nivel.numero + '">' + nivel.nombre + "</h2></div>" +
        "<p>" + nivel.descripcion + "</p>";
      const lista = crear("ol", "lista-modulos");
      MODULOS.filter(function (m) { return m.nivel === nivel.numero; }).forEach(function (m) {
        const completo = moduloCompleto(m);
        const item = crear("li");
        item.innerHTML =
          '<a class="modulo-tarjeta' + (completo ? " completo" : "") + '" href="modulo.html?m=' + m.id + '">' +
          '<span class="modulo-numero" aria-hidden="true">' + (completo ? "✓" : m.id) + "</span>" +
          '<span class="modulo-info"><strong>' + t("moduloTarjeta", { n: m.id, t: m.titulo }) + "</strong>" +
          "<span>" + m.resumen + "</span></span>" +
          '<span class="modulo-estado' + (completo ? " hecho" : "") + '">' +
          (completo ? t("completado") : t("quinceMin")) + "</span></a>";
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
    document.title = t("tituloModulo", { n: modulo.id, t: modulo.titulo });

    // Encabezado del módulo
    destino.appendChild(crear("p", "migas", '<a href="index.html">' + t("volverInicio") + "</a>"));
    destino.appendChild(crear("div", "meta-modulo",
      '<span class="chip">' + t("chipNivel", { n: nivel.numero, t: nivel.nombre }) + "</span>" +
      '<span class="chip">' + t("chipModulo", { n: modulo.id, t: MODULOS.length }) + "</span>" +
      '<span class="chip">' + t("chipMinutos") + "</span>"));
    destino.appendChild(crear("h1", "", modulo.titulo));
    destino.appendChild(crear("p", "", modulo.resumen));

    destino.appendChild(crear("ul", "plan-tiempo",
      "<li>" + t("plan1") + "</li><li>" + t("plan2") + "</li><li>" + t("plan3") + "</li>"));

    const objetivos = crear("div", "tarjeta");
    objetivos.innerHTML = '<h2 style="margin-top:0">' + t("objetivosTitulo") + "</h2>" +
      '<ul class="objetivos">' + modulo.objetivos.map(function (o) { return "<li>" + o + "</li>"; }).join("") + "</ul>";
    destino.appendChild(objetivos);

    // Video
    const video = crear("section", "video");
    video.setAttribute("aria-labelledby", "titulo-video");
    if (modulo.video.youtubeId) {
      video.innerHTML = '<h2 id="titulo-video" style="margin-top:0">' + t("videoTitulo") + "</h2>" +
        '<div class="marco"><iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(modulo.video.youtubeId) +
        '" title="' + t("videoIframe", { t: modulo.titulo }) + '" allowfullscreen loading="lazy"></iframe></div>';
    } else {
      video.innerHTML = '<h2 id="titulo-video" style="margin-top:0">' + t("videoBuscarTitulo") + "</h2>" +
        "<p>" + t("videoTexto") + "</p>" +
        '<a class="boton" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=' +
        encodeURIComponent(modulo.video.busqueda) + '">' + t("videoBoton", { t: modulo.titulo }) + "</a>" +
        "<p>" + t("videoLeer") + "</p>";
    }
    destino.appendChild(video);

    // Lección
    destino.appendChild(crear("h2", "", t("leccion")));
    modulo.secciones.forEach(function (s) {
      const sec = crear("section", "seccion-lectura");
      const titulo = crear("h3", "", s.titulo);
      const cuerpo = crear("div", "", s.html);
      cuerpo.querySelectorAll("table").forEach(function (tabla) {
        const env = crear("div", "tabla-envoltura");
        tabla.parentNode.insertBefore(env, tabla);
        env.appendChild(tabla);
      });
      sec.appendChild(titulo);
      sec.appendChild(botonEscuchar(sec));
      sec.appendChild(cuerpo);
      destino.appendChild(sec);
    });

    const recordar = crear("section", "recordar");
    recordar.innerHTML = "<h2>" + t("recordar") + "</h2><ul>" +
      modulo.recordar.map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>";
    recordar.insertBefore(botonEscuchar(recordar), recordar.children[1]);
    destino.appendChild(recordar);

    // Preguntas
    destino.appendChild(crear("h2", "", t("preguntasTitulo")));
    destino.appendChild(crear("p", "", t("preguntasIntro")));
    const cuestionario = crear("div", "tarjeta");
    destino.appendChild(cuestionario);
    renderCuestionario(modulo, cuestionario);

    // Ejercicios
    destino.appendChild(crear("h2", "", t("ejerciciosTitulo")));
    destino.appendChild(crear("p", "", t("ejerciciosIntro")));
    modulo.ejercicios.forEach(function (ej, i) {
      const tarjeta = crear("section", "tarjeta ejercicio");
      tarjeta.innerHTML = "<h3>" + t("ejercicio", { n: i + 1, t: ej.titulo }) + "</h3>" +
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
      etiqueta.appendChild(document.createTextNode(t("yaHice")));
      tarjeta.appendChild(etiqueta);
      destino.appendChild(tarjeta);
    });

    destino.appendChild(crear("div", "", '<div id="aviso-completo" aria-live="polite"></div>'));
    actualizarAvisoCompleto(modulo);

    // Navegación
    const nav = crear("nav", "navegacion-modulos no-imprimir");
    nav.setAttribute("aria-label", t("navAria"));
    const anterior = MODULOS.find(function (m) { return m.id === modulo.id - 1; });
    const siguiente = MODULOS.find(function (m) { return m.id === modulo.id + 1; });
    nav.innerHTML =
      (anterior ? '<a class="boton grande" href="modulo.html?m=' + anterior.id + '">' + t("anterior", { n: anterior.id }) + "</a>" : '<a class="boton grande" href="index.html">' + t("inicio") + "</a>") +
      (siguiente ? '<a class="boton grande principal" href="modulo.html?m=' + siguiente.id + '">' + t("siguiente", { n: siguiente.id }) + "</a>" : '<a class="boton grande principal" href="diploma.html">' + t("miDiploma") + "</a>");
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
          const d = progresoModulo(modulo.id);
          d.respuestas = d.respuestas || {};
          d.respuestas[i] = j;
          guardarProgresoModulo(modulo.id, d);
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
    const reintentar = crear("button", "boton no-imprimir", t("reintentar"));
    reintentar.type = "button";
    reintentar.addEventListener("click", function () {
      const d = progresoModulo(modulo.id);
      d.respuestas = {};
      guardarProgresoModulo(modulo.id, d);
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
    respuesta.innerHTML = (bien ? t("correcto") : t("incorrecto")) + "<span>" + preg.explicacion + "</span>";
  }

  function actualizarResultado(modulo, contenedor) {
    const p = progresoModulo(modulo.id);
    const respondidas = Object.keys(p.respuestas || {});
    const aciertos = respondidas.filter(function (k) { return p.respuestas[k] === modulo.preguntas[k].correcta; }).length;
    const total = modulo.preguntas.length;
    const resultado = contenedor.querySelector(".resultado-cuestionario");
    if (respondidas.length < total) {
      resultado.textContent = t("respondidas", { r: respondidas.length, t: total });
    } else {
      resultado.textContent = t("resultado", { a: aciertos, t: total }) +
        (aciertos === total ? t("excelente") : aciertos >= total / 2 ? t("muyBien") : t("repasar"));
    }
  }

  function actualizarAvisoCompleto(modulo) {
    const aviso = document.getElementById("aviso-completo");
    if (!aviso) return;
    if (moduloCompleto(modulo)) {
      aviso.className = "aviso-completo";
      aviso.textContent = cantidadCompletos() === MODULOS.length ? t("avisoCurso") : t("avisoModulo", { n: modulo.id });
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
    GLOSARIO.slice().sort(function (a, b) { return a.termino.localeCompare(b.termino, IDIOMAS[idioma].fecha); }).forEach(function (g) {
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
      estado.innerHTML = "<p>" + t("diplomaFaltan", { h: hechos, t: MODULOS.length }) + "</p><ul>" +
        faltan.map(function (m) { return '<li><a href="modulo.html?m=' + m.id + '">' + t("moduloTarjeta", { n: m.id, t: m.titulo }) + "</a></li>"; }).join("") +
        "</ul>";
      destino.hidden = true;
      return;
    }

    estado.innerHTML = "<p>" + t("diplomaListo", { t: MODULOS.length }) + "</p>";
    const campo = document.getElementById("campo-nombre");
    const nombre = document.getElementById("nombre-diploma");
    campo.value = ajustes().nombre || "";
    nombre.textContent = campo.value || " ";
    campo.addEventListener("input", function () {
      nombre.textContent = campo.value || " ";
      guardarAjuste("nombre", campo.value);
    });
    document.getElementById("fecha-diploma").textContent =
      new Date().toLocaleDateString(IDIOMAS[idioma].fecha, { day: "numeric", month: "long", year: "numeric" });
    document.getElementById("btn-imprimir").addEventListener("click", function () { window.print(); });
  }

  // ── Inicio ──
  aplicarAjustes();
  document.documentElement.lang = IDIOMAS[idioma].htmlLang;
  document.addEventListener("DOMContentLoaded", function () {
    traducirPagina();
    prepararHerramientas();
    renderPortada();
    renderModulo();
    renderGlosario();
    renderDiploma();
    if (voz) voz.getVoices();
    window.addEventListener("pagehide", detenerLectura);
  });
})();
