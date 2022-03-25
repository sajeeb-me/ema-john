import React from 'react';
import { deleteAllCart } from '../../utilities/localStorage';
import './OrderedList.css'

const OrderedList = ({ items }) => {
    let quantity = 0;
    let totalCost = 0;
    let shippingCharge = 0;
    items.forEach(item => {
        quantity = quantity + item.quantity;
        totalCost = totalCost + item.price * item.quantity;
        shippingCharge = shippingCharge + item.shipping;
    })
    const tax = parseFloat((totalCost * 0.1).toFixed(2))
    const grandTotal = totalCost + shippingCharge + tax;
    const deleteCart = () => {
        deleteAllCart()
    }
    return (
        <div className='ordered-list'>
            <h2>Ordered List</h2>
            <p>Selected Items: {quantity} </p>
            <p>Total Cost: ${totalCost}</p>
            <p>Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <div>
                <button onClick={() => deleteCart()}>Delete Cart</button>
            </div>
        </div>
    );
};

export default OrderedList;