/* =========================================================
   Unitrópico Eventos - lógica de la página
   Para editar los eventos de ejemplo, modifica el arreglo
   EVENTOS_BASE de abajo (título, fecha, lugar, precio...).
   ========================================================= */

const CATEGORIAS = {
  "Institucional":   { icono: "🏛️", clase: "g-institucional" },
  "Fiesta":          { icono: "🎉", clase: "g-fiesta" },
  "Deporte":         { icono: "⚽", clase: "g-deporte" },
  "Cultural":        { icono: "🎭", clase: "g-cultural" },
  "Tecnología":      { icono: "💻", clase: "g-tecnologia" },
  "Académico":       { icono: "🎓", clase: "g-academico" },
  "Emprendimiento":  { icono: "🚀", clase: "g-emprendimiento" }
};

// Carreras y semestres del formulario de inscripción (edítalos a tu gusto)
const CARRERAS = [
  "Administración de Empresas", "Contaduría Pública", "Derecho",
  "Ingeniería Agroindustrial", "Ingeniería Ambiental", "Ingeniería de Sistemas",
  "Medicina Veterinaria y Zootecnia", "Psicología", "Otra"
];
const SEMESTRES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Eventos de ejemplo (fecha en formato AAAA-MM-DD, hora HH:MM)
const EVENTOS_BASE = [
  {
    id: 1,
    titulo: "Fiesta Unitrópico en la discoteca",
    categoria: "Fiesta",
    fecha: "2026-10-23", hora: "21:00",
    lugar: "Discoteca (nombre por definir), Yopal",
    precio: 25000,
    descripcion: "La fiesta universitaria de la semana en una de las discotecas más conocidas entre los estudiantes. Música, show en vivo y ambiente unitropicano. Presenta tu carné."
  },
  {
    id: 2,
    titulo: "Torneo Interfacultades de Fútbol Sala",
    categoria: "Deporte",
    fecha: "2026-10-30", hora: "15:00",
    lugar: "Coliseo Unitrópico",
    precio: 0,
    descripcion: "Equipos de todas las facultades compiten por la copa Unitrópico. Entrada libre para toda la comunidad universitaria."
  },
  {
    id: 3,
    titulo: "Feria de Emprendimiento Llanero",
    categoria: "Emprendimiento",
    fecha: "2026-11-05", hora: "09:00",
    lugar: "Plazoleta Central",
    precio: 0,
    descripcion: "Estudiantes y egresados exponen sus negocios e ideas. Habrá charlas con empresarios de Casanare y concurso de pitch."
  },
  {
    id: 4,
    titulo: "Hackathon Unitrópico 24 horas",
    categoria: "Tecnología",
    fecha: "2026-11-12", hora: "08:00",
    lugar: "Sala de Sistemas, Bloque B",
    precio: 5000,
    descripcion: "Un reto de programación en equipos para resolver problemas reales de la región. Incluye refrigerios y premios para los tres primeros puestos."
  },
  {
    id: 5,
    titulo: "Noche Cultural: Joropo y Talento Estudiantil",
    categoria: "Cultural",
    fecha: "2026-11-19", hora: "19:00",
    lugar: "Auditorio Principal",
    precio: 10000,
    descripcion: "Música llanera, danza y presentaciones de los grupos culturales de la universidad en una velada para disfrutar en familia."
  },
  {
    id: 6,
    titulo: "Room Unitrópico",
    categoria: "Institucional",
    fecha: "2026-11-25", hora: "18:00",
    lugar: "Campus Unitrópico",
    precio: 0,
    descripcion: "Gran evento institucional de Unitrópico para toda la comunidad universitaria. ¡Reserva tu boleta y no te lo pierdas!"
  },
  {
    id: 7,
    titulo: "Foro de Sostenibilidad en la Orinoquía",
    categoria: "Académico",
    fecha: "2026-12-02", hora: "10:00",
    lugar: "Auditorio Principal",
    precio: 0,
    descripcion: "Investigadores y docentes debaten sobre agua, biodiversidad y desarrollo sostenible en los Llanos Orientales."
  },
  {
    id: 8,
    titulo: "Ceremonia de Grados 2026-B",
    categoria: "Institucional",
    fecha: "2026-12-10", hora: "16:00",
    lugar: "Coliseo Unitrópico",
    precio: 0,
    descripcion: "Celebramos a los nuevos profesionales unitropicanos. Acceso con invitación de los graduandos."
  },
  {
    id: 9,
    titulo: "Noche de Karaoke Unitropicano",
    categoria: "Fiesta",
    fecha: "2026-10-24", hora: "19:30",
    lugar: "Cafetería Central",
    precio: 8000,
    descripcion: "Trae tu mejor voz o ven a acompañar a tus amigos. Habrá premios al mejor cantante y a la mejor presentación."
  },
  {
    id: 10,
    titulo: "Maratón Unitrópico 5K",
    categoria: "Deporte",
    fecha: "2026-10-25", hora: "06:00",
    lugar: "Salida: entrada principal del campus",
    precio: 15000,
    descripcion: "Carrera atlética de 5 kilómetros abierta a estudiantes, docentes y familiares. Incluye camiseta, hidratación y medalla de participación."
  },
  {
    id: 11,
    titulo: "Taller de Introducción a la Inteligencia Artificial",
    categoria: "Tecnología",
    fecha: "2026-10-28", hora: "14:00",
    lugar: "Laboratorio de Cómputo 2",
    precio: 0,
    descripcion: "Aprende los conceptos básicos de IA y construye tu primer modelo sencillo. Cupos limitados, trae tu portátil."
  },
  {
    id: 12,
    titulo: "Cine Foro: Documentales de la Orinoquía",
    categoria: "Cultural",
    fecha: "2026-11-03", hora: "18:00",
    lugar: "Auditorio Principal",
    precio: 0,
    descripcion: "Proyección de documentales sobre la fauna, la cultura y los paisajes llaneros, seguida de un conversatorio con realizadores."
  },
  {
    id: 13,
    titulo: "Congreso de Ingeniería y Ciencias Agropecuarias",
    categoria: "Académico",
    fecha: "2026-11-10", hora: "08:00",
    lugar: "Auditorio Principal y salones del Bloque A",
    precio: 20000,
    descripcion: "Dos jornadas de ponencias, posters de investigación y talleres con docentes e invitados de otras universidades."
  },
  {
    id: 14,
    titulo: "Reto de Ideas de Negocio: Pitch Day",
    categoria: "Emprendimiento",
    fecha: "2026-11-14", hora: "14:00",
    lugar: "Sala de Conferencias, Bloque C",
    precio: 0,
    descripcion: "Los equipos presentan su idea de negocio en 5 minutos ante un jurado de empresarios. El mejor proyecto recibe capital semilla simbólico."
  },
  {
    id: 15,
    titulo: "Copa Unitrópico de Voleibol",
    categoria: "Deporte",
    fecha: "2026-11-21", hora: "09:00",
    lugar: "Coliseo Unitrópico",
    precio: 0,
    descripcion: "Torneo mixto de voleibol entre programas académicos. Inscribe a tu equipo en Bienestar Universitario."
  },
  {
    id: 16,
    titulo: "Charla: Cómo conseguir tu primer empleo",
    categoria: "Académico",
    fecha: "2026-11-27", hora: "10:00",
    lugar: "Sala de Conferencias, Bloque C",
    precio: 0,
    descripcion: "Egresados y reclutadores comparten consejos sobre hoja de vida, entrevistas y redes profesionales para quienes están por graduarse."
  },
  {
    id: 17,
    titulo: "Festival de Talentos Unitrópico",
    categoria: "Cultural",
    fecha: "2026-12-04", hora: "18:00",
    lugar: "Auditorio Principal",
    precio: 5000,
    descripcion: "Música, baile, teatro y comedia: los estudiantes muestran su talento en una noche abierta a toda la comunidad."
  },
  {
    id: 18,
    titulo: "Fiesta de Fin de Semestre Unitrópico",
    categoria: "Fiesta",
    fecha: "2026-12-12", hora: "21:00",
    lugar: "Discoteca (nombre por definir), Yopal",
    precio: 30000,
    descripcion: "Cerramos el semestre con la mejor fiesta del año: DJ invitado, show en vivo y sorpresas para los asistentes."
  },
  {
    id: 19,
    titulo: "Novenas y Cena Navideña Institucional",
    categoria: "Institucional",
    fecha: "2026-12-16", hora: "18:30",
    lugar: "Plazoleta Central",
    precio: 0,
    descripcion: "Encuentro de fin de año con administrativos, docentes y estudiantes: novenas, música y una cena compartida."
  }
];

