import React from 'react';
import { FaFilterCircleDollar } from "react-icons/fa6";

interface FilterProps{
    value: number | null,
    onChange:(value:number | null)=>void
}

const Filter:React.FC<FilterProps>=({value,onChange})=> {
   return (
        <>
            <div className='w-2/6 text-gray-700 relative mt-20 mr-5 mb-5'>
                
                <input
                   type="number"
                   placeholder='fliter by price '
                   className='w-full px-8 py-2   border-1 rounded-lg border-gray-500'
                   value={value ?? ''}
                   onChange={(e) => 
                       onChange(e.target.value ? Number(e.target.value) : null)
                   } 
               />
               <FaFilterCircleDollar className='absolute mx-2 top-3 w-5 h-5' />
            </div>
        </>
    )
}

export default Filter
