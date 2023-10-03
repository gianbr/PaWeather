const fetchWeatherData = async (searchQuery) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export {fetchWeatherData}
