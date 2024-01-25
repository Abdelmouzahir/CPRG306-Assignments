import ItemList from "./item-list";

export default function Page() {
    return (
      <main>
         <h1 className="font-bold text-4xl text-yellow-500">Shopping List</h1>
         <ItemList />
      </main>
    );
  }