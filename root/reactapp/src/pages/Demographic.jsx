import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { read, utils, writeFile } from 'xlsx';

const Demographic = () => {
  const data = [{ name: '1950', population: 2584034261 },
  { name: '1951', population: 2584034261 },
  { name: '1952', population: 2630861562 },
  { name: '1953', population: 2677608960 },
  { name: '1954', population: 2718651703 },
  { name: '1955', population: 2773492579 },
  { name: '1956', population: 2828512683 },
  { name: '1957', population: 2887221030 },
  { name: '1958', population: 2944995164 },
  { name: '1959', population: 2995589212 },
  { name: '1960', population: 3042877656 },
  { name: '1961', population: 3093863563 },
  { name: '1962', population: 3159509922 },
  { name: '1963', population: 3232048572 },
  { name: '1964', population: 3302376104 },
  { name: '1965', population: 3371847862 },
  { name: '1966', population: 3440986209 },
  { name: '1967', population: 3509910122 },
  { name: '1968', population: 3583711493 },
  { name: '1969', population: 3657599057 },
  { name: '1970', population: 3733181615 },
  { name: '1971', population: 3807144569 },
  { name: '1972', population: 3882457201 },
  { name: '1973', population: 3958045806 },
  { name: '1974', population: 4032988348 },
  { name: '1975', population: 4105886113 },
  { name: '1976', population: 4179125652 },
  { name: '1977', population: 4252419327 },
  { name: '1978', population: 4326896089 },
  { name: '1979', population: 4404269653 },
  { name: '1980', population: 4483745758 },
  { name: '1981', population: 4565509559 },
  { name: '1982', population: 4650460182 },
  { name: '1983', population: 4733308294 },
  { name: '1984', population: 4818363854 },
  { name: '1985', population: 4905097372 },
  { name: '1986', population: 4995029307 },
  { name: '1987', population: 5086939683 },
  { name: '1988', population: 5177648264 },
  { name: '1989', population: 5269760352 },
  { name: '1990', population: 5362591372 },
  { name: '1991', population: 5449900363 },
  { name: '1992', population: 5535471822 },
  { name: '1993', population: 5535471822 },
  { name: '1994', population: 5619395224 },
  { name: '1995', population: 5702060762 },
  { name: '1996', population: 5784378146 },
  { name: '1997', population: 5865912450 },
  { name: '1998', population: 5947050072 },
  { name: '1999', population: 6027574888 },
  { name: '2000', population: 6107942028 },
  { name: '2001', population: 6189855922 },
  { name: '2002', population: 6271638043 },
  { name: '2003', population: 6353176677 },
  { name: '2004', population: 6434620053 },
  { name: '2005', population: 6516882903 },
  { name: '2006', population: 6599469335 },
  { name: '2007', population: 6683363101 },
  { name: '2008', population: 6768533988 },
  { name: '2009', population: 6854660556 },
  { name: '2010', population: 6941951260 },
  { name: '2011', population: 7029254950 },
  { name: '2012', population: 7116995900 },
  { name: '2013', population: 7206399942 },
  { name: '2014', population: 7294786798 },
  { name: '2015', population: 7383240040 },
  { name: '2016', population: 7469955033 },
  { name: '2017', population: 7556993443 },
  { name: '2018', population: 7642651364 },
  { name: '2019', population: 7724928292 },
  { name: '2020', population: 7804973773 },
  { name: '2021', population: 7876931987 },
  ];

  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];


  const LOCALHOST = "http://localhost:8000/"

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
  const modifiedData = data.map((item) => {
    return {
      name: item.name,
      population: item.population.toLocaleString(),
    }
  })

  const renderLineChart = (
    <LineChart width={1000} height={400} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 90 }}>
      <Line type="monotone" dataKey="population" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="population" />
      <Tooltip />
    </LineChart>
  );

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
    console.log("fetch younger Older: " + jsonData.toLocaleString())
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
    const interval = setInterval(() => {
      setSimulatedPopulation(data => data + 3);
    }, 1000);
    return () => clearInterval(interval);
  }

  const [dayChoice, setDayChoice] = useState('')
  const [monthChoice, setMonthChoice] = useState('')
  const [yearChoice, setYearChoice] = useState('')
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
  const [worldLifeSpan, setWorldLifeSpan] = useState();
  const [countryLifeSpan, setCountryLifeSpan] = useState();
  const [nextMilestoneDate, setNextMilestoneDate] = useState();
  const [billionMilestone, setBillionMilestone] = useState();


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
    getWorldLifeSpan();
    getCountryLifeSpan();
    const worldLifeSpanDate = dayChoice + "/" + monthChoice + "/" + yearChoice + worldLifeSpan
    console.log(worldLifeSpanDate)
  }

  async function calculateEstimatedPeopleBorn() {
    const response = await fetch(LOCALHOST + "population/World/" + yearChoice)
    const jsonData = await response.json()

    const birthDate = new Date(yearChoice - 1, monthChoice - 1, dayChoice)
    const currentDate = new Date()


    const populationGrowth = simulatedPopulation - jsonData
    const timeElapsed = (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25);

    const avgAnnualGrowth = jsonData / timeElapsed;
    console.log(avgAnnualGrowth)
    const daysEstimate = (3_000_000_000 / avgAnnualGrowth) * 365.25;
    const estimatedDate = new Date(currentDate);
    estimatedDate.setDate(currentDate.getDate() + Math.round(daysEstimate))
    const correctDate = estimatedDate.getDay() + "/" + estimatedDate.getMonth() + "/" + estimatedDate.getFullYear()
    console.log(estimatedDate.getMonth)
    setNextMilestoneDate(correctDate)
    setBillionMilestone("3rd billionth")
  }

  async function calculateSharedBirths() {
    if (countryChoice && yearChoice) {
      const response = await fetch(LOCALHOST + "population/" + countryChoice + "/" + yearChoice)
      const jsonData = await response.json()
      fetchYoungerOlder("World", yearChoice);
      const population = jsonData;
      const avgDailyBirthRate = (births / simulatedPopulation) * 1000
      setBirthsPerHour(parseInt(births / 8760).toLocaleString())
      console.log(birthsPerHour)
      const avgBirthRate = (avgDailyBirthRate / 1000) * 365
      const proportionBirths = 1 / 365
      const estimatedBirths = avgBirthRate * proportionBirths / 100 * simulatedPopulation
      setEstimatedBirths(estimatedBirths)
      calculateLifeSpan()
      calculateEstimatedPeopleBorn()
    }
  }

  function calculateCounts() {
    const proportion = parseFloat(age) / lifeExpectancy;
    const younger = Math.floor(simulatedPopulation * proportion);
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
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
    const age = 2023 - yearChoice;
    setAge(age)
    calculateCounts();
  }


  const handleDay = (e) => {
    setDayChoice(e.target.value)
  }

  const handleMonth = (e) => {
    setMonthChoice(e.target.value)
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

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="world-clock">
          <h3>
            <p>Current world<br></br>population clock</p>
            <p className="population-counter">{simulatedPopulation.toLocaleString("en")}</p>
            <svg className='up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg>
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
        {validated ?
          <div className='youngOld'>
            <h3>Do you think you belong to the young or old? You are the <span>{youngPersonCount.toLocaleString()}</span> person alive on the planet. This means that you are older than <span>{olderPercentageWorld.toFixed(2)}%</span> of the world's population and older than <span>{youngerRomania.toLocaleString()}</span> people in Romania.</h3>
            <div className="region-switcher"></div>
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
              </div>
            </div>
            <div className="milestones">
              <h1>What are the big milestones to expect in your life?</h1>
              <h1>Your next milestone is <span>{nextMilestoneDate}</span> when you'll be the <span>{billionMilestone}</span> person to be alive in the world.</h1>
            </div>
            <div className="milestones">
              <h1>Did you know that you share a birthday with about <span>{parseInt(estimatedBirths).toLocaleString()}</span> people around the world and that approximately <span>{birthsPerHour}</span> people were born in the same hour?</h1>
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