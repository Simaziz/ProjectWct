import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GoalProgressChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // X-axis labels
        datasets: [
          {
            label: "Workout",
            data: [30, 50, 70, 60, 40, 30, 50], // Workout progress data
            backgroundColor: "#38bdf8", // Tailwind's sky-500
          },
          {
            label: "Calories",
            data: [50, 40, 60, 80, 70, 50, 60], // Calories progress data
            backgroundColor: "#f97316", // Tailwind's orange-500
          },
          {
            label: "Steps",
            data: [40, 60, 80, 50, 60, 70, 80], // Steps progress data
            backgroundColor: "#a78bfa", // Tailwind's violet-400
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`,
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className=" flex items-center w-[800px] h-80">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default GoalProgressChart;
