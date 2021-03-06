import React, {useState, useEffect} from 'react'
import Items from '../Items';


function ManageItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []) 

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setItems(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteItem = async (itemId) => {
        try {
            await fetch('http://localhost:5000/products/' + itemId, {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchItems();
    }

    return (
        <div>
            <h1>Manage items</h1> 
            
                <Items 
                items={items} 
                deleteItem={deleteItem}
                pageId="ManageItems"
            />
        </div>
    )
}

export default ManageItems