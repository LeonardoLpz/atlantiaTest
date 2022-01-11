import React, { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  async function fetchData() {
    setLoading(true)
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
      
      return items;
    }
    console.log(skus(json));
    setData(json)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [url])

  return [data,loading]
}

export default useFetch
