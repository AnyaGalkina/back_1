import {emailManagers} from '../../managers/email-managers';

const orderList: OrderType[] = [];

export type ProductCartType = {
    productId: string;
    imgSrc: string;
    productName: string;
    quantity: number;
    pricePerUnit: number;
};

type OrderType = {
    id: string;
    productsCartList: ProductCartType[];
    firstName: string;
    surname: string;
    address: string;
    phone: string;
    totalSum: number;
    email: string;
}

export const cartRepositories = {
    async createNewOrder(newOrder: Omit<OrderType, 'id'>): Promise<boolean> {
        const createdOrder: OrderType = {
            id: (new Date() + ''),
            productsCartList: newOrder.productsCartList,
            firstName: newOrder.firstName,
            surname: newOrder.surname,
            address: newOrder.address,
            phone: newOrder.phone,
            totalSum: newOrder.totalSum,
            email: newOrder.email
        }
        orderList.push(createdOrder);
        try {
            await emailManagers.sendEmailMessage(orderList[orderList.length - 1]);
            return true;
        } catch (error) {
            console.log(error);
            console.error(error);
            return false;
        }
    }
}