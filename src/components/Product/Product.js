import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
const {name,img,seller,price,rating}=product;
// console.log(props)

    return (
        <div className='product'>
        <div className='product-info'>
            <img src={img} alt="shoe"/>
            <p>{name}</p>
        </div>
            <button  onClick={() => handleAddToCart(product)}> <p>Add to Cart</p> </button>

        </div>
    );
};

export default Product;