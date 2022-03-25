import React from 'react';
import './Products.css'

const Products = ({ product, addToCart }) => {
    const { img, name, price } = product
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <div className='card-info'>
                <h2 style={{ fontSize: '20px', fontWeight: '500' }}>{name}</h2>
                <p style={{ fontSize: '18px', fontWeight: '400' }}>Price: {price}</p>
                <div className='card-buttons'>
                    <button onClick={() => addToCart(product)} className='add-btn'>Add to Cart</button>
                    <button className='delete-btn'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Products;