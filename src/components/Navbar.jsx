import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header className="dark:bg-gray-900 text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Praktikum 3</span>
                </NavLink>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to='/' className="mr-5 hover:text-gray-300">Soal 1</NavLink>
                    <NavLink to='/soal2' className="mr-5 hover:text-gray-300">Soal 2</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar