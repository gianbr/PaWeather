const fetchDateTime = () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const currentDate = new Date().getDate()
  const currentDay = new Date().getDay()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  const searchDate = `${dayNames[currentDay]}, ${currentDate} of ${monthNames[currentMonth]} ${currentYear}`

  return {searchDate}
}

const fetchDate = async (lat, lon) => {
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${
    import.meta.env.VITE_TIMEDB_API_KEY
  }&format=json&by=position&lat=${lat}&lng=${lon}`
  const response = await fetch(url)
  const data = await response.json()

  const {formatted} = data

  const {searchDate} = fetchDateTime()

  return {searchDate, formatted}
}

export {fetchDate}
