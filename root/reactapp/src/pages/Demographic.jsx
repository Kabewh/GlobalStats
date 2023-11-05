import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import BubbleChart from "../components/BubbleChart";
import PieChart from "../components/PieChart";
import WorldClock from "../components/WorldClock";
import Timeline from "../components/Timeline";
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
import LineGraph from "../components/LineGraph";

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

const Demographic = () => {
  const [demographicData, setDemographicData] = useState({
    simulatedPopulation: 0,
    countries: 0,
    youngPersonCount: 0,
    oldPersonCount: 0,
    youngerPercentageRomania: 0,
    olderPercentageRomania: 0,
    youngerPercentageWorld: 0,
    olderPercentageWorld: 0,
    lifeExpectancy: 0,
    romaniaPopulation: 0,
    youngerRomania: 0,
    olderRomania: 0,
    birthsWorld: 0,
    estimatedBirths: 0,
    birthsPerHour: 0,
    worldLifeSpan: 0,
    worldLifeSpanDate: 0,
    countryLifeSpan: 0,
    countryLifeSpanDate: 0,
  });
  const [billionMilestones, setBillionMilestones] = useState({
    billions: [1_000_000_000, 2_000_000_000, 3_000_000_000, 4_000_000_000, 5_000_000_000, 6_000_000_000, 7_000_000_000, 8_000_000_000, 9_000_000_000, 10_000_000_000],
    date: [],
  });

  const [dayChoice, setDayChoice] = useState("");
  const [monthChoice, setMonthChoice] = useState(0);
  const [yearChoice, setYearChoice] = useState("");
  const [countryChoice, setCountryChoice] = useState("");
  const [selected, setGender] = useState("male");
  const [region, setRegion] = useState("World");
  const [validated, setValidated] = useState(false);
  const [testBool, setTestBool] = useState(false);
  const [billionMilestone, setBillionMilestone] = useState(0);
  const [eighteenthBirthday, setEighteenthBirthday] = useState("");
  const [abbrMonth, setAbbrMonth] = useState("");

  const birthdate = new Date("2002-02-12");

  useEffect(() => {
    fetchPopulation();
    fetchRomaniaPopulation();
    getCountries();
    fetchLifeExpectancy("World", 2023);
    fetchYoungerOlderWorld();
    calculateMilestones();
  }, []);

  async function fetchPopulation() {
    const response = await fetch(LOCALHOST + "population/World/2023/");
    const jsonData = await response.json();
    setDemographicData((prevData) => ({
      ...prevData,
      simulatedPopulation: jsonData,
    }));
  }

  async function fetchRomaniaPopulation() {
    const response = await fetch(LOCALHOST + "population/Romania/2023/");
    const jsonData = await response.json();
    setDemographicData((prevData) => ({
      ...prevData,
      romaniaPopulation: jsonData,
    }));
  }

  async function fetchLifeExpectancy(country, year) {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/" + country + "/" + year + "/"
    );
    const jsonData = await response.json();
    setDemographicData((prevData) => ({
      ...prevData,
      lifeExpectancy: jsonData,
    }));
  }

  async function getCountries() {
    const response = await fetch(LOCALHOST + "countries");
    const jsonData = await response.json();
    jsonData.map((country, index) =>
      setDemographicData((prevData) => ({
        ...prevData,
        countries: jsonData,
      }))
    );
  }

  async function getCountryLifeSpan() {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/" + countryChoice + "/" + yearChoice + "/"
    );
    const jsonData = await response.json();
    setDemographicData((prevData) => ({
      ...prevData,
      countryLifeSpan: jsonData,
    }));
  }

  async function getWorldLifeSpan() {
    const response = await fetch(
      LOCALHOST + "lifeExpectancy/World/" + yearChoice + "/"
    );
    const jsonData = await response.json();
    setDemographicData((prevData) => ({
      ...prevData,
      worldLifeSpan: jsonData,
    }));
  }

  async function calculateLifeSpan() {
    getCountryLifeSpan("Romania", 2023);
    getWorldLifeSpan();
    getCountryLifeSpan();
    const intYear =
      parseInt(yearChoice) + parseInt(demographicData.worldLifeSpan);
    const intYearCountry =
      parseInt(yearChoice) + parseInt(demographicData.countryLifeSpan);
    const worldLifeSpanDate = dayChoice + "/" + monthChoice + "/" + intYear;
    const countryLifeSpanDate =
      dayChoice + "/" + monthChoice + "/" + intYearCountry;
    setDemographicData((prevData) => ({
      ...prevData,
      countryLifeSpanDate,
      worldLifeSpanDate,
    }));
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
    const updatedBillionMilestones = billionMilestones.billions.map((milestone) => {
      let day = new Date(birthdate.getTime() + milestone / averageBirthsPerYear * millisecondsPerYear).getDate()
      let month = new Date(birthdate.getDate() + milestone / averageBirthsPerYear * millisecondsPerYear).getMonth() + 1
      let year = new Date(birthdate.getTime() + milestone / averageBirthsPerYear * millisecondsPerYear).getFullYear()
      return (
        day + "/" + month + "/" + year
      )
     })
     setBillionMilestones((prev) => ({...prev, date: updatedBillionMilestones }));
    }
  
  async function calculateSharedBirths() {
    if (countryChoice && yearChoice) {
      const avgDailyBirthRate =
        (demographicData.birthsWorld / demographicData.simulatedPopulation) *
        1000;
      const birthsPerHour = parseInt(
        demographicData.birthsWorld / 8760
      ).toLocaleString();
      setDemographicData((prevData) => ({ ...prevData, birthsPerHour }));
      const avgBirthRate = (avgDailyBirthRate / 1000) * 365;
      const proportionBirths = 1 / 365;
      const estimatedBirths =
        ((avgBirthRate * proportionBirths) / 100) *
        demographicData.simulatedPopulation;
      setDemographicData((prevData) => ({ ...prevData, estimatedBirths }));
      calculateLifeSpan();
      calculateEstimatedPeopleBorn();
    }
  }

  async function fetchYoungerOlderWorld() {
    const response = await fetch(LOCALHOST + "youngerOlderInfo/World/2023/");
    const jsonData = await response.json();
    setDemographicData((prev) => ({ ...prev, birthsWorld: jsonData }));
  }

  function calculateCounts() {
    calculateEstimatedPeopleBorn();
    calculateMilestones();
    calculateSharedBirths();
  }

  function calculateProportion() {
    const age = 2023 - yearChoice;
    const birthday = parseInt(yearChoice) + 18;
    const proportion = parseFloat(age) / demographicData.lifeExpectancy;
    const younger = Math.floor(
      demographicData.simulatedPopulation * proportion
    );
    const youngerRomania = Math.floor(
      demographicData.romaniaPopulation * proportion
    );
    const olderRomania = demographicData.romaniaPopulation - youngerRomania;
    const older = demographicData.simulatedPopulation - younger;
    const youngerPercentageWorld =
      (older / demographicData.simulatedPopulation) * 100;
    setEighteenthBirthday(birthday);
    setDemographicData((prev) => ({
      ...prev,
      youngerRomania,
      youngerPercentageWorld,
      olderRomania,
      youngPersonCount: younger,
      oldPersonCount: older,
      olderPercentageWorld:
        (younger / demographicData.simulatedPopulation) * 100,
      olderPercentageRomania:
        (younger / demographicData.romaniaPopulation) * 100,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateProportion();
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
              {Array.isArray(demographicData.countries) ? (
                demographicData.countries.map((country, countrykey) => (
                  <option key={countrykey} value={country}>
                    {country}
                  </option>
                ))
              ) : (
                <option> Error</option>
              )}
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
              <span>{demographicData.youngPersonCount.toLocaleString()}</span>{" "}
              person alive on the planet. This means that you are{" "}
              <span>
                older than {demographicData.olderPercentageWorld.toFixed(2)}%
              </span>{" "}
              of the world's population and{" "}
              <span>
                older than {demographicData.youngerRomania.toLocaleString()}
              </span>{" "}
              people in Romania.
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
                    ? demographicData.youngerRomania.toLocaleString()
                    : demographicData.youngPersonCount.toLocaleString()}
                </div>
                <p>
                  People younger than you (
                  {testBool === true
                    ? demographicData.olderPercentageRomania.toFixed(2)
                    : demographicData.olderPercentageWorld.toFixed(2)}
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
                    ? demographicData.olderRomania.toLocaleString()
                    : demographicData.oldPersonCount.toLocaleString()}
                </div>
                <p>
                  People older than you (
                  {testBool === true
                    ? demographicData.youngerPercentageRomania.toFixed(2)
                    : demographicData.youngerPercentageWorld.toFixed(2)}
                  %)
                </p>
              </div>
            </div>
            <div className="line_graph">
                <LineGraph/>
            </div>

            <div className="milestones">
              <h1>What are the big milestones to expect in your life?</h1>
              <h1>
                Your next milestone is <span>{billionMilestones.date[3]}</span> when you'll
                be the <span>{billionMilestone}</span> person to be alive in the
                world.
              </h1>
            </div>
            <ul className="projections">
              <Timeline dayChoice={dayChoice} abbrMonth={abbrMonth} yearChoice={yearChoice} countryChoice={countryChoice} billionMilestones={billionMilestones} eighteenthBirthday={eighteenthBirthday} demographicData={demographicData}/>
            </ul>
            <div className="milestones">
              <h1>
                Did you know that you share a birthday with about
                
                <span> {parseInt(demographicData.estimatedBirths).toLocaleString()} </span>
                
                 people around the world and that approximately
                <span> {demographicData.birthsPerHour}</span> people were born in
                the same hour?
              </h1>
            </div>
            <div className="line_graph">
              <div className="grid-cont">
                <BubbleChart />
                <PieChart />
              </div>
            </div>
            <div className="lifespan">
              <h1>
                We estimate that you will live until{" "}
                <span>{parseInt(demographicData.worldLifeSpan)}</span> if you
                were an average world citizen. Whereas in{" "}
                <span>{countryChoice}</span> it would be until{" "}
                <span>{parseInt(demographicData.countryLifeSpan)}</span> years
                old.
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
