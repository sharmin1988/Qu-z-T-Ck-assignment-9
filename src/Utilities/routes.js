import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Charts from "../components/Charts";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../components/Main";
import QuizDetails from "../components/QuizDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: async  () => {
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
            {
                path: '/quiz/:quizId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizDetails></QuizDetails>
            },
            {
                path: '/home/quiz/:quizId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizDetails></QuizDetails>
            },
        ]
    }
])
export default router