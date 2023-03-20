import {ordersCollection, OrderType} from './db';

export const cartRepositories = {
    async createNewOrder(newOrder: OrderType): Promise<boolean> {
        try {
            await ordersCollection.insertOne(newOrder);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}