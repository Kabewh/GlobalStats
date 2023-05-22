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
    console.log(jsonData)
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
        </div>
      </div >
    </>

  )
}

export default Demographic