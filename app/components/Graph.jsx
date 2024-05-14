"use client";

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Graph = () => {
  const todos = useSelector((state) => state.todos.todos);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  const completionPercentage = totalTasks
    ? (completedTasks / totalTasks) * 100
    : 0;

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sample Dataset",
          backgroundColor: "rgba(75,192,192,1)",
          borderRadius: 2,
          barThickness: 14,
          data: [10, 10, 20, 100, 40, 50, completionPercentage],
        },
      ],
    });
  }, [completionPercentage]);

  return (
    <div className="w-full m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} />
    </div>
  );
};

export default Graph;
