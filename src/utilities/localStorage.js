
const findStorageItems = () => {
    let values = {};
    const findValues = localStorage.getItem("ordered-list");
    if (findValues) {
        values = JSON.parse(findValues);
    }
    return values;
}
const addToLocalStorage = (id) => {
    const values = findStorageItems();

    let quantity = values[id];
    if (quantity) {
        values[id] = quantity + 1;
    }
    else {
        values[id] = 1;
    }
    localStorage.setItem('ordered-list', JSON.stringify(values))
}

const removeFromCart = id => {
    const storageItems = findStorageItems()
    if (id in storageItems) {
        delete storageItems[id]
        localStorage.setItem('ordered-list', JSON.stringify(storageItems))
    }
}

const deleteAllCart = () => {
    localStorage.removeItem('ordered-list')
}
export {
    findStorageItems,
    addToLocalStorage,
    deleteAllCart,
    removeFromCart
}