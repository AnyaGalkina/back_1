import {Request, Response, Router} from 'express';
import {productsRepository} from '../repositories/products-db-repository';

export const productsRouter = Router({});

exports.productsRouter.get('/', async (req: Request, res: Response) => {
    const foundProducts = await productsRepository.findProducts(req.query.productName
        ? req.query.productName.toString()
        : null);
    console.log(foundProducts);
    res.send(foundProducts);
});
