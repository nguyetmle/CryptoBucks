import React from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'

const Pagination = () => {
  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
            <li className='flex items-center'>
                <img className='w-full h-auto' src={paginationArrow} alt='left' />
            </li>
            <li>...</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>Last page</li>
            <li>
                <img className='w-full h-auto' src={paginationArrow} alt='left' />
            </li>
        </ul>
    </div>
  )
}

export default Pagination