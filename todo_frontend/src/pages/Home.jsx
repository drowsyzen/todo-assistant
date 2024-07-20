import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ToDoForm from "../components/TodoForm";

export default function TableOne() {
    const [todos, setTodos] = useState([]);

    const getTodos = () => {
        axios.get("http://localhost:8000/api/todos/").then((response) => {
            console.log(response.data.data);
            setTodos(response.data.data);
        });
    };
    const [page, setPage] = useState("Home");
    const [selectedTodo, setSelectedTodo] = useState({});

    useEffect(() => {
        getTodos();
    }, [page == "Home"]);

    const closePopup = () => {
        setPage("Home");
    };

    const deleteTodo = (e) => {
        console.log("in delete todo");
        if (window.confirm("are you sure you want to delete!")) {
            axios
                .delete(`http://localhost:8000/api/todos/${e.target.value}`)
                .then((response) => {
                    console.log(response.data);
                });
        }
        setPage("Home");
    };

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">To-Do List</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all Todos. You can add new Todo,
                            edit or delete existing ones.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        // onClick={(e) => addTodo(e)}
                        onClick={() => setPage("add")}
                    >
                        Add new Todo
                    </button>
                    <Popup open={page == "add" || page == "edit"}>
                        <ToDoForm
                            formHeading={
                                page === "add" ? undefined : "Edit To Do"
                            }
                            formTitle={
                                page === "add" ? undefined : selectedTodo.title
                            }
                            formDescription={
                                page === "add"
                                    ? undefined
                                    : selectedTodo.description
                            }
                            completeFlag={
                                page === "add"
                                    ? undefined
                                    : selectedTodo.completeFlag
                            }
                            page={page}
                            id={selectedTodo.id}
                            onClose={closePopup}
                        />
                    </Popup>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-center text-sm font-normal text-gray-700"
                                            >
                                                Title
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                                            >
                                                Description
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {todos.map((todo) => (
                                            <tr key={todo.id}>
                                                <td className="whitespace-nowrap text-center px-4 py-4">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {todo.title}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap text-center px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">
                                                        {todo.description}
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap text-center px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        {todo.completed
                                                            ? "Completed"
                                                            : "In-Complete"}
                                                    </span>
                                                </td>

                                                <td className="whitespace-nowrap text-center px-4 py-4 text-sm font-medium">
                                                    {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"> */}
                                                    {/* <button class="bg-gray-400 hover:bg-gray-300 text-white hover:text-teal-800 font-bold py-2 px-4 rounded-full"> */}
                                                    <button
                                                        className="bg-gray-400 hover:bg-gray-300 text-white hover:text-teal-800 font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 transform hover:-translate-y-1"
                                                        onClick={() =>
                                                            setPage("edit") &
                                                            setSelectedTodo(
                                                                todos.find(
                                                                    (intodo) =>
                                                                        intodo.id ===
                                                                        todo.id
                                                                )
                                                            ) &
                                                            console.log(todo.id)
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="mx-2 bg-red-400 hover:bg-red-300 text-white hover:text-teal-800 font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 transform hover:-translate-y-1"
                                                        onClick={deleteTodo}
                                                        value={todo.id}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
