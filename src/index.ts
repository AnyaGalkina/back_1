import express from 'express';
import bodyParser from 'body-parser';
import {newsRouter} from './routes/news-router';
import {productsRouter} from './routes/products-router';
import {cartRouter} from './routes/cart-router';
import cors from 'cors';
import {runDb} from './repositories/db'

const app = express();
const port = process.env.PORT || 3001

const parserMiddleware = bodyParser({});

app.use(parserMiddleware);
app.use(cors());
// app.use(requestCounterMiddleware);
app.use('/news', newsRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const PORT = process.env.PORT || 3001;

    const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`listening on port: ${PORT}`);
    })
}



startApp();

// app.listen(port, () => {
//     console.log('listening port 3000');
// })
