import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
    const LOCALHOST = "http://localhost:8000/"

    const [population, setPopulation] = useState([]);
    const [birthsToday, setBirthsToday] = useState([]);
    const [simulatedPopulation, setSimulatedPopulation] = useState([]);
    // const [birthRate, setBirthRate] = useState(0);
    // const [deathRate, setDeathRate] = useState([]);
    const birthRate = 0.018;
    const deathRate = 0.008;
    var i = 0;

    useEffect(() => {
        fetchPopulation()
        fetchBirthsToday()
        // calculateBirthRate()
        simulatePopulation()
        setInterval(() => {
            simulatePopulation();
        }, 1001);
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

    // function calculateBirthRate() {
    //     const rate = (birthsToday / population) * 1000;
    //     setBirthRate(rate.toFixed(2));
    // }

    function simulatePopulation() {
        const netGrowthRate = birthRate - deathRate;
        const changePerSecond = netGrowthRate * simulatedPopulation / (365 * 24 * 60 * 60);
        setSimulatedPopulation(simulatedPopulation => simulatedPopulation + Math.round(changePerSecond));
        console.log(simulatedPopulation)

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
                            <p>{"102235"}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Homepage