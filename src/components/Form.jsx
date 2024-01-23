import { v4 as uuidv4 } from "uuid";
import {Button} from "./Button.jsx";
export function Form(props) {
    const { disabled, handleUpdateItem } = props;
    const onSubmit = (event) => {
        if (disabled) {
            alert('is Disabled')
        } else {
            event.preventDefault();
            const formElement = event.target;
            const todoText = new FormData(formElement).get('inputTodo');
            const todoItem = {
                id: uuidv4(),
                checked: false,
                text: todoText
            };
            const todos = localStorage.getItem('todos');
            const newItems = todos === null ? [todoItem] : [...JSON.parse(todos), todoItem];
            localStorage.setItem('todos', JSON.stringify(newItems));
            handleUpdateItem(newItems)
            formElement.reset();
        }
    };

    return (
        <form action="#" className="form " onSubmit={onSubmit}>
            <input disabled={disabled} name="inputTodo" className="form-control form-control-lg border-2 rounded-lg mr-4 mb-4" type="text" style={{color: 'black'}}/>
            <Button className="btn-primary bg-[#313c4d] hover:opacity-75 text-white rounded-lg px-2 border-1 border-solid border-white">
                <span>Send</span>
            </Button>
        </form>
    )
}