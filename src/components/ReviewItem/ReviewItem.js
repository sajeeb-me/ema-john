import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ item, handleRemoveItem }) => {
    const { name, img, price, shipping, quantity } = item
    return (
        <div className='review-item'>
            <div className="item-img">
                <img src={img} alt="" />
            </div>
            <div className="item-details">
                <div className="item-info">
                    <h3>{name}</h3>
                    <p>Price: <span style={{ color: 'orangered' }}>${price}</span></p>
                    <p><small>Shipping Charge: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div>
                    <button onClick={() => handleRemoveItem(item)} className="delete">
                        <FontAwesomeIcon className='icon-dlt' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;