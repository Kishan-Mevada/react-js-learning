import { useState } from 'react';
const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemQty, setItemQty] = useState('');

    const addItem = e => {
        e.preventDefault();

        if(!itemName || !itemQty) return;

        setItems([...items, {name: itemName, qty: parseInt(itemQty)}]);

    }

    return (
        <div>
            <form onSubmit={addItem}>
                <div>
                    <label>Item Name: </label>
                    <input type='text'
                           placeholder='Item Name'
                           value={itemName}
                           onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Item Quantity: </label>
                    <input type='text'
                           placeholder='Item Quantity'
                           value={itemQty}
                           onChange={(e) => setItemQty(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Add Item</button>
                </div>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        Name: {item.name}, Quantity: {item.qty}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ShoppingList;