import { Button } from './Button.jsx';

export function ListItem(props) {
    const {id, handleUpdateItem, text, checked} = props;
    const name = `checked_${Math.random()}`;
    const handleRemove = () => {
        const currentItems = JSON.parse(localStorage.getItem('todos'));
        const newItems = currentItems.filter(item => item.id !== id);
        localStorage.setItem('todos', JSON.stringify(newItems));
        handleUpdateItem(newItems);
    }

    return (
        <li className="list_component flex justify-between justify-content-center">
            <div>
                <input id={name} className="form-check-input " type="checkbox"/>
                <label
                    htmlFor={name}
                    className="list_component_text m-4"
                >
                    {text}
                </label>
            </div>
            <Button className="btn-secondary bg-[#313c4d] hover:opacity-75 text-white border-1 border-solid border-white rounded-lg px-2 mb-4"
                style={{textDecoration: checked ? 'line-through' : 'initial'}}
                    onClick={handleRemove} >Remove
            </Button>
        </li>
    )
}