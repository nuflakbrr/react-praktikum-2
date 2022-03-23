import React, { useState, useEffect } from 'react'
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function EditFormModul({ editBook, deleteBook, bookName, author, publisher, price, cover, index, onClose }) {
    const [bookNameValue, setBookNameValue] = useState(bookName)
    const [authorValue, setAuthorValue] = useState(author)
    const [publisherValue, setPublisherValue] = useState(publisher)
    const [priceValue, setPriceValue] = useState(price)
    const [coverValue, setCoverValue] = useState(cover)
    const [indexValue, setIndexValue] = useState(index)

    useEffect(() => {
        setBookNameValue(bookName)
        setAuthorValue(author)
        setPublisherValue(publisher)
        setPriceValue(price)
        setCoverValue(cover)
        setIndexValue(index)
    }, [bookName, author, publisher, price, cover, index])

    const changeBookName = (event) => {
        setBookNameValue(event.target.value)
    }

    const changeAuthor = (event) => {
        setAuthorValue(event.target.value)
    }

    const changePublisher = (event) => {
        setPublisherValue(event.target.value)
    }

    const changePrice = (event) => {
        setPriceValue(event.target.value)
    }

    const changeCover = (event) => {
        setCoverValue(event.target.value)
    }

    const changeIndex = (event) => {
        setIndexValue(event.target.value)
    }

    return (
        <div className='fixed bg-gray-400/80 w-full h-full'>
            <div className='lg:w-1/4 md:w-1/2 p-4 w-full my-20 container mx-auto border bg-white rounded'>
                <div className='flex justify-end items-center'>
                    <button onClick={onClose} className='text-lg'>
                        <AiOutlineClose />
                    </button>
                </div>
                <h1 className='text-center text-2xl'>Form Ubah Kegiatan</h1>
                <div className='px-10 py-5'>
                    <form onSubmit={editBook}>
                        <input hidden name='index' value={indexValue} readOnly />
                        <div className='relative'>
                            <label htmlFor='eventName'>Nama Buku <span className='text-red-500'>*</span></label>
                            <input type='text' value={bookNameValue} onChange={changeBookName} name='bookName' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='author'>Penulis Buku <span className='text-red-500'>*</span></label>
                            <input type='text' value={authorValue} onChange={changeAuthor} name='author' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='publisher'>Penerbit Buku <span className='text-red-500'>*</span></label>
                            <input type='text' value={publisherValue} onChange={changePublisher} name='publisher' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='price'>Harga Buku <span className='text-red-500'>*</span></label>
                            <input type='text' value={priceValue} onChange={changePrice} name='price' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='relative mt-5'>
                            <label htmlFor='cover'>Cover Buku <span className='text-red-500'>*</span></label>
                            <input type='text' value={coverValue} onChange={changeCover} name='cover' className='w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 dark:ring-blue-500 rounded outline-none transition duration-100 px-3 py-2' required />
                        </div>
                        <div className='flex justify-end items-center relative mt-5'>
                            <button type='submit' className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaCheck /></button>
                            <button type='submit' onClick={(event) => deleteBook(event, index)} className='inline-block ml-3 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-4 py-3'><FaTrashAlt /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditFormModul