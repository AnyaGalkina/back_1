import {Request, Response, Router} from 'express';
import {cartRepositories} from '../repositories/cart-repository';
import {validationResult} from 'express-validator';
import {orderValidationMiddleware} from '../middlewares/order-validation-middleware';
import {inputValidationsMiddleware} from '../middlewares/input-validations-middleware';

export const cartRouter = Router({});


cartRouter.post('/', orderValidationMiddleware, inputValidationsMiddleware, async (req: Request, res: Response) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        // res.status(200);
        const isCreated = await cartRepositories.createNewOrder(req.body);
    // return res.status(200);
        if (isCreated) {
           res.status(200).send("order has been sent to email");

        } else {
            res.status(400).send('some problem with email sending');
        }
    })

