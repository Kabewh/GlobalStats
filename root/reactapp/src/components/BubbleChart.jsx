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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bubble } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';


const total_deaths = 69248000;
const LOCALHOST = "http://localhost:8000/"

ChartJS.register(
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

const BubbleChart = () => {
    const [birthsWorld, setBirthsWorld] = useState(0);
    const [birthsRomania, setBirthsRomania] = useState(0);
    const [birthsItaly, setBirthsItaly] = useState(0);
    const [birthsSpain, setBirthsSpain] = useState(0);
    const [birthsFrance, setBirthsFrance] = useState(0);
    const [birthsGermany, setBirthsGermany] = useState(0);
    const [birthsPoland, setBirthsPoland] = useState(0);
    const [birthsUkraine, setBirthsUkraine] = useState(0);
    const [birthsIreland, setBirthsIreland] = useState(0);
    const [birthsCzechia, setBirthsCzechia] = useState(0);
    const [birthsUnitedKingdom, setBirthsUnitedKingdom] = useState(0);
    const [birthsSerbia, setBirthsSerbia] = useState(0);
    const [birthsHungary, setBirthsHungary] = useState(0);
    const [birthsBelarus, setBirthsBelarus] = useState(0);
    const [birthsAustria, setBirthsAustria] = useState(0);
    const [birthsSwitzerland, setBirthsSwitzerland] = useState(0);
    const [birthsBulgaria, setBirthsBulgaria] = useState(0);
    const [birthsGreece, setBirthsGreece] = useState(0);
    const [birthsSweden, setBirthsSweden] = useState(0);
    const [birthsPortugal, setBirthsPortugal] = useState(0);
    const [birthsDenmark, setBirthsDenmark] = useState(0);
    const [birthsFinland, setBirthsFinland] = useState(0);
    const [birthsSlovakia, setBirthsSlovakia] = useState(0);
    const [birthsNorway, setBirthsNorway] = useState(0);
    const [birthsCroatia, setBirthsCroatia] = useState(0);
    const [birthsMoldova, setBirthsMoldova] = useState(0);
    const [birthsBosnia, setBirthsBosnia] = useState(0);
    const [birthsAlbania, setBirthsAlbania] = useState(0);
    const [birthsLithuania, setBirthsLithuania] = useState(0);
    const [birthsNorthMacedonia, setBirthsNorthMacedonia] = useState(0);
    const [birthsSlovenia, setBirthsSlovenia] = useState(0);
    const [birthsLatvia, setBirthsLatvia] = useState(0);
    const [birthsEstonia, setBirthsEstonia] = useState(0);
    const [birthsMontenegro, setBirthsMontenegro] = useState(0);
    const [birthsLuxembourg, setBirthsLuxembourg] = useState(0);
    const [birthsMalta, setBirthsMalta] = useState(0);
    const [birthsIceland, setBirthsIceland] = useState(0);
    const [birthsAndorra, setBirthsAndorra] = useState(0);
    const [birthsMonaco, setBirthsMonaco] = useState(0);
    const [birthsLiechtenstein, setBirthsLiechtenstein] = useState(0);
    const [birthsBelgium, setBirthsBelgium] = useState(0);
    const [birthsNetherlands, setBirthsNetherlands] = useState(0);

    const [estimatedBirthsRomania, setEstimatedBirthsRomania] = useState(0);
    const [estimatedBirthsItaly, setEstimatedBirthsItaly] = useState(0);
    const [estimatedBirthsSpain, setEstimatedBirthsSpain] = useState(0);
    const [estimatedBirthsFrance, setEstimatedBirthsFrance] = useState(0);
    const [estimatedBirthsGermany, setEstimatedBirthsGermany] = useState(0);
    const [estimatedBirthsPoland, setEstimatedBirthsPoland] = useState(0);
    const [estimatedBirthsUkraine, setEstimatedBirthsUkraine] = useState(0);
    const [estimatedBirthsIreland, setEstimatedBirthsIreland] = useState(0);
    const [estimatedBirthsCzechia, setEstimatedBirthsCzechia] = useState(0);
    const [estimatedBirthsUK, setEstimatedBirthsUK] = useState(0);
    const [estimatedBirthsSerbia, setEstimatedBirthsSerbia] = useState(0);
    const [estimatedBirthsHungary, setEstimatedBirthsHungary] = useState(0);
    const [estimatedBirthsBelarus, setEstimatedBirthsBelarus] = useState(0);
    const [estimatedBirthsAustria, setEstimatedBirthsAustria] = useState(0);
    const [estimatedBirthsSwitzerland, setEstimatedBirthsSwitzerland] = useState(0);
    const [estimatedBirthsBulgaria, setEstimatedBirthsBulgaria] = useState(0);
    const [estimatedBirthsGreece, setEstimatedBirthsGreece] = useState(0);
    const [estimatedBirthsSweden, setEstimatedBirthsSweden] = useState(0);
    const [estimatedBirthsPortugal, setEstimatedBirthsPortugal] = useState(0);
    const [estimatedBirthsDenmark, setEstimatedBirthsDenmark] = useState(0);
    const [estimatedBirthsFinland, setEstimatedBirthsFinland] = useState(0);
    const [estimatedBirthsSlovakia, setEstimatedBirthsSlovakia] = useState(0);
    const [estimatedBirthsNorway, setEstimatedBirthsNorway] = useState(0);
    const [estimatedBirthsCroatia, setEstimatedBirthsCroatia] = useState(0);
    const [estimatedBirthsMoldova, setEstimatedBirthsMoldova] = useState(0);
    const [estimatedBirthsBosnia, setEstimatedBirthsBosnia] = useState(0);
    const [estimatedBirthsAlbania, setEstimatedBirthsAlbania] = useState(0);
    const [estimatedBirthsLithuania, setEstimatedBirthsLithuania] = useState(0);
    const [estimatedBirthsNorthMacedonia, setEstimatedBirthsNorthMacedonia] = useState(0);
    const [estimatedBirthsSlovenia, setEstimatedBirthsSlovenia] = useState(0);
    const [estimatedBirthsLatvia, setEstimatedBirthsLatvia] = useState(0);
    const [estimatedBirthsEstonia, setEstimatedBirthsEstonia] = useState(0);
    const [estimatedBirthsMontenegro, setEstimatedBirthsMontenegro] = useState(0);
    const [estimatedBirthsLuxembourg, setEstimatedBirthsLuxembourg] = useState(0);
    const [estimatedBirthsMalta, setEstimatedBirthsMalta] = useState(0);
    const [estimatedBirthsIceland, setEstimatedBirthsIceland] = useState(0);
    const [estimatedBirthsAndorra, setEstimatedBirthsAndorra] = useState(0);
    const [estimatedBirthsMonaco, setEstimatedBirthsMonaco] = useState(0);
    const [estimatedBirthsLiechtenstein, setEstimatedBirthsLiechtenstein] = useState(0);
    const [estimatedBirthsBelgium, setEstimatedBirthsBelgium] = useState(0);
    const [estimatedBirthsNetherlands, setEstimatedBirthsNetherlands] = useState(0);

    useEffect(() => {
        sharedBirthsRomania();
        sharedBirthsItaly();
        sharedBirthsSpain();
        sharedBirthsFrance();
        sharedBirthsGermany();
        sharedBirthsPoland();
        sharedBirthsIreland();
        sharedBirthsCzechia();
        sharedBirthsUK();
        sharedBirthsSerbia();
        sharedBirthsHungary();
        sharedBirthsAustria();
        sharedBirthsSwitzerland();
        sharedBirthsBulgaria();
        sharedBirthsGreece();
        sharedBirthsSweden();
        sharedBirthsPortugal();
        sharedBirthsDenmark();
        sharedBirthsFinland();
        sharedBirthsSlovakia();
        sharedBirthsNorway();
        sharedBirthsCroatia();
        sharedBirthsMoldova();
        sharedBirthsBosnia();
        sharedBirthsAlbania();
        sharedBirthsLithuania();
        sharedBirthsSlovenia();
        sharedBirthsLatvia();
        sharedBirthsEstonia();
        sharedBirthsMontenegro();
        sharedBirthsLuxembourg();
        sharedBirthsMalta();
        sharedBirthsIceland();
        sharedBirthsAndorra();
        sharedBirthsMonaco();
        sharedBirthsLiechtenstein();
        sharedBirthsBelgium();
        sharedBirthsNetherlands();
    }, [birthsBulgaria, birthsNetherlands])

    async function fetchYoungerOlderWorld() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/World/2023/")
        const jsonData = await response.json()
        setBirthsWorld(jsonData)
    }

    async function fetchYoungerOlderRomania() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Romania/2023/")
        const jsonData = await response.json()
        setBirthsRomania(jsonData)
    }

    async function fetchYoungerOlderItaly() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Italy/2023/")
        const jsonData = await response.json()
        setBirthsItaly(jsonData)
    }

    async function fetchYoungerOlderSpain() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Spain/2023/")
        const jsonData = await response.json()
        setBirthsSpain(jsonData)
    }

    async function fetchYoungerOlderFrance() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/France/2023/")
        const jsonData = await response.json()
        setBirthsFrance(jsonData)
    }

    async function fetchYoungerOlderGermany() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Germany/2023/")
        const jsonData = await response.json()
        setBirthsGermany(jsonData)
    }

    async function fetchYoungerOlderUK() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/United Kingdom/2023/")
        const jsonData = await response.json()
        setBirthsUnitedKingdom(jsonData)
    }

    async function fetchYoungerOlderPoland() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Poland/2023/")
        const jsonData = await response.json()
        setBirthsPoland(jsonData)
    }

    async function fetchYoungerOlderHungary() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Hungary/2023/")
        const jsonData = await response.json()
        setBirthsHungary(jsonData)
    }

    async function fetchYoungerOlderBulgaria() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Bulgaria/2023/")
        const jsonData = await response.json()
        setBirthsBulgaria(jsonData)
    }

    async function fetchYoungerOlderGreece() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Greece/2023/")
        const jsonData = await response.json()
        setBirthsGreece(jsonData)
    }

    async function fetchYoungerOlderPortugal() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Portugal/2023/")
        const jsonData = await response.json()
        setBirthsPortugal(jsonData)
    }

    async function fetchYoungerOlderCzechia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Czechia/2023/")
        const jsonData = await response.json()
        setBirthsCzechia(jsonData)
    }

    async function fetchYoungerOlderBelgium() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Belgium/2023/")
        const jsonData = await response.json()
        setBirthsBelgium(jsonData)
    }

    async function fetchYoungerOlderSweden() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Sweden/2023/")
        const jsonData = await response.json()
        setBirthsSweden(jsonData)
    }

    async function fetchYoungerOlderAustria() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Austria/2023/")
        const jsonData = await response.json()
        setBirthsAustria(jsonData)
    }

    async function fetchYoungerOlderDenmark() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Denmark/2023/")
        const jsonData = await response.json()
        setBirthsDenmark(jsonData)
    }

    async function fetchYoungerOlderSerbia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Serbia/2023/")
        const jsonData = await response.json()
        setBirthsSerbia(jsonData)
    }

    async function fetchYoungerOlderSwitzerland() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Switzerland/2023/")
        const jsonData = await response.json()
        setBirthsSwitzerland(jsonData)
    }

    async function fetchYoungerOlderFinland() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Finland/2023/")
        const jsonData = await response.json()
        setBirthsFinland(jsonData)
    }

    async function fetchYoungerOlderSlovakia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Slovakia/2023/")
        const jsonData = await response.json()
        setBirthsSlovakia(jsonData)
    }

    async function fetchYoungerOlderNorway() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Norway/2023/")
        const jsonData = await response.json()
        setBirthsNorway(jsonData)
    }

    async function fetchYoungerOlderIreland() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Ireland/2023/")
        const jsonData = await response.json()
        setBirthsIreland(jsonData)
    }

    async function fetchYoungerOlderCroatia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Croatia/2023/")
        const jsonData = await response.json()
        setBirthsCroatia(jsonData)
    }

    async function fetchYoungerOlderMoldova() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Republic of Moldova/2023/")
        const jsonData = await response.json()
        setBirthsMoldova(jsonData)
    }

    async function fetchYoungerOlderBosnia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Bosnia and Herzegovina/2023/")
        const jsonData = await response.json()
        setBirthsBosnia(jsonData)
    }

    async function fetchYoungerOlderAlbania() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Albania/2023/")
        const jsonData = await response.json()
        setBirthsAlbania(jsonData)
    }

    async function fetchYoungerOlderLithuania() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Lithuania/2023/")
        const jsonData = await response.json()
        setBirthsLithuania(jsonData)
    }

    async function fetchYoungerOlderSlovenia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Slovenia/2023/")
        const jsonData = await response.json()
        setBirthsSlovenia(jsonData)
    }

    async function fetchYoungerOlderLatvia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Latvia/2023/")
        const jsonData = await response.json()
        setBirthsLatvia(jsonData)
    }

    async function fetchYoungerOlderEstonia() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Estonia/2023/")
        const jsonData = await response.json()
        setBirthsEstonia(jsonData)
    }

    async function fetchYoungerOlderMontenegro() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Montenegro/2023/")
        const jsonData = await response.json()
        setBirthsMontenegro(jsonData)
    }

    async function fetchYoungerOlderLuxembourg() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Luxembourg/2023/")
        const jsonData = await response.json()
        setBirthsLuxembourg(jsonData)
    }

    async function fetchYoungerOlderMalta() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Malta/2023/")
        const jsonData = await response.json()
        setBirthsMalta(jsonData)
    }

    async function fetchYoungerOlderIceland() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Iceland/2023/")
        const jsonData = await response.json()
        setBirthsIceland(jsonData)
    }

    async function fetchYoungerOlderAndorra() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Andorra/2023/")
        const jsonData = await response.json()
        setBirthsAndorra(jsonData)
    }

    async function fetchYoungerOlderMonaco() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Monaco/2023/")
        const jsonData = await response.json()
        setBirthsMonaco(jsonData)
    }

    async function fetchYoungerOlderLiechtenstein() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Liechtenstein/2023/")
        const jsonData = await response.json()
        setBirthsLiechtenstein(jsonData)
    }

    async function fetchYoungerOlderBelarus() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Belarus/2023/")
        const jsonData = await response.json()
        setBirthsBelarus(jsonData)
    }

    async function fetchYoungerOlderNetherlands() {
        const response = await fetch(LOCALHOST + "youngerOlderInfo/Netherlands/2023/")
        const jsonData = await response.json()
        setBirthsNetherlands(jsonData)
    }

    const countryChoice = true
    const yearChoice = true

    //sharedbirths
    async function sharedBirthsRomania() {
        fetchYoungerOlderRomania();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Romania/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsRomania / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsRomania(estimatedBirths)
        }
    }

    async function sharedBirthsItaly() {
        fetchYoungerOlderItaly();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Italy/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsItaly / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsItaly(estimatedBirths)
        }
    }

    async function sharedBirthsSpain() {
        fetchYoungerOlderSpain();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Spain/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSpain / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSpain(estimatedBirths)
        }
    }

    async function sharedBirthsFrance() {
        fetchYoungerOlderFrance();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/France/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsFrance / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsFrance(estimatedBirths)
        }
    }

    async function sharedBirthsGermany() {
        fetchYoungerOlderGermany();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Germany/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsGermany / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsGermany(estimatedBirths)
        }
    }

    async function sharedBirthsUK() {
        fetchYoungerOlderUK();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/United Kingdom/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsUnitedKingdom / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsUK(estimatedBirths)
        }
    }

    async function sharedBirthsPoland() {
        fetchYoungerOlderPoland();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Poland/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsPoland / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsPoland(estimatedBirths)
        }
    }

    async function sharedBirthsHungary() {
        fetchYoungerOlderHungary();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Hungary/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsHungary / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsHungary(estimatedBirths)
        }
    }

    async function sharedBirthsBulgaria() {
        fetchYoungerOlderBulgaria();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Bulgaria/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsBulgaria / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsBulgaria(estimatedBirths)
        }
    }

    async function sharedBirthsGreece() {
        fetchYoungerOlderGreece();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Greece/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsGreece / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsGreece(estimatedBirths)
        }
    }

    async function sharedBirthsPortugal() {
        fetchYoungerOlderPortugal();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Portugal/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsPortugal / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsPortugal(estimatedBirths)
        }
    }

    async function sharedBirthsCzechia() {
        fetchYoungerOlderCzechia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Czechia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsCzechia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsCzechia(estimatedBirths)
        }
    }

    async function sharedBirthsBelgium() {
        fetchYoungerOlderBelgium();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Belgium/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsBelgium / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsBelgium(estimatedBirths)
        }
    }

    async function sharedBirthsSweden() {
        fetchYoungerOlderSweden();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Sweden/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSweden / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSweden(estimatedBirths)
        }
    }

    async function sharedBirthsAustria() {
        fetchYoungerOlderAustria();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Austria/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsAustria / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsAustria(estimatedBirths)
        }
    }

    async function sharedBirthsDenmark() {
        fetchYoungerOlderDenmark();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Denmark/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsDenmark / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsDenmark(estimatedBirths)
        }
    }

    async function sharedBirthsSerbia() {
        fetchYoungerOlderSerbia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Serbia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSerbia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSerbia(estimatedBirths)
        }
    }

    async function sharedBirthsSwitzerland() {
        fetchYoungerOlderSwitzerland();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Switzerland/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSwitzerland / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSwitzerland(estimatedBirths)
        }
    }

    async function sharedBirthsFinland() {
        fetchYoungerOlderFinland();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Finland/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsFinland / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsFinland(estimatedBirths)
        }
    }

    async function sharedBirthsSlovakia() {
        fetchYoungerOlderSlovakia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Slovakia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSlovakia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSlovakia(estimatedBirths)
        }
    }

    async function sharedBirthsNorway() {
        fetchYoungerOlderNorway();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Norway/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsNorway / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsNorway(estimatedBirths)
        }
    }

    async function sharedBirthsIreland() {
        fetchYoungerOlderIreland();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Ireland/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsIreland / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsIreland(estimatedBirths)
        }
    }

    async function sharedBirthsCroatia() {
        fetchYoungerOlderCroatia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Croatia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsCroatia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsCroatia(estimatedBirths)
        }
    }

    async function sharedBirthsMoldova() {
        fetchYoungerOlderMoldova();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Republic of Moldova/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsMoldova / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsMoldova(estimatedBirths)
        }
    }

    async function sharedBirthsBosnia() {
        fetchYoungerOlderBosnia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Bosnia and Herzegovina/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsBosnia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsBosnia(estimatedBirths)
        }
    }

    async function sharedBirthsAlbania() {
        fetchYoungerOlderAlbania();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Albania/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsAlbania / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsAlbania(estimatedBirths)
        }
    }

    async function sharedBirthsLithuania() {
        fetchYoungerOlderLithuania();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Lithuania/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsLithuania / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsLithuania(estimatedBirths)
        }
    }

    async function sharedBirthsSlovenia() {
        fetchYoungerOlderSlovenia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Slovenia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsSlovenia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsSlovenia(estimatedBirths)
        }
    }

    async function sharedBirthsLatvia() {
        fetchYoungerOlderLatvia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Latvia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsLatvia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsLatvia(estimatedBirths)
        }
    }

    async function sharedBirthsEstonia() {
        fetchYoungerOlderEstonia();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Estonia/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsEstonia / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsEstonia(estimatedBirths)
        }
    }

    async function sharedBirthsMontenegro() {
        fetchYoungerOlderMontenegro();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Montenegro/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsMontenegro / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsMontenegro(estimatedBirths)
        }
    }

    async function sharedBirthsLuxembourg() {
        fetchYoungerOlderLuxembourg();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Luxembourg/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsLuxembourg / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsLuxembourg(estimatedBirths)
        }
    }

    async function sharedBirthsMalta() {
        fetchYoungerOlderMalta();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Malta/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsMalta / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsMalta(estimatedBirths)
        }
    }

    async function sharedBirthsIceland() {
        fetchYoungerOlderIceland();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Iceland/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsIceland / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsIceland(estimatedBirths)
        }
    }

    async function sharedBirthsAndorra() {
        fetchYoungerOlderAndorra();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Andorra/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsAndorra / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsAndorra(estimatedBirths)
        }
    }

    async function sharedBirthsMonaco() {
        fetchYoungerOlderMonaco();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Monaco/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsMonaco / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirths = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsMonaco(estimatedBirths)
        }
    }

    async function sharedBirthsLiechtenstein() {
        fetchYoungerOlderLiechtenstein();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Liechtenstein/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsLiechtenstein / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirths = 1 / 365
            const estimatedBirthsLiechtenstein = avgBirthRate * proportionBirths / 100 * population
            setEstimatedBirthsLiechtenstein(estimatedBirthsLiechtenstein)
        }
    }

    async function sharedBirthsNetherlands() {
        fetchYoungerOlderNetherlands();
        if (countryChoice && yearChoice) {
            const response = await fetch(LOCALHOST + "population/Netherlands/2023")
            const jsonData = await response.json()
            const population = jsonData;
            const avgDailyBirthRate = (birthsNetherlands / population) * 1000
            const avgBirthRate = (avgDailyBirthRate / 1000) * 365
            const proportionBirthsNetherlands = 1 / 365
            const estimatedBirthsNetherlands = avgBirthRate * proportionBirthsNetherlands / 100 * population
            setEstimatedBirthsNetherlands(estimatedBirthsNetherlands)
        }
    }

    const options = {
        type: 'bubble',
        drawActiveElementsOnTop: false,
        hitRadius: 5,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                    color: '#fff'
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            datalabels: {
                display: true,
                color: "#222",
                font: {
                    weight: "bold"
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
                        return context.dataset.label;
                    }
                }
            },
        }
    };

    const data = {
        datasets: [{
            label: `Births in United Kigndom: ${estimatedBirthsUK.toLocaleString()}`,
            data: [{
                x: 50,
                y: 80,
                r: 54,
                label: "United Kingdom",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',

        },
        {
            label: `Births in Germany: ${estimatedBirthsGermany.toLocaleString()}`,
            data: [{
                x: 36,
                y: 80,
                r: 60,
                label: "Germany",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',

        },
        {
            label: `Births in Estonia: ${estimatedBirthsEstonia.toLocaleString()}`,
            data: [{
                x: 30,
                y: 64,
                r: 20,
                label: "Estonia",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',

        },
        {
            label: `Births in Lithuania: ${estimatedBirthsLithuania.toLocaleString()}`,
            data: [{
                x: 43,
                y: 65,
                r: 25,
                label: "Lithuania",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Finland: ${estimatedBirthsFinland.toLocaleString()}`,
            data: [{
                x: 35,
                y: 58,
                r: 22,
                label: "Finland",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Croatia: ${estimatedBirthsCroatia.toLocaleString()}`,
            data: [{
                x: 50,
                y: 60,
                r: 20,
                label: "Croatia",

            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Iceland: ${estimatedBirthsIceland.toLocaleString()}`,
            data: [{
                x: 55,
                y: 65,
                r: 15,
                label: "ISL",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Malta: ${estimatedBirthsMalta.toLocaleString()}`,
            data: [{
                x: 54.2,
                y: 58,
                r: 15,
                label: "Malta",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Spain: ${estimatedBirthsSpain.toLocaleString()}`,
            data: [{
                x: 62,
                y: 50,
                r: 55,
                label: "Spain",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Slovakia: ${estimatedBirthsSlovakia.toLocaleString()}`,
            data: [{
                x: 27,
                y: 55,
                r: 23,
                label: "Slovakia",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Montenegro: ${estimatedBirthsMontenegro.toLocaleString()}`,
            data: [{
                x: 40,
                y: 57,
                r: 15,
                label: "MNE",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Switzerland: ${estimatedBirthsSwitzerland.toLocaleString()}`,
            data: [{
                x: 45,
                y: 54,
                r: 22,
                label: "SWZ",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Sweden: ${estimatedBirthsSweden.toLocaleString()}`,
            data: [{
                x: 52,
                y: 48,
                r: 30,
                label: "Sweden",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Serbia: ${estimatedBirthsSerbia.toLocaleString()}`,
            data: [{
                x: 23,
                y: 47,
                r: 25,
                label: "Serbia",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Slovenia: ${estimatedBirthsSlovenia.toLocaleString()}`,
            data: [{
                x: 28,
                y: 43,
                r: 17,
                label: "SLV",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Bulgary: ${estimatedBirthsBulgaria.toLocaleString()}`,
            data: [{
                x: 31.5,
                y: 50,
                r: 20,
                label: "BLG",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Belarus: ${estimatedBirthsBelarus.toLocaleString()}`,
            data: [{
                x: 38,
                y: 47,
                r: 25,
                label: "Belarus",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Luxembourg: ${estimatedBirthsLuxembourg.toLocaleString()}`,
            data: [{
                x: 42,
                y: 42,
                r: 15,
                label: "LUX",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Greece: ${estimatedBirthsGreece.toLocaleString()}`,
            data: [{
                x: 46.5,
                y: 42,
                r: 23,
                label: "Greece",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Hungary: ${estimatedBirthsHungary.toLocaleString()}`,
            data: [{
                x: 55,
                y: 35,
                r: 27,
                label: "Hungary",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Czech: ${estimatedBirthsCzechia.toLocaleString()}`,
            data: [{
                x: 68,
                y: 33,
                r: 26,
                label: "Czechia",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Romania: ${estimatedBirthsRomania.toLocaleString()}`,
            data: [{
                x: 61.5,
                y: 28,
                r: 32,
                label: "Romania",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in France: ${estimatedBirthsFrance.toLocaleString()}`,
            data: [{
                x: 60,
                y: 9,
                r: 55,
                label: "France",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Poland: ${estimatedBirthsPoland.toLocaleString()}`,
            data: [{
                x: 48,
                y: 28,
                r: 40,
                label: "Poland",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Latvia: ${estimatedBirthsLatvia.toLocaleString()}`,
            data: [{
                x: 55,
                y: 25,
                r: 18,
                label: "Latvia",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Portugal: ${estimatedBirthsPortugal.toLocaleString()}`,
            data: [{
                x: 24,
                y: 36,
                r: 23,
                label: "Portugal",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Ukraine: ${estimatedBirthsUkraine.toLocaleString()}`,
            data: [{
                x: 33,
                y: 37,
                r: 30,
                label: "Ukraine",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Denmark: ${estimatedBirthsDenmark.toLocaleString()}`,
            data: [{
                x: 28,
                y: 30,
                r: 18,
                label: "DNM",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in The Netherlands: ${estimatedBirthsNetherlands.toLocaleString()}`,
            data: [{
                x: 40,
                y: 32,
                r: 30,
                label: "NTL",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Moldavia: ${estimatedBirthsMoldova.toLocaleString()}`,
            data: [{
                x: 29,
                y: 22,
                r: 18,
                label: "MLD",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Belgium: ${estimatedBirthsBelgium.toLocaleString()}`,
            data: [{
                x: 35,
                y: 24,
                r: 26,
                label: "Belgium",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Albania: ${estimatedBirthsAlbania.toLocaleString()}`,
            data: [{
                x: 41,
                y: 21,
                r: 20,
                label: "Albania",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Italy: ${estimatedBirthsItaly.toLocaleString()}`,
            data: [{
                x: 32,
                y: 10,
                r: 40,
                label: "Italy",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Ireland: ${estimatedBirthsIreland.toLocaleString()}`,
            data: [{
                x: 39,
                y: 12,
                r: 20,
                label: "Ireland",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Bosnia and Herzegovina: ${estimatedBirthsBosnia.toLocaleString()}`,
            data: [{
                x: 45,
                y: 15,
                r: 20,
                label: "BIH",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: `Births in Austria: ${estimatedBirthsAustria.toLocaleString()}`,
            data: [{
                x: 48,
                y: 7,
                r: 20,
                label: "Austria",
            }],
            backgroundColor: '#bdaee9',
            borderColor: '#666',
        },
        {
            label: 'Births in world:',
            data: [{
                x: 1,
                y: 10,
                r: 0,
            }],
            backgroundColor: '#fff',
            borderColor: '#fff',
        },
        {
            data: [{
                x: 80,
                y: 80,
                r: 0,
            }],
            color: '#fff',
            backgroundColor: '#fff',
            borderColor: '#fff',
        }]
    };


    return (
        <h2 className='bubble'>
            <Bubble options={options} data={data} />
        </h2>
    )
}

export default BubbleChart