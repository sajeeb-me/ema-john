
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

export {
    findStorageItems,
    addToLocalStorage
}