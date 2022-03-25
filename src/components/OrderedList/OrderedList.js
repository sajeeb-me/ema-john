import React from 'react';
import './OrderedList.css'

const OrderedList = ({ items }) => {
    console.log(items)
    let quantity = 0;
    let totalCost = 0;
    let shippingCarge = 0;
    items.forEach(item => {
        quantity = quantity + item.quantity;
        totalCost = totalCost + item.price * item.quantity;
        shippingCarge = shippingCarge + item.shipping;
    })
    const tax = parseFloat((totalCost * 0.1).toFixed(2))
    const grandTotal = totalCost + shippingCarge + tax;
    return (
        <div className='ordered-list'>
            <h2>Ordered List</h2>
            <p>Selected Items: {quantity} </p>
            <p>Total Cost: ${totalCost}</p>
            <p>Shipping Charge: ${shippingCarge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <div>
                <button>Delete Cart</button>
            </div>
        </div>
    );
};

export default OrderedList;