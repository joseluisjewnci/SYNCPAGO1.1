// dashboard.js
// requireAuth() en auth.js ya puebla nombre/email en el DOM.
// Este archivo solo calcula y muestra los KPIs del mes actual.

document.addEventListener("DOMContentLoaded", () => {

  const gastos = JSON.parse(localStorage.getItem("gastos") || "[]");
  const hoy    = new Date();

  const delMes = gastos.filter(g => {
    const f = new Date(g.fecha + "T12:00:00");
    return f.getMonth()    === hoy.getMonth()
        && f.getFullYear() === hoy.getFullYear()
        && g.activo;
  });

  const total    = delMes.reduce((a, g) => a + g.monto, 0);
  const pagados  = delMes.filter(g => g.estado === "Pagado").length;
  const vencidos = delMes.filter(g => {
    if (g.estado === "Pagado") return false;
    return new Date(g.fecha + "T12:00:00") < hoy;
  }).length;
  const pendientes = delMes.length - pagados - vencidos;

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  set("kpi-total",   formatMoney(total));
  set("kpi-paid",    pagados);
  set("kpi-pending", pendientes);
  set("kpi-overdue", vencidos);

  // Sincronizar selector de moneda con valor guardado
  const sel = document.getElementById("currency-sel");
  if (sel) sel.value = getCurrency();
});
