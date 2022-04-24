import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToLocalStorage, findStorageItems } from '../../utilities/localStorage';
import OrderedList from '../OrderedList/OrderedList';
import Products from '../Products/Products';
import './Body.css'

const Body = () => {
    const [items, setItems] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.totalProducts;
                const pages = Math.ceil(count / size);
                setPageCount(pages)
            })
    }, [size])
    const addToCart = (selectedItem) => {
        let newCart = [];
        const exist = items.find(item => item._id === selectedItem._id);
        if (!exist) {
            selectedItem.quantity = 1;
            newCart = [...items, selectedItem]
        }
        else {
            const rest = items.filter(item => item._id !== selectedItem._id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setItems(newCart)
        addToLocalStorage(selectedItem._id)
    }
    return (
        <div className='product-container'>
            <div>
                <div className="shop-products">
                    {
                        products.map(product => <Products key={product._id} product={product} addToCart={addToCart} />)
                    }
                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button key={number} className={number === page ? 'selected' : ''} onClick={() => setPage(number)}>
                                {number + 1}
                            </button>)
                    }
                    <select defaultValue="9" onChange={(e) => setSize(e.target.value)}>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="15">15</option>
                        <option value="21">21</option>
                    </select>
                </div>
            </div>
            <div className="order-list">
                <OrderedList items={items}>
                    <Link to='/orders'><button className='btn-child'>Review Orders</button></Link>
                </OrderedList>
            </div>
        </div>
    );
};

export default Body;