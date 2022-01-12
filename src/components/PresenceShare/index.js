import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import './style.css';
const url = 'https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/'
const PresenceShare = (props) => {

    const [data, setData] = useState([])
    const [options, setOptions] = useState({})
    const [series, setSeries] = useState([])
    const defaultOptions = {
        chart: {
          fontFamily: 'Hind',
          type: 'pie',
        },
        colors: ['#D6215B', '#FF7A00', '#7530B2', '#23B794', '#006FFF'],
        dataLabels: {
            enabled: false
        },
        labels: []
      }
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
            defaultOptions.labels = json.map(element => element.name)
            json.map(element => setSeries(series => [...series, element.presenceShare])) 
            setOptions(defaultOptions)
        }
        fetchData()
    }, [])
    
    return (
        <div>
            <p className='title-secciones table-title'>Presence Share by Product</p>
            <div className='presence-share'>
                <Chart 
                options={ options } 
                series={ series } 
                type="pie" 
                width={400} />
            </div>
        </div>
    )
}

export default PresenceShare;