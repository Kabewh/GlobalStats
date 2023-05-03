import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';

const Homepage = () => {
    const LOCALHOST = "http://localhost:8000/"

    const [population, setPopulation] = useState([]);
    const [birthsToday, setBirthsToday] = useState(0);
    const [deathsToday, setDeathsToday] = useState(0);
    const [simulatedPopulation, setSimulatedPopulation] = useState(0);
    const [energyUsedToday, setEnergyUsedToday] = useState(0);
    // const [birthRate, setBirthRate] = useState(0);
    // const [deathRate, setDeathRate] = useState([]);

    const birthRate = 0.018;
    const deathRate = 0.008;
    var i = 0;

    useEffect(() => {
        fetchPopulation()
        fetchBirthsToday()
        fetchDeathsToday()
        fetchEnergyUsedToday()
        calculatePopulation()
        // calculateBirthRate()
        calculateBirthsToday()
        calculateDeath()
    }, []);


    async function fetchPopulation() {
        const response = await fetch(LOCALHOST + "/population")
        const jsonData = await response.json()
        setPopulation(JSON.stringify(jsonData))
        setSimulatedPopulation(jsonData);
    }

    async function fetchBirthsToday() {
        const response = await fetch(LOCALHOST + "/birthsToday")
        const jsonData = await response.json()
        setBirthsToday(JSON.stringify(jsonData))
    }

    async function fetchDeathsToday() {
        const response = await fetch(LOCALHOST + "/deathsToday")
        const jsonData = await response.json()
        console.log("fetched: " + jsonData)
        setDeathsToday(JSON.stringify(jsonData))
    }

    async function fetchEnergyUsedToday() {
        const response = await fetch(LOCALHOST + "/energyUsedToday")
        const jsonData = await response.json()
        console.log("fetched: " + jsonData)
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
            const pisamas = Math.round(intChangePerSecond)
            setBirthsToday(jsonData => parseInt(jsonData) + pisamas);
        }, 1000);
        return () => clearInterval(interval);
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
            const pisamas = Math.round(intChangePerSecond)
            setDeathsToday(jsonData => parseInt(jsonData) + pisamas);
        }, 1000);
        return () => clearInterval(interval);
    }


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="info">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, animi. Molestias nihil, harum commodi a recusandae obcaecati qui saepe laboriosam iusto sint! Eveniet ipsum voluptates magnam dolores voluptatibus explicabo mollitia est labore numquam perspiciatis. Dolorum minus, necessitatibus, quam nam recusandae soluta provident aut qui sit id exercitationem ducimus sunt quibusdam.</p>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/demographic'>Demographic</a></h2>
                        <div className="info-item">
                            <h3>Current World Population</h3>
                            <p>{simulatedPopulation}</p>
                        </div>
                        <div className="info-item">
                            <h3>Births Today</h3>
                            <p>{birthsToday}</p>
                        </div>
                        <div className="info-item">
                            <h3>Deaths Today</h3>
                            <p>{deathsToday}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/energy'>Energy</a></h2>
                        <div className="info-item">
                            <h3>Energy used today</h3>
                            <p>{energyUsedToday}</p>
                        </div>
                        <div className="info-item">
                            <h3>Oil left (barrels)</h3>
                            <p>1404945990331</p>
                        </div>
                        <div className="info-item">
                            <h3>Days to the end of coal</h3>
                            <p>147745</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <h2 className='c-title'><a href='/health'>Health</a></h2>
                        <div className="info-item">
                            <h3>Cigarrettees smoked today</h3>
                            <p>6877993412</p>
                        </div>
                        <div className="info-item">
                            <h3>Abortions this year</h3>
                            <p>14937011</p>
                        </div>
                        <div className="info-item">
                            <h3>Road traffic fatalities this year</h3>
                            <p>452672</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Homepage