import React from "react";
import { age_population_data } from "../../data/age_population_data";
import { Line } from "react-chartjs-2";

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 2,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: "false",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tooltip: {
      enabled: true,
      poision: "nearest",
      intersect: false,
    },
  },
};

const labels = Array.from({ length: 81 }, (_, index) => index);

const modifiedData = age_population_data.map((item) => {
  return {
    age: item.age,
    population: item.population,
  };
});

export const dataset = {
  labels,
  datasets: [
    {
      fill: true,
      label: "population",
      data: modifiedData.map((item) => {
        return item.population;
      }),
      borderColor: "#333",
      backgroundColor: "rgba(97, 63, 194, 0.5)",
    },
  ],
};

const LineGraph = () => {
  return (
    <div className="line_graph">
      <Line options={options} data={dataset} />
    </div>
  );
};

export default LineGraph;
