import lupe_icon from '../../assets/lupe.svg'
import Spinner from '../Spinner/Spinner'

const SearchBar = ({onSubmit, loading, code}) => {
  return (
    <div>
      <div className=''>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold mb-5 text-4xl max-sm:text-3xl'>Weather in...</h1>
          {code == 404 ? <span className='max-sm:mb-5'>City not found</span> : null}
        </div>
      </div>
      <div className='relative'>
        <form
          className='flex gap-0'
          id='form'
          onSubmit={onSubmit}
        >
          <button
            className='bg-white rounded-s-3xl outline-none border-none cursor-pointer'
            type='submit'
          >
            <img
              alt=''
              className='py-2 px-[10px]'
              src={lupe_icon}
            />
          </button>
          <input
            autoComplete='off'
            className='font-semibold text-black rounded-r-3xl outline-none border-none py-2 pr-[10px] pl-[5px] w-full max-w-4xl text-2xl'
            id='search'
            name='search'
            placeholder='Search City or Country'
            type='text'
          />
        </form>
        <div className='absolute right-8 top-[7px] text-black'>{loading && <Spinner />}</div>
      </div>
    </div>
  )
}

export default SearchBar
