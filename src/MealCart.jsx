import React from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MealCart = ({ name, image, id }) => {
  return (
    <div className="hover:rotate-[360deg] shadow-xl hover:delay-[0.7s] transition-all border border-[8px] rounded-[30px]  border-amber-700 relative  image-card">
      <Link to={`/Detail/${id}`}>
        <img
          className=" h-[300px] object-cover rounded-[20px] image"
          src={image}
          alt=""
        />
        <div className="  icon absolute hidden  z-10 bg-orange-600 p-3 rounded-[100%] bottom-[120px] left-[130px]"></div>
      </Link>
    </div>
  )
}

export default MealCart
