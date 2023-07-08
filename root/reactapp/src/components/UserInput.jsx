import React from 'react'
import { useState, useEffect } from 'react';

const UserInput = (props) => {
    const LOCALHOST = "http://localhost:8000/"
    const birthRate = 0.018;
    const deathRate = 0.008;
    const birthdate = new Date("2002-02-12");
    const currentDate = new Date();
    const daysSinceBirth = Math.floor(
        (currentDate - birthdate) / (1000 * 60 * 60)
    );
    const dailyBirths = 366.5
    const peopleBornAfter = daysSinceBirth * dailyBirths
    const total_deaths = 69248000;
    const [simulatedPopulation, setSimulatedPopulation] = useState(0);
    const [divElements, setDivElements] = useState([]);
    const [yearChoice, setYearChoice] = useState();
    const [dayChoice, setDayChoice] = useState();
    const [monthChoice, setMonthChoice] = useState();
    const [age, setAge] = useState(0);
    const [eighteenthBirthday, setEighteenthBirthday] = useState(0);
    const [youngerRomania, setYoungerRomania] = useState(0);
    const [olderRomania, setOlderRomania] = useState(0);
    const [youngerPercentageWorld, setYoungerPercentageWorld] = useState(0);
    const [olderPercentageWorld, setOlderPercentageWorld] = useState(0);
    const [youngerPercentageRomania, setYoungerPercentageRomania] = useState(0);
    const [olderPercentageRomania, setOlderPercentageRomania] = useState(0);
    const [youngPersonCount, setYoungPersonCount] = useState(0);
    const [oldPersonCount, setOldPersonCount] = useState(0);
    const [countryChoice, setCountryChoice] = useState("Romania");
    const [selected, setSelected] = useState("male");
    const [validated, setValidated] = useState(false);
    const [romaniaPopulation, setRomaniaPopulation] = useState(0);
    const [lifeExpectancy, setLifeExpectancy] = useState(0);
    const [countries, setCountries] = useState([]);
    const [abbrMonth, setAbbrMonth] = useState("");
    const [testBool, setTestBool] = useState(false);
    const [region, setRegion] = useState("");
    const [gender, setGender] = useState("male");
    const [nextMilestoneDate, setNextMilestoneDate] = useState();
    const [billionMilestone, setBillionMilestone] = useState("");

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];


    useEffect(() => {
        fetchPopulation();
        getCountries();
        fetchRomaniaPopulation();
        fetchLifeExpectancy(countryChoice, yearChoice)
    }, [simulatedPopulation])

    async function fetchPopulation() {
        const response = await fetch(LOCALHOST + "population/" + "World" + "/" + "2023" + "/")
        const jsonData = await response.json()
        setSimulatedPopulation(jsonData)
    }

    async function fetchRomaniaPopulation() {
        const response = await fetch(LOCALHOST + "population/" + "Romania" + "/" + "2023" + "/")
        const jsonData = await response.json()
        setRomaniaPopulation(jsonData)
    }

    async function getCountries() {
        const response = await fetch(LOCALHOST + "countries")
        const jsonData = await response.json()
        jsonData.map((country, index) => (
            setCountries(countries => [...countries, country])
        ))
    }

    async function fetchLifeExpectancy(country, year) {
        const response = await fetch(LOCALHOST + "lifeExpectancy/" + country + "/" + year + "/")
        const jsonData = await response.json()
        setLifeExpectancy(jsonData)
    }


    // async function calculateEstimatedPeopleBorn() {
    //     const response = await fetch(LOCALHOST + "population/World/" + yearChoice)
    //     const jsonData = await response.json()
    //     const birthDate = new Date(yearChoice - 1, monthChoice, dayChoice)
    //     const currentDate = new Date()
    //     const timeElapsed = (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25);
    //     const avgAnnualGrowth = jsonData / timeElapsed;
    //     const daysEstimate = (3_000_000_000 / avgAnnualGrowth) * 365.25;
    //     const estimatedDate = new Date(currentDate);
    //     estimatedDate.setDate(currentDate.getDate() + Math.round(daysEstimate))
    //     const correctDate = estimatedDate.getDay() + "/" + estimatedDate.getMonth() + "/" + estimatedDate.getFullYear()
    //     setNextMilestoneDate(correctDate)
    //     setBillionMilestone("3rd billionth")
    // }

    async function calculateCounts() {
        // calculateEstimatedPeopleBorn()
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
        console.log("you selected: " + param)
        setGender(param)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const age = 2023 - yearChoice;
        const birthday = parseInt(yearChoice) + 18;
        setEighteenthBirthday(birthday)
        setAge(age)
        const proportion = parseFloat(age) / lifeExpectancy;
        const younger = Math.floor(simulatedPopulation * proportion);
        const youngerRomania = Math.floor(romaniaPopulation * proportion);
        const olderRomania = romaniaPopulation - youngerRomania;
        const older = simulatedPopulation - younger;
        const youngerPercentageWorld = ((older / simulatedPopulation) * 100)
        const youngerPercentageRomania = ((olderRomania / romaniaPopulation) * 100)
        calculateCounts();
        setValidated(true);
        props.younger(younger)
        props.youngerRomania(youngerRomania)
        props.olderRomania(olderRomania)
        props.older(older)
        props.olderPercentageWorld(olderPercentageWorld)
        props.dayChoice(dayChoice)
        props.country(countryChoice)
        props.onData(validated)
    }

    return (
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
        </div >
    )
}

export default UserInput