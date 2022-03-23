import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EnvironmentDay from './pages/EnvironmentDay'
import Modul from './pages/Modul'
import ShoppingList from './pages/ShoppingList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Modul />} />
      <Route path="/soal1" element={<EnvironmentDay />} />
      <Route path="/soal2" element={<ShoppingList />} />
    </Routes>
  )
}

export default App