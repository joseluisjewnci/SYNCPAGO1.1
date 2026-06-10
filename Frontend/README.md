# SYNCPAGO Frontend

Este proyecto contiene la interfaz web del sistema SYNCPAGO, desarrollada en HTML, CSS y JavaScript puro. Su objetivo es permitir a los usuarios gestionar gastos, recibos, recordatorios y visualizar un resumen financiero de forma sencilla.

## 1. Descripción general

La carpeta Frontend está organizada como una aplicación web estática con páginas independientes y lógica JavaScript para:

- iniciar sesión y registrarse,
- manejar gastos/recibos,
- visualizar el dashboard,
- consultar historial,
- configurar recordatorios,
- ver estadísticas por categoría y mes.

La información se guarda principalmente en `localStorage`, por lo que el flujo funciona sin una base de datos en el frontend.

## 2. Estructura de carpetas

### `pages/`
Contiene todas las pantallas de la aplicación:

- `index.html` — inicio de sesión.
- `register.html` — creación de cuenta.
- `forgot-password.html` — recuperación de contraseña.
- `dashboard.html` — resumen general y bienvenida.
- `gastos.html` — gestión de recibos y gastos.
- `recordatorios.html` — configuración de alertas y notificaciones.
- `historial.html` — historial de pagos y recibos.
- `insights.html` — estadísticas por categoría y mes.

### `js/`
Contiene la lógica de interacción del frontend:

- `auth.js` — login, registro, recuperación de contraseña, cierre de sesión y validación básica de autenticación.
- `dashboard.js` — cálculos del resumen financiero del dashboard.
- `gastos.js` — CRUD de recibos, filtros, paginación y edición de gastos.
- `historial.js` — visualización y filtros del historial.
- `recordatorios.js` — preferencias de notificaciones y recordatorios.
- `utils.js` — funciones auxiliares como formato de moneda, cambio de divisas y toast de mensajes.
- `i18n.js` — soporte básico para idioma español/inglés.

### `css/`
Archivos de estilos para la interfaz:

- `base.css` — estilos base generales.
- `auth.css` — diseño de formularios de login/registro/recuperación.
- `layout.css` — estructura principal de la app.
- `components.css` — botones, tarjetas, tablas, modales y otros componentes reutilizables.
- `dashboard.css` — estilos del dashboard y visualizaciones.
- `responsive.css` — adaptaciones para pantallas pequeñas y móviles.
- `variables.css` — variables de colores, tipografía y tamaños reutilizables.

### `img/`
Carpeta para recursos visuales e íconos de la interfaz.

## 3. Funcionalidades principales

### Autenticación
- Login con correo y contraseña.
- Registro de nuevos usuarios.
- Recuperación de contraseña.
- Cierre de sesión.

### Gestión de Recibos
- Crear, editar y eliminar recibos.
- Filtrar por categoría, estado o texto.
- Paginación en listado de recibos.
- Marcar como pagado o pendiente.

### Dashboard y estadísticas
- Resumen de gastos del mes.
- Totales de pagados, pendientes y vencidos.
- Visualización de categorías con porcentaje de participación.

### Recordatorios
- Configuración de alertas por WhatsApp.
- Control de días de anticipación.
- Personalización del mensaje de notificación.

### Historial
- Consulta del historial completo de recibos.
- Filtros por estado, categoría y rango de fechas.

## 4. Cómo ejecutar el frontend

Este frontend funciona como una app estática, por lo que puede abrirse directamente en el navegador.

1. Asegúrate de tener el backend corriendo en:
   - `http://127.0.0.1:8000`
2. Abre cualquiera de los archivos HTML dentro de `pages/`, por ejemplo:
   - `pages/index.html`
3. Si prefieres usar un servidor local simple, puedes ejecutar una mini app con Live Server o Python, por ejemplo:

   ```bash
   python -m http.server 3000
   ```

   Luego abre:

   ```text
   http://localhost:3000/pages/index.html
   ```

## 5. Tecnologías usadas

- HTML5
- CSS3
- JavaScript vanilla
- localStorage para persistencia simple del lado del cliente

## 6. Nota importante

Este frontend está pensado para trabajar junto con un backend que expone endpoints como:

- `/index` para login,
- `/register` para registro,
- `/forgot-password` para recuperación.

Por ello, si el backend no está disponible, algunas funciones de autenticación pueden no responder como se espera.

## 7. Resumen rápido

La carpeta `Frontend` es la capa visual y de interacción de SYNCPAGO. Su función principal es ofrecer una experiencia de usuario clara para:

- controlar finanzas,
- registrar pagos,
- organizar alertas,
- revisar avances y tendencias del gasto mensual.
