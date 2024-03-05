import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url'
import cors from 'cors';
import morgan from 'morgan';
import methodOverride from 'method-override'
import indexRouter from './routes/index.route.js'
import productsRouter from './routes/products.route.js'
import adminRouter from './routes/admin.route.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(methodOverride('_method'));
console.log(path.join(__dirname));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        secret:"El Hacha",
        resave:false,
        saveUninitialized:false,
    })
);

app.use("/", indexRouter)
app.use("/catalogo", productsRouter)
app.use("/admin", adminRouter)

export default app