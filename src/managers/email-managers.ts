import {emailAdapter} from '../adapters/email-adapter';

// import type OrderType from '../repositories/cart-repository';


const IMG_LINK = 'https://img.freepik.com/free-photo/top-view-delicious-donuts-concept_23-2148761711.jpg?w=1480&t=st=1677691828~exp=1677692428~hmac=bee492b4adaa13636e38511b4e8e5a25ea9330bae8384af72ab1e872fd2c2941';

class EmailManagers {
    async sendEmailMessage(createdOrder: any) {
        const subject = 'Order Confirmation'
        const link = `https://anyagalkina.github.io/shop/#/products`
        const message = `
        <div style="width: 600px; text-align: center; font-family: Farisi,sans-serif">
            <br/>
            <br/>
                <h2 style="color: #161616">Your order were placed in Online Cakes Shop</h2>
            <br/>
                   
            <div>
                <p style="font-size: 16px; color: #161616">
                    Total sum is ${createdOrder.totalSum}
                    <br/>
                    That will be delivered to the following address: ${createdOrder.address} 
                    <br/>
                    <br/>
                    <br/>
                    To make a new order please follow the link below:
                </p>
                    <div>
                        <a href='${link}'
                           style="background-color: #c29f79; color: #161616; border: 0; 
                           padding: 10px 20px; border-radius: 8px; font-size: 24px; margin: 15px;
                           text-decoration: none; 
                           "
                        >Go to shoping</a>
                    </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div>
                <img style="width: 600px" src='${IMG_LINK}' alt="Cake-image">
            </div>
        </div>
       `

        return await emailAdapter.sendEmail(createdOrder.email, subject, message)
    }
}

export const emailManagers = new EmailManagers()