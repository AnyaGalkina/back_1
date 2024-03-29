const products = [
    {
        'productId': '0',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake1.png',
        'pricePerUnit': 5,
        'productName': 'BERRY PIE',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    },
    {
        'productId': '1',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake2.png',
        'pricePerUnit': 30,
        'productName': 'CREAM CAKE',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    },
    {
        'productId': '2',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake3.png',
        'pricePerUnit': 27,
        'productName': 'FRUIT BOWL',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    },
    {
        'productId': '3',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake4.png',
        'pricePerUnit': 20,
        'productName': 'CHOCO ROLLS',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    },
    {
        'productId': '4',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake5.jpg',
        'pricePerUnit': 25,
        'productName': 'FRUIT CAKE',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    },
    {
        'productId': '5',
        'imgSrc': 'https://anyagalkina.github.io/shop/products/cake7.jpg',
        'pricePerUnit': 55,
        'productName': 'ASSORTMENT CAKES',
        'productDescription': 'Sed non mauris vitae erat consequat auctor. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin nec sagitis sem nibh id elit vulputate cursus a sit amet mauris.'
    }
];

type ProductType = {
    productId: string;
    pricePerUnit: number;
    imgSrc: string;
    productName: string;
    productDescription: string;
}


export const productsRepository = {
    async findProducts(productName: string | null): Promise<ProductType[]> {
        if (productName) {
            // let searchString = productName.toString();
            const filteredProducts = products.filter(product => product.productName.indexOf(productName) > -1);
            return filteredProducts;
        } else {
            return products;
        }
    }
};