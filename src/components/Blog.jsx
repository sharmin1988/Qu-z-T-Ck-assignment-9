import React from 'react';

export const Blog = () => {
    return (
        <div>
            {/* 1st question */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="bg-pink-100 p-8 rounded shadow-xl sm:p-16">

                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                What is the purpose of
                                <span className="inline-block text-purple-700">
                                    React Router?
                                </span>
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd question */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="bg-pink-100 p-8 rounded shadow-xl sm:p-16">

                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                How does <span className="inline-block text-purple-700">
                                    Context API
                                </span> works?
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                <strong>Context API</strong> introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props / props-drilling. Context is also touted as an easier, lighter approach to state management using Redux.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd question */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="bg-pink-100 p-8 rounded shadow-xl sm:p-16">

                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                What is  <span className="inline-block text-purple-700">
                                    useRef
                                </span> hook & how does it works?
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                The <strong>useRef</strong> allows you to persist values between renders.
                                It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;