/* ---------- Utilidades ---------- */
const $ = (sel) => document.querySelector(sel);
const LS_EVENTOS = "unitropico_eventos_extra";
const API = "api/"; // carpeta con los PHP dentro de htdocs/unitropico-eventos/

function leerLS(clave) {
  try { return JSON.parse(localStorage.getItem(clave)) || []; }
  catch { return []; }
}
function guardarLS(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch {}
}

function fechaLegible(fecha, hora) {
  const d = new Date(fecha + "T" + hora + ":00");
  const dia = d.toLocaleDateString("es-CO", { weekday: "short", day: "numeric", month: "long" });
  const h = d.toLocaleTimeString("es-CO", { hour: "numeric", minute: "2-digit", hour12: true });
  return dia + " · " + h;
}
function precioTexto(p) {
  return p > 0 ? "$" + p.toLocaleString("es-CO") + " COP" : "Gratis";
}
function escapar(t) {
  const d = document.createElement("div");
  d.textContent = t;
  return d.innerHTML;
}
function hoyISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

let eventos = [...EVENTOS_BASE, ...leerLS(LS_EVENTOS)];

/* ---------- Render de la cartelera ---------- */
function renderEventos() {
  const q = $("#buscar").value.trim().toLowerCase();
  const cat = $("#categoria").value;
  const desde = $("#desde").value;
  const hoy = hoyISO();

  const lista = eventos
    .filter(e => e.fecha >= hoy)
    .filter(e => !q || (e.titulo + " " + e.lugar).toLowerCase().includes(q))
    .filter(e => !cat || e.categoria === cat)
    .filter(e => !desde || e.fecha >= desde)
    .sort((a, b) => (a.fecha + a.hora).localeCompare(b.fecha + b.hora));

  const grid = $("#grid");
  grid.innerHTML = lista.map(e => {
    const c = CATEGORIAS[e.categoria] || CATEGORIAS["Institucional"];
    return `
      <article class="card" data-id="${e.id}" tabindex="0">
        <div class="card__banner ${c.clase}"><span class="card__icono">${c.icono}</span></div>
        <div class="card__body">
          <span class="chip">${escapar(e.categoria)}</span>${e.fecha === hoy ? '<span class="chip chip--hot">Hoy</span>' : ""}
          <h3>${escapar(e.titulo)}</h3>
          <p class="card__meta">📅 ${fechaLegible(e.fecha, e.hora)}</p>
          <p class="card__meta">📍 ${escapar(e.lugar)}</p>
          <div class="card__foot">
            <span class="card__precio">${precioTexto(e.precio)}</span>
            <span class="card__ver">Ver evento →</span>
          </div>
        </div>
      </article>`;
  }).join("");

  $("#contador").textContent = "Encontramos " + lista.length + (lista.length === 1 ? " evento" : " eventos");
  $("#vacio").hidden = lista.length !== 0;
}

