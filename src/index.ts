import express from "express";
import bodyParser from "body-parser";
import {newsRouter} from "./routes/news-router";
import {cakesRouter} from './routes/cakes-router';
import {cartRouter} from './routes/cart-router';
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.use(cors());
app.use("/news", newsRouter);
app.use("/products", cakesRouter);
app.use("/cart", cartRouter);


app.listen(port, () => {
    console.log("listening port 3000");
})