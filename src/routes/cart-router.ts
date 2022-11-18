import {Request, Response, Router} from "express";

export const cartRouter = Router({});
const orderList: OrderType[] = [];

type ContactDetailsType = {
    firstName: string;
    surname: string;
    address: string;
    phone: string;
};

type OrderType = {
    id: string;
    productsCartList: ProductCartType[];
    contactDetails: ContactDetailsType;
    totalSum: number;
}

export type ProductCartType = {
    productId: string;
    imgSrc: string;
    productName: string;
    quantity: number;
    pricePerUnit: number;
};


cartRouter.post("/", (req: Request, res: Response) => {
    const newOrder: OrderType = {
        id: (new Date() + "" ),
        productsCartList: req.body.productsCartList,
        contactDetails: req.body.contactDetails,
        totalSum: req.body.totalSum,
    }
    orderList.push(newOrder)
    res.status(200).send(newOrder)
})

