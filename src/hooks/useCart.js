import { useEffect, useState } from "react"
import { findStorageItems } from "../utilities/localStorage";

const useCart = (products) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const storageItem = findStorageItems();
        const addNewCart = [];
        for (const id in storageItem) {
            const addededProduct = products.find(product => product.id === id);
            if (addededProduct) {
                addededProduct.quantity = storageItem[id];
                addNewCart.push(addededProduct);
            }
        }
        setItems(addNewCart);
    }, [products])
    return [items, setItems];
}
export default useCart;