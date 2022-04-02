import React, {useContext} from 'react';
import {TodoContext} from '../../contexts/TodoContext';
import {stringToBoolean} from '../../helpers/StringHelpers';
import {useAlert} from 'react-alert';
import {jsonPatch, jsonDelete} from '../../helpers/Ajax';

function TodoList(){

    const [todoStore, todoDispatch] = useContext(TodoContext);
    const alert = useAlert();

    async function handleUpdateCompleted(evt){
        const resp = await jsonPatch(`todos/${evt.target.value}`, {completed: evt.target.checked});
        if(resp.success) {
            const msg = stringToBoolean(resp.todo.completed)? "Todo Completed": "Todo Marked as Incomplete";
            alert.show(msg, {timeout: 3000});
            todoDispatch({type: 'TodoUpdated', payload: resp.todo})
        }
        return resp;
    }

    async function handleDeleteTodo(evt) {
        if(window.confirm("Are you sure you want to delete this Todo? This cannot be undone.")) {
            const id = evt.target.dataset.id;
            const resp = await jsonDelete(`todos/${id}`);
            if(resp.success) {
                alert.show("Todo Deleted", {timeout: 3000});
                todoDispatch({type: "TodoDeleted", payload:id})
            }
        }
    }

    const todoList = todoStore.todos.map((todo, index) => {
        return (
            <li key={index}>
                <input type="checkbox" value={todo.id} checked={stringToBoolean(todo.completed)} onChange={handleUpdateCompleted} />
                {todo.name}
                <span className="trash-button" onClick={handleDeleteTodo} data-id={todo.id} role="button" aria-label="Trash Can">
                🗑️
                </span>
            </li>
        )
    })

    return (
        <div className="poster flex-grow-4">
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
}

export default TodoList;