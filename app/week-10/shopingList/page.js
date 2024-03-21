"use client"
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from './item-list'
import NewItem from './new-item'
import MealIdeas from './meal-ideas';
import {getItems, addItem} from '../_services/shopping-list-service';

export default function Page() {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); 

	const [itemList, setItemList] = useState(itemsData);
	const [selectedItemName, setSelectedItemName] = useState(null);

	const loadItems = async () => {
        if (user) {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        try {
            const newItemId = await addItem(user.uid, newItem);
            setItemList(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

	function handleItemSelect(item) {
		console.log("handleItemSelect called");
		console.log("Received item:", item);
		console.log("Received item name:", item.name);

		const cleanedName = item.name.replace(/(,.*|🍛|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼)/g, '').trim();
		
		console.log("cleanedName:", cleanedName)

		setSelectedItemName(cleanedName);
	}

    return (
		<main className="bg-gray-350 my-3 flex flex-col md:flex-row">
		  <div className="md:w-1/2 p-4">
				<h1 className="text-3xl font-bold mb-4">My Shopping List</h1>
				<NewItem onAddItem={e => handleAddItem(e)}></NewItem>
				<ItemList items={itemList} onItemSelect={(item) => handleItemSelect(item)} />
		  </div>
		  <div className="md:w-1/2 p-4">										
				<MealIdeas ingredient= {selectedItemName}/>		      
		 </div>	
		</main>
    )
}