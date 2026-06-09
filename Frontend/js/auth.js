// ======================
// LOGIN
// ======================

async function login(email, password) {
  try {
    const response = await fetch("http://127.0.0.1:8000/index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: email, password: password })
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.mensaje);
      return;
    }

    // Cuando el backend devuelva JWT real, usar: data.token
    localStorage.setItem("token", data.token || "usuario-autenticado");
    localStorage.setItem("user", JSON.stringify(data.usuario));

    window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    alert("Error al iniciar sesión. Verifica tu conexión.");
  }
}


// ======================
// REGISTRO
// ======================

async function register(name, email, phone, password) {
  try {
    const response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // FIX: se incluye celular que antes se descartaba silenciosamente
      body: JSON.stringify({
        nombre: name,
        correo: email,
        celular: phone,
        password: password
      })
    });

    const data = await response.json();
    alert(data.mensaje);

    if (data.success) {
      window.location.href = "index.html";
    }

  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario. Verifica tu conexión.");
  }
}


// ======================
// RECUPERAR CONTRASEÑA
// FIX: función que antes no existía y causaba error en forgot-password.html
// ======================

async function forgotPassword(email) {
  try {
    const response = await fetch("http://127.0.0.1:8000/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: email })
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.mensaje || "No se pudo enviar el enlace.");
    }

  } catch (error) {
    // En modo prototipo sin backend activo, simplemente mostramos éxito visual
    console.warn("Backend no disponible — modo prototipo:", error);
  }
}


// ======================
// LOGOUT
// ======================

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}


// ======================
// AUTH GUARD
// Protege páginas privadas y puebla el DOM con datos del usuario
// ======================

function requireAuth() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  const user   = JSON.parse(localStorage.getItem("user") || "{}");
  const nombre = user.nombre || user.name  || "Usuario";
  const correo = user.correo || user.email || "";

  const ids = {
    "username-display": nombre,
    "welcome-name":     nombre.split(" ")[0],
    "fullname-display": nombre,
    "email-display":    correo
  };

  Object.entries(ids).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}
