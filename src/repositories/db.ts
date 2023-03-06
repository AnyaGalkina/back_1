import {MongoClient} from 'mongodb';

const mongoUri = process.env.mongoUri = 'mongodb+srv://test:5u9G8FjLMITIc47y@cluster0.3xxqnal.mongodb.net/?retryWrites=true&w=majority'
// const mongoUri = process.env.mongoUri
    // || "mongodb://0.0.0.0:27017/?maxPoolSize=20&w=majority"

export const client = new MongoClient(mongoUri);


export const productsCollection = client.db('shop').collection<ProductType>('products');
export const ordersCollection = client.db('shop').collection<OrderType>('orders');


export async function runDb() {
    try {
        //Connect the client to the server
        await client.connect();
        //Establish and varify connection
        await client.db("products").command({ping: 1});

        console.log("Connected successfully to mongo server")
    } catch(e) {
        console.log("Can't connect to db")
        console.log(e)
        console.error(e)

        //Ensure that the client will close when you finish/error
        await client.close();
    }
}

export type ProductCartType = {
    productId: string;
    imgSrc: string;
    productName: string;
    quantity: number;
    pricePerUnit: number;
};

export type OrderType = {
    id: string;
    productsCartList: ProductCartType[];
    firstName: string;
    surname: string;
    address: string;
    phone: string;
    totalSum: number;
    email: string;
}

export type ProductType = {
    productId: string;
    pricePerUnit: number;
    imgSrc: string;
    productName: string;
    productDescription: string;
}
