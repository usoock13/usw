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
        case todoActions.initializeItem:
            return action.payload;
    }
}

export const TodoContext = React.createContext();

const tempItems = require('./tempItem.json');

const TotoStore = () => {
    const [todoItems, dispatch] = useReducer(todoReducer, []);

    const TodoInitialize = () => {
        dispatch({ type: todoActions.initializeItem, payload: tempItems });
    }

    useEffect(() => {
        TodoInitialize();
    }, [])
    return (
        <TodoContext.Provider value={ { todoItems, dispatch } }>
            <TodoHeader />
            <TodoList />
        </TodoContext.Provider>
    )
}

export default TotoStore;