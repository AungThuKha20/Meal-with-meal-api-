import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TfiYoutube } from 'react-icons/tfi'

const Detail = () => {
  const { id } = useParams()
  const [meals, setMeal] = useState({})
  useEffect(() => {
    fetchMeal()
  }, [])

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    )
    const { meals } = await api.json()
    setMeal(meals[0])
    console.log(meals[0])
  }
  return (
    <div className="  md:flex md:mx-[50px] lg:mx-[150px]  lg:flex md:justify-evenly lg:justify-evenly md:align-middle lg:align-middle">
      <img
        className=" object-contain mt-[100px] mx-auto h-[300px] md:h-[300px] lg:h-[400px]  rounded-xl shadow-lg  "
        src={meals.strMealThumb}
        alt=""
      />
      <div className=" mb-[60px]  text-yellow-900 mx-auto mt-[25px] text-center ">
        <h1 className=" text-[25px] font-bold">{meals.strMeal}</h1>
        <h5 className="bg-yellow-100 text-yellow-800 text-xs mt-2 font-medium  p-2 w-[150px] mx-auto rounded-full dark:bg-yellow-900 dark:text-yellow-300">
          {meals.strArea}
        </h5>

        <a href={meals.strYoutube} className=" text-center flex justify-center">
          <TfiYoutube className="text-[60px] h-[80px] mt-2 text-red-700 hover:text-[65px]" />
        </a>

        <h5 className=" font-bold  text-[20px]">{meals.strTags}</h5>
        <h5 className=" font-medium mt-3  mx-[30px]  scroll-smooth">
          {meals.strInstructions}
        </h5>
      </div>
    </div>
  )
}

export default Detail
