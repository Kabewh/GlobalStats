import React, { useEffect, useState } from "react";
import "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LOCALHOST = "http://localhost:8000/";

ChartJS.register(
  ArcElement,
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const PieChart = () => {
  const countries = [
    "India",
    "Japan",
    "Mexico",
    "Brazil",
    "Bangladesh",
    "Nigeria",
    "Indonesia",
    "Pakistan",
    "China",
  ];

  const [birthsWorld, setBirthsWorld] = useState([]);
  const [estimatedBirthsWorld, setEstimatedBirthsWorld] = useState([]);

  useEffect(() => {
    fetchYoungerOlderWorld();
  }, []);

  async function fetchYoungerOlderWorld() {
    const promises = countries.map(async (country) => {
      const response = await fetch(
        LOCALHOST + `youngerOlderInfo/${country}/2023/`
      );
      const jsonData = await response.json();
      return { country, births: jsonData };
    });
    const results = await Promise.all(promises);
    setBirthsWorld(results);
  }

  // async function sharedBirthsWorld() {
  //   if (countryChoice && yearChoice) {
  //     const promises = countries.map(async (country) => {
  //       const response = await fetch(LOCALHOST + `population/${country}/2023/`);
  //       const jsonData = await response.json();
  //       return { country, population: jsonData };
  //     });
  //     const results = await Promise.all(promises);

  //     const population = results.forEach((country) => {
  //       const births = birthsWorld.find(
  //         (births) => births.country === country.country
  //       );

  //       if (births) {
  //         const avgDailyBirthRate = (births.births / country.population) * 1000;
  //         const avgBirthRate = (avgDailyBirthRate / 1000) * 365;
  //         const proportionBirths = 1 / 365;
  //         const estimatedBirths = Math.round(
  //           (avgBirthRate * proportionBirths * country.population) / 100
  //         );

  //         if (estimatedBirthsWorld.length < 9) {
  //           setEstimatedBirthsWorld((prevState) => [
  //             ...prevState,
  //             {
  //               country: country.country,
  //               births: estimatedBirths.toString(),
  //             },
  //           ]);
  //         }
  //       }
  //     });
  //   }
  // }

  const options = {
    type: "doughnut",
    hitRadius: 5,
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        color: "#222",
        font: {
          weight: "bold",
        },
        formatter: function (value, context) {
          return context.dataset.labels[context.dataIndex];
        },
      },
      collision: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const intcontext = parseInt(
              context.dataset.data[context.dataIndex]
            ).toLocaleString();
            return `Births ${intcontext}`;
          },
        },
      },
    },
  };

  const renderedData = () => {
    if (birthsWorld.length > 0) {
      return birthsWorld.map((births) => births.births);
    }
  };

  const data = {
    datasets: [
      {
        labels: [
          "India",
          "Japan",
          "Mexico",
          "Brazil",
          "Bangladesh",
          "Nigeria",
          "Indonesia",
          "Pakistan",
          "China",
        ],
        data: renderedData(),
        backgroundColor: [
          "#E6E6FA",
          "#98FF98",
          "#FADADD",
          "#87CEEB",
          "#C0C0C0",
          "#FFDAB9",
          "#FFFFE0",
          "#C8A2C8",
          "#98FB98",
          "#F8FD",
        ],
      },
    ],
  };

  return (
    <>
      <div className="pie">
        <h4>Top 10 Countries by Birthdays</h4>
        {data ? <Pie options={options} data={data} /> : <h2>Loading...</h2>}
      </div>
    </>
  );
};

export default PieChart;
