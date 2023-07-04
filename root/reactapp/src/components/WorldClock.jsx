import React from 'react'
import { useState, useEffect } from 'react';

const LOCALHOST = "http://localhost:8000/"

const WorldClock = () => {
    const [simulatedPopulation, setSimulatedPopulation] = useState(0);
    const [divElements, setDivElements] = useState([]);

    useEffect(() => {
        fetchPopulation()
        calculatePopulation()
    }, []);


    async function fetchPopulation() {
        const response = await fetch(LOCALHOST + "population/" + "World" + "/" + "2023" + "/")
        const jsonData = await response.json()
        setSimulatedPopulation(jsonData)
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

    const addDivElement = () => {
        setDivElements(prevDivs => [...prevDivs, <div key={prevDivs.length} class="babyGenerator"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='up'><path d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z" /></svg></div>]);

    };

    return (
        <div className="world-clock">
            <h3>
                <p>Current world<br></br>population clock</p>
                <p className="population-counter">{simulatedPopulation.toLocaleString("en")}</p>
                <div className='babies'>
                </div>{divElements.map(div => div).reverse()}
            </h3>
        </div>
    )
}

export default WorldClock