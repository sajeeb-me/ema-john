import React from 'react';
import './Orders.css'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import OrderedList from '../OrderedList/OrderedList';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromCart } from '../../utilities/localStorage';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [products] = useProducts();
    const [items, setItems] = useCart();

    const handleRemoveItem = selectedItem => {
        const rest = items.filter(item => item._id !== selectedItem._id)
        setItems(rest)
        removeFromCart(selectedItem._id)
    }
    return (
        <div className='product-container'>
            <div className="review-items-products">
                {
                    items.map(item => <ReviewItem key={item._id} item={item} handleRemoveItem={handleRemoveItem} />)
                }
            </div>
            <div className="order-list">
                <OrderedList items={items}>
                    <Link to='/shipment'><button className='btn-child'>Proceed to Checkout</button></Link>
                </OrderedList>
            </div>
        </div>
    );
};

export default Orders;