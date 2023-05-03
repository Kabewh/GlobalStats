import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Demographic = () => {
  const LOCALHOST = "http://localhost:8000/"


  const [simulatedPopulation, setSimulatedPopulation] = useState(0);
  const birthRate = 0.018;
  const deathRate = 0.008;
  const data = [{ name: '1951', uv: 2584034261, amt: 2400 },
  { name: '1952', uv: 2584034261, pv: 2400, amt: 2400 },
  { name: '1953', uv: 2630861562, pv: 2400, amt: 2400 },
  { name: '1954', uv: 2677608960, pv: 2400, amt: 2400 },
  { name: '1955', uv: 200, pv: 2400, amt: 2400 },
  { name: '1956', uv: 200, pv: 2400, amt: 2400 },
  { name: '1957', uv: 200, pv: 2400, amt: 2400 },
  { name: '1958', uv: 200, pv: 2400, amt: 2400 },
  { name: '1959', uv: 200, pv: 2400, amt: 2400 },
  { name: '1960', uv: 200, pv: 2400, amt: 2400 },
  { name: '1961', uv: 200, pv: 2400, amt: 2400 },
  { name: '1962', uv: 200, pv: 2400, amt: 2400 },
  { name: '1963', uv: 200, pv: 2400, amt: 2400 },
  { name: '1964', uv: 200, pv: 2400, amt: 2400 },
  { name: '1965', uv: 200, pv: 2400, amt: 2400 },
  { name: '1966', uv: 200, pv: 2400, amt: 2400 },
  { name: '1967', uv: 200, pv: 2400, amt: 2400 },
  { name: '1968', uv: 200, pv: 2400, amt: 2400 },
  { name: '1969', uv: 200, pv: 2400, amt: 2400 },
  { name: '1970', uv: 200, pv: 2400, amt: 2400 },
  { name: '1971', uv: 200, pv: 2400, amt: 2400 },
  { name: '1972', uv: 200, pv: 2400, amt: 2400 },
  { name: '1973', uv: 200, pv: 2400, amt: 2400 },
  { name: '1974', uv: 200, pv: 2400, amt: 2400 },
  { name: '1975', uv: 200, pv: 2400, amt: 2400 },
  { name: '1976', uv: 200, pv: 2400, amt: 2400 },
  { name: '1977', uv: 200, pv: 2400, amt: 2400 },
  { name: '1978', uv: 200, pv: 2400, amt: 2400 },
  { name: '1979', uv: 200, pv: 2400, amt: 2400 },
  { name: '1980', uv: 200, pv: 2400, amt: 2400 },
  { name: '1981', uv: 200, pv: 2400, amt: 2400 },
  { name: '1982', uv: 200, pv: 2400, amt: 2400 },
  { name: '1983', uv: 200, pv: 2400, amt: 2400 },
  { name: '1984', uv: 200, pv: 2400, amt: 2400 },
  { name: '1985', uv: 200, pv: 2400, amt: 2400 },
  { name: '1986', uv: 200, pv: 2400, amt: 2400 },
  { name: '1987', uv: 200, pv: 2400, amt: 2400 },
  { name: '1988', uv: 200, pv: 2400, amt: 2400 },
  { name: '1989', uv: 200, pv: 2400, amt: 2400 },
  { name: '1990', uv: 200, pv: 2400, amt: 2400 },
  { name: '1991', uv: 200, pv: 2400, amt: 2400 },
  { name: '1992', uv: 200, pv: 2400, amt: 2400 },
  { name: '1993', uv: 200, pv: 2400, amt: 2400 },
  { name: '1994', uv: 200, pv: 2400, amt: 2400 },
  { name: '1995', uv: 200, pv: 2400, amt: 2400 },
  { name: '1996', uv: 200, pv: 2400, amt: 2400 },
  { name: '1997', uv: 200, pv: 2400, amt: 2400 },
  { name: '1998', uv: 200, pv: 2400, amt: 2400 },
  { name: '1999', uv: 200, pv: 2400, amt: 2400 },
  { name: '2001', uv: 200, pv: 2400, amt: 2400 },
  { name: '2002', uv: 200, pv: 2400, amt: 2400 },
  { name: '2003', uv: 200, pv: 2400, amt: 2400 },
  { name: '2004', uv: 200, pv: 2400, amt: 2400 },
  { name: '2005', uv: 200, pv: 2400, amt: 2400 },
  { name: '2006', uv: 200, pv: 2400, amt: 2400 },
  { name: '2007', uv: 200, pv: 2400, amt: 2400 }];

  useEffect(() => {
    fetchPopulation()
    calculatePopulation()
  }, []);

  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  async function fetchPopulation() {
    const response = await fetch(LOCALHOST + "/population")
    const jsonData = await response.json()
    setSimulatedPopulation(jsonData);
  }


  async function calculatePopulation() {
    const response = await fetch(LOCALHOST + "/population")
    const jsonData = await response.json()
    const interval = setInterval(() => {
      const netGrowthRate = birthRate - deathRate;
      const changePerSecond = netGrowthRate * jsonData / (365 * 24 * 60 * 60);
      setSimulatedPopulation(jsonData => jsonData + Math.round(changePerSecond));
    }, 1000);
    return () => clearInterval(interval);
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="info">
          <div className="info-item">
            <h2>Current World Population</h2>
            <p>{simulatedPopulation.toLocaleString("en")}</p>
          </div>
          <div className="small-container">
            {renderLineChart}
          </div>
        </div>
      </div>
    </>

  )
}

export default Demographic