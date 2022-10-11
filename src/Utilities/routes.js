import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Charts from "../components/Charts";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../components/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')},

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/charts',
                element: <Charts></Charts>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
])
export default router