import {useEffect, useState} from 'react'

import {fetchWeatherData} from '../WeatherAPI/FetchWeatherData'
import {fetchDate} from '../WeatherAPI/FetchDate'

import Card from './Card/Card'

const Cards = ({searchQuery, setLoading}) => {
  const [cities, setCities] = useState(JSON.parse(localStorage.getItem('citiesPaweather')) || [])

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true)
      const data = await fetchWeatherData(searchQuery)

      data.searchDate = await fetchDate(data.coord.lat, data.coord.lon)

      const index = cities.findIndex((city) => city.id === data.id)

      if (index !== -1) {
        cities.splice(index, 1)
      }
      setLoading(false)
      setCities((prevCities) => [...prevCities, data])
      localStorage.setItem('citiesPaweather', JSON.stringify([...cities, data]))
    }

    searchQuery && getWeatherData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <div>
      {cities.length ? (
        cities
          .slice(0)
          .reverse()
          .map((city) => (
            <Card
              key={city.id}
              cities={cities}
              setCities={setCities}
              weatherData={city}
            />
          ))
      ) : (
        <p className='flex justify-center h-44 items-center opacity-40'>
          Weather information will appear here
        </p>
      )}
    </div>
  )
}

export default Cards
