"use client"
import { useState } from 'react';
import { useEffect } from "react";
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
	const [itemList, setItemList] = useState(itemsData);
	const [selectedItemName, setSelectedItemName] = useState(null);

	function handleAddItem (newItem) {
		setItemList([...itemList, newItem]);
	}

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