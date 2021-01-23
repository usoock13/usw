import React, { useReducer, useEffect, createContext } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export const todoActions = {
    addItem : 'ADD_ITEM',
    removeItem : 'REMOVE_ITEM',
    editItem : 'EDIT_ITEM',
    initializeItem : 'INITIALIZE_ITEM'
}

export const todoReducer = (todoItems, action) => {
    switch(action.type) {
        case todoActions.addItem:
            return [...todoItems, action.payload];
    }
}

export const TodoContext = React.createContext();

const TotoStore = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, [
        {
            title: '어항숙',
            description: '어항어항',
        },
        {
            title: '유항숙',
            description: '우아하게에에',
        }
    ]);

    useEffect(() => {
        console.log('a c t !')
    })
    return (
        <TodoContext.Provider value={ { todoItems, dispatch } }>
            <TodoHeader />
            <TodoList />
        </TodoContext.Provider>
    )
}

export default TotoStore;
