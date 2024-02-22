const products = [
    {
        id: '1',
        name: 'Ella Es Tan Cargosa - Ella Es Tan Cargosa',
        price: 1500,
        category: 'rock',
        img: 'https://i.ytimg.com/vi/0inujjmc9H8/sddefault.jpg',
        stock: 100,
        description: 'Tocka Discos - 2007'
    },
    {
        id: '2',
        name: 'Boz Scaggs - Anthology',
        price: 3000,
        category: 'rock',
        img: 'https://m.media-amazon.com/images/I/81o7Flg1GML._UF1000,1000_QL80_.jpg',
        stock: 100,
        description: 'Columbia Legacy 1997'
    },
    {
        id: '3',
        name: 'Masayoshi Takanaka - An Insatiable High',
        price: 3500,
        category: 'jazz',
        img: 'https://i.ytimg.com/vi/RPaRjRqcyiU/sddefault.jpg',
        stock: 100,
        description: 'Kitty 1977'
    },
    {
        id: '4',
        name: 'The Doobie Brothers - Toulouse Street',
        price: 2000,
        category: 'country',
        img: 'https://i.ebayimg.com/images/g/QHIAAOSwuClghuho/s-l640.jpg',
        stock: 100,
        description: 'Warner Bros 1972'
    },
    {
        id: '5',
        name: 'Rod Stewart - Still the Same... Great Rock Classics of Our Time',
        price: 2500,
        category: 'rock',
        img: 'https://http2.mlstatic.com/D_NQ_NP_784411-MLA40025117844_122019-O.webp',
        stock: 100,
        description: 'J Records 2006'
    },
    {
        id: '6',
        name: 'Jamiroquai - Travelling Without Moving',
        price: 3000,
        category: 'fusion',
        img: 'https://m.media-amazon.com/images/I/81lIh3EiXaL._UF1000,1000_QL80_.jpg',
        stock: 100,
        description: 'Sony 1996'
    },
    {
        id: '7',
        name: 'Steely Dan - Aja',
        price: 5000,
        category: 'fusion',
        img: 'https://i.scdn.co/image/ab67616d0000b273cf39e4261576717ff4737bb6',
        stock: 20,
        description: 'ABC 1977'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1000)
    })
}