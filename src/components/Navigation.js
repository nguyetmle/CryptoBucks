import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-lg'>
      <NavLink 
        to='/' 
        className={
          ({ isActive })  => {
              return `w-full text-base text-center font-nunito m-2.5
              ${
                isActive
                ? 'bg-cyan text-gray-300'
                : 'hover:text-cyan bg-gray-200 text-gray-100 border-0 cursor-pointer rounded capitalize font-semibold'
              }
              border-0 cursor-pointer rounded capitalize font-semibold`
          }
        }
      >
        Crypto
      </NavLink>

      <NavLink 
        to='/' 
        className={
          ({ isActive })  => {
              return `w-full text-base text-center font-nunito m-2.5
              ${
                isActive
                ? 'bg-cyan text-gray-300'
                : 'hover:text-cyan bg-gray-200 text-gray-100 border-0 cursor-pointer rounded capitalize font-semibold'
              }
              border-0 cursor-pointer rounded capitalize font-semibold`
          }
        }
      >
        Trending
      </NavLink>

      <NavLink 
        to='/' 
        className={
          ({ isActive })  => {
              return `w-full text-base text-center font-nunito m-2.5
              ${
                isActive
                ? 'bg-cyan text-gray-300'
                : 'hover:text-cyan bg-gray-200 text-gray-100 border-0 cursor-pointer rounded capitalize font-semibold'
              }
              border-0 cursor-pointer rounded capitalize font-semibold`
          }
        }
      >
        Saved
      </NavLink>

    </nav>
  )
}

export default Navigation