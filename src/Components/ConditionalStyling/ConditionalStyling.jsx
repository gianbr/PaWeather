import {useEffect, useState} from 'react'

const ConditionalStyling = ({city}) => {
  const [weatherConditions] = useState({
    Clear: {
      backgroundColor: '#3A120A',
      imageUrl: 'src/assets/img/dayclear.png',
      backgroundColorNight: '#07081D',
      imageUrlNight: 'src/assets/img/nightclear.png',
    },
    Clouds: {
      backgroundColor: '#3C4D69',
      imageUrl: 'src/assets/img/daycloudy.png',
      backgroundColorNight: '#18202E',
      imageUrlNight: 'src/assets/img/nightcloudy.png',
    },
    Smoke: {
      backgroundColor: '#3C4D69',
      imageUrl: 'src/assets/img/daycloudy.png',
    },
    Rain: {
      backgroundColor: '#0F141E',
      imageUrl: 'src/assets/img/rainy.png',
    },
    Snow: {
      backgroundColor: '#053960',
      imageUrl: 'src/assets/img/snowy.png',
    },
    Haze: {
      backgroundColor: '#18202E',
      imageUrl: 'src/assets/img/nightcloudy.png',
    },
  })

  const [rangeNightStart] = useState(19)
  const [rangeNightFinish] = useState(8)

  useEffect(() => {
    const body = document.body
    const catImage = document.getElementById('catImage')

    if (!city) {
      body.style.backgroundColor = weatherConditions.Clear.backgroundColor
      catImage.src = weatherConditions.Clear.imageUrl

      return
    }

    const weatherMain = city.weather[0].main

    if (weatherConditions.hasOwnProperty(weatherMain)) {
      const condition = weatherConditions[weatherMain]
      const isNight =
        parseInt(city.searchDate.formatted.slice(11, 13)) >= rangeNightStart ||
        parseInt(city.searchDate.formatted.slice(11, 13)) <= rangeNightFinish

      body.style.backgroundColor = isNight
        ? condition.backgroundColorNight
        : condition.backgroundColor

      catImage.src = isNight ? condition.imageUrlNight : condition.imageUrl
    } else {
      // body.style.backgroundColor = weatherConditions.
      const isNight =
        parseInt(city.searchDate.formatted.slice(11, 13)) >= rangeNightStart ||
        parseInt(city.searchDate.formatted.slice(11, 13)) <= rangeNightFinish

      body.style.backgroundColor = isNight
        ? weatherConditions.Clouds.backgroundColorNight
        : weatherConditions.Clouds.backgroundColor

      catImage.src = isNight
        ? weatherConditions.Clouds.imageUrlNight
        : weatherConditions.Clouds.imageUrl
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])
}

export default ConditionalStyling
