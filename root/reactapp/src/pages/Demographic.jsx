import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Graph from "../components/charts/Graph";
import BubbleChart from "../components/charts/BubbleChart";
import PieChart from "../components/charts/PieChart";
import WorldClock from "../components/WorldClock";
import {
  LOCALHOST,
  fetchPopulation,
  fetchLifeExpectancy,
  fetchCountries,
  getWorldLifeSpan,
  getCountryLifeSpan,
  fetchYoungerOlderWorld,
} from "../utils/api";

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
import LineGraph from "../components/charts/LineGraph";
import YoungOrOld from "../components/YoungOrOld";
import Milestones from "../components/Milestones";
import UserForm from "../components/UserForm";
import BirthdaysShared from "../components/BirthdaysShared";

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
    billions: [
      1_000_000_000, 2_000_000_000, 3_000_000_000, 4_000_000_000, 5_000_000_000,
      6_000_000_000, 7_000_000_000, 8_000_000_000, 9_000_000_000,
      10_000_000_000,
    ],
    date: [],
  });

  const [dayChoice, setDayChoice] = useState("");
  const [monthChoice, setMonthChoice] = useState(0);
  const [yearChoice, setYearChoice] = useState("");
  const [countryChoice, setCountryChoice] = useState("World");
  const [selected, setGender] = useState("male");
  const [region, setRegion] = useState("World");
  const [validated, setValidated] = useState(false);
  const [testBool, setTestBool] = useState(false);
  const [billionMilestone, setBillionMilestone] = useState(0);
  const [eighteenthBirthday, setEighteenthBirthday] = useState("");
  const [abbrMonth, setAbbrMonth] = useState("");

  const birthdate = new Date("2002-02-12");

  useEffect(() => {
    fetchData();
    calculateMilestones();
  }, [countryChoice]);

  async function fetchData() {
    const simulatedPopulation = await fetchPopulation("World");
    const romaniaPopulation = await fetchPopulation(countryChoice);
    const lifeExpectancy = await fetchLifeExpectancy("World", 2023);
    const countries = await fetchCountries();
    const birthsWorld = await fetchYoungerOlderWorld();

    setDemographicData((prevData) => ({
      ...prevData,
      simulatedPopulation,
      romaniaPopulation,
      lifeExpectancy,
      countries,
      birthsWorld,
    }));
  }

  async function calculateLifeSpan() {
    const worldLifeSpan = await getWorldLifeSpan(yearChoice);
    const countryLifeSpan = await getCountryLifeSpan(countryChoice, yearChoice);

    if (worldLifeSpan && countryLifeSpan) {
      const intYear = parseInt(yearChoice) + parseInt(worldLifeSpan);
      const intYearCountry = parseInt(yearChoice) + parseInt(countryLifeSpan);
      const worldLifeSpanDate = dayChoice + "/" + monthChoice + "/" + intYear;
      const countryLifeSpanDate =
        dayChoice + "/" + monthChoice + "/" + intYearCountry;

      await setDemographicData((prevData) => ({
        ...prevData,
        worldLifeSpan,
        countryLifeSpan,
        countryLifeSpanDate,
        worldLifeSpanDate,
      }));
    }
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
    const updatedBillionMilestones = billionMilestones.billions.map(
      (milestone) => {
        let day = new Date(
          birthdate.getTime() +
            (milestone / averageBirthsPerYear) * millisecondsPerYear
        ).getDate();
        let month =
          new Date(
            birthdate.getDate() +
              (milestone / averageBirthsPerYear) * millisecondsPerYear
          ).getMonth() + 1;
        let year = new Date(
          birthdate.getTime() +
            (milestone / averageBirthsPerYear) * millisecondsPerYear
        ).getFullYear();
        return day + "/" + month + "/" + year;
      }
    );
    setBillionMilestones((prev) => ({
      ...prev,
      date: updatedBillionMilestones,
    }));
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
    const youngerPercentageRomania =
      (olderRomania / demographicData.romaniaPopulation) * 100;
    const olderPercentageWorld =
      (younger / demographicData.simulatedPopulation) * 100;
    const olderPercentageRomania =
      (youngerRomania / demographicData.romaniaPopulation) * 100;
    setEighteenthBirthday(birthday);
    setDemographicData((prev) => ({
      ...prev,
      youngerRomania,
      youngPersonCount: younger,
      youngerPercentageWorld,
      youngerPercentageRomania,
      olderRomania,
      oldPersonCount: older,
      olderPercentageWorld,
      olderPercentageRomania,
    }));
    console.log(olderRomania);
  }

  function calculateCounts() {
    calculateEstimatedPeopleBorn();
    calculateMilestones();
    calculateSharedBirths();
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
        <UserForm
          dayChoice={dayChoice}
          monthChoice={monthChoice}
          months={months}
          yearChoice={yearChoice}
          countryChoice={countryChoice}
          demographicData={demographicData}
          selected={selected}
          handleSubmit={handleSubmit}
          handleDay={handleDay}
          handleMonth={handleMonth}
          handleYear={handleYear}
          handleCountry={handleCountry}
          handleToggleGender={handleToggleGender}
        />
        {validated ? (
          <div className="youngOld">
            <YoungOrOld
              demographicData={demographicData}
              region={region}
              handleToggleRegion={handleToggleRegion}
              testBool={testBool}
              countryChoice={countryChoice}
            />
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
              <LineGraph />
            </div>

            <div className="milestones">
              <Milestones
                billionMilestone={billionMilestone}
                billionMilestones={billionMilestones}
                dayChoice={dayChoice}
                abbrMonth={abbrMonth}
                yearChoice={yearChoice}
                countryChoice={countryChoice}
                eighteenthBirthday={eighteenthBirthday}
                demographicData={demographicData}
              />
              <BirthdaysShared demographicData={demographicData} />
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
