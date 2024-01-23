import { useEffect, useState } from "react";
import { Form } from "../components/Form.jsx";
import { List } from "../components/List.jsx";
import Loading from "../components/Loading.jsx";
import { useContext } from "react";
import ThemeContext from "../helpers/context.js";

function Todo() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [color] = useContext(ThemeContext);

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
        <div id='todo' className='p-7 flex-grow' style={{backgroundColor: color.bgColor, color: color.textColor}}>
            <h2 className='text-lg uppercase font-bold mb-5 border-b-2' >ToDo-list</h2>
            <Form disabled={isLoading} handleUpdateItem={handleUpdateItem}/>
            {
                isLoading
                    ? <div className="text-center mt-2"><Loading/></div>
                    : <List handleUpdateItem={handleUpdateItem} items={items}/>
            }
        </div>
    )
}

export default Todo;
