import {
    productsCollection,
    ProductType} from './db';

export const productsRepository = {

    async findProducts({productName, pageNumber, pageSize, sortDirection = 'desc'}: PaginatorProductsType): Promise<ResponseProductsType | undefined> {

        const filter: any = {};
        if(productName) {
            filter.productName = {$regex: productName}
        }

        try {
            const foundProducts = await productsCollection
                .find(filter)
                .skip((pageNumber - 1) * pageSize)
                .limit(Number(pageSize))
                .sort({pricePerUnit: sortDirection})
                .toArray()

            const totalCount = await productsCollection.countDocuments(productName
                ? {productName: {$regex: productName}}
                : {});

            const pagesCountRes = Math.ceil(totalCount / pageSize);

            const res =  {
                pagesCount: pagesCountRes,
                pageNumber: pageNumber,
                pageSize: pageSize,
                totalCount: totalCount,
                items: foundProducts,
            }

            return res;

        } catch (e) {
            console.log(e);
        }
    },
};

export interface PaginatorProductsType {
    productName: string;
    pageNumber: number;
    pageSize: number;
    sortDirection?: 'asc' | 'desc';
}

export interface ResponseProductsType {
    pagesCount: number;
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    items: ProductType[],
}