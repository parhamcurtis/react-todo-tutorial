import React, {useReducer, createContext, useEffect} from 'react';
import {stringToBoolean} from '../helpers/StringHelpers';

export const TodoContext = createContext();

function reducer(store, action){
    let todos;
    let index;
    switch(action.type){
        case 'AddTodo':
            todos = store.todos;
            todos.push(action.payload)
            return {...store, todos: todos, dirty: true}
        case 'UpdateIncomplete':
            return {...store, incomplete: action.payload, dirty: false}
        case 'setTodos': 
            return {...store, todos: action.payload.todos, total: action.payload.total, dirty: true}
        case 'TodoUpdated':
           index = store.todos.findIndex(todo => todo.id.toString() === action.payload.id.toString())
           todos = store.todos;
           todos.splice(index, 1, action.payload);
           return {...store, todos: todos, dirty: true} 

        case 'TodoDeleted':
            index = store.todos.findIndex(todo => todo.id.toString() === action.payload.toString());
            todos = store.todos;
            todos.splice(index, 1);
            return {...store, todos: todos, dirty: true}
        default:
            return store;
    }
}

export function TodoStore(props) {
    const [store, dispatch] = useReducer(reducer, {total:0, todos:[], incomplete:0, dirty: false});

    useEffect(() => {
        if(!store.dirty) return;
        let incomplete = 0;

        store.todos.forEach(todo => {
            if(!stringToBoolean(todo.completed)) incomplete++;
        })
        dispatch({type:'UpdateIncomplete', payload: incomplete});
    }, [store.todos, store.dirty]);

    return (
        <TodoContext.Provider value={[store, dispatch]}>
            {props.children}
        </TodoContext.Provider>
    );
}