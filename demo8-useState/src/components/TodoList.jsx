import {useState} from "react";

const TodoList = () => {

    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');

    const addTodo = e => {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <label>Todo: </label>
                <input type='text' style={{width: '300px'}}
                       value={todo}
                       placeholder='Add To Do'
                       onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit'>Add ToDo</button>
            </form>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;