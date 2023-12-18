import React, { useState } from 'react'
import { SiFoodpanda } from 'react-icons/si'
import { SiIfood } from 'react-icons/si'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav = useNavigate()
  const [search, setSearch] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    nav(`/Search/` + search)
  }
  console.log(search)
  return (
    <div className=" flex justify-evenly align-middle h-[100%] m-5">
      <Link to={'/'} className=" hover:text-yellow-800">
        {' '}
        <SiFoodpanda className="w-[55px] h-[55px] hover:text-yellow-800 hover:rotate-[360deg] hover:transition " />
        <h1 className=" text-[20px] flex justify-center align-middle">
          <span className=" me-1 font-bold font-serif"> Menu</span> <SiIfood />{' '}
        </h1>
      </Link>
      <form onSubmit={submitHandler}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="focus:outline-none font-bold bg-violet-200 px-3 md:w-[300px] lg:w-[300px] h-[50px] rounded-2xl"
          placeholder="Search your dishes..."
        />
      </form>
    </div>
  )
}

export default Navbar
