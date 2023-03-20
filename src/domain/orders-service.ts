import {emailManagers} from '../managers/email-managers';
import {cartRepositories} from '../repositories/cart-db-repository';
import {OrderType} from '../repositories/db';

export const ordersService = {
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
            await cartRepositories.createNewOrder(createdOrder);
            await emailManagers.sendEmailMessage(createdOrder);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}