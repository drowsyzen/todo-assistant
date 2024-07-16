import React, { useState } from "react";

function Home() {
    //     return <div>Home</div>;
    // }

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo.trim()]);
            setNewTodo("");
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white rounded shadow p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    To-Do List
                </h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Add a new task"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        className="mt-2 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between bg-gray-200 p-2 my-2 rounded"
                        >
                            <span>{todo}</span>
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                onClick={() => deleteTodo(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
