import {Request, Response, Router} from 'express';
import {productsRepository} from '../repositories/products-repository';

export const productsRouter = Router({});

exports.productsRouter.get('/', (req: Request, res: Response) => {
    const foundProducts = productsRepository.findProducts(req.query.productName
        ? req.query.productName.toString()
        : null);
    res.send(foundProducts);
    // try {
    //
    //     res.send(products);
    // }
    // catch (error) {
    //     console.log("Something goes wrong");
    // }
});
