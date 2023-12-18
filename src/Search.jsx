import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MealCart from './MealCart'

import { Link } from 'react-router-dom'

const Search = () => {
  const { name } = useParams()
  const [items, setItem] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    )
    const { meals } = await data.json()
    setItem(meals)
    console.log(meals)
  }
  return (
    <div className=" meal mx-[100px] flex justify-center my-7 align-middle flex-wrap gap-10 ">
      {items.map((item) => {
        return (
          <div key={item.meal} className="">
            <div className="  h-[300px] object-contain rounded-2xl image ">
              <MealCart
                key={item.idMeal}
                name={item.strMeal}
                image={item.strMealThumb}
                id={item.idMeal}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Search
