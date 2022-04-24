import { useEffect, useState } from "react"
import { findStorageItems } from "../utilities/localStorage";

const useCart = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const storageItem = findStorageItems();
        const addNewCart = [];
        const keys = Object.keys(storageItem)
        console.log(keys)
        fetch('http://localhost:5000/productByKeys', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products)
                for (const id in storageItem) {
                    const addededProduct = products.find(product => product._id === id);
                    if (addededProduct) {
                        addededProduct.quantity = storageItem[id];
                        addNewCart.push(addededProduct);
                    }
                }
                setItems(addNewCart);
            })
    }, [])
    return [items, setItems];
}
export default useCart;