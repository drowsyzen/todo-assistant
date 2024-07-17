import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, DetailTodo } from "./pages";
import ErrorPage from "./pages/ErrorPage";

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
    {
        path: "error",
        element: <ErrorPage />,
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
