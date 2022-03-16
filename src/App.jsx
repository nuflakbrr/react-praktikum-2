import React, { useState } from 'react'
import { FaSun, FaMoon, FaPlus } from 'react-icons/fa'

import AddForm from './components/AddForm'
import Card from './components/Card'
import EditForm from './components/EditForm'

function App() {
  const date = new Date()
  const year = date.getFullYear()

  const [dark, setDark] = useState()
  const [eventList, setEventList] = useState([
    { eventName: "Hari Laut dan Samudera Nasional", date: `${year}-01-15` },
    { eventName: "Hari Lahan Basah Sedunia", date: `${year}-02-02` },
    { eventName: "Hari Peduli Sampah Nasional", date: `${year}-02-21` },
    { eventName: "Hari Hutan Sedunia", date: `${year}-03-21` },
    { eventName: "Hari Air Sedunia", date: `${year}-03-22` },
    { eventName: "Hari Meteorologi Sedunia", date: `${year}-03-23` },
    { eventName: "Hari Bumi", date: `${year}-04-22` },
    { eventName: "Hari Burung Migratori Internasional", date: `${year}-05-03` },
  ])
  const [popUpStack, setPopUpStack] = useState([])
  const [search, setSearch] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  function searchItems(searched) {
    setSearch(searched)
    const filteredEventList = eventList.filter(event => event.eventName.toLowerCase().includes(search.toLowerCase()))

    setFilteredResults(filteredEventList)
  }

  const pushPopUp = (element) => {
    setPopUpStack([...popUpStack, element])
  }

  const popPopUp = () => {
    setPopUpStack(popUpStack.slice(0, -1))
  }

  const openForm = () => {
    pushPopUp(<AddForm addEvent={addEvent} />)
  }

  function addEvent(event) {
    event.preventDefault()
    const eventName = event.target.eventName.value;
    const date = event.target.date.value;

    setEventList([...eventList, { eventName, date }])
    popPopUp()
  }

  const openEditForm = (eventName, date, index) => {
    pushPopUp(<EditForm eventName={eventName} date={date} handleSubmit={handleSubmit} index={index} />)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const eventName = event.target.eventName.value
    const date = event.target.date.value
  }

  return (
    <div className={dark ? '' : 'dark'}>
      {popUpStack}
      <div className='dark:bg-gray-900 dark:text-gray-300 transition-all ease-in-out duration-300 min-h-screen'>
        <div className='container px-10 py-10 mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-center md:text-4xl text-3xl mb-10'>Agenda Hari Lingkungan Hidup</h1>
            <div className='flex justify-center items-center'>
              <div className='form-section'>
                <input placeholder='Coba cari disini...' onChange={(event) => searchItems(event.target.value)} className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
              </div>
              <div className='darkmode-section ml-2'>
                <button type='button' onClick={() => setDark(!dark)} className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'>{dark ? <FaSun /> : <FaMoon />}</button>
              </div>
            </div>
          </div>
        </div>
        <div className='container px-10 mx-auto'>
          <div className='flex justify-end items-center'>
            <button type='button' onClick={openForm} className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaPlus /></button>
          </div>
          <div className='border-b my-5 dark:border-gray-500'></div>
          <div className='flex flex-wrap -m-4'>
            {search.length > 1 ? (
              filteredResults.map((event, index) => (
                <Card key={index} eventName={event.eventName} date={event.date} />
              ))
            ) : (
              eventList.map((event, index) => (
                <Card key={index} eventName={event.eventName} date={event.date} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App