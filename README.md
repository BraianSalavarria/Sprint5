# 🌎 Gestión de Países Hispanohablantes

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5.1.0-blue?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?style=for-the-badge&logo=mongodb)
![EJS](https://img.shields.io/badge/EJS-Templates-yellow?style=for-the-badge&logo=ejs)

> **Autor:** Braian Salavarria  
> **Tema:** Gestión de países hispanohablantes (API externa)

---

## 📌 Descripción
Aplicación web desarrollada con **Node.js**, **Express**, **EJS** y **MongoDB** que gestiona datos de países hispanohablantes obtenidos desde la API pública [REST Countries](https://restcountries.com/). Permite consultar, filtrar, almacenar y administrar información de países que tienen **español** como idioma oficial.

Incluye:
- Consumo de API externa.
- Filtro por países de habla hispana.
- Persistencia en MongoDB.
- Dashboard interactivo con tabla y totales.
- Operaciones **CRUD** (agregar, editar, eliminar).
- Validaciones robustas en backend.

---

## 🎯 Objetivos
- Obtener y filtrar datos de países desde una API externa.
- Limpiar y normalizar los datos antes de guardarlos.
- Almacenar información en MongoDB.
- Desarrollar un dashboard con vistas dinámicas usando **EJS**.
- Implementar validaciones sólidas y amigables.
- Mantener un código modular, limpio y escalable.

---

## 🛠️ Tecnologías utilizadas
- **Node.js** (v18+)
- **Express.js** (v5.1.0)
- **MongoDB** (local o Atlas)
- **Mongoose** para modelado de datos
- **EJS** y **Express-EJS-Layouts**
- **Axios** para consumo de API externa
- **Express-Validator** para validaciones
- **Dotenv** para configuración de variables de entorno
- **Morgan** para logs de peticiones
- **Method-Override** para soporte de PUT/DELETE en formularios

---

## 📂 Estructura del proyecto
```bash
src/
├── config/
│   └── dbConfig.mjs            # Configuración de conexión a MongoDB
├── controllers/
│   └── CountriesController.mjs # Controladores principales
├── models/
│   └── Countries.mjs           # Esquema de Mongoose
├── public/
│   ├── img/                    # Recursos estáticos
│   └── js/
│       ├── addCountrie.js
│       ├── editCountrie.js
│       └── listaCountrie.js
├── repository/
│   ├── IRepositoy.mjs
│   └── ContriesRepository.mjs  # Acceso a datos
├── routes/
│   ├── CountriesRoutes.mjs     # Rutas principales
│   └── Home.mjs                # Ruta de inicio
├── services/
│   └── CountriesService.mjs    # Lógica de negocio
├── validations/
│   ├── errorMiddleware.mjs     # Manejo centralizado de errores
│   └── validationsCountries.mjs# Validaciones personalizadas
├── views/
│   ├── pages/                  # Páginas EJS
│   └── partials/               # Componentes reutilizables
├── .env                        # Variables de entorno
├── .gitignore                 # Archivos ignorados en Git
├── app.mjs                    # Configuración principal de Express
├── package.json               # Dependencias y scripts
└── package-lock.json          # Control de versiones de dependencias
```

---

## ⚙️ Instalación y configuración
```bash
# Clonar el repositorio
git clone https://github.com/BraianSalavarria/Sprint5.git
cd gestion-paises

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env y agregar tus datos de MongoDB

# Ejecutar el proyecto
npm start
```

---

## 🌐 API utilizada
- **Endpoint principal:** `https://restcountries.com/v3.1/region/america`
- **Tareas:**
  - Obtener países de América.
  - Filtrar solo los que tienen español (`languages.spa`).
  - Limpiar propiedades innecesarias.
  - Agregar campo personalizado `creador: "Braian Salavarria"`.

---

## 🧩 Funcionalidades principales
- **Dashboard dinámico** con:
  - Nombre oficial o común.
  - Capital.
  - Fronteras.
  - Área.
  - Población.
  - Gini (avanzado).
  - Timezones.
  - Creador.
- **CRUD completo**:
  - ➕ Agregar país.
  - ✏️ Editar país.
  - 🗑️ Eliminar país.
- **Validaciones robustas**:
  - Nombre oficial: 3–90 caracteres.
  - Capital: 3–90 caracteres.
  - Borders: 3 letras mayúsculas.
  - Área: número positivo.
  - Población: entero positivo.
  - Gini: entre 0 y 100.

---

## ✨ Buenas prácticas implementadas
- Código modular y desacoplado (MVC + Services + Repository).
- Validaciones centralizadas.
- Manejo de errores amigable.
- Normalización de datos antes de persistir.
- Reutilización de componentes EJS.

---

## 👨‍💻 Autor
**Braian Salavarria**  
[GitHub](https://github.com/BraianSalavarria) • [LinkedIn](https://www.linkedin.com/in/braian-salavarria-688aaa251/)

---

## 📄 Licencia
Este proyecto se distribuye bajo la licencia **MIT**.