/* ---------- Categorías en selects ---------- */
function cargarCategorias() {
  const nombres = Object.keys(CATEGORIAS);
  $("#categoria").innerHTML += nombres.map(n => `<option value="${n}">${n}</option>`).join("");
  $("#f-categoria").innerHTML = nombres.map(n => `<option value="${n}">${n}</option>`).join("");
}

/* ---------- Modal de evento y boleta ---------- */
let eventoActual = null;

function abrirModal(id) {
  const e = eventos.find(x => x.id === id);
  if (!e) return;
  eventoActual = e;
  const c = CATEGORIAS[e.categoria] || CATEGORIAS["Institucional"];

  $("#m-banner").className = "modal__banner " + c.clase;
  $("#m-icono").textContent = c.icono;
  $("#m-cat").textContent = e.categoria;
  $("#m-titulo").textContent = e.titulo;
  $("#m-fecha").textContent = "📅 " + fechaLegible(e.fecha, e.hora);
  $("#m-lugar").textContent = "📍 " + e.lugar;
  $("#m-desc").textContent = e.descripcion || "Sin descripción.";
  $("#m-precio").textContent = precioTexto(e.precio);
  $("#m-comprar").reset();
  $("#m-error").hidden = true;
  alternarAcademico();
  $("#m-comprar").hidden = false;
  $("#m-boleta").hidden = true;
  $("#m-btn").textContent = e.precio > 0 ? "Inscribirme y pagar (simulado)" : "Inscribirme gratis";

  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function cerrarModal() {
  $("#modal").hidden = true;
  document.body.style.overflow = "";
}

function generarCodigo() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "UT-";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
}

