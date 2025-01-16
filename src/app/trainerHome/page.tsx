"use client";
import Image from 'next/image'
import img1 from 'public/images/picTrainerHome1.png'
// import Line from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
  const data = {
    labels: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Client Stats',
        data: [15, 10, 12, 16, 20, 25, 22, 18, 27, 30, 35],
        fill: false,
        borderColor: '#3b82f6', // Tailwind blue-500
        backgroundColor: '#3b82f6', // Tailwind blue-500
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointBorderColor: '#3b82f6',
        pointRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#d1d5db', // Tailwind gray-300
        },
        grid: {
          color: '#6b7280', // Tailwind gray-500
        },
      },
      y: {
        ticks: {
          color: '#d1d5db', // Tailwind gray-300
        },
        grid: {
          color: '#6b7280', // Tailwind gray-500
        },
        beginAtZero: true,
      },
    },
  };
  

export default function TrainerHome(){
    return(
        <header className='bg-black'>

            <div className="bg-[url('/images/bgTrainer1.png')] bg-cover h-[817px] ">
            <h1 className='flex justify-center items-center text-[5rem] text-white h-full font-bold'>Welcome Back
            </h1>
            </div>
            <div className='bg-black flex justify-center'>
                <div className='bg-[rgb(22,43,70)]  text-[#828B98] flex w-[400px] h-auto justify-between p-[1rem] m-[1rem] rounded-lg'>
                    <div>
                        <p className='text-[14px]'>Next Session at</p>
                        <h1 className='text-[1.5rem] text-white'>08:30 am</h1>
                    </div>
                    <div>
                        <h1 className='text-[1rem] text-white'>Dante Quintana </h1>
                        <p>1 Hour Session</p>
                    </div>
                </div>     
            </div > 
            <div className='flex justify-center'>
            <div className='w-[400px] h-[70px] bg-[#03A3FC] rounded-lg  '>
                <h1 className='text-black text-[1.5rem] text-center '>3 new client requests</h1>
                <p className='text-center'>Don’t keep your potential clients waiting longer!</p>
            </div>
            </div>
          <div className='p-[2rem]'>
          <div className="bg-gray-800 rounded-lg shadow-lg p-[1rem]">
      <h2 className="text-gray-300 text-lg mb-4">Client Stats</h2>
      {/* <Line data={data} options={options} /> */}
    </div>
          </div>
        </header>
    )
}
// TrainerHome.getLayout = (page: React.ReactNode) => <>{page}</>;
