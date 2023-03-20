import {Request, Response, Router} from 'express';
import {validationResult} from 'express-validator';
import {orderValidationMiddleware} from '../middlewares/order-validation-middleware';
import {inputValidationsMiddleware} from '../middlewares/input-validations-middleware';
import {ordersService} from '../domain/orders-service';
import {HTTP_STATUSE} from '../enum';

export const cartRouter = Router({});

cartRouter.post('/', orderValidationMiddleware, inputValidationsMiddleware, async (req: Request, res: Response): Promise<any> => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(HTTP_STATUSE.BAD_REQUEST_400).json({errors: errors.array()})
        }
        const isCreated = await ordersService.createNewOrder(req.body);
        if (isCreated) {
           res.status(HTTP_STATUSE.CREATED_201).send("order has been sent to email");

        } else {
            res.status(HTTP_STATUSE.BAD_REQUEST_400).send('some problem with email sending');
        }
    })

