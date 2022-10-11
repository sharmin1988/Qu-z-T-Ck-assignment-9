import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Charts from "../components/Charts";
import Home from "../components/Home";
import Main from "../components/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

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