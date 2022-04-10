import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    // const [error, setError] = useState('')

    // const navigate = useNavigate();

    const email = user?.email;

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handleNumberBlur = event => {
        setNumber(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        // setError('')
        const shipping = { name, email, address, number }
        console.log(shipping)
    }

    return (
        <div className='form-container'>
            <section>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Full Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={email} readOnly type="email" name="email" id="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Shipping Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Contact Number</label>
                        <input onBlur={handleNumberBlur} type="text" name="number" id="number" required />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
            </section>
        </div>
    );
};

export default Shipment;