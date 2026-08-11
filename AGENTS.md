# ClubManager - Contexto de Proyecto

## Objetivo general del proyecto

Construir `ClubManager` como una aplicacion web progresiva para las entregas academicas de los Modulos 6, 7 y 8.

La idea del proyecto se mantiene en las tres etapas:

- una plataforma de gestion para clubes o equipos deportivos
- ejemplo inicial: `Club Prueba`
- arquitectura modular y escalable
- crecimiento progresivo sin rehacer la base en cada modulo

## Enfoque por entregas

### Primera entrega - Modulo 6

Construir la base del backend con `Node.js` y `Express`.

Esta entrega debe priorizar:

- servidor funcionando
- estructura modular inicial
- rutas publicas
- contenido HTML y JSON
- archivos estaticos con `public/`
- uso de `dotenv` y `morgan`
- persistencia simple con archivos planos
- documentacion y repositorio ordenado

### Segunda entrega - Modulo 7

Extender `ClubManager` con persistencia real en base de datos y ORM.

Esta entrega debe incorporar:

- base de datos real
- ORM (`Sequelize` si usamos PostgreSQL)
- modelos y relaciones
- operaciones CRUD
- consultas filtradas
- validaciones y manejo de errores

### Tercera entrega - Modulo 8

Extender `ClubManager` con API RESTful y seguridad.

Esta entrega debe incorporar:

- autenticacion
- JWT
- rutas protegidas
- subida de archivos
- validaciones de archivos
- respuestas de API consistentes

## Nombre y contexto

- Nombre del proyecto: `ClubManager`
- Club de demostracion: `Club Prueba`
- Carpeta raiz actual: `Proyecto-ABP-M6`
- La carpeta podra renombrarse mas adelante si es necesario

## Stack definido

- Node.js
- Express
- Express Handlebars
- Tailwind CSS 4 con compilacion
- Morgan
- dotenv
- fs/promises
- HTML, CSS y JavaScript del navegador
- Git y GitHub
- npm

## Stack por etapa

### Modulo 6

- Node.js
- Express
- JavaScript con modulos ES
- Express Handlebars
- Morgan
- dotenv
- fs y fs/promises
- HTML, CSS y JavaScript del navegador
- Git y GitHub

### Modulo 7

- PostgreSQL
- Sequelize

### Modulo 8

- JWT
- subida de archivos
- API RESTful

## Arquitectura objetivo

```text
clubmanager/
├── src/
│   ├── config/
│   │   └── handlebars.js
│   ├── controllers/
│   │   ├── home.controller.js
│   │   ├── players.controller.js
│   │   └── events.controller.js
│   ├── data/
│   │   ├── players.json
│   │   ├── matches.json
│   │   ├── trainings.json
│   │   └── posts.json
│   ├── routes/
│   │   ├── home.routes.js
│   │   ├── players.routes.js
│   │   └── events.routes.js
│   ├── services/
│   │   └── json.service.js
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.handlebars
│   │   ├── partials/
│   │   │   ├── sidebar.handlebars
│   │   │   ├── agenda.handlebars
│   │   │   ├── mobile-header.handlebars
│   │   │   └── mobile-nav.handlebars
│   │   ├── home.handlebars
│   │   ├── players.handlebars
│   │   ├── events.handlebars
│   │   └── 404.handlebars
│   ├── app.js
│   └── server.js
├── public/
│   ├── css/
│   │   └── output.css
│   ├── images/
│   │   ├── logo/
│   │   └── avatars/
│   └── js/
│       ├── modals.js
│       └── forms.js
├── styles/
│   └── input.css
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Responsabilidades principales

- `src/app.js`: configuracion de Express, middleware, vistas, estaticos, rutas y errores
- `src/server.js`: arranque del servidor
- `routes/`: relacion URL -> controlador
- `controllers/`: preparan datos y renderizan vistas
- `services/json.service.js`: centraliza lectura de JSON
- `views/`: presentacion con Handlebars
- `public/`: recursos accesibles desde el navegador

## Arquitectura real por entregas

### Entrega 1 - Base minima esperada

```text
Proyecto-ABP-M6/
├── logs/
│   └── log.txt
├── public/
│   └── css/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── views/
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### Entrega 2 - Extension con base de datos

- se agrega `models/` o equivalente segun la estructura acordada
- se agregan servicios para acceso a base de datos
- se reemplaza la persistencia central de datos principales desde JSON hacia ORM

### Entrega 3 - Extension con API y seguridad

- se agregan middlewares de autenticacion
- se agregan rutas API separadas de las vistas web
- se agrega manejo de archivos y proteccion JWT

## Rutas previstas

- `/`: inicio
- `/jugadores`: listado de jugadores
- `/eventos`: partidos y entrenamientos
- `404`: pagina personalizada para rutas no encontradas

## Prioridades de entrega

1. Que el servidor funcione
2. Que las rutas funcionen
3. Que Handlebars renderice correctamente
4. Que los JSON se lean con `fs/promises`
5. Que exista estructura modular
6. Que Morgan, dotenv y 404 esten configurados
7. Que las tres paginas muestren su contenido
8. Que los formularios visuales funcionen
9. Que el diseno sea responsive
10. Que los detalles visuales esten pulidos

## Criterios reales por entrega

### Entrega 1 - Modulo 6

Debe quedar listo y demostrable:

