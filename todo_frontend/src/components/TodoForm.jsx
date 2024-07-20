import React, { useState, useEffect } from "react";
import axios from "axios";

const ToDoForm = ({
    formTitle = "",
    formDescription = "",
    completeFlag = false,
    formHeading = "Add New To-Do",
    onClose = () => {},
    page = "",
    id = undefined
}) => {
    const [title, setTitle] = useState(formTitle);
    const [description, setDescription] = useState(formDescription);
    const [isComplete, setIsComplete] = useState(completeFlag);

    const toggleComplete = () => {
        // toggle complete button here
        setIsComplete(!isComplete);
    };

    const handleSave = (page) => {
        // Handle the save logic here
        axios
            .post(
                page === ""
                    ? "http://localhost:8000/api/todos/"
                    : `http://localhost:8000/api/todos/${id}`,
                {
                    title: title,
                    description: description,
                    completed: isComplete,
                }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log({
            title,
            description,
            isComplete,
        });
        onClose();
    };
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (event.key === "Escape") {
                console.log("Escape key pressed");
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscKeyPress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleEscKeyPress);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="bg-white rounded shadow p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    {formHeading}
                </h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Status
                    </label>
                    <div className="relative inline-block w-40 h-10 align-middle select-none transition duration-200 ease-in">
                        <div
                            onClick={toggleComplete}
                            className={`toggle-switch relative block w-full h-full rounded-full cursor-pointer ${
                                isComplete ? "bg-green-500" : "bg-gray-300"
                            }`}
                        >
                            <div
                                className={`absolute w-1/2 h-full bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                                    isComplete ? "translate-x-full" : ""
                                } flex items-center justify-center`}
                            >
                                <span className="block w-full text-center text-xs font-bold text-gray-700 uppercase">
                                    {isComplete ? "Complete" : "Incomplete"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    onClick={handleSave}
                >
                    Save
                </button>
                <button
                    id="closebtn"
                    className="mt-3 w-full bg-transparent hover:bg-red-500 flex-auto text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    type="button"
                    onClick={onClose}
                >
                    close
                </button>
            </div>
        </div>
    );
};

export default ToDoForm;
