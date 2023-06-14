import React, { useEffect, useState } from 'react'
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const total_deaths = 69248000;
const LOCALHOST = "http://localhost:8000/"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

const Graph = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getDeaths()
    }, [])


    const labels = Array.from({ length: 100 }, (_, index) => index);

    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 2
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    color: '#fff'

                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
            tooltip: {
                enabled: true,
                poision: 'nearest',
                intersect: false,
                cornerRadius: 10,
                caretPadding: 50,
                padding: 50,
                caretSize: 10,
                bodySpacing: 150,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label)
                        if (context[0].label === "21") {
                            return 'Your Current Age: ' + context[0].label;
                        } else if (context[0].label === "68") {
                            return 'Your Life Expectancy: ' + context[0].label;
                        }
                        else return 'Age: ' + context[0].label;
                    },
                    labelPointStyle: function (context) {
                        return {
                            pointStyle: 'triangle',
                            rotation: 0
                        };
                    }

                }
            }
        }
    };


    const datasetnew = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'deaths',
                data: data.map((item, index) => {
                    if (index > 20) {
                        return (item * 1000)
                    }
                    else {
                        return (item * 100)
                    }
                }),
                borderColor: '#333',
                backgroundColor: '#fe777b',
            },
        ],
    }



    async function getDeaths() {
        const response = await fetch(LOCALHOST + "deaths")
        const jsonData = await response.json()
        setData(jsonData)
    }

    return (
        <div>
            {data.length > 0 ? (
                <Line options={options} data={datasetnew} />
            ) : (
                <div>loading...</div>
            )}

        </div >
    )
}

export default Graph