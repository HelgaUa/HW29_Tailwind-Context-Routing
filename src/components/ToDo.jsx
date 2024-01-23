import { useEffect, useState } from "react";
import { Form } from "./Form.jsx";
import { List } from "./List.jsx";
import Loading from "./Loading.jsx";

function ToDo() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const currentItems = localStorage.getItem('todos');
            setIsLoading(false);
            setItems(currentItems === null ? [] : JSON.parse(currentItems))
        }, 3000)
        return () => {
        }
    }, []);

    const handleUpdateItem = (newItems) => {
        setItems(newItems);
    }

    return (
        <div>
            <Form disabled={isLoading} handleUpdateItem={handleUpdateItem}/>
            {
                isLoading
                    ? <div className="text-center mt-2"><Loading/></div>
                    : <List handleUpdateItem={handleUpdateItem} items={items}/>
            }
        </div>
    )
}

export default ToDo;
