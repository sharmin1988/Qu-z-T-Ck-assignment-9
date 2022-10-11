import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { QuizzesContext } from './Main';
import QuizCard from './QuizCard';

export const Home = () => {
    const quizzes = useContext(QuizzesContext)
    const {data} = quizzes

    // console.log(data)
    return (
        <div className=" bg-yellow-50 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            
            {/* title section */}
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1665418271~exp=1665418871~hmac=f0e601f559d519054968fb0030b05e375ac028ad383275e84dd34cb55d617f0a"
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">

                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        Welcome To Qu!z TiCk
                    </h5>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">Lorem ipsum</span> dolor sit amet,
                        consectetur adipiscing elit. Etiam sem neque, molestie sit amet
                        venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
                        sed consequat odio sollicitudin.
                    </p>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </button>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-900"
                        >
                            Learn More
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        {/* Card Section */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {data.map(quiz => <QuizCard
                    key = {quiz.id}
                    quiz = {quiz}
                    ></QuizCard>)}
                </div>
            </div>
        </div>
    );
};

export default Home;