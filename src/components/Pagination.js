import React, { useState } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'

const Pagination = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPageNum = 250;

  const next = () => {
    if (currentPage === totalPageNum) {
      return null;
    } else {
      setCurrentPage(currentPage+1);
    }
  }

  const prev = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage-1);
    }
  }

  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
            <li className='flex items-center'>
              <button onClick={prev}>
                <img className='w-full h-auto rotate-180' src={paginationArrow} alt='left' />
              </button>
            </li>
            <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button></li>
            <li><button onClick={prev} className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bbg-gray-200 mx-1.5'>{currentPage-1}</button></li>
            <li><button disabled className='outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5'>{currentPage}</button></li>
            <li><button onClick={next} className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5'>{currentPage+1}</button></li>
            <li><button className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button></li>
            <li><button onClick={() => setCurrentPage(totalPageNum)} className='outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5'>{totalPageNum}</button></li>
            <li>
              <button onClick={next}>
                <img className='w-full h-auto' src={paginationArrow} alt='right' />
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Pagination