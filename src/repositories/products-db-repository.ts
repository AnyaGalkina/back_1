import {
    productsCollection,
    ProductType} from './db';

export const productsRepository = {
    async findProducts(productName: string | null)
        // : Promise<ProductType[]>
    {
        const filter: any = {};
        console.log(productName)
        if (productName) {
            console.log(productName + " added to filter")

            filter.productName = {$regex: productName}
        }

        try {
            return await productsCollection.find(filter).toArray();
        } catch (e) {
            console.log(e);
        }
    }
};