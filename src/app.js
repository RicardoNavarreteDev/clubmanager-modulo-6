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

app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));

app.use("/", homeRouter);
app.use("/jugadores", playersRouter);

export default app;
