import React, { useEffect, useState } from 'react'
import "chartjs-plugin-datalabels"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const total_deaths = 69248000;
const LOCALHOST = "http://localhost:8000/"

ChartJS.register(
    ArcElement,
    ChartDataLabels,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)


const PieChart = () => {
    const [birthsWorld, setBirthsWorld] = useState(0);
    const [birthsIndia, setBirthsIndia] = useState(0);
    const [birthsJapan, setBirthsJapan] = useState(0);
    const [birthsMexico, setBirthsMexico] = useState(0);
    const [birthsBrazil, setBirthsBrazil] = useState(0);
    const [birthsBangladesh, setBirthsBangladesh] = useState(0);
    const [birthsNigeria, setBirthsNigeria] = useState(0);
    const [birthsIndonesia, setBirthsIndonesia] = useState(0);
    const [birthsUnitedStates, setBirthsUnitedStates] = useState(0);
    const [birthsPakistan, setBirthsPakistan] = useState(0);
    const [birthsChina, setBirthsChina] = useState(0);



    const [estimatedBirthsWorld, setEstimatedBirthsWorld] = useState(0);
    const [estimatedBirthsIndia, setEstimatedBirthsIndia] = useState(0);
    const [estimatedBirthsJapan, setEstimatedBirthsJapan] = useState(0);
    const [estimatedBirthsMexico, setEstimatedBirthsMexico] = useState(0);
    const [estimatedBirthsBrazil, setEstimatedBirthsBrazil] = useState(0);
    const [estimatedBirthsBangladesh, setEstimatedBirthsBangladesh] = useState(0);
    const [estimatedBirthsNigeria, setEstimatedBirthsNigeria] = useState(0);
    const [estimatedBirthsIndonesia, setEstimatedBirthsIndonesia] = useState(0);
    const [estimatedBirthsUnitedStates, setEstimatedBirthsUnitedStates] = useState(0);
    const [estimatedBirthsPakistan, setEstimatedBirthsPakistan] = useState(0);
    const [estimatedBirthsChina, setEstimatedBirthsChina] = useState(0);


    useEffect(() => {
        sharedBirthsIndia();
        sharedBirthsWorld();
        sharedBirthsJapan();
        sharedBirthsMexico();
        sharedBirthsBrazil();
        sharedBirthsBangladesh();
        sharedBirthsNigeria();
        sharedBirthsIndonesia();
        sharedBirthsUnitedStates();
        sharedBirthsPakistan();
        sharedBirthsChina();

    }, [birthsBrazil, birthsIndia, birthsJapan, birthsMexico])


    async function fetchYoungerOlderWorld() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/World/2023/")
        const jsonData = await response.json()
        setBirthsWorld(jsonData)
    }

    async function fetchYoungerOlderIndia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/India/2023/")
        const jsonData = await response.json()
        setBirthsIndia(jsonData)
    }

    async function fetchYoungerOlderJapan() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Japan/2023/")
        const jsonData = await response.json()
        setBirthsJapan(jsonData)
    }

    async function fetchYoungerOlderMexico() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Mexico/2023/")
        const jsonData = await response.json()
        setBirthsMexico(jsonData)
    }

    async function fetchYoungerOlderBrazil() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Brazil/2023/")
        const jsonData = await response.json()
        setBirthsBrazil(jsonData)
    }

    async function fetchYoungerOlderBangladesh() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Bangladesh/2023/")
        const jsonData = await response.json()
        setBirthsBangladesh(jsonData)
    }

    async function fetchYoungerOlderNigeria() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Nigeria/2023/")
        const jsonData = await response.json()
        setBirthsNigeria(jsonData)
    }

    async function fetchYoungerOlderIndonesia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Indonesia/2023/")
        const jsonData = await response.json()
        setBirthsIndonesia(jsonData)
    }

    async function fetchYoungerOlderUnitedStates() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Northern America/2023/")
        const jsonData = await response.json()
        setBirthsUnitedStates(jsonData)
    }

    async function fetchYoungerOlderPakistan() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Pakistan/2023/")
        const jsonData = await response.json()
        setBirthsPakistan(jsonData)
    }

    async function fetchYoungerOlderChina() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/China/2023/")
        const jsonData = await response.json()
        setBirthsChina(jsonData)
    }

    const countryChoice = true
    const yearChoice = true

    //sharedbirths

    async function sharedBirthsWorld() {
        fetchYoungerOlderWorld();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/World/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsWorld / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsWorld(estimatedBirths)
        }
    }

    async function sharedBirthsIndia() {
        fetchYoungerOlderIndia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Romania/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsIndia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsIndia(estimatedBirths)
        }
    }

    async function sharedBirthsJapan() {
        fetchYoungerOlderJapan();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Japan/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsJapan / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsJapan(estimatedBirths)
        }
    }

    async function sharedBirthsMexico() {
        fetchYoungerOlderMexico();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Mexico/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsMexico / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsMexico(estimatedBirths)
        }
    }

    async function sharedBirthsBrazil() {
        fetchYoungerOlderBrazil();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Brazil/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsBrazil / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsBrazil(estimatedBirths)
        }
    }

    async function sharedBirthsBangladesh() {
        fetchYoungerOlderBangladesh();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Bangladesh/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsBangladesh / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsBangladesh(estimatedBirths)
        }
    }

    async function sharedBirthsNigeria() {
        fetchYoungerOlderNigeria();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Nigeria/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsNigeria / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsNigeria(estimatedBirths)
        }
    }

    async function sharedBirthsIndonesia() {
        fetchYoungerOlderIndonesia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Indonesia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsIndonesia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsIndonesia(estimatedBirths)
        }
    }

    async function sharedBirthsUnitedStates() {
        fetchYoungerOlderUnitedStates();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Northern America/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsUnitedStates / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsUnitedStates(estimatedBirths)
        }
    }

    async function sharedBirthsPakistan() {
        fetchYoungerOlderPakistan();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Pakistan/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsPakistan / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsPakistan(estimatedBirths)
        }
    }

    async function sharedBirthsChina() {
        fetchYoungerOlderChina();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/China/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsChina / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsChina(estimatedBirths)
        }
    }

    const options = {
        type: 'doughnut',
        hitRadius: 5,
        responsive: true,
        plugins: {
            datalabels: {
                display: true,
                color: "#222",
                font: {
                    weight: "bold"
                },
                formatter: function (value, context) {
                    return context.dataset.labels[context.dataIndex];
                }
            },
            collision: {
                enabled: false
            },
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        const intcontext = parseInt(context.dataset.data[context.dataIndex]).toLocaleString()
                        return `Births ${intcontext}`;
                    }
                }
            },
        }
    };

    const data = {
        datasets: [{
            labels: ['India', 'Japan', 'Mexico', 'Brazil', 'Bangladesh', 'Nigeria', 'Indonesia', 'United States', 'Pakistan', 'China'],
            data: [estimatedBirthsIndia, estimatedBirthsJapan, estimatedBirthsMexico, estimatedBirthsBrazil, estimatedBirthsBangladesh, estimatedBirthsNigeria, estimatedBirthsIndonesia, estimatedBirthsUnitedStates, estimatedBirthsPakistan, estimatedBirthsChina],
            backgroundColor: ['#E6E6FA', '#98FF98', '#FADADD', '#87CEEB', '#C0C0C0', '#FFDAB9', '#FFFFE0', '#C8A2C8', '#98FB98', '#F8FD'],
        }
        ]

    };

    return (
        <>
            <div className='pie'>
                <h4>Top 10 Countries by Birthdays</h4>
                <Pie options={options} data={data} />
            </div>
        </>

    )
}

export default PieChart