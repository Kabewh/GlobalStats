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
import Lifespan from "../components/Lifespan";

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
              selected={selected}
              demographicData={demographicData}
              region={region}
              handleToggleRegion={handleToggleRegion}
              testBool={testBool}
              countryChoice={countryChoice}
            />
            <LineGraph />
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
            <div className="line_graph">
              <div className="grid-cont">
                <BubbleChart />
                <PieChart />
              </div>
            </div>
            <Lifespan
              demographicData={demographicData}
              countryChoice={countryChoice}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Demographic;
