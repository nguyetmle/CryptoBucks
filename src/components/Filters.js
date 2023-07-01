import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from '../assets/submit-icon.svg'
import selectIcon from '../assets/select-icon.svg'
import { CryptoContext } from '../context/CryptoContext'

const Filters = () => {
  let { setCurrency, setSortBy } = useContext(CryptoContext);

  const currencyRef = useRef(null); //The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value; //useRef() only returns one item. It returns an Object called current.
    setCurrency(val);
    currencyRef.current.value = "";
  }

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  }

  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative'>
      {/* search coin function */}
      <Search />

      {/* change currency function */}
      <div className='flex mr-7'>
        <form onSubmit={handleCurrencySubmit}
          className='relative flex items-center font-nunito mr-12'>
          <label htmlFor='currency'
            className='relative flex justify-center items-center mr-2 font-bold'>Currency</label>
          <input type='text' placeholder='usd'
            className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4'
            name='currency'
            ref={currencyRef} />
          <button type='submit' className='ml-1 cursor-pointer'>
            <img src={submitIcon} alt='submit' className='w-full h-auto' />
          </button>
        </form>
      </div>

      {/* sort function */}
      <label className='relative flex justify-center items-center pr-5'>
        <span className='font-bold mr-2'>Sort by: </span>
        <select
          onClick={handleSort}
          name='sortby'
          className='rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0'
        >
          <option value='market_cap_desc'>Market Cap Descending</option>
          <option value='market_cap_asc'>Market Cap Ascending</option>
          <option value='volume_asc'>Volume Ascending</option>
          <option value='volume_desc'>Volume Descending</option>
          <option value='id_asc'>Coin ID Ascending</option>
          <option value='id_desc'>Coin ID Descending</option>
        </select>
        <img src={selectIcon} alt='submit' className='w-[1rem] h-auto absolute right-5 top-2 pointer-events-none' />
      </label>
    </div>
  )
}

export default Filters