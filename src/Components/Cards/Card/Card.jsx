import location_icon from '../../../assets/location.svg'
import max_icon from '../../../assets/max-temp.svg'
import min_icon from '../../../assets/min-temp.svg'
import humidity_icon from '../../../assets/humidity.svg'
import close_card_icon from '../../../assets/close-card.svg'

const Card = ({weatherData, cities, setCities}) => {
  const convertCelsius = (kelvin) => {
    let celsius = Math.round(kelvin - 273.15)

    return celsius
  }

  const capitalize = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1)
  }

  const handleRemove = () => {
    const index = cities.findIndex((city) => city.id === weatherData.id)

    cities.splice(index, 1)
    setCities([...cities])
    localStorage.setItem('citiesPaweather', JSON.stringify([...cities]))
  }

  const {
    name,
    sys: {country},
    main: {temp, feels_like, temp_max, temp_min, humidity},
    weather: [{description}],
    searchDate,
  } = weatherData

  return (
    <div>
      <div className='mt-8 w-full max-w-4xl rounded-3xl bg-card p-8'>
        <div className='flex justify-between text-2xl font-extrabold'>
          <div className='flex items-center'>
            <span>
              <img
                alt=''
                src={location_icon}
              />
            </span>
            <h3 className='ml-2'>
              {name}, {country}
            </h3>
          </div>
          <span
            className='cursor-pointer'
            data-id=''
            onClick={handleRemove}
          >
            <img
              alt=''
              src={close_card_icon}
            />
          </span>
        </div>

        <div className='mb-8 flex justify-between max-md:flex-col'>
          <div className='max-md:py-6'>
            <div className='text-[10rem] font-black max-md:text-9xl max-md:text-center'>
              {convertCelsius(temp)}º
            </div>
            <div className='flex justify-between gap-3 text-2xl'>
              <div>{capitalize(description)}</div>
              <div>{convertCelsius(feels_like)}º FL</div>
            </div>
          </div>

          <div className='flex flex-col justify-center text-[2rem]'>
            <div>
              <div className='mb-6'>
                <span className='mr-4'>
                  <img
                    alt=''
                    className='inline-flex'
                    src={max_icon}
                  />
                </span>
                Max. {convertCelsius(temp_max)}º
              </div>
              <div className='mb-6'>
                <span className='mr-4'>
                  <img
                    alt=''
                    className='inline-flex'
                    src={min_icon}
                  />
                </span>
                Min. {convertCelsius(temp_min)}º
              </div>
              <div className='mb-6'>
                <span className='mr-4'>
                  <img
                    alt=''
                    className='inline-flex'
                    src={humidity_icon}
                  />
                </span>
                {humidity}% Humidity
              </div>
            </div>
          </div>
        </div>

        <div className='text-center text-2xl font-semibold'>{searchDate.searchDate}</div>
      </div>
    </div>
  )
}

export default Card
