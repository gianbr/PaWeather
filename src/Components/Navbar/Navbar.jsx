import Logo from '../../assets/PaWeather-logo.png'

const Navbar = () => {
  return (
    <div className='pb-24 pt-12 max-sm:w-72 max-xl:w-96 max-xl:m-auto'>
      <img
        alt='PaWeather Logo'
        src={Logo}
      />
    </div>
  )
}

export default Navbar
