import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EnvironmentDay from './pages/EnvironmentDay'
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<EnvironmentDay />} />
      <Route path="/soal2" element={<ShoppingList />} />
    </Routes>
  )
}

export default App