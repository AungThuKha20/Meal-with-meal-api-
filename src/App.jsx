import * as React from 'react'
import './App.css'
import Meal from './Meal'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Detail from './Detail'
import { useState } from 'react'
import Search from './Search'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Meal />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
        <Route path="/Search/:name" element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default App
