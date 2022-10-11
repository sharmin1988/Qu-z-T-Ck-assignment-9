import React from 'react';
import { Link } from 'react-router-dom';

export const QuizCard = ({ quiz }) => {
    const { name, logo, total, id } = quiz
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
            <img
                src={logo}
                className=" bg-pink-100 p-6 object-cover w-full h-80"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <div className='flex justify-around'>
                    <p className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-700 ">
                        {name}
                    </p>
                    <p className="mb-2 font-semibold text-red-700">
                        <small>Total Quiz :{total}</small>
                    </p>
                </div>
                <Link to={`quiz/${id}`}>
                    <button
                        type='button'
                        className='px-8 block w-full mt-4 py-3 font-semibold rounded-lg text-white bg-purple-500 hover:bg-purple-700'>
                        Start QuiZ
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default QuizCard;