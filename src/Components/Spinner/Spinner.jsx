import loading_svg from '../../assets/loading.svg'

const Spinner = () => {
  return (
    <div>
      <div className='h-8 w-8 flex justify-center items-center'>
        <img
          alt=''
          className='animate-spin'
          src={loading_svg}
        />
      </div>
    </div>
  )
}

export default Spinner
