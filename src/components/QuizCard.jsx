import React from 'react';

export const QuizCard = ({ quiz }) => {
    const { name, logo, total, id } = quiz
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
            <img
                src={logo}
                className=" bg-sky-100 p-6 object-cover w-full h-80"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <div className='flex justify-around'>
                    <p className="inline-block mb-3 text-2xl font-bold leading-5 text-gray-700 ">
                        {name}
                    </p>
                    <p className="mb-2 font-semibold text-red-700">
                        Total Quiz :{total}
                    </p>
                </div>
                <button
                    type='button'
                    className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-green-200 text-gray-800 hover:bg-green-400'
                >
                    Start QuiZ
                </button>
            </div>
        </div>
    );
};

export default QuizCard;