import React, { useEffect, useState } from 'react';
import { addToLocalStorage, findStorageItems } from '../../utilities/localStorage';
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
    const [items, setItems] = useState([]);
    const addToCart = (selectedItem) => {
        let newCart = [];
        const exist = items.find(item => item.id === selectedItem.id);
        if (!exist) {
            selectedItem.quantity = 1;
            newCart = [...items, selectedItem]
        }
        else {
            const rest = items.filter(item => item.id !== selectedItem.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setItems(newCart)
        addToLocalStorage(selectedItem.id)
    }
    useEffect(() => {
        const storageItem = findStorageItems();
        const addNewCart = [];
        for (const id in storageItem) {
            const addededProduct = products.find(product => product.id === id)
            if (addededProduct) {
                addededProduct.quantity = storageItem[id]
                addNewCart.push(addededProduct)
            }
        }
        setItems(addNewCart)
    }, [products])
    return (
        <div className='product-container'>
            <div className="shop-products">
                {
                    products.map(product => <Products key={product.id} product={product} addToCart={addToCart} />)
                }
            </div>
            <div className="order-list">
                <OrderedList items={items} />
            </div>
        </div>
    );
};

export default Body;