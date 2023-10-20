import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { json } from "react-router-dom";
import { read, utils, writeFile } from "xlsx";
import { data } from "../data/data";
import { age_population_data } from "../data/age_population_data";
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
import { Line } from "react-chartjs-2";
import Graph from "../components/Graph";
import BubbleChart from "../components/BubbleChart";
import PieChart from "../components/PieChart";
import WorldClock from "../components/WorldClock";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const LOCALHOST = "http://localhost:8000/";

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

const Demographic = () => {
  const [simulatedPopulation, setSimulatedPopulation] = useState(0);
  const [dayChoice, setDayChoice] = useState("");
  const [monthChoice, setMonthChoice] = useState(0);
  const [yearChoice, setYearChoice] = useState("");
  const [countryChoice, setCountryChoice] = useState("");
  const [countries, setCountries] = useState([]);
  const [selected, setGender] = useState("male");
  const [region, setRegion] = useState("World");
  const [validated, setValidated] = useState(false);
  const [youngPersonCount, setYoungPersonCount] = useState(0);
  const [oldPersonCount, setOldPersonCount] = useState(0);
  const [olderPercentageRomania, setOlderPercentageRomania] = useState(0);
  const [olderPercentageWorld, setOlderPercentageWorld] = useState(0);
  const [youngerPercentageWorld, setYoungerPercentageWorld] = useState(0);
  const [youngerPercentageRomania, setYoungerPercentageRomania] = useState(0);
  const [lifeExpectancy, setLifeExpectancy] = useState(0);
  const [romaniaPopulation, setRomaniaPopulation] = useState(0);
  const [youngerRomania, setYoungerRomania] = useState(0);
  const [olderRomania, setOlderRomania] = useState(0);
  const [testBool, setTestBool] = useState(false);
  const [birthsWorld, setBirthsWorld] = useState(0);
  const [estimatedBirths, setEstimatedBirths] = useState(0);
  const [birthsPerHour, setBirthsPerHour] = useState(0);
  const [worldLifeSpan, setWorldLifeSpan] = useState("");
  const [worldLifeSpanDate, setWorldLifeSpanDate] = useState("");
  const [countryLifeSpan, setCountryLifeSpan] = useState();
  const [countryLifeSpanDate, setCountryLifeSpanDate] = useState("");
  const [billionMilestone, setBillionMilestone] = useState(0);
  const [firstBillion, setFirstBillion] = useState(0);
  const [secondBillion, setSecondBillion] = useState(0);
  const [thirdBillion, setThirdBillion] = useState(0);
  const [fourthBillion, setFourthBillion] = useState(0);
  const [fifthBillion, setFifthBillion] = useState(0);
  const [sixthBillion, setSixthBillion] = useState(0);
  const [seventhBillion, setSeventhBillion] = useState(0);
  const [eighthBillion, setEighthBillion] = useState(0);
  const [ninthBillion, setNinthBillion] = useState(0);
  const [tenthBillion, setTenthBillion] = useState(0);
  const [eighteenthBirthday, setEighteenthBirthday] = useState("");
  const [abbrMonth, setAbbrMonth] = useState("");

  const birthdate = new Date("2002-02-12");

  useEffect(() => {
    fetchPopulation();
    fetchRomaniaPopulation();
    getCountries();
    fetchLifeExpectancy("World", 2023);
    fetchYoungerOlderWorld();
  }, []);

  async function fetchPopulation() {
    const response = await fetch(
      LOCALHOST + "population/" + "World" + "/" + "2023" + "/"
    );
    const jsonData = await response.json();
    setSimulatedPopulation(jsonData);
  }

  async function fetchRomaniaPopulation() {
    const response = await fetch(
      LOCALHOST + "population/" + "Romania" + "/" + "2023" + "/"
    );
    const jsonData = await response.json();
    setRomaniaPopulation(jsonData);
  }

  async function fetchLifeExpectancy(country, year) {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/" + country + "/" + year + "/"
    );
    const jsonData = await response.json();
    setLifeExpectancy(jsonData);
  }

  async function getCountries() {
    const response = await fetch(LOCALHOST + "countries");
    const jsonData = await response.json();
    jsonData.map((country, index) =>
      setCountries((countries) => [...countries, country])
    );
  }

  async function getCountryLifeSpan() {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/" + countryChoice + "/" + yearChoice + "/"
    );
    const jsonData = await response.json();
    setCountryLifeSpan(jsonData);
  }

  async function getWorldLifeSpan() {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/World/" + yearChoice + "/"
    );
    const jsonData = await response.json();
    setWorldLifeSpan(jsonData);
  }

  async function calculateLifeSpan() {
    getCountryLifeSpan("Romania", 2023);
    getWorldLifeSpan();
    getCountryLifeSpan();
    const intYear = parseInt(yearChoice) + parseInt(worldLifeSpan);
    const intYearCountry = parseInt(yearChoice) + parseInt(countryLifeSpan);
    const worldLifeSpanDate = dayChoice + "/" + monthChoice + "/" + intYear;
    const countryLifeSpanDate =
      dayChoice + "/" + monthChoice + "/" + intYearCountry;
    setCountryLifeSpanDate(countryLifeSpanDate);
    setWorldLifeSpanDate(worldLifeSpanDate);
  }

  async function calculateEstimatedPeopleBorn() {
    const response = await fetch(LOCALHOST + "population/World/" + yearChoice);
    const jsonData = await response.json();
    const birthDate = new Date(yearChoice - 1, monthChoice, dayChoice);
    const currentDate = new Date();
    const timeElapsed =
      (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
    const avgAnnualGrowth = jsonData / timeElapsed;
    const daysEstimate = (3_000_000_000 / avgAnnualGrowth) * 365.25;
    const estimatedDate = new Date(currentDate);
    estimatedDate.setDate(currentDate.getDate() + Math.round(daysEstimate));
    setBillionMilestone("3rd billionth");
  }

  function calculateMilestones() {
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const averageBirthsPerYear = 130_000_000;
    const billionEstimate = 1_000_000_000 / averageBirthsPerYear;
    const twoBillionEstimate = 2_000_000_000 / averageBirthsPerYear;
    const threeBillionEstimate = 3_000_000_000 / averageBirthsPerYear;
    const fourBillionEstimate = 4_000_000_000 / averageBirthsPerYear;
    const fiveBillionEstimate = 5_000_000_000 / averageBirthsPerYear;
    const sixBillionEstimate = 6_000_000_000 / averageBirthsPerYear;
    const sevenBillionEstimate = 7_000_000_000 / averageBirthsPerYear;
    const eightBillionEstimate = 8_000_000_000 / averageBirthsPerYear;
    const nineBillionEstimate = 9_000_000_000 / averageBirthsPerYear;
    const tenBillionEstimate = 10_000_000_000 / averageBirthsPerYear;
    const firstBillion = new Date(
      birthdate.getTime() + billionEstimate * millisecondsPerYear
    );
    const secondBillion = new Date(
      birthdate.getTime() + twoBillionEstimate * millisecondsPerYear
    );
    const thirdBillion = new Date(
      birthdate.getTime() + threeBillionEstimate * millisecondsPerYear
    );
    const fourthBillion = new Date(
      birthdate.getTime() + fourBillionEstimate * millisecondsPerYear
    );
    const fifthBillion = new Date(
      birthdate.getTime() + fiveBillionEstimate * millisecondsPerYear
    );
    const sixthBillion = new Date(
      birthdate.getTime() + sixBillionEstimate * millisecondsPerYear
    );
    const seventhBillion = new Date(
      birthdate.getTime() + sevenBillionEstimate * millisecondsPerYear
    );
    const eighthBillion = new Date(
      birthdate.getTime() + eightBillionEstimate * millisecondsPerYear
    );
    const ninthBillion = new Date(
      birthdate.getTime() + nineBillionEstimate * millisecondsPerYear
    );
    const tenthBillion = new Date(
      birthdate.getTime() + tenBillionEstimate * millisecondsPerYear
    );
    const tenthBillionMonth = tenthBillion.getMonth() + 1;
    const ninthBillionMonth = ninthBillion.getMonth() + 1;
    const eighthBillionMonth = eighthBillion.getMonth() + 1;
    const seventhBillionMonth = seventhBillion.getMonth() + 1;
    const sixthBillionMonth = sixthBillion.getMonth() + 1;
    const fifthBillionMonth = fifthBillion.getMonth() + 1;
    const fourthBillionMonth = fourthBillion.getMonth() + 1;
    const thirdBillionMonth = thirdBillion.getMonth() + 1;
    const secondBillionMonth = secondBillion.getMonth() + 1;
    const firstBillionMonth = firstBillion.getMonth() + 1;
    setFirstBillion(
      firstBillion.getDate() +
        "/" +
        firstBillionMonth +
        "/" +
        firstBillion.getFullYear()
    );
    setSecondBillion(
      secondBillion.getDate() +
        "/" +
        secondBillionMonth +
        "/" +
        secondBillion.getFullYear()
    );
    setThirdBillion(
      thirdBillion.getDate() +
        "/" +
        thirdBillionMonth +
        "/" +
        thirdBillion.getFullYear()
    );
    setFourthBillion(
      fourthBillion.getDate() +
        "/" +
        fourthBillionMonth +
        "/" +
        fourthBillion.getFullYear()
    );
    setFifthBillion(
      fifthBillion.getDate() +
        "/" +
        fifthBillionMonth +
        "/" +
        fifthBillion.getFullYear()
    );
    setSixthBillion(
      sixthBillion.getDate() +
        "/" +
        sixthBillionMonth +
        "/" +
        sixthBillion.getFullYear()
    );
    setSeventhBillion(
      seventhBillion.getDate() +
        "/" +
        seventhBillionMonth +
        "/" +
        seventhBillion.getFullYear()
    );
    setEighthBillion(
      eighthBillion.getDate() +
        "/" +
        eighthBillionMonth +
        "/" +
        eighthBillion.getFullYear()
    );
    setNinthBillion(
      ninthBillion.getDate() +
        "/" +
        ninthBillionMonth +
        "/" +
        ninthBillion.getFullYear()
    );
    setTenthBillion(
      tenthBillion.getDate() +
        "/" +
        tenthBillionMonth +
        "/" +
        tenthBillion.getFullYear()
    );
  }

  async function calculateSharedBirths() {
    if (countryChoice && yearChoice) {
      const avgDailyBirthRate = (birthsWorld / simulatedPopulation) * 1000;
      setBirthsPerHour(parseInt(birthsWorld / 8760).toLocaleString());
      const avgBirthRate = (avgDailyBirthRate / 1000) * 365;
      const proportionBirths = 1 / 365;
      const estimatedBirths =
        ((avgBirthRate * proportionBirths) / 100) * simulatedPopulation;
      setEstimatedBirths(estimatedBirths);
      calculateLifeSpan();
      calculateEstimatedPeopleBorn();
    }
  }

  async function fetchYoungerOlderWorld() {
    const response = await fetch(LOCALHOST + "youngerOlderInfo/World/2023/");
    const jsonData = await response.json();
    setBirthsWorld(jsonData);
    console.log("birthsWorld: ", birthsWorld);
  }

  async function calculateCounts() {
    calculateEstimatedPeopleBorn();
    calculateMilestones();
    calculateSharedBirths();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = 2023 - yearChoice;
    const birthday = parseInt(yearChoice) + 18;
    setEighteenthBirthday(birthday);
    const proportion = parseFloat(age) / lifeExpectancy;
    console.log("proportion", birthday);
    const younger = Math.floor(simulatedPopulation * proportion);
    const youngerRomania = Math.floor(romaniaPopulation * proportion);
    const olderRomania = romaniaPopulation - youngerRomania;
    const older = simulatedPopulation - younger;
    const youngerPercentageWorld = (older / simulatedPopulation) * 100;
    const youngerPercentageRomania = (olderRomania / romaniaPopulation) * 100;
    setYoungerPercentageRomania(youngerPercentageRomania);
    setYoungerPercentageWorld(youngerPercentageWorld);
    setYoungerRomania(youngerRomania);
    setOlderRomania(olderRomania);
    setYoungPersonCount(younger);
    setOldPersonCount(older);
    setOlderPercentageWorld((younger / simulatedPopulation) * 100);
    setOlderPercentageRomania((youngerRomania / romaniaPopulation) * 100);
    calculateCounts();
    setValidated(true);
  };

  const handleDay = (e) => {
    setDayChoice(e.target.value);
  };

  const handleMonth = (e) => {
    setMonthChoice(e.target.value);
    setAbbrMonth(e.target.value.slice(0, 3));
  };

  const handleYear = (e) => {
    setYearChoice(e.target.value);
  };

  const handleCountry = (e) => {
    setCountryChoice(e.target.value);
  };

  const handleToggleGender = (param) => {
    setGender(param);
  };

  const handleToggleRegion = (param) => {
    testBool ? setTestBool(false) : setTestBool(true);
    setRegion(param);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <WorldClock />
        <div className="question">
          <h1>
            What's my place in the world population? How long will I live?
          </h1>
          <p>
            The journey of your life in numbers and dates! <br />
            Please enter your date of birth, country of birth and sex at birth:
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="day"
              required
              value={dayChoice}
              onChange={handleDay}
              type="text"
              name="name"
              placeholder="Day"
            />
            <select
              className="month"
              required
              value={monthChoice}
              onChange={handleMonth}
            >
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <input
              className="year"
              required
              value={yearChoice}
              onChange={handleYear}
              type="text"
              name="name"
              placeholder="Year"
            />
            <select
              className="country"
              required
              value={countryChoice}
              onChange={handleCountry}
            >
              {countries.map((country, countrykey) => (
                <option key={countrykey} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="toggle">
              <button
                type="button"
                id="option1Btn"
                className={selected === "male" ? "selected" : "notSelected"}
                onClick={() => handleToggleGender("male")}
              >
                Male
              </button>
              <button
                type="button"
                className={selected === "female" ? "selected" : "notSelected"}
                onClick={() => handleToggleGender("female")}
              >
                Female
              </button>
            </div>
            <button className="goBtn" type="submit">
              go
            </button>
          </form>
        </div>
        {validated ? (
          <div className="youngOld">
            <h3>
              Do you think you belong to the young or old? You are the{" "}
              <span>{youngPersonCount.toLocaleString()}</span> person alive on
              the planet. This means that you are{" "}
              <span>older than {olderPercentageWorld.toFixed(2)}%</span> of the
              world's population and{" "}
              <span>older than {youngerRomania.toLocaleString()}</span> people
              in Romania.
            </h3>
            <div className="toggleRegion">
              <button
                type="button"
                id="option1Btn"
                className={region === "World" ? "selected" : "notSelected"}
                onClick={() => handleToggleRegion("World")}
              >
                World
              </button>
              <button
                type="button"
                className={testBool === true ? "selected" : "notSelected"}
                onClick={() => handleToggleRegion({ region })}
              >
                {countryChoice}
              </button>
            </div>
            <div className="younger-older-you">
              <div className="younger-you">
                <div className="younger-num">
                  {testBool === true
                    ? youngerRomania.toLocaleString()
                    : youngPersonCount.toLocaleString()}
                </div>
                <p>
                  People younger than you (
                  {testBool === true
                    ? olderPercentageRomania.toFixed(2)
                    : olderPercentageWorld.toFixed(2)}
                  %)
                </p>
              </div>
              <div className="citizen">
                <div className="citizen-icon">
                  {selected === "male" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="5em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="5em"
                      viewBox="0 0 320 512"
                    >
                      <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
                    </svg>
                  )}
                </div>
                You as a citizen of{" "}
                {testBool === true ? countryChoice : "World"}
              </div>
              <div className="older-you">
                <div className="older-num">
                  {testBool === true
                    ? olderRomania.toLocaleString()
                    : oldPersonCount.toLocaleString()}
                </div>
                <p>
                  People older than you (
                  {testBool === true
                    ? youngerPercentageRomania.toFixed(2)
                    : youngerPercentageWorld.toFixed(2)}
                  %)
                </p>
              </div>
            </div>
            <div className="line_graph">
              <Line options={options} data={dataset} />
            </div>
            <div className="milestones">
              <h1>What are the big milestones to expect in your life?</h1>
              <h1>
                Your next milestone is <span>{thirdBillion}</span> when you'll
                be the <span>{billionMilestone}</span> person to be alive in the
                world.
              </h1>
            </div>

            <ul className="projections">
              <h3>Timeline (Projections)</h3>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {dayChoice + "/" + abbrMonth + "/" + yearChoice}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your birth!</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{firstBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>1 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{secondBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>2 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {dayChoice +
                      "/" +
                      abbrMonth +
                      "/" +
                      eighteenthBirthday.toString()}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your 18th birthday!</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{thirdBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>3 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{fourthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>4 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{fifthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>5 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{sixthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>6 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{seventhBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>7 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{eighthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>8 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{worldLifeSpanDate}</h2>
                </div>
                <div className="message-date">
                  <h2>Your projected life expectancy in World</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{ninthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>9 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{countryLifeSpanDate}</h2>
                </div>
                <div className="message-date">
                  <h2>Your projected life expectancy in {countryChoice}</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{tenthBillion}</h2>
                </div>
                <div className="message-date">
                  <h2>10 billionth person</h2>
                </div>
              </li>
            </ul>
            <div className="milestones">
              <h1>
                Did you know that you share a birthday with about{" "}
                <span>{parseInt(estimatedBirths).toLocaleString()}</span> people
                around the world and that approximately{" "}
                <span>{birthsPerHour}</span> people were born in the same hour?
              </h1>
            </div>
            <div className="line_graph">
              <div className="grid-cont">
                <BubbleChart />
                <PieChart />
              </div>
            </div>
            <div className="timeline"></div>
            <div className="lifespan">
              <h1>
                We estimate that you will live until{" "}
                <span>{parseInt(worldLifeSpan)}</span> if you were an average
                world citizen. Whereas in <span>{countryChoice}</span> it would
                be until <span>{parseInt(countryLifeSpan)}</span> years old.
              </h1>
              <h3>
                <Graph />
              </h3>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Demographic;
