import {
    PaginatorProductsType,
    productsRepository,
    ResponseProductsType
} from '../repositories/products-db-repository';

export const productsService = {
    async findProducts(data: PaginatorProductsType): Promise<ResponseProductsType | undefined>
    {
        try {
            return await productsRepository.findProducts(data);
        } catch (e) {
            console.log(e);
        }
    },
};