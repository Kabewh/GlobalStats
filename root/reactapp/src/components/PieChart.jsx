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
const countryChoice = true
const yearChoice = true

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

    const countries = [
        "India", "Japan", "Mexico", "Brazil", "Bangladesh", "Nigeria", "Indonesia", "Pakistan", "China"
    ]

    // const [birthsByCountry, setBirthsByCountry] = useState([
    //     {
    //         country: '',
    //         births: 0,
    //         estimatedBirths: 0,
    //     }
    // ])

    // const updateCountries = () => {
    //     const UpdatedBirthsByCountry = countries.map((country) => {
    //         return (
    //             {
    //                 country: country,
    //                 births: 0,
    //                 estimatedBirths: 0
    //             }
    //         )
    //     }
    //     )
    //     setBirthsByCountry(UpdatedBirthsByCountry)
    //     console.log(birthsByCountry)
    // }
    const [birthsWorld, setBirthsWorld] = useState([]);
    const [estimatedBirthsWorld, setEstimatedBirthsWorld] = useState([]);

    useEffect(() => {
        async function fetchYoungerOlderWorld() {
            const promises = countries.map(async (country) => {
                const response = await fetch(LOCALHOST + `youngerOlderInfo/${country}/2023/`)
                const jsonData = await response.json()
                return { country, births: jsonData }
            })
            const results = await Promise.all(promises);
            setBirthsWorld(results.reverse())
            console.log("births world: ", birthsWorld);
        }

        fetchYoungerOlderWorld();
    }, [])

    // console.log("births world: ", birthsWorld)
    // async function sharedBirthsWorld() {
    //     if (countryChoice && yearChoice) {
    //         const response = await fetch(LOCALHOST + "population/World/2023")
    //         const jsonData = await response.json()
    //         const population = jsonData;
    //         const avgDailyBirthRate = (birthsWorld / population) * 1000
    //         const avgBirthRate = (avgDailyBirthRate / 1000) * 365
    //         const proportionBirths = 1 / 365
    //         const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
    //         setEstimatedBirthsWorld(estimatedBirths)
    //         console.log("estimated births: ", estimatedBirths)
    //         console.log("births world: ", birthsWorld)
    //     }
    // }

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

    const renderedData = () => {
        if (birthsWorld.length > 0) {
            return (
                [birthsWorld[0].births, birthsWorld[1].births, birthsWorld[2].births, birthsWorld[3].births, birthsWorld[4].births, birthsWorld[5].births, birthsWorld[6].births, birthsWorld[7].births, birthsWorld[8].births]
            )
        }
    }
    // console.log(birthsWorld)

    const data = {
        datasets: [{
            labels: ['India', 'Japan', 'Mexico', 'Brazil', 'Bangladesh', 'Nigeria', 'Indonesia', 'Pakistan', 'China'],
            data: renderedData(),
            backgroundColor: ['#E6E6FA', '#98FF98', '#FADADD', '#87CEEB', '#C0C0C0', '#FFDAB9', '#FFFFE0', '#C8A2C8', '#98FB98', '#F8FD'],
        }
        ]

    };

    return (
        <>
            <div className='pie'>
                <h4>Top 10 Countries by Birthdays</h4>
                {data ? <Pie options={options} data={data} /> : console.log("data not loaded")}

            </div>
        </>

    )
}

export default PieChart