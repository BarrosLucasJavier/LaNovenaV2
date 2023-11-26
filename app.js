import express, { urlencoded } from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './routes/index.route.js'

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", indexRouter )

app.listen(port, () => { console.log(`Server running in http://localhost:${port}`) })