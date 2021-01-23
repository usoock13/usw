import React, { useContext } from 'react'
import { TodoContext } from './TodoStore';
import { todoActions } from './TodoStore';

const TodoList = () => {
    const { todoItems, dispatch } = useContext(TodoContext);
    const items = todoItems.map(item => {
        return (
            <li className="todo-todoitem">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
            </li>
        )
    })

    console.log(todoItems);
    return (
        <div className="todo-listwrap">
            <ul className="todo-todolist">
                {items}
            </ul>
        </div>
    )
}

export default TodoList
