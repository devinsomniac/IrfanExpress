import React from 'react'
import CategoryData from '@/Shared/CategoryData'

const Category = () => {
  return (
    <div className='mt-48 md:mt-40 flex flex-col items-center justify-center'>
      <h2 className="font-bold text-2xl text-center mb-6">Browse By Type</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-8 gap-6 px-20">
          {CategoryData.map((category,index)=>(
            <div className='flex flex-col p-3 items-center justify-center border rounded-lg shadow-2xl cursor-pointer text-sm'>
              <img src={category.icon} width={35} height={35}/>
              <h2>{category.name}</h2>
            </div>
          ))}
      </div>

    </div>
  )
}

export default Category