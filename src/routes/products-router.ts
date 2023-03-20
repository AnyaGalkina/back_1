import {Request, Response, Router} from 'express';
import {productsService} from '../domain/products-service';
import {HTTP_STATUSE} from '../enum';

export const productsRouter = Router({});

exports.productsRouter.get('/', async (req: Request, res: Response) => {

    const data = req.query;

    const dataForRepository = {
        productName: '',
        pageNumber: 1,
        pageSize: 2,
        ...data
    }
    const foundProducts = await productsService.findProducts(dataForRepository);
    res.status(HTTP_STATUSE.OK_200).send(foundProducts);
});
