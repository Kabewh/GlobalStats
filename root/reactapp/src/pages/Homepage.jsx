import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';

const Homepage = () => {
    const LOCALHOST = "http://localhost:8000/"

    const [birthsToday, setBirthsToday] = useState(0);
    const [deathsToday, setDeathsToday] = useState(0);
    const [simulatedPopulation, setSimulatedPopulation] = useState(0);
    const [energyUsedToday, setEnergyUsedToday] = useState(0);
    // const [birthRate, setBirthRate] = useState(0);
    // const [deathRate, setDeathRate] = useState([]);
    const [changePerSecond, setChangePerSecond] = useState(0);

    const birthRate = 0.018;
    const deathRate = 0.008;
    var i = 0;

    useEffect(() => {
        fetchPopulation()
        fetchBirthsToday()
        fetchDeathsToday()
        fetchEnergyUsedToday()
        calculatePopulation()
        calculateBirthsToday()
        calculateDeath()
    }, []);
    // 

    async function fetchPopulation() {
        const response = await fetch(LOCALHOST + "/population")
        const jsonData = await response.json()
        console.log(parseInt(localStorage.getItem('population')))
        setSimulatedPopulation(jsonData)
        if (parseInt(localStorage.getItem("population")) == 0) {
            setSimulatedPopulation(jsonData)
        } else {
            setSimulatedPopulation(parseInt(localStorage.getItem("population")));
        }
    }

    async function fetchBirthsToday() {
        const response = await fetch(LOCALHOST + "/birthsToday")
        const jsonData = await response.json()
        setBirthsToday(JSON.stringify(jsonData))
    }

    async function fetchDeathsToday() {
        const response = await fetch(LOCALHOST + "/deathsToday")
        const jsonData = await response.json()
        setDeathsToday(JSON.stringify(jsonData))
    }

    async function fetchEnergyUsedToday() {
        const response = await fetch(LOCALHOST + "/energyUsedToday")
        const jsonData = await response.json()
        setEnergyUsedToday(JSON.stringify(jsonData))
    }

    async function calculateBirthsToday() {
        const response = await fetch(LOCALHOST + "/birthsToday")
        const jsonData = await response.json()
        const factor = 1000;
        const pop = 8030786410;
        const births = 44757521;
        const interval = setInterval(() => {
            const changePerSecond = ((births / pop) * factor) / 2;
            const rounded = changePerSecond.toFixed(2)
            const intChangePerSecond = parseInt(rounded)
            const int = Math.round(intChangePerSecond)
            setBirthsToday(jsonData => parseInt(jsonData) + int);
        }, 1000);
        return () => clearInterval(interval);
    }

    //if population fetched initially is != 0 that means that we already have a value in the local storage and get it from there
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
            // setSimulatedPopulation(parseInt(localStorage.getItem('population')))
        }, 1000);
        return () => clearInterval(interval);
    }

    async function calculateDeath() {
        const response = await fetch(LOCALHOST + "/deathsToday")
        const jsonData = await response.json()
        const factor = 1000;
        const pop = 8030786410;
        const births = 44757521;
        const interval = setInterval(() => {
            const changePerSecond = ((births / pop) * factor) / 2;
            const rounded = changePerSecond.toFixed(2)
            const intChangePerSecond = parseInt(rounded)
            const int = Math.round(intChangePerSecond)
            setDeathsToday(jsonData => parseInt(jsonData) + int);
        }, 1000);
        return () => clearInterval(interval);
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="info">
                    <h3></h3>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/demographic'>Demographic</a></h2>
                        <div className="info-item">
                            <h3 className='wrap'>Current World Population</h3>
                            <p className='number'>{simulatedPopulation.toLocaleString()}</p>
                        </div>
                        <div className="info-item">
                            <h3>Births Today</h3>
                            <p className='number'>{birthsToday.toLocaleString()}</p>
                        </div>
                        <div className="info-item">
                            <h3>Deaths Today</h3>
                            <p className='number'>{deathsToday.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/energy'>Energy</a></h2>
                        <div className="info-item">
                            <h3 className='wrap'>Energy used today</h3>
                            <p className='number'>{energyUsedToday.toLocaleString()}</p>
                        </div>
                        <div className="info-item">
                            <h3>Oil left (barrels)</h3>
                            <p className='number'>1.404.945.990.331</p>
                        </div>
                        <div className="info-item">
                            <h3>Days to the end of coal</h3>
                            <p className='number'>147.745</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/health'>Health</a></h2>
                        <div className="info-item">
                            <h3 className='wrap'>Cigarrettees smoked today</h3>
                            <p className='number'>6.877.993.412</p>
                        </div>
                        <div className="info-item">
                            <h3>Abortions this year</h3>
                            <p className='number'>14.937.011</p>
                        </div>
                        <div className="info-item">
                            <h3>Road traffic fatalities this year</h3>
                            <p className='number'>452.672</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Homepage