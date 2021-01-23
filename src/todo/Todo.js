import React, { useReducer, useContext, createContext } from 'react';
import TodoStore, { todoReducer } from 'TotoStore';

const Todo = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, []);
    const TodoContext = React.createContext();
    return (
        <section>
            <TodoStore>
                
            </TodoStore>    
        </section>
    )
}

export default Todo;