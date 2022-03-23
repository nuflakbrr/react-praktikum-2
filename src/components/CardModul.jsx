import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

function CardModul({ bookName, author, publisher, price, cover, index, openEditForm }) {
    return (
        <>
            <div className='lg:w-1/4 md:w-1/4 p-4 w-full' onClick={() => openEditForm(bookName, author, publisher, price, cover, index)}>
                <div className='border bg-gray-200 dark:bg-gray-900 transition-all ease-in-out duration-300 rounded px-5 py-5 cursor-pointer'>
                    <div className='flex'>
                        <img className='w-24 rounded-md' src={cover} alt={bookName} />
                        <div className='ml-5'>
                            <h2 className='text-lg'>{bookName}</h2>
                            <h2 className='text-sm text-gray-500'>{author} | {publisher}</h2>
                            <h2 className='text-md'>{price}</h2>
                        </div>
                    </div>
                    <div className='flex text-sm justify-between mt-2'>
                        <div className='flex items-center'>
                            <FaEdit />
                            <p className='mx-1'>Edit Buku</p>
                        </div>
                        |
                        <div className='flex items-center'>
                            <FaTrashAlt />
                            <p className='mx-1'>Hapus Buku</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardModul