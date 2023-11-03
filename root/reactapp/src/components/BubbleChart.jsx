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
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const LOCALHOST = "http://localhost:8000/";

ChartJS.register(
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

const BubbleChart = () => {
  const countries = [
    "Romania",
    "Italy",
    "Spain",
    "France",
    "Germany",
    "Poland",
    "Ireland",
    "Czechia",
    "United Kingdom",
    "Serbia",
    "Hungary",
    "Austria",
    "Switzerland",
    "Bulgaria",
    "Greece",
    "Sweden",
    "Portugal",
    "Denmark",
    "Finland",
    "Slovakia",
    "Norway",
    "Croatia",
    "Bosnia and Herzegovina",
    "Albania",
    "Lithuania",
    "Slovenia",
    "Latvia",
    "Estonia",
    "Montenegro",
    "Luxembourg",
    "Malta",
    "Iceland",
    "Andorra",
    "Monaco",
    "Liechtenstein",
    "Belarus",
    "Netherlands",
  ];

  const [birthsWorld, setBirthsWorld] = useState(0);
  const [estimatedBirthsWorld, setEstimatedBirthsWorld] = useState([]);

  useEffect(() => {
    fetchYoungerOlderWorld();
    sharedBirthsWorld();
  }, [estimatedBirthsWorld]);

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

  const countryChoice = true;
  const yearChoice = true;

  //sharedbirths
  async function sharedBirthsWorld() {
    if (countryChoice && yearChoice) {
      const promises = countries.map(async (country) => {
        const response = await fetch(LOCALHOST + `population/${country}/2023`);
        const jsonData = await response.json();
        return { country, population: jsonData };
      });
      const results = await Promise.all(promises);
      const population = results.map((country) => {
        const avgDailyBirthRate =
          (country.population / country.population) * 1000;
        const avgBirthRate = (avgDailyBirthRate / 1000) * 365;
        const proportionBirths = 1 / 365;
        const estimatedBirths =
          ((avgBirthRate * proportionBirths) / 100) * country.population;
        return { country: country.country, births: estimatedBirths };
      });
      if (JSON.stringify(population) !== JSON.stringify(estimatedBirthsWorld)) {
        setEstimatedBirthsWorld(population);
      }
    }
  }

  const options = {
    type: "bubble",
    drawActiveElementsOnTop: false,
    hitRadius: 5,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          color: "#fff",
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: "#222",
        font: {
          weight: "bold",
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
            return context.dataset.label;
          },
        },
      },
    },
  };

  if (estimatedBirthsWorld && estimatedBirthsWorld.length > 0) {
    const data = {
      datasets: [
        {
          label: `Births in United Kigndom: ${estimatedBirthsWorld
            .find((country) => country.country === "United Kingdom")
            .births.toLocaleString()}`,
          data: [
            {
              x: 50,
              y: 80,
              r: 54,
              label: "United Kingdom",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Germany: ${estimatedBirthsWorld
            .find((country) => country.country === "Germany")
            .births.toLocaleString()}`,
          data: [
            {
              x: 36,
              y: 80,
              r: 60,
              label: "Germany",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Estonia: ${estimatedBirthsWorld
            .find((country) => country.country === "Estonia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 30,
              y: 64,
              r: 20,
              label: "Estonia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Lithuania: ${estimatedBirthsWorld
            .find((country) => country.country === "Lithuania")
            .births.toLocaleString()}`,
          data: [
            {
              x: 43,
              y: 65,
              r: 25,
              label: "Lithuania",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Finland: ${estimatedBirthsWorld
            .find((country) => country.country === "Finland")
            .births.toLocaleString()}`,
          data: [
            {
              x: 35,
              y: 58,
              r: 22,
              label: "Finland",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Croatia: ${estimatedBirthsWorld
            .find((country) => country.country === "Croatia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 50,
              y: 60,
              r: 20,
              label: "Croatia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Iceland: ${estimatedBirthsWorld
            .find((country) => country.country === "Iceland")
            .births.toLocaleString()}`,
          data: [
            {
              x: 55,
              y: 65,
              r: 15,
              label: "ISL",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Malta: ${estimatedBirthsWorld
            .find((country) => country.country === "Malta")
            .births.toLocaleString()}`,
          data: [
            {
              x: 54.2,
              y: 58,
              r: 15,
              label: "Malta",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Spain: ${estimatedBirthsWorld
            .find((country) => country.country === "Spain")
            .births.toLocaleString()}`,
          data: [
            {
              x: 62,
              y: 50,
              r: 55,
              label: "Spain",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Slovakia: ${estimatedBirthsWorld
            .find((country) => country.country === "Slovakia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 27,
              y: 55,
              r: 23,
              label: "Slovakia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Montenegro: ${estimatedBirthsWorld
            .find((country) => country.country === "Montenegro")
            .births.toLocaleString()}`,
          data: [
            {
              x: 40,
              y: 57,
              r: 15,
              label: "MNE",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Switzerland: ${estimatedBirthsWorld
            .find((country) => country.country === "Switzerland")
            .births.toLocaleString()}`,
          data: [
            {
              x: 45,
              y: 54,
              r: 22,
              label: "SWZ",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Sweden: ${estimatedBirthsWorld
            .find((country) => country.country === "Sweden")
            .births.toLocaleString()}`,
          data: [
            {
              x: 52,
              y: 48,
              r: 30,
              label: "Sweden",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Serbia: ${estimatedBirthsWorld
            .find((country) => country.country === "Serbia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 23,
              y: 47,
              r: 25,
              label: "Serbia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Slovenia: ${estimatedBirthsWorld
            .find((country) => country.country === "Slovenia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 28,
              y: 43,
              r: 17,
              label: "SLV",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Bulgary: ${estimatedBirthsWorld
            .find((country) => country.country === "Bulgaria")
            .births.toLocaleString()}`,
          data: [
            {
              x: 31.5,
              y: 50,
              r: 20,
              label: "BLG",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Belarus: ${estimatedBirthsWorld
            .find((country) => country.country === "Belarus")
            .births.toLocaleString()}`,
          data: [
            {
              x: 38,
              y: 47,
              r: 25,
              label: "Belarus",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Luxembourg: ${estimatedBirthsWorld
            .find((country) => country.country === "Luxembourg")
            .births.toLocaleString()}`,
          data: [
            {
              x: 42,
              y: 42,
              r: 15,
              label: "LUX",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Greece: ${estimatedBirthsWorld
            .find((country) => country.country === "Greece")
            .births.toLocaleString()}`,
          data: [
            {
              x: 46.5,
              y: 42,
              r: 23,
              label: "Greece",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Hungary: ${estimatedBirthsWorld
            .find((country) => country.country === "Hungary")
            .births.toLocaleString()}`,
          data: [
            {
              x: 55,
              y: 35,
              r: 27,
              label: "Hungary",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Czech: ${estimatedBirthsWorld
            .find((country) => country.country === "Czechia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 68,
              y: 33,
              r: 26,
              label: "Czechia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Romania: ${estimatedBirthsWorld
            .find((country) => country.country === "Romania")
            .births.toLocaleString()}`,
          data: [
            {
              x: 61.5,
              y: 28,
              r: 32,
              label: "Romania",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in France: ${estimatedBirthsWorld
            .find((country) => country.country === "France")
            .births.toLocaleString()}`,
          data: [
            {
              x: 60,
              y: 9,
              r: 55,
              label: "France",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Poland: ${estimatedBirthsWorld
            .find((country) => country.country === "Poland")
            .births.toLocaleString()}`,
          data: [
            {
              x: 48,
              y: 28,
              r: 40,
              label: "Poland",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Latvia: ${estimatedBirthsWorld
            .find((country) => country.country === "Latvia")
            .births.toLocaleString()}`,
          data: [
            {
              x: 55,
              y: 25,
              r: 18,
              label: "Latvia",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Portugal: ${estimatedBirthsWorld
            .find((country) => country.country === "Portugal")
            .births.toLocaleString()}`,
          data: [
            {
              x: 24,
              y: 36,
              r: 23,
              label: "Portugal",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Denmark: ${estimatedBirthsWorld
            .find((country) => country.country === "Denmark")
            .births.toLocaleString()}`,
          data: [
            {
              x: 28,
              y: 30,
              r: 18,
              label: "DNM",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in The Netherlands: ${estimatedBirthsWorld
            .find((country) => country.country === "Netherlands")
            .births.toLocaleString()}`,
          data: [
            {
              x: 40,
              y: 32,
              r: 30,
              label: "NTL",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Albania: ${estimatedBirthsWorld
            .find((country) => country.country === "Albania")
            .births.toLocaleString()}`,
          data: [
            {
              x: 41,
              y: 21,
              r: 20,
              label: "Albania",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Italy: ${estimatedBirthsWorld
            .find((country) => country.country === "Italy")
            .births.toLocaleString()}`,
          data: [
            {
              x: 32,
              y: 10,
              r: 40,
              label: "Italy",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Ireland: ${estimatedBirthsWorld
            .find((country) => country.country === "Ireland")
            .births.toLocaleString()}`,
          data: [
            {
              x: 39,
              y: 12,
              r: 20,
              label: "Ireland",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Bosnia and Herzegovina: ${estimatedBirthsWorld
            .find((country) => country.country === "Bosnia and Herzegovina")
            .births.toLocaleString()}`,
          data: [
            {
              x: 45,
              y: 15,
              r: 20,
              label: "BIH",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: `Births in Austria: ${estimatedBirthsWorld
            .find((country) => country.country === "Austria")
            .births.toLocaleString()}`,
          data: [
            {
              x: 48,
              y: 7,
              r: 20,
              label: "Austria",
            },
          ],
          backgroundColor: "#bdaee9",
          borderColor: "#666",
        },
        {
          label: "Births in world:",
          data: [
            {
              x: 1,
              y: 10,
              r: "",
            },
          ],
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
        {
          data: [
            {
              x: 80,
              y: 80,
              r: "",
            },
          ],
          color: "#fff",
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
      ],
    };
    return (
      <h2 className="bubble">
        <p>Birthdays in Europe</p>
        <div className="bchart">
          {console.log(estimatedBirthsWorld)}
          <Bubble options={options} data={data} />
        </div>
      </h2>
    );
  }
};

export default BubbleChart;
