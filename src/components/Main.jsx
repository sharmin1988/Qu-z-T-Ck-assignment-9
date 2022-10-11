import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizzesContext = createContext([])

const Main = () => {
    const quizzes = useLoaderData()
    return (
        <QuizzesContext.Provider value={quizzes}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizzesContext.Provider>
    );
};

export default Main;