import React, { useReducer, useContext, createContext } from 'react';
import TotoStore from 'TotoStore';

const Todo = () => {
    const [todoItems, dispatch] = useReducer
    const TotoContext = React.createContext();
    return (
        <section>
            <TodoStore>
                
            </TodoStore>    
        </section>
    )
}

export default Todo;