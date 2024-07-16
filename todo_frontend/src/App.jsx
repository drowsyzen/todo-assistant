import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, DetailTodo } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // loader: rootLoader,
    },
    {
        path: "todo",
        element: <DetailTodo />,
        // loader: teamLoader,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
