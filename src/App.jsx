import './App.css'
import {useState} from 'react'

import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/SearchBar/SearchBar'
import Cards from './Components/Cards/Cards'
import ConditionalStyling from './Components/ConditionalStyling/ConditionalStyling'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [code, setCode] = useState()
  const [lastStoredCity, setLastStoredCity] = useState(() => {
    const citiesFromLocalStorage = JSON.parse(localStorage.getItem('citiesPaweather')) || []
    const reversedCities = citiesFromLocalStorage.slice().reverse()

    return reversedCities.length > 0 ? reversedCities[0] : null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.search.value)
    document.getElementById('form').reset()
  }

  const handleLastCityChange = (lastCity) => {
    setLastStoredCity(lastCity)
  }

  return (
    <div className='font-nunito max-w-7xl m-auto'>
      <ConditionalStyling city={lastStoredCity} />
      <Navbar />
      <div className='flex justify-between'>
        <div className='h-[32rem] w-[56rem] max-xl:m-auto md:max-lg:max-w-2xl max-md:max-w-md max-sm:max-w-xs'>
          <SearchBar
            code={code}
            loading={loading}
            onSubmit={handleSubmit}
          />
          <Cards
            lastCityStored={handleLastCityChange}
            searchQuery={searchQuery}
            setCode={setCode}
            setLoading={setLoading}
          />
        </div>
        <div className='max-xl:hidden'>
          <img
            alt='Placeholder'
            id='catImage'
            src='https://placekitten.com/400/600'
          />
        </div>
      </div>
    </div>
  )
}

export default App

// To do: animations
