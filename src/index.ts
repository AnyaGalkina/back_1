import express from "express";
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";
import {newsRouter} from "./routes/news-router";

const app = express();
const port = process.env.PORT || 3000

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.use("/products", productsRouter);
app.use("/addresses", addressesRouter);
app.use("/news", newsRouter);

app.listen(port, () => {
    console.log("listening port 3000");
})