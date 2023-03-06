import {emailManagers} from '../managers/email-managers';
import {ordersCollection, OrderType} from './db';

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

        try {
            await ordersCollection.insertOne(createdOrder);
            await emailManagers.sendEmailMessage(createdOrder);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}