import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from 'path';
import { fileURLToPath } from 'url';
import homeRouter from "./routes/home.routes.js";
import playersRouter from "./routes/players.routes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(morgan('dev'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Servimos archivos publicos como CSS, imagenes o JS del navegador.
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));

// Montamos la ruta principal en /.
app.use("/", homeRouter);

// Montamos las rutas de jugadores bajo /jugadores.
app.use("/jugadores", playersRouter);

// Si ninguna ruta coincide, respondemos con la vista 404.
app.use((req, res) => {
  res.status(404).render("404");
});

export default app;