// QR de demostración: patrón determinista dibujado a partir del código
function dibujarQR(codigo) {
  const canvas = $("#qr");
  const ctx = canvas.getContext("2d");
  const N = 25, celda = canvas.width / N;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let semilla = 0;
  for (const ch of codigo) semilla = (semilla * 31 + ch.charCodeAt(0)) >>> 0;
  const rnd = () => (semilla = (semilla * 1664525 + 1013904223) >>> 0) / 4294967296;

  const esFinder = (x, y) =>
    (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);

  ctx.fillStyle = "#063d22";
  for (let y = 0; y < N; y++)
    for (let x = 0; x < N; x++)
      if (!esFinder(x, y) && rnd() > 0.5) ctx.fillRect(x * celda, y * celda, celda, celda);

  const finder = (ox, oy) => {
    ctx.fillStyle = "#063d22"; ctx.fillRect(ox * celda, oy * celda, 7 * celda, 7 * celda);
    ctx.fillStyle = "#fff";    ctx.fillRect((ox + 1) * celda, (oy + 1) * celda, 5 * celda, 5 * celda);
    ctx.fillStyle = "#16a34a"; ctx.fillRect((ox + 2) * celda, (oy + 2) * celda, 3 * celda, 3 * celda);
  };
  finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
}

function mostrarError(msg, campo) {
  const e = $("#m-error");
  e.textContent = msg; e.hidden = false;
  if (campo) $(campo).focus();
}

function alternarAcademico() {
  const academico = $("#m-tipo").value === "Estudiante";
  $("#w-carrera").hidden = !academico;
  $("#w-semestre").hidden = !academico;
  $("#m-carrera").required = $("#m-semestre").required = academico;
}

async function obtenerBoleta(ev) {
  ev.preventDefault();
  $("#m-error").hidden = true;

  const d = {
    nombre: $("#m-nombre").value.trim().replace(/\s+/g, " "),
    tipoDoc: $("#m-tipodoc").value,
    documento: $("#m-doc").value.trim(),
    correo: $("#m-correo").value.trim().toLowerCase(),
    telefono: $("#m-tel").value.trim(),
    participante: $("#m-tipo").value,
    carrera: "", semestre: ""
  };
  if (d.participante === "Estudiante") {
    d.carrera = $("#m-carrera").value;
    d.semestre = $("#m-semestre").value;
  }

  if (d.nombre.split(" ").length < 2) return mostrarError("Escribe tu nombre y apellido.", "#m-nombre");
  if (!/^[A-Za-z0-9]{5,12}$/.test(d.documento)) return mostrarError("El documento debe tener entre 5 y 12 caracteres, sin puntos.", "#m-doc");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.correo)) return mostrarError("Escribe un correo válido.", "#m-correo");
  if (!/^3\d{9}$/.test(d.telefono)) return mostrarError("El celular debe tener 10 dígitos y empezar por 3.", "#m-tel");
  if (d.participante === "Estudiante" && (!d.carrera || !d.semestre)) return mostrarError("Selecciona tu carrera y semestre.", "#m-carrera");
  if (!$("#m-acepto").checked) return mostrarError("Debes autorizar el tratamiento de datos para continuar.", "#m-acepto");

  const btn = $("#m-btn");
  btn.disabled = true; btn.textContent = "Guardando...";
  try {
    const r = await fetch(API + "inscribir.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...d,
        eventoId: eventoActual.id,
        evento: eventoActual.titulo,
        precio: eventoActual.precio
      })
    });
    const res = await r.json();
    if (!res.ok) { mostrarError(res.error || "No se pudo completar la inscripción."); return; }

    $("#b-codigo").textContent = res.codigo;
    $("#b-nombre").textContent = d.nombre;
    $("#b-detalle").textContent = [d.participante, d.carrera, d.semestre && "Semestre " + d.semestre]
      .filter(Boolean).join(" · ");
    dibujarQR(res.codigo);
    $("#m-comprar").hidden = true;
    $("#m-boleta").hidden = false;
    mostrarToast("✅ ¡Inscripción registrada!");
  } catch (err) {
    mostrarError("No hay conexión con el servidor. Abre la página desde http://localhost/ y revisa que Apache y MySQL estén encendidos en XAMPP.");
  } finally {
    btn.disabled = false;
    btn.textContent = eventoActual.precio > 0 ? "Inscribirme y pagar (simulado)" : "Inscribirme gratis";
  }
}

