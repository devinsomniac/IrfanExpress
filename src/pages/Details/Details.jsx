import Header from '@/components/Header'
import Search from '@/components/Search'
import React from 'react'
import PopularData from '@/Shared/popularData'
import Footer from '@/components/Footer'
import { BiSolidOffer } from "react-icons/bi";
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'


const Details = () => {
  return (
    <div>
      <Header/>
      <div className='p-8 flex justify-center items-center bg-slate-200'>
        <Search/>
      </div>
      <div className='p-14 mx-16'>
        <h2 className=' text-2xl font-semibold'>Voilla !</h2>
        <h2 className=' text-4xl font-thin'>{PopularData[2].name}</h2>
        </div>
        <Separator/>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-10 gap-4'>
        <div className='col-span-2 flex justify-center'>
          <div>
            <img src={PopularData[2].image} alt="Images" className='object-contain rounded-xl'  />
          </div>
        </div>
        <div className='col-span-1 '>
          <div className='bg-slate-200 p-6 rounded-xl shadow-2xl border border-dashed border-black'>
            <div className='text-xl flex items-center gap-3'>
            <h2>Our Offer Price</h2>
            <BiSolidOffer />
            </div>
            <div className='font-bold text-4xl'>
            {PopularData[2].Deal}
            </div>
            <Button className="mt-2 bg-blue-500 w-full hover:bg-white hover:text-blue-700">Call Us</Button>
          </div>
          <div>

          </div>
        </div>
      </div>
      <Separator/>
      <Footer/>
    </div>
  )
}

export default Details
