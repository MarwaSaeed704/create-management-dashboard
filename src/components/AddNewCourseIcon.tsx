import React from 'react'
import { useNavigate } from 'react-router'

const AddNewCourseIcon: React.FC = () => {
    const navigate = useNavigate();
  return (
      <>
          <div>
              <button
                  className='fixed z-50  right-0  bottom-0 m-2 p-2 cursor-pointer bg-[#1C1E53] text-[#fff]  text-[28px] font-black w-12 h-12 rounded-full flex justify-center items-center hover:opacity-[.9] '
                  onClick={()=>{navigate('/addnewcourse')}}
              >
                  +
              </button>
          </div>
      </>
  )
}

export default AddNewCourseIcon
