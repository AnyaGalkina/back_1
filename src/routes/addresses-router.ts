import {Request, Response, Router} from "express";

export const addressesRouter = Router({});
const addresses = [{id: 1, value: "Phuket"}, {id: 2, value: "Buenos Aires"}]


addressesRouter.get("/", (req: Request, res: Response) => {
    res.send(addresses)
})

addressesRouter.get("/:id", (req: Request, res: Response) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address);
    } else {
        res.send(404)
    }
})

addressesRouter.put("/:id", (req: Request, res: Response) => {
    let address = addresses.find(a => a.id === +req.params.id);
    if (address) {
        address.value =  req.body.value
        res.send(address);
    } else {
        res.send(404)
    }
})

addressesRouter.delete("/:id", (req: Request, res: Response) => {
    for (let i = 0; i < addresses.length; i++) {
        if (addresses[i].id === +req.params.id) {
            addresses.splice(i, 1);
            res.send(204)
            return
        }
    }
})
