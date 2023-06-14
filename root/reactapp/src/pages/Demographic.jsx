import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { read, utils, writeFile } from 'xlsx';
import { data } from '../data/data'
import { age_population_data } from '../data/age_population_data';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import OverflowElement from '../components/georgelpetre';
import Graph from '../components/Graph';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const total_deaths = 69248000;
const LOCALHOST = "http://localhost:8000/"

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 2
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    tooltip: {
      enabled: true,
      poision: 'nearest',
      intersect: false,

    }
  },

};

const labels = Array.from({ length: 81 }, (_, index) => index);

const modifiedData = age_population_data.map((item) => {
  return {
    age: item.age,
    population: item.population,
  }
})

export const dataset = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'population',
      data: modifiedData.map((item) => {
        return item.population;
      }),
      borderColor: '#333',
      backgroundColor: 'rgba(97, 63, 194, 0.5)',
    },
  ],
};


const Demographic = () => {
  const [ageRef, setAgeRef] = useState();
  const [simulatedPopulation, setSimulatedPopulation] = useState(0);
  const [changePerSecond, setChangePerSecond] = useState(0);
  const [movies, setMovies] = useState([]);
  const [chinaPopulation, setChinaPopulation] = useState(0);
  const [indiaPopulation, setIndiaPopulation] = useState(0);
  const [usaPopulation, setUsaPopulation] = useState(0);
  const [indonesiaPopulation, setIndonesiaPopulation] = useState(0);
  const [pakistanPopulation, setPakistanPopulation] = useState(0);
  const [brazilPopulation, setBrazilPopulation] = useState(0);
  const [bangladeshPopulation, setBangladeshPopulation] = useState(0);
  const [russiaPopulation, setRussiaPopulation] = useState(0);
  const [japanPopulation, setJapanPopulation] = useState(0);
  const [mexicoPopulation, setMexicoPopulation] = useState(0);
  const [ethiopiaPopulation, setEthiopiaPopulation] = useState(0);
  const [philippinesPopulation, setPhilippinesPopulation] = useState(0);
  const [egyptPopulation, setEgyptPopulation] = useState(0);
  const [vietnamPopulation, setVietnamPopulation] = useState(0);
  const [drcongoPopulation, setDrcongoPopulation] = useState(0);
  const [turkeyPopulation, setTurkeyPopulation] = useState(0);
  const [iranPopulation, setIranPopulation] = useState(0);
  const [germanyPopulation, setGermanyPopulation] = useState(0);
  const [thailandPopulation, setThailandPopulation] = useState(0);

  const [chinaFlag, setChinaFlag] = useState("");
  const [indiaFlag, setIndiaFlag] = useState("");
  const [usaFlag, setUsaFlag] = useState("");
  const [indonesiaFlag, setIndonesiaFlag] = useState("");
  const [pakistanFlag, setPakistanFlag] = useState("");
  const [brazilFlag, setBrazilFlag] = useState("");
  const [bangladeshFlag, setBangladeshFlag] = useState("");
  const [russiaFlag, setRussiaFlag] = useState("");
  const [japanFlag, setJapanFlag] = useState("");
  const [mexicoFlag, setMexicoFlag] = useState("");
  const [ethiopiaFlag, setEthiopiaFlag] = useState("");
  const [philippinesFlag, setPhilippinesFlag] = useState("");
  const [egyptFlag, setEgyptFlag] = useState("");
  const [vietnamFlag, setVietnamFlag] = useState("");
  const [drcongoFlag, setDrcongoFlag] = useState("");
  const [turkeyFlag, setTurkeyFlag] = useState("");
  const [iranFlag, setIranFlag] = useState("");
  const [germanyFlag, setGermanyFlag] = useState("");
  const [thailandFlag, setThailandFlag] = useState("");

  const birthRate = 0.018;
  const deathRate = 0.008;

  useEffect(() => {
    fetchPopulation()
    fetchRomaniaPopulation()
    getCountries()
    // fetchYoungerOlder() // --working
    fetchLifeExpectancy("World", 2023) // --working
    // getDeaths()
    calculatePopulation()

    // populateChart()
  }, []);

  useEffect(() => {
    fetchCountries()
    fetchFlags()
  }, [])

  // function populateChart() {
  //   movies.map((movie, index) => {
  //     data.map((item) => {
  //       item.name = movie.Year
  //       item.population = movie.Population
  //       console.log(item.population)
  //     });
  //   });
  // }
  // const modifiedData = data.map((item) => {
  //   return {
  //     name: item.name,
  //     population: item.population.toLocaleString(),
  //   }
  // })

  // const renderLineChart = (
  //   <LineChart width={1000} height={400} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 90 }}>
  //     <Line type="monotone" dataKey="population" stroke="#8884d8" />
  //     <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
  //     <XAxis dataKey="name" />
  //     <YAxis dataKey="population" />
  //     <Tooltip />
  //   </LineChart>
  // );




  async function fetchPopulation() {
    const response = await fetch(LOCALHOST + "population/" + "World" + "/" + "2023" + "/")
    const jsonData = await response.json()
    setSimulatedPopulation(jsonData)
    // if (parseInt(localStorage.getItem("population")) == 0) {
    //   setSimulatedPopulation(jsonData)
    // } else {
    //   setSimulatedPopulation(parseInt(localStorage.getItem("population")));
    // }
  }

  async function fetchRomaniaPopulation() {
    const response = await fetch(LOCALHOST + "population/" + "Romania" + "/" + "2023" + "/")
    const jsonData = await response.json()
    setRomaniaPopulation(jsonData)
  }

  async function fetchYoungerOlder(country, year) {
    const response = await fetch(LOCALHOST + "youngerOlderInfo/" + country + "/" + year + "/")
    const jsonData = await response.json()
    setBirths(jsonData)
  }

  async function fetchLifeExpectancy(country, year) {
    const response = await fetch(LOCALHOST + "lifeExpectancy/" + country + "/" + year + "/")
    const jsonData = await response.json()
    setLifeExpectancy(jsonData)
  }

  const birthdate = new Date("2002-02-12");
  const currentDate = new Date();

  const daysSinceBirth = Math.floor(
    (currentDate - birthdate) / (1000 * 60 * 60)
  );

  const dailyBirths = 366.5
  const peopleBornAfter = daysSinceBirth * dailyBirths



  //import all countries and their population
  async function fetchCountries() {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/population')
    const jsonData = await response.json()
    setChinaPopulation(jsonData.data.filter((item) => item.country === 'China')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setIndiaPopulation(jsonData.data.filter((item) => item.country === 'India')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setUsaPopulation(jsonData.data.filter((item) => item.country === 'United States')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setIndonesiaPopulation(jsonData.data.filter((item) => item.country === 'Indonesia')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setPakistanPopulation(jsonData.data.filter((item) => item.country === 'Pakistan')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setBrazilPopulation(jsonData.data.filter((item) => item.country === 'Brazil')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setBangladeshPopulation(jsonData.data.filter((item) => item.country === 'Bangladesh')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setJapanPopulation(jsonData.data.filter((item) => item.country === 'Japan')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setMexicoPopulation(jsonData.data.filter((item) => item.country === 'Mexico')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setEthiopiaPopulation(jsonData.data.filter((item) => item.country === 'Ethiopia')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setPhilippinesPopulation(jsonData.data.filter((item) => item.country === 'Philippines')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setEgyptPopulation(jsonData.data.filter((item) => item.country === 'Egypt, Arab Rep.')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setVietnamPopulation(jsonData.data.filter((item) => item.country === 'Vietnam')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setDrcongoPopulation(jsonData.data.filter((item) => item.country === 'Congo, Dem. Rep.')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setTurkeyPopulation(jsonData.data.filter((item) => item.country === 'Turkey')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setGermanyPopulation(jsonData.data.filter((item) => item.country === 'Germany')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
    setThailandPopulation(jsonData.data.filter((item) => item.country === 'Thailand')[0].populationCounts.filter((item) => item.year === 2018)[0].value)
  }

  async function fetchFlags() {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    const jsonData = await response.json()
    setChinaFlag(jsonData.data.filter((item) => item.name === 'China')[0].flag)
    setIndiaFlag(jsonData.data.filter((item) => item.name === 'India')[0].flag)
    setUsaFlag(jsonData.data.filter((item) => item.name === 'United States')[0].flag)
    setIndonesiaFlag(jsonData.data.filter((item) => item.name === 'Indonesia')[0].flag)
    setPakistanFlag(jsonData.data.filter((item) => item.name === 'Pakistan')[0].flag)
    setBrazilFlag(jsonData.data.filter((item) => item.name === 'Brazil')[0].flag)
    setBangladeshFlag(jsonData.data.filter((item) => item.name === 'Bangladesh')[0].flag)
    setJapanFlag(jsonData.data.filter((item) => item.name === 'Japan')[0].flag)
    setMexicoFlag(jsonData.data.filter((item) => item.name === 'Mexico')[0].flag)
    setEthiopiaFlag(jsonData.data.filter((item) => item.name === 'Ethiopia')[0].flag)
    setPhilippinesFlag(jsonData.data.filter((item) => item.name === 'Philippines')[0].flag)
    setEgyptFlag(jsonData.data.filter((item) => item.name === 'Egypt')[0].flag)
    setVietnamFlag(jsonData.data.filter((item) => item.name === 'Vietnam')[0].flag)
    setDrcongoFlag(jsonData.data.filter((item) => item.name === 'Congo')[0].flag)
    setTurkeyFlag(jsonData.data.filter((item) => item.name === 'Turkey')[0].flag)
    setGermanyFlag(jsonData.data.filter((item) => item.name === 'Germany')[0].flag)
    setThailandFlag(jsonData.data.filter((item) => item.name === 'Thailand')[0].flag)
  }

  async function calculatePopulation() {
    const response = await fetch(LOCALHOST + "population/World/2023")
    const jsonData = await response.json()
    const popgrowthrate = 0.0108 // 18.5 crude birth rate - 7.7 crude death rate / 1000  rata neta a cresterii populatiei per 1000 locuitori
    const secondBirthRate = 8_000_000_000 * 0.0108 / (365 * 24 * 60 * 60) // rata nasterii pe secunda 
    const interval = setInterval(() => {
      setSimulatedPopulation(data => data + 3);
      addDivElement()
    }, 1000);
    return () => clearInterval(interval);
  }

  const [dayChoice, setDayChoice] = useState('')
  const [monthChoice, setMonthChoice] = useState(0)
  const [yearChoice, setYearChoice] = useState()
  const [countryChoice, setCountryChoice] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setGender] = useState("male");
  const [region, setRegion] = useState("World");
  // const [regionToggle, setRegionToggle] = useState();
  const [validated, setValidated] = useState(false);
  const [youngPersonCount, setYoungPersonCount] = useState(0);
  const [oldPersonCount, setOldPersonCount] = useState(0);
  const [olderPercentageRomania, setOlderPercentageRomania] = useState(0);
  const [olderPercentageWorld, setOlderPercentageWorld] = useState(0);
  const [youngerPercentageWorld, setYoungerPercentageWorld] = useState(0);
  const [youngerPercentageRomania, setYoungerPercentageRomania] = useState(0);
  const [age, setAge] = useState(0);
  const [lifeExpectancy, setLifeExpectancy] = useState(0);
  const [romaniaPopulation, setRomaniaPopulation] = useState(0);
  const [youngerRomania, setYoungerRomania] = useState(0);
  const [olderRomania, setOlderRomania] = useState(0);
  const [testBool, setTestBool] = useState(false);
  const [births, setBirths] = useState(0);
  const [estimatedBirths, setEstimatedBirths] = useState(0);
  const [birthsPerHour, setBirthsPerHour] = useState(0);
  const [worldLifeSpan, setWorldLifeSpan] = useState('');
  const [worldLifeSpanDate, setWorldLifeSpanDate] = useState('');
  const [countryLifeSpan, setCountryLifeSpan] = useState();
  const [countryLifeSpanDate, setCountryLifeSpanDate] = useState('');
  const [nextMilestoneDate, setNextMilestoneDate] = useState();
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
  const [eighteenthBirthday, setEighteenthBirthday] = useState(0);
  const [divElements, setDivElements] = useState([]);
  const [abbrMonth, setAbbrMonth] = useState('');
  const [coolDeaths, setCoolDeaths] = useState(0);

  async function getCountries() {
    const response = await fetch(LOCALHOST + "countries")
    const jsonData = await response.json()
    jsonData.map((country, index) => (
      setCountries(countries => [...countries, country])
    ))
  }

  async function getCountryLifeSpan() {
    const response = await fetch(LOCALHOST + "lifeExpectancy/" + countryChoice + "/" + yearChoice + "/")
    const jsonData = await response.json()
    setCountryLifeSpan(jsonData)
  }

  async function getWorldLifeSpan() {
    const response = await fetch(LOCALHOST + "lifeExpectancy/World/" + yearChoice + "/")
    const jsonData = await response.json()
    setWorldLifeSpan(jsonData)
  }

  async function calculateLifeSpan() {
    getCountryLifeSpan("Romania", 2023);
    getWorldLifeSpan();
    getCountryLifeSpan();
    const intYear = parseInt(yearChoice) + parseInt(worldLifeSpan)
    const intYearCountry = parseInt(yearChoice) + parseInt(countryLifeSpan)
    const worldLifeSpanDate = dayChoice + "/" + monthChoice + "/" + intYear
    const countryLifeSpanDate = dayChoice + "/" + monthChoice + "/" + intYearCountry
    setCountryLifeSpanDate(countryLifeSpanDate)
    setWorldLifeSpanDate(worldLifeSpanDate)
  }

  async function calculateEstimatedPeopleBorn() {
    const response = await fetch(LOCALHOST + "population/World/" + yearChoice)
    const jsonData = await response.json()
    const birthDate = new Date(yearChoice - 1, monthChoice, dayChoice)
    const currentDate = new Date()
    const populationGrowth = simulatedPopulation - jsonData
    const timeElapsed = (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
    const avgAnnualGrowth = jsonData / timeElapsed;
    const daysEstimate = (3_000_000_000 / avgAnnualGrowth) * 365.25;
    const estimatedDate = new Date(currentDate);
    estimatedDate.setDate(currentDate.getDate() + Math.round(daysEstimate))
    const correctDate = estimatedDate.getDay() + "/" + estimatedDate.getMonth() + "/" + estimatedDate.getFullYear()
    setNextMilestoneDate(correctDate)
    setBillionMilestone("3rd billionth")
  }

  function calculateMilestones() {
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const birthDate = new Date(yearChoice, monthChoice - 1, dayChoice)
    console.log(birthDate)
    const averageBirthsPerYear = 130_000_000
    const billionEstimate = (1_000_000_000 / averageBirthsPerYear);
    const twoBillionEstimate = (2_000_000_000 / averageBirthsPerYear);
    const threeBillionEstimate = (3_000_000_000 / averageBirthsPerYear);
    const fourBillionEstimate = (4_000_000_000 / averageBirthsPerYear);
    const fiveBillionEstimate = (5_000_000_000 / averageBirthsPerYear);
    const sixBillionEstimate = (6_000_000_000 / averageBirthsPerYear);
    const sevenBillionEstimate = (7_000_000_000 / averageBirthsPerYear);
    const eightBillionEstimate = (8_000_000_000 / averageBirthsPerYear);
    const nineBillionEstimate = (9_000_000_000 / averageBirthsPerYear);
    const tenBillionEstimate = (10_000_000_000 / averageBirthsPerYear);
    const firstBillion = new Date(birthdate.getTime() + billionEstimate * millisecondsPerYear)
    const secondBillion = new Date(birthdate.getTime() + twoBillionEstimate * millisecondsPerYear)
    const thirdBillion = new Date(birthdate.getTime() + threeBillionEstimate * millisecondsPerYear)
    const fourthBillion = new Date(birthdate.getTime() + fourBillionEstimate * millisecondsPerYear)
    const fifthBillion = new Date(birthdate.getTime() + fiveBillionEstimate * millisecondsPerYear)
    const sixthBillion = new Date(birthdate.getTime() + sixBillionEstimate * millisecondsPerYear)
    const seventhBillion = new Date(birthdate.getTime() + sevenBillionEstimate * millisecondsPerYear)
    const eighthBillion = new Date(birthdate.getTime() + eightBillionEstimate * millisecondsPerYear)
    const ninthBillion = new Date(birthdate.getTime() + nineBillionEstimate * millisecondsPerYear)
    const tenthBillion = new Date(birthdate.getTime() + tenBillionEstimate * millisecondsPerYear)
    const tenthBillionMonth = tenthBillion.getMonth() + 1
    const ninthBillionMonth = ninthBillion.getMonth() + 1
    const eighthBillionMonth = eighthBillion.getMonth() + 1
    const seventhBillionMonth = seventhBillion.getMonth() + 1
    const sixthBillionMonth = sixthBillion.getMonth() + 1
    const fifthBillionMonth = fifthBillion.getMonth() + 1
    const fourthBillionMonth = fourthBillion.getMonth() + 1
    const thirdBillionMonth = thirdBillion.getMonth() + 1
    const secondBillionMonth = secondBillion.getMonth() + 1
    const firstBillionMonth = firstBillion.getMonth() + 1
    setFirstBillion(firstBillion.getDate() + "/" + firstBillionMonth + "/" + firstBillion.getFullYear());
    setSecondBillion(secondBillion.getDate() + "/" + secondBillionMonth + "/" + secondBillion.getFullYear());
    setThirdBillion(thirdBillion.getDate() + "/" + thirdBillionMonth + "/" + thirdBillion.getFullYear());
    setFourthBillion(fourthBillion.getDate() + "/" + fourthBillionMonth + "/" + fourthBillion.getFullYear());
    setFifthBillion(fifthBillion.getDate() + "/" + fifthBillionMonth + "/" + fifthBillion.getFullYear());
    setSixthBillion(sixthBillion.getDate() + "/" + sixthBillionMonth + "/" + sixthBillion.getFullYear());
    setSeventhBillion(seventhBillion.getDate() + "/" + seventhBillionMonth + "/" + seventhBillion.getFullYear());
    setEighthBillion(eighthBillion.getDate() + "/" + eighthBillionMonth + "/" + eighthBillion.getFullYear());
    setNinthBillion(ninthBillion.getDate() + "/" + ninthBillionMonth + "/" + ninthBillion.getFullYear());
    setTenthBillion(tenthBillion.getDate() + "/" + tenthBillionMonth + "/" + tenthBillion.getFullYear());
  }

  async function calculateSharedBirths() {
    if (countryChoice && yearChoice) {
      const response = await fetch(LOCALHOST + "population/" + countryChoice + "/" + yearChoice)
      const jsonData = await response.json()
      fetchYoungerOlder("World", yearChoice);
      const population = jsonData;
      const avgDailyBirthRate = (births / simulatedPopulation) * 1000
      setBirthsPerHour(parseInt(births / 8760).toLocaleString())
      const avgBirthRate = (avgDailyBirthRate / 1000) * 365
      const proportionBirths = 1 / 365
      const estimatedBirths = avgBirthRate * proportionBirths / 100 * simulatedPopulation
      setEstimatedBirths(estimatedBirths)
      calculateLifeSpan()
      calculateEstimatedPeopleBorn()
    }
  }

  async function calculateCounts() {
    const proportion = parseFloat(age) / lifeExpectancy; // 0.5
    const younger = Math.floor(simulatedPopulation * proportion); // 
    const youngerRomania = Math.floor(romaniaPopulation * proportion);
    const olderRomania = romaniaPopulation - youngerRomania;
    const older = simulatedPopulation - younger;
    const youngerPercentageWorld = ((older / simulatedPopulation) * 100)
    const youngerPercentageRomania = ((olderRomania / romaniaPopulation) * 100)
    setYoungerPercentageRomania(youngerPercentageRomania)
    setYoungerPercentageWorld(youngerPercentageWorld)
    setYoungerRomania(youngerRomania);
    setOlderRomania(olderRomania);
    setYoungPersonCount(younger);
    setOldPersonCount(older);
    setOlderPercentageWorld((younger / simulatedPopulation) * 100);
    setOlderPercentageRomania((youngerRomania / romaniaPopulation) * 100);
    calculateSharedBirths()
    calculateEstimatedPeopleBorn()
    calculateMilestones()
    const interval = setInterval(() => {

    }, 1000);
    return () => clearInterval(interval);
  }

  // async function getDeaths() {
  //   const response = await fetch(LOCALHOST + "deaths")
  //   const jsonData = await response.json()
  //   const deathMap = jsonData.map((item, index) => {
  //     console.log(index + ": " + (item * 1000 / total_deaths) * 100)
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const age = 2023 - yearChoice;
    const birthday = parseInt(yearChoice) + 18;
    console.log(birthday)
    setEighteenthBirthday(birthday)
    setAge(age)
    calculateCounts();
  }


  const handleDay = (e) => {
    setDayChoice(e.target.value)
  }

  const handleMonth = (e) => {
    setMonthChoice(e.target.value)
    setAbbrMonth(e.target.value.slice(0, 3))
  }

  const handleYear = (e) => {
    setYearChoice(e.target.value)
  }

  const handleCountry = (e) => {
    setCountryChoice(e.target.value)
  }

  const handleToggleGender = (param) => {
    setGender(param)
  }

  const handleToggleRegion = (param) => {
    testBool ? setTestBool(false) : setTestBool(true);
    setRegion(param)
  }

  const addDivElement = () => {
    setDivElements(prevDivs => [...prevDivs, <div key={prevDivs.length} class="babyGenerator"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='up'><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg></div>]);

  };



  return (
    <>
      <Navbar />
      <div className="container">
        <div className="world-clock">
          <h3>
            <p>Current world<br></br>population clock</p>
            <p className="population-counter">{simulatedPopulation.toLocaleString("en")}</p>
            <div className='babies'>
            </div>{divElements.map(div => div).reverse()}
            {/* {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg> */
            /*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg> */}
          </h3>
        </div>
        <div className='question'>
          <h1>
            What's my place in the world population? How long will I live?
          </h1>
          <p>The journey of your life in numbers and dates! <br />
            Please enter your date of birth, country of birth and sex at birth:</p>
          <form onSubmit={handleSubmit}>
            <input className="day" required value={dayChoice} onChange={handleDay} type="text" name="name" placeholder='Day' />
            <select className="month" required value={monthChoice} onChange={handleMonth}>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <input className="year" required value={yearChoice} onChange={handleYear} type="text" name="name" placeholder='Year' />
            <select className="country" required value={countryChoice} onChange={handleCountry}>
              {countries.map((country, countrykey) => (
                <option key={countrykey} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className='toggle'>
              <button
                type='button'
                id='option1Btn'
                className={selected === "male" ? "selected" : "notSelected"}
                onClick={() => handleToggleGender("male")}>
                Male
              </button>
              <button
                type='button'
                className={selected === "female" ? "selected" : "notSelected"}
                onClick={() => handleToggleGender("female")}>
                Female
              </button>
            </div>
            <button className='goBtn' type='submit'>
              go
            </button>
          </form>
        </div>
        {!validated ?
          <div className='youngOld'>
            <h3>Do you think you belong to the young or old? You are the <span>{youngPersonCount.toLocaleString()}</span> person alive on the planet. This means that you are <span>older than {olderPercentageWorld.toFixed(2)}%</span> of the world's population and <span>older than {youngerRomania.toLocaleString()}</span> people in Romania.</h3>
            <div className='toggleRegion'>
              <button
                type='button'
                id='option1Btn'
                className={region === "World" ? "selected" : "notSelected"}
                onClick={() => handleToggleRegion("World")}>
                World
              </button>
              <button
                type='button'
                className={testBool === true ? "selected" : "notSelected"}
                onClick={() => handleToggleRegion({ region })}>
                {countryChoice}
              </button>
            </div>
            <div className="younger-older-you">
              <div className="younger-you">
                <div className="younger-num">{testBool === true ? youngerRomania.toLocaleString() : youngPersonCount.toLocaleString()}</div>
                <p>People younger than you ({testBool === true ? olderPercentageRomania.toFixed(2) : olderPercentageWorld.toFixed(2)}%)</p>
              </div>
              <div className="citizen">
                <div className="citizen-icon">
                  {selected === "male" ? <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="5em" viewBox="0 0 320 512"><path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" /></svg>}
                </div>
                You as a citizen of {testBool === true ? countryChoice : "World"}
              </div>
              <div className="older-you">
                <div className="older-num">{testBool === true ? olderRomania.toLocaleString() : oldPersonCount.toLocaleString()}</div>
                <p>People older than you ({testBool === true ? youngerPercentageRomania.toFixed(2) : youngerPercentageWorld.toFixed(2)}%)</p>
                {/* <AreaChart
                    width={600}
                    height={300}
                    data={modifiedData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="1 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="population" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart> */}
              </div>
            </div>
            <div className='line_graph'>
              <Line options={options} data={dataset} />
            </div>
            <div className="milestones">
              <h1>What are the big milestones to expect in your life?</h1>
              <h1>Your next milestone is <span>{thirdBillion}</span> when you'll be the <span>{billionMilestone}</span> person to be alive in the world.</h1>
            </div>

            <ul className='projections'>
              <h3>Timeline (Projections)</h3>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{dayChoice + "/" + abbrMonth + "/" + yearChoice}</h2>
                </div>
                <div className='message-date'>
                  <h2>Your birth!</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{firstBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>1 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{secondBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>2 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{dayChoice + "/" + abbrMonth + "/" + eighteenthBirthday}</h2>
                </div>
                <div className='message-date'>
                  <h2>Your 18th birthday!</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{thirdBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>3 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{fourthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>4 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{fifthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>5 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{sixthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>6 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{seventhBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>7 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{eighthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>8 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{worldLifeSpanDate}</h2>
                </div>
                <div className='message-date'>
                  <h2>Your projected life expectancy in World</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{ninthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>9 billionth person</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{countryLifeSpanDate}</h2>
                </div>
                <div className='message-date'>
                  <h2>Your projected life expectancy in {countryChoice}</h2>
                </div>
              </li>
              <li class="projection">
                <div className='check-line'></div>
                <div className='date'>
                  <h2 className='day-date'>{tenthBillion}</h2>
                </div>
                <div className='message-date'>
                  <h2>10 billionth person</h2>
                </div>
              </li>
            </ul>
            <div className="milestones">
              <h1>Did you know that you share a birthday with about <span>{parseInt(estimatedBirths).toLocaleString()}</span> people around the world and that approximately <span>{birthsPerHour}</span> people were born in the same hour?</h1>
            </div>
            <div className='line_graph'>
              <h3>Mortality Distribution</h3>
              <Graph />
            </div>
            <div className="timeline">
              {/* <h2>Timeline (projections)</h2> */}
            </div>
            <div className="lifespan">
              <h1>We estimate that you will live until <span>{parseInt(worldLifeSpan)}</span> if you were an average world citizen. Whereas in <span>{countryChoice}</span> it would be until <span>{parseInt(countryLifeSpan)}</span> years old.</h1>
            </div>
          </div> : null}




        {/* <div className="info">
          <div className="info-item">
            <p className='worldpoplabel'>Updated with the <a href='https://population.un.org/wpp/'>2022 United Nations Revision</a></p>
            <h2 className='worldpop'>Current World Population</h2>
            <p className='world'>{simulatedPopulation.toLocaleString("en")}</p>

          </div>
          <div className="info">
            <h3>Top 16 Countries by Population as of Today</h3>
            <div className="medium-container">
              <div className='country-population-1'>
                <div className='individual-country'>
                  1.
                  <img className='flag' src={chinaFlag} alt="china" />
                  <h5>China</h5><p>{chinaPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  2.
                  <img className='flag' src={indiaFlag} alt="india" />
                  <h5>India</h5><p> {indiaPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  3.
                  <img className='flag' src={usaFlag} alt="usa" />
                  <h5>United States</h5><p> {usaPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  4.
                  <img className='flag' src={indonesiaFlag} alt="indonesia" />
                  <h5>Indonesia</h5><p> {indonesiaPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  5.
                  <img className='flag' src={pakistanFlag} alt="pakistan" />
                  <h5>Pakistan </h5><p>{pakistanPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  6.
                  <img className='flag' src={brazilFlag} alt="brazil" />
                  <h5>Brazil</h5><p> {brazilPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  7.
                  <img className='flag' src={bangladeshFlag} alt="bangladesh" />
                  <h5>Bangladesh </h5><p>{bangladeshPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  8.
                  <img className='flag' src={japanFlag} alt="japan" />
                  <h5>Japan</h5><p> {japanPopulation.toLocaleString("en")}</p>
                </div>
              </div>
              <div className='country-population-2'>
                <div className='individual-country'>
                  9.
                  <img className='flag' src={mexicoFlag} alt="mexico" />
                  <h5>Mexico</h5><p> {mexicoPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  10.
                  <img className='flag' src={ethiopiaFlag} alt="ethiopia" />
                  <h5>Ethiopia</h5><p> {ethiopiaPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  11.
                  <img className='flag' src={philippinesFlag} alt="philippines" />
                  <h5>Philippine </h5><p>{philippinesPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  12.
                  <img className='flag' src={egyptFlag} alt="egypt" />
                  <h5>Egypt</h5><p> {egyptPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  13.
                  <img className='flag' src={vietnamFlag} alt="vietnam" />
                  <h5>Vitenam </h5><p>{vietnamPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  14.
                  <img className='flag' src={drcongoFlag} alt="drcongo" />
                  <h5>Congo</h5><p> {drcongoPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  15.
                  <img className='flag' src={turkeyFlag} alt="turkey" />
                  <h5>Turkey</h5><p> {turkeyPopulation.toLocaleString("en")}</p>
                </div>
                <div className='individual-country'>
                  16.
                  <img className='flag' src={germanyFlag} alt="germany" />
                  <h5>Germany</h5><p> {germanyPopulation.toLocaleString("en")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="small-container">
            <p className='populationChartLabel'>World Population: Past, Present</p>
            {renderLineChart}
          </div>
        </div> */}
      </div >
    </>
  )
}

export default Demographic