1. Servidor con Node.js y Express
2. `npm start` y `npm run dev`
3. `dotenv` configurado
4. `nodemon` configurado
5. Rutas publicas `/` y `/status`
6. Una respuesta HTML y una respuesta JSON
7. `public/` funcionando con `express.static()`
8. Registro simple en archivo plano con fecha, hora y ruta
9. Estructura modular clara
10. README documentado
11. Repositorio ordenado en GitHub

### Entrega 2 - Modulo 7

Debe agregar sobre la base anterior:

1. Base de datos real
2. ORM configurado
3. Entidades modeladas
4. Relaciones 1:1, 1:N y/o N:M segun alcance real del proyecto
5. CRUD completo en al menos dos entidades clave
6. Filtros y busquedas
7. Validaciones y errores de base de datos

### Entrega 3 - Modulo 8

Debe agregar sobre la base anterior:

1. API RESTful
2. JWT
3. Rutas publicas y privadas
4. Login y registro
5. Subida de archivos
6. Validacion de tipo y tamano de archivos
7. Respuestas estandarizadas

## Reglas de trabajo acordadas

- avanzar un paso pequeno a la vez
- explicar antes de cada paso que se hara y por que
- no escribir el proyecto completo por el estudiante
- revisar implementaciones sin reemplazar automaticamente el codigo
- no agregar dependencias innecesarias sin justificarlo
- mantener el alcance controlado para cumplir la entrega academica
- proponer commits pequenos, pero no hacer commit sin confirmacion del usuario

## Orden de desarrollo general

### Modulo 6

1. Preparacion
2. Servidor
3. Paquetes y scripts
4. Rutas publicas
5. Estaticos
6. Persistencia en archivos planos
7. Modularizacion basica
8. README y cierre

### Modulo 7

1. Base de datos
2. ORM
3. Modelos
4. Relaciones
5. CRUD
6. Validaciones
7. Consultas y filtros
8. Ajustes de vistas segun datos reales

### Modulo 8

1. Autenticacion
2. JWT
3. Rutas protegidas
4. API RESTful
5. Upload de archivos
6. Validaciones de archivos
7. Respuestas consistentes
8. Documentacion final de API

## Plan de trabajo detallado para la Entrega 1

### Leccion 1 - Conociendo Node y Express

- comprender el rol de Node.js
- comprender el valor agregado de Express
- reflejar una explicacion breve en la documentacion final

### Leccion 2 - Instalacion y configuracion de Node

- inicializar `package.json`
- definir `type: module`
- crear `src/app.js` y `src/server.js`
- dejar el servidor ejecutable

### Leccion 3 - Gestion de paquetes en Node

- instalar `express`
- instalar `dotenv`
- instalar `nodemon`
- agregar scripts `start` y `dev`

### Leccion 4 - Sirviendo contenido web

- crear al menos dos rutas publicas
- servir HTML y JSON
- configurar `public/`
- validar `express.static()`

### Leccion 5 - Persistencia en archivos planos

- crear `logs/log.txt`
- registrar visitas o eventos elegidos
- usar `fs.appendFile()`
- incluir fecha, hora y ruta

### Leccion 6 - Ejecucion y cierre

- ejecutar con `npm run dev`
- probar rutas
- revisar estructura de carpetas
- completar `README.md`
- preparar entrega en GitHub y evidencias

## Estado actual

- Carpeta raiz definida: `Proyecto-ABP-M6`
- Git inicializado
- Primer commit realizado: `chore: inicializar proyecto y dependencias`
- Segundo commit realizado: `feat: configurar servidor, handlebars y estructura base`
- Dependencias instaladas: `express`, `express-handlebars`, `morgan`, `dotenv`
- Dependencia de desarrollo instalada: `nodemon`
- Archivos base creados: `.gitignore`, `.env.example`, `.env`, `package.json`
- Servidor Express funcional con `dotenv` y `morgan`
- Handlebars configurado y renderizando la vista `home`
- Archivos estaticos configurados desde `public/`
- Estructura modular iniciada con:
  - `src/controllers/home.controller.js`
  - `src/controllers/players.controller.js`
  - `src/routes/home.routes.js`
  - `src/routes/players.routes.js`
  - `src/middlewares/log.middleware.js`
  - `src/views/layouts/main.handlebars`
  - `src/views/home.handlebars`
  - `src/views/players.handlebars`
- `src/app.js` ya conecta `home.routes.js` y `players.routes.js`
- Ruta `/status` implementada con respuesta JSON
- Persistencia simple implementada en `logs/log.txt` con `fs.appendFile()`
- Requisito de la entrega 1 aun pendiente: `README.md`

## Siguiente paso recomendado

1. Completar `README.md`
2. Revisar estructura final contra la pauta del Modulo 6
3. Verificar scripts, rutas y evidencias de la entrega
4. Preparar GitHub y capturas finales

## Alcance controlado actual

Mientras trabajamos en la Entrega 1 del Modulo 6, no es prioridad todavia:

- dashboard final completo
- responsive avanzado
- datos completos de jugadores y eventos
- formularios finales
- Tailwind completo
- PostgreSQL
- Sequelize
- JWT
- API REST completa

La idea de `ClubManager` se mantiene, pero primero debemos cumplir perfectamente la base evaluable del Modulo 6.

## Nota para futuras sesiones

Si se retoma este proyecto en una conversacion nueva, usar este archivo como punto de partida para recordar:

- el alcance academico
- el stack aprobado
- la arquitectura definida
- las restricciones tecnicas
- el estado actual y el siguiente paso
