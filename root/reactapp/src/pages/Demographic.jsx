import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { read, utils, writeFile } from 'xlsx';

const Demographic = () => {
  const LOCALHOST = "http://localhost:8000/"

  const [simulatedPopulation, setSimulatedPopulation] = useState(0);
  const [changePerSecond, setChangePerSecond] = useState(0);
  const [movies, setMovies] = useState([]);
  const birthRate = 0.018;
  const deathRate = 0.008;
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

  useEffect(() => {
    fetchPopulation()
    calculatePopulation()
    // populateChart()
  }, []);

  useEffect(() => {
    fetchCountries()
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
    const response = await fetch(LOCALHOST + "/population")
    const jsonData = await response.json()
    if (parseInt(localStorage.getItem("population")) == 0) {
      setSimulatedPopulation(jsonData)

    } else {
      setSimulatedPopulation(parseInt(localStorage.getItem("population")));
    }
  }

  //import all countries and their population

  async function fetchCountries() {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/population')
    const jsonData = await response.json()
    const nigeria = jsonData.data.filter((item) => item.country === 'Nigeria')
    const nigeriaPopulation = nigeria[0].populationCounts.filter((item) => item.year === 2018)[0].value
    console.log(nigeriaPopulation)
  }

  async function calculatePopulation() {
    const response = await fetch(LOCALHOST + "/population")
    const jsonData = await response.json()
    const interval = setInterval(() => {
      const netGrowthRate = birthRate - deathRate;
      const data = parseInt(localStorage.getItem('population'));
      const value = netGrowthRate * data / (365 * 24 * 60 * 60)
      const randomizedValue = parseInt(Math.floor(Math.random() * 2) === 0 ? value - 1 : value + 1);
      setChangePerSecond(randomizedValue);
      setSimulatedPopulation(data => data + randomizedValue);
      localStorage.setItem("population", data + randomizedValue)
      setSimulatedPopulation(parseInt(localStorage.getItem('population')))
    }, 1000);
    return () => clearInterval(interval);
  }



  return (
    <>
      <Navbar />
      <div className="container">
        <div className="info">
          <div className="info-item">
            <p className='worldpoplabel'>Updated with the <a href='https://population.un.org/wpp/'>2022 United Nations Revision</a></p>
            <h2 className='worldpop'>Current World Population</h2>
            <p className='world'>{simulatedPopulation.toLocaleString("en")}</p>
          </div>
          <div className="small-container">
            <p className='populationChartLabel'>World Population: Past, Present</p>
            {renderLineChart}
          </div>
        </div>
      </div >
    </>

  )
}

export default Demographic