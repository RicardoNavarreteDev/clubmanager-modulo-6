# ClubManager - Contexto de Proyecto

## Objetivo de la primera entrega

Construir una primera version funcional de `ClubManager` para una entrega academica del Modulo 6.

La aplicacion debe:

- funcionar con `Node.js` y `Express`
- usar `JavaScript` con modulos ES
- renderizar vistas con `Express Handlebars`
- leer datos desde archivos `JSON` usando `fs/promises`
- incluir una interfaz tipo dashboard responsive
- priorizar una entrega funcional, ordenada y documentada

No se implementara en esta version:

- React
- TypeScript
- PostgreSQL
- Sequelize
- autenticacion real
- JWT
- WebSockets
- persistencia real de formularios
- API REST completa

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

## Arquitectura acordada

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

## Reglas de trabajo acordadas

- avanzar un paso pequeno a la vez
- explicar antes de cada paso que se hara y por que
- no escribir el proyecto completo por el estudiante
- revisar implementaciones sin reemplazar automaticamente el codigo
- no agregar dependencias innecesarias sin justificarlo
- mantener el alcance controlado para cumplir la entrega academica
- proponer commits pequenos, pero no hacer commit sin confirmacion del usuario

## Orden de desarrollo

1. Preparacion
2. Servidor
3. Handlebars
4. Arquitectura
5. Datos
6. Dashboard
7. Vistas principales
8. Formularios
9. Responsive
10. Finalizacion

## Estado actual

- Carpeta raiz definida: `Proyecto-ABP-M6`
- Git inicializado
- Primer commit realizado: `chore: inicializar proyecto y dependencias`
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
  - `src/views/layouts/main.handlebars`
  - `src/views/home.handlebars`
  - `src/views/players.handlebars`
- `src/app.js` ya conecta `home.routes.js`
- Siguiente archivo pendiente: `src/routes/players.routes.js`

## Siguiente paso recomendado

Crear `src/routes/players.routes.js`, conectarlo desde `src/app.js` y probar la ruta `/jugadores`.

## Nota para futuras sesiones

Si se retoma este proyecto en una conversacion nueva, usar este archivo como punto de partida para recordar:

- el alcance academico
- el stack aprobado
- la arquitectura definida
- las restricciones tecnicas
- el estado actual y el siguiente paso
