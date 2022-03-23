import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import withReactContent from 'sweetalert2-react-content'

import ShopCard from '../components/ShopCard'
import SideShopCard from '../components/SideShopCard'
import data from '../data/data'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ShoppingList() {
    // GET FULL YEAR
    const year = new Date().getFullYear()

    // DATA STATE
    const { products } = data

    // REQUIRED STATE
    const [dark, setDark] = useState()
    const [cartItems, setCartItems] = useState([])
    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    // SEARCH EVENT HANDLER
    const searchItems = (searched) => {
        setSearch(searched)
        const results = products.filter((product) => product.name.toLowerCase().includes(searched.toLowerCase()))

        setFilteredResults(results)
    }

    // ADD TO CART EVENT HANDLER
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    // REMOVE FROM CART EVENT HANDLER
    const onRemove = (product) => {
        const exist = cartItems.find(x => x.id === product.id)
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(x => x.id !== product.id))
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }

    // FORMAT PRICE CURRENCY IDR
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(price)
    }

    // FORMULA FOR TOTAL PRICE
    const itemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    const itemPriceFormatted = formatPrice(itemsPrice)

    const taxPrice = itemsPrice * 0.1
    const taxPriceFormatted = formatPrice(taxPrice)

    const shippingPrice = itemsPrice < 5000 ? 0 : 500
    const shippingPriceFormatted = formatPrice(shippingPrice)

    const totalPrice = itemsPrice + taxPrice + shippingPrice
    const totalPriceFormatted = formatPrice(totalPrice)

    // ALERT MESSAGE ONCLICK BUTTON
    const onCheckout = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Pesanan anda sedang diproses!',
            showConfirmButton: false,
            timer: 1500
        })
        setCartItems([])
    }

    return (
        <div className={dark ? '' : 'dark'}>
            <div className='bg-gray-900 min-h-screen'>
                <Navbar />
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='font-bold text-center text-white my-8 md:text-4xl text-3xl'>List Keranjang Belanja</h1>
                </div>
                <div className='grid grid-cols-12 gap-6 mt-5'>
                    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
                        <div className='bg-white rounded-lg my-4 mx-4'>
                            <input placeholder='Coba cari disini...' onChange={(search) => searchItems(search.target.value)} className='placeholder-gray-400 border border-gray-300 focus:ring ring-blue-300 w-full py-4 px-4 rounded-lg' />
                        </div>
                        {
                            search.length > 1 ? (
                                filteredResults.map((product) => (
                                    <ShopCard key={product.id} product={product.name} price={product.price} onAdd={() => onAdd(product)} />
                                ))
                            ) : (
                                products.map((product) => (
                                    <ShopCard key={product.id} product={product.name} price={product.price} onAdd={() => onAdd(product)} />
                                ))
                            )
                        }
                    </div>
                    <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
                        <div className='bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4'>
                            {
                                cartItems.length === 0 && (
                                    <div className='flex justify-center items-center flex-col'>
                                        <h1 className='font-bold text-center text-gray-700 my-3 md:text-4xl text-3xl'>Keranjang Belanja Kosong</h1>
                                    </div>
                                )
                            }
                            {
                                cartItems.map((item) => (
                                    <SideShopCard key={item.id} product={item.name} qty={item.qty} price={item.price} onAdd={() => onAdd(item)} onRemove={() => onRemove(item)} />
                                ))
                            }
                        </div>
                        {
                            cartItems.length > 0 && (
                                <div className='bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4'>
                                    <div className='flex justify-center items-center text-center'>
                                        <div className='text-xl font-semibold w-full'>
                                            <p>Total Harga</p>

                                            <div className='flex justify-between border-b-2 mb-2 py-2 text-sm'>
                                                <p>Harga Barang :</p>
                                                <p>{itemPriceFormatted}</p>
                                            </div>

                                            <div className='flex justify-between border-b-2 mb-2 py-2 text-sm'>
                                                <p>Pajak Barang :</p>
                                                <p>{taxPriceFormatted}</p>
                                            </div>

                                            <div className='flex justify-between border-b-2 mb-2 py-2 text-sm'>
                                                <p>Ongkir Barang :</p>
                                                <p>{shippingPriceFormatted}</p>
                                            </div>

                                            <div className='flex justify-between border-b-2 mb-2 py-2 text-sm'>
                                                <p>Total Harga :</p>
                                                <p>{totalPriceFormatted}</p>
                                            </div>

                                            <div className=''>
                                                <button onClick={onCheckout} className='focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-full inline-flex items-center'>Pesan Barang</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <Footer year={year} />
            </div>
        </div>
    )
}

export default ShoppingList