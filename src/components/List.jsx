import { ListItem } from "./ListItem.jsx";

export function List(props) {
    const {items, handleUpdateItem} = props;
    return (
        <>
            <ul className="list">
                {items.length === 0 && 'not found'}
                {items.map(item => (
                    <ListItem
                        handleUpdateItem={handleUpdateItem}
                        key={item.id}
                        id={item.id}
                        text={item.text}
                    />
                ))}
            </ul>
        </>
    )
}