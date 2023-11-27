// src/App.js
import React, { useState } from 'react';
import {Button, Input} from 'antd'
import '../TodoList/TodoList.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task.trim() !== '') {
        const newTodo = { task, completed: false };
        setTodos([...todos, newTodo]);
        setTask('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    };

    const countCompletedTasks = () => {
        return todos.filter((todo) => todo.completed).length;
    };

    return (
        <div className="App">
        <h1>Todo List</h1>
        <div className="form-container">
            <Input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            style={{width: '50%', height: 'auto'}}
            />
            <Button style={{marginLeft: '10px'}} type='primary' onClick={addTodo}>Add</Button>
        </div>
        {todos.length > 0 ? (
            <table className="todo-table">
            <thead>
                <tr>
                <th>List</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                <tr key={index} className={todo.completed ? 'completed' : ''}>
                    <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.task}
                    </td>
                    <td>
                    <Button type='primary' danger onClick={() => removeTodo(index)}>Remove</Button>
                    <Button type='primary' style={{marginLeft: '10px'}} onClick={() => completeTodo(index)}>Complete</Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p>No tasks available</p>
        )}
        <p style={{textAlign: "center"}}>Total completed tasks: {countCompletedTasks()}</p>
        </div>
    );
};

export default App;
