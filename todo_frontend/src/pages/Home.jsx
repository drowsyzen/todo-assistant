import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import ToDoForm from "../components/TodoForm";

export default function TableOne() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/todos/").then((response) => {
            console.log(response.data.data);
            setTodos(response.data.data);
        });
    }, []);

    const [open, setOpen] = useState("");

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
                        onClick={() => setOpen("add")}
                    >
                        Add new Todo
                    </button>
                    <Popup open={open != ""}>
                        <ToDoForm
                            formHeading={
                                open === "add" ? undefined : "Edit To Do"
                            }
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
                                                            setOpen("edit") &
                                                            console.log(todo.id)
                                                        }
                                                    >
                                                        Edit
                                                    </button>

                                                    {/* <Popup
                                                        open={open === "edit"}
                                                    >
                                                        <ToDoForm
                                                            formHeading="Edit To Do"
                                                            formTitle={todo.id}
                                                        />
                                                    </Popup> */}
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
