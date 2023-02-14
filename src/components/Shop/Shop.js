import React, {useEffect, useState} from 'react';
import Product from "../Product/Product";
import './Shop.css';



const Shop = () => {
    const [products,setProducts] =useState([]);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))

    },[])
    const handleAddToCart= (product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    // random cookies generator

    function randomString(length = 50) {
        return [...Array(length + 10)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('').substring(0, length);
    };
    let x = randomString();
    // if(!document.cookie.includes('randomCookie')){
    //     document.cookie=`randomCookie=${x}`;
    // }
    // console.log(document.cookie);
    // console.log(typeof 'document.cookie');
    if(!document.cookie.includes('randomCookie')){

        document.cookie=`randomCookie=${x}`;

    }
    console.log(document.cookie);
    console.log(typeof 'document.cookie');
    // console.log(x);



    return (
        <div>
            {/*<h1>This is Shop</h1>*/}
            <div className='shop-container'>

                <div className="products-container">
                    {
                        products.map(product=> <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product> )
                    }



                </div>
                <div className="cart-container">
                    <h4>Order Summary</h4>
                    <p>Quantity: {cart.length}</p>
                </div>



            </div>
        </div>
    );
};

export default Shop;