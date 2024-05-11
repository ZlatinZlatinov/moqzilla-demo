import SingleItem from "./SingleItem";

export default function ItemsComponent({ items, deleteItem }) {
    return (
        <ul className="items">
            {items[0] ? items.map(i => <SingleItem key={i.id} item={i} deleteItem={deleteItem} />)
                : <li>No items yet</li>}
        </ul>
    );
}