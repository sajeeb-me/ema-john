import React, { useEffect, useState } from 'react';
import OrderedList from '../OrderedList/OrderedList';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='product-container'>
            <div className="shop-products">
                {
                    products.map(product => <Products key={product.id} product={product} />)
                }
            </div>
            <div className="order-list">
                <OrderedList />
            </div>
        </div>
    );
};

export default Body;