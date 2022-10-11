import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Questions = ({ quizQuestion, questions }) => {
    const { question, options, id, correctAnswer } = quizQuestion

    const handelAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Yea...Correct Answer !!!", { position: 'top-center', autoClose: 2500, });
        }
        else {
            toast.error("Wrong Answer !!!", { position: 'top-center', autoClose: 2500, });
        }
    }
    return (
        <div className=" bg-white flex flex-col lg:w-3/4 mx-auto justify-between p-5 border rounded shadow-sm">
            <div className='lg:flex items-center'>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <h6 className="mb-2 font-semibold leading-5">Quiz : {questions.indexOf(quizQuestion) + 1}</h6>
                </div>
                <p className="mb-3 ml-10 text-sm">
                    {question}
                </p>
            </div>
            
            {/* Quiz Options */}
            <div className="grid gap-4  sm:grid-cols-1 ">
                {
                    options.map(option =>
                        <div>
                            <div onClick={() => handelAnswer(option)} className=" bg-lime-100 flex flex-col sm:w-3/4 sm:mx-auto justify-between p-5 border rounded shadow-sm  hover:bg-lime-200">
                                <div className='lg:flex items-center'>
                                    <h6 className="mb-2 font-semibold leading-5">{options.indexOf(option) + 1}.</h6>
                                    <p id='text' className="mb-3 font-semibold ml-10 text-sm text-gray-900">
                                        {option}
                                    </p>
                                </div>
                            </div>
                            <ToastContainer />
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Questions;