import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import './style.css'
const url = 'https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/'
const formatDate = (date) => {
  let newDate = new Date(date).toString()
  newDate = newDate.slice(4,10)
  return newDate
}
const PriceEvolution = () => {
    const [ options, setOptions] = useState({
        chart: {
          id: "",
          toolbar:{show:false},
          redrawOnParentResize: false,
          background: '#fff'
        },
        xaxis: {
          categories: []
        },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        responsive: [{
          breakpoint: 900,
          chart: {
            height: '400px'
        },
          options: {},
      }]
      });
    const [series, setSeries] = useState([])
    const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
      function skus(data) {
        let conteo = {};
        data.forEach(({sku}) => {
          conteo[sku] = conteo[sku]+1 || 1 ;
        });
        let sku = Object.keys(conteo).map( e=>(e));
        let items = []
        sku.forEach( key => {
          items.push( data.filter( e => e.sku === key))
        })
        items.forEach(item => {
          let seriesData = []
          let seriesName = ""
          let seriesObjeto = {}
          let seriesDates = []
          item.forEach(element => {
            seriesName = element.name
            seriesData.push(element.price)
            seriesDates.push(formatDate(element.dateExtraction))
          })
          seriesObjeto = {
            name: seriesName,
            data: seriesData
          }
          setOptions({...options, xaxis: {categories:seriesDates}})
          let objeto = series => [...series, seriesObjeto]
          setSeries(objeto)
        })
        return items;
      }
      setData(skus(json))
    }
    fetchData()
  }, [])
  
    return (
      <div>
        <p className='title-secciones table-title'>Price Evolution</p>
        <div className="price-evolution">
              <Chart
                options={options}
                series={series}
              
              />
        </div>
      </div>
        
      );
}

export default PriceEvolution;