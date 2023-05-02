import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { json } from 'react-router-dom';

const Homepage = () => {
    const LOCALHOST = "http://localhost:8000/"

    const [population, setPopulation] = useState([]);
    const [birthsToday, setBirthsToday] = useState(0);
    const [simulatedPopulation, setSimulatedPopulation] = useState(0);
    // const [birthRate, setBirthRate] = useState(0);
    // const [deathRate, setDeathRate] = useState([]);

    const birthRate = 0.018;
    const deathRate = 0.008;
    var i = 0;

    useEffect(() => {
        fetchPopulation()
        fetchBirthsToday()
        calculateChangeRate()
        // calculateBirthRate()
        calculateBirthsToday()
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

    async function calculateBirthsToday() {
        const response = await fetch(LOCALHOST + "/birthsToday")
        const jsonData = await response.json()
        const factor = 1000;
        const pop = 8030786410;
        const births = 44757521;
        setInterval(() => {
            const changePerSecond = ((births / pop) * factor) / 2;
            const rounded = changePerSecond.toFixed(2)
            const intChangePerSecond = parseInt(rounded)
            const pisamas = Math.round(intChangePerSecond)
            setBirthsToday(jsonData => parseInt(jsonData) + pisamas);
        }, 1000)
    }

    async function calculateChangeRate() {
        const response = await fetch(LOCALHOST + "/population")
        const jsonData = await response.json()
        setInterval(() => {
            // console.log("birthrate: " + birthRate)
            // console.log("deathrate: " + deathRate)
            const netGrowthRate = birthRate - deathRate;
            // console.log("netGrowthRRate: " + netGrowthRate);
            const changePerSecond = netGrowthRate * jsonData / (365 * 24 * 60 * 60);
            setSimulatedPopulation(jsonData => jsonData + Math.round(changePerSecond));
        }, 1000)
    }
    // async function calculateBirthRate() {
    //     const response = await fetch(LOCALHOST + "/birthsToday")
    //     const jsonData = await response.json()

    //     const responsePop = await fetch(LOCALHOST + "/population")
    //     const jsonDataPop = await responsePop.json()

    //     const rate = (jsonData / jsonDataPop) / 1000;
    //     setBirthRate(rate);

    // }

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
                            <p>{"102235"}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Homepage