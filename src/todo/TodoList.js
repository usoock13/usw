import React, { useContext } from 'react'
import { TodoContext } from './TodoStore';
import { todoActions } from './TodoStore';
import './TodoList.css';

const TodoList = () => {
    const { todoItems, dispatch } = useContext(TodoContext);
    const items = todoItems.map(item => {
        return (
            <li data-id={item.id} className="todo-todoitem" key={item.id}>
                <h5 className="todo-togoitem-title">{item.title}</h5>
                <p className="todo-todoitem-description">{item.description}</p>
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
