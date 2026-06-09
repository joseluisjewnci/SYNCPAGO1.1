// ====================
// TRADUCCIONES RF-022
// ====================

const translations = {
  es: {
    inicio:         "Inicio",
    recibos:        "Mis Recibos",
    recordatorios:  "Recordatorios",
    estadisticas:   "Estadísticas",
    historial:      "Historial",
    agregar:        "+ Agregar Recibo",
    buscar:         "Buscar Recibos...",
    bienvenida:     "¡Te damos la bienvenida",
    subtitulo:      "Aquí tienes un resumen de tus finanzas. Revisa tus próximos pagos y mantente al día."
  },
  en: {
    inicio:         "Home",
    recibos:        "My Bills",
    recordatorios:  "Reminders",
    estadisticas:   "Statistics",
    historial:      "History",
    agregar:        "+ Add Bill",
    buscar:         "Search Bills...",
    bienvenida:     "Welcome",
    subtitulo:      "Here is a summary of your finances. Check your upcoming payments and stay up to date."
  }
};

function getLang() {
  return localStorage.getItem("lang") || "es";
}

// FIX: firma corregida — el HTML llama setLang('es', this), el segundo arg era ignorado
// Ahora también actualiza visualmente los botones activos
function setLang(lang, btn) {
  localStorage.setItem("lang", lang);

  // Actualizar botones activos si se pasa referencia
  if (btn) {
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  location.reload();
}

// Aplica traducciones a todos los elementos con [data-i18n]
function applyTranslations() {
  const t = translations[getLang()];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  // Marcar botón de idioma activo
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.trim().toLowerCase() === getLang());
  });
}

document.addEventListener("DOMContentLoaded", applyTranslations);