let toastT;
function mostrarToast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastT);
  toastT = setTimeout(() => t.hidden = true, 3000);
}

/* ---------- Publicar evento ---------- */
function publicarEvento(ev) {
  ev.preventDefault();
  const nuevo = {
    id: Date.now(),
    titulo: $("#f-titulo").value.trim(),
    categoria: $("#f-categoria").value,
    fecha: $("#f-fecha").value,
    hora: $("#f-hora").value,
    lugar: $("#f-lugar").value.trim(),
    precio: Math.max(0, parseInt($("#f-precio").value, 10) || 0),
    descripcion: $("#f-desc").value.trim()
  };
  const extra = leerLS(LS_EVENTOS);
  extra.push(nuevo);
  guardarLS(LS_EVENTOS, extra);
  eventos.push(nuevo);

  ev.target.reset();
  $("#f-precio").value = 0;
  renderEventos();
  document.getElementById("cartelera").scrollIntoView();
}

/* ---------- Validar en puerta ---------- */
async function validarBoleta(ev) {
  ev.preventDefault();
  const codigo = $("#codigo").value.trim().toUpperCase();
  const box = $("#resultado");
  box.hidden = false;
  try {
    const r = await fetch(API + "validar.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ codigo })
    });
    const b = await r.json();
    const extra = b.participante
      ? " " + b.participante + (b.carrera ? " · " + b.carrera + " · Sem. " + b.semestre : "") + " · Doc. " + b.documento
      : "";
    if (b.estado === "valida") {
      box.className = "resultado resultado--ok";
      box.textContent = "✅ Boleta válida. Bienvenido/a " + b.nombre + " a «" + b.evento + "»." + extra;
    } else if (b.estado === "usada") {
      box.className = "resultado resultado--warn";
      box.textContent = "⚠️ Esta boleta ya fue utilizada (" + b.nombre + " · " + b.evento + ").";
    } else {
      box.className = "resultado resultado--error";
      box.textContent = "❌ Boleta no encontrada. Revisa el código.";
    }
  } catch (err) {
    box.className = "resultado resultado--error";
    box.textContent = "❌ No hay conexión con el servidor. Revisa que Apache y MySQL estén encendidos.";
  }
}

/* ---------- Eventos de la interfaz ---------- */
function iniciar() {
  cargarCategorias();
  $("#desde").min = hoyISO();
  $("#f-fecha").min = hoyISO();
  renderEventos();

  ["#buscar", "#categoria", "#desde"].forEach(s => {
    $(s).addEventListener("input", renderEventos);
  });
  $("#filtros").addEventListener("submit", e => e.preventDefault());
  $("#limpiar").addEventListener("click", () => {
    $("#filtros").reset();
    renderEventos();
  });

  $("#grid").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) abrirModal(Number(card.dataset.id));
  });
  $("#grid").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const card = e.target.closest(".card");
      if (card) abrirModal(Number(card.dataset.id));
    }
  });

  $("#modal-close").addEventListener("click", cerrarModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") cerrarModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });
  $("#m-carrera").innerHTML = '<option value="">Selecciona...</option>' + CARRERAS.map(c => `<option>${c}</option>`).join("");
  $("#m-semestre").innerHTML = '<option value="">Selecciona...</option>' + SEMESTRES.map(s => `<option value="${s}">${s}° semestre</option>`).join("");
  $("#m-tipo").addEventListener("change", alternarAcademico);
  $("#m-comprar").addEventListener("submit", obtenerBoleta);
  $("#b-otra").addEventListener("click", cerrarModal);
  ["#m-doc", "#m-tel"].forEach(s => $(s).addEventListener("input", e => {
    e.target.value = e.target.value.replace(/[^A-Za-z0-9]/g, "");
  }));

  $("#form-publicar").addEventListener("submit", publicarEvento);
  $("#form-validar").addEventListener("submit", validarBoleta);

  // Resaltar enlace activo de la navegación
  document.querySelectorAll("[data-nav]").forEach(a => {
    a.addEventListener("click", () => {
      document.querySelectorAll("[data-nav]").forEach(x => {
        x.classList.remove("nav__btn--active");
        x.classList.add("nav__link");
      });
      a.classList.add("nav__btn--active");
      a.classList.remove("nav__link");
    });
  });
}

document.addEventListener("DOMContentLoaded", iniciar);
