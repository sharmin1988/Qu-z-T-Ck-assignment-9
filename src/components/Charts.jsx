import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import { QuizzesContext } from './Main';

const Charts = () => {
    const { data } = useContext(QuizzesContext)



    return (
        <div className=" bg-yellow-50 py-16 lg:mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:py-20 text-black">
            <ResponsiveContainer width='90%' height={400}>
                <BarChart width={350} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#82ca" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;