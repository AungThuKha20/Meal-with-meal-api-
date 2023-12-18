import React, { useEffect, useState } from 'react'
import MealCart from './MealCart'

const Meal = () => {
  const [meals, setMeal] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const api = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    )
    const { meals } = await api.json()
    setMeal(meals)
    console.log(meals)
  }
  return (
    <div className=" meal mx-[100px] flex justify-center my-7 align-middle flex-wrap gap-10">
      {meals.map((meal) => {
        return (
          <MealCart
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
            id={meal.idMeal}
          />
        )
      })}
    </div>
  )
}

export default Meal
