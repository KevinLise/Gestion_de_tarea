# 📝 Todo App - Vanilla JS

## 🎯 Objetivo

Desarrollar una aplicación de gestión de tareas utilizando **JavaScript Vanilla**, aplicando consumo de APIs con `fetch`, manejo de `localStorage`, filtros con `query params` y arquitectura basada en vistas y controladores.

---

# 👥 Roles

## 🔴 Admin
- Ver todas las tareas
- Filtrar tareas
- Cambiar estados
- Eliminar tareas

## 🔵 User
- Ver únicamente sus tareas
- Crear tareas
- Editar sus tareas

---

# 🔐 Autenticación

Implementar login utilizando los usuarios del `db.json`.

### Requisitos:
- Validar email y contraseña
- Guardar sesión en `localStorage`
- Redireccionar según el rol

---

# 📋 Gestión de tareas

Cada tarea contiene:

```js
{
  id,
  id_user,
  title,
  description,
  status
}
```

### Estados:

- initial
- process
- completed

### 🔎 Filtros

Implementar filtros utilizando query params.

### Ejemplos:
```
/dashboard.html?status=completed
/dashboard.html?search=comer
/dashboard.html?user=2
```

### 🌐 API

Consumir la API usando fetch.

Endpoints:
```
GET    /users
GET    /todo_list
POST   /todo_list
PUT    /todo_list/:id
PATCH  /todo_list/:id
DELETE /todo_list/:id
```

### Estructura sugerida
```
├── database
│   └── db.json
├── index.html
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
├── src
│   ├── assets
│   │   ├── hero.png
│   │   ├── javascript.svg
│   │   └── vite.svg
│   ├── components
│   │   └── layout.js
│   ├── controllers
│   │   ├── home.controller.js
│   │   ├── login.controller.js
│   │   └── todo.controller.js
│   ├── main.js
│   ├── style.css
│   └── views
│       ├── homeView.js
│       ├── loginView.js
│       ├── notFoundView.js
│       └── userView.js
└── vite.config.js
```

### 🎨 Interfaz
La aplicación debe ser:

- Intuitiva
- Responsiva
- Profesional
- Fácil de navegar

### ✅ Requisitos técnicos
- Fetch API
- LocalStorage
- Query Params
- Manipulación del DOM
- Filtros dinámicos
- Separación de responsabilidades
