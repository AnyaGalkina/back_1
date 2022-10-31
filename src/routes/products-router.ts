import {Request, Response, Router} from "express";

export const productsRouter = Router({});
const products = [{id: 1, title: "tomato"}, {id: 2, title: "orange"}];


productsRouter.get("/", (req: Request, res: Response) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1))
    } else {
        res.send(products)
    }
})

productsRouter.post("/", (req: Request, res: Response) => {
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})

productsRouter.get("/:productTitle", (req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle);
    if (product) {
        res.send(product);
    } else {
        res.send(404)
    }
})

