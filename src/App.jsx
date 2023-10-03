import './App.css'
import {useState} from 'react'

import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/SearchBar/SearchBar'
import Cards from './Components/Cards/Cards'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.search.value)
    document.getElementById('form').reset()
  }

  return (
    <div className='font-nunito'>
      <Navbar />
      <div className='flex justify-between'>
        <div className='h-[32rem] w-full max-w-4xl'>
          <SearchBar
            loading={loading}
            onSubmit={handleSubmit}
          />
          <Cards
            searchQuery={searchQuery}
            setLoading={setLoading}
          />
        </div>
        <div>
          <img
            alt='Placeholder'
            src='https://placekitten.com/400/600'
          />
        </div>
      </div>
    </div>
  )
}

export default App
