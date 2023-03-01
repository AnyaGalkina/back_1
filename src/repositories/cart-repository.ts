import {emailManagers} from '../managers/email-managers';

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

// type ContactDetailsType = {
//     firstName: string;
//     surname: string;
//     address: string;
//     phone: string;
// };

export const cartRepositories = {
    async createNewOrder(newOrder: Omit<OrderType, 'id'>) {
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
        try {
            orderList.push(createdOrder);
            await emailManagers.sendEmailMessage(orderList[orderList.length - 1]);
            return true;
        } catch (error) {
            return false;
        }
    }
}