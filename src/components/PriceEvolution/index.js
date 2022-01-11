import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import useFetch from './utils/useFetch';
const priceUrl = 'https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/'
const PriceEvolution = () => {
    const [ options, setOptions] = useState({
        chart: {
          id: "price-evolution-bar",
          toolbar:{show:false}
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      });
      const [series, setSeries] = useState([{
        name: "series-1",
        data: [50, 20, 35, 44, 99, 60, 70, 91]
      },{
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }])

    const [chartData,loading] =  useFetch( priceUrl)

    /*  
    {
        "sku": "039430430493093",
        "name": "Cerveza XX Ambar 325 ml",
        "price": 22,
        "dateExtraction": "10/04/21"
    }
    */
    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                width="100%"
              />
            </div>
          </div>
        </div>
      );
}

export default PriceEvolution;