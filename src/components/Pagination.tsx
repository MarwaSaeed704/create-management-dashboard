import React from 'react'
import { Link } from 'react-router'

const Pagination:React.FC=()=> {
  return (
      <>
          <div className='flex gap-8 justify-center items-center my-20 max-sm:gap-4'>
              <Link
                  to=""
                  className='bg-[#FCD980] text-[#fff] text-[24px] w-10 h-10 flex justify-center items-center rounded-sm '
              >
                  1
              </Link>

              <Link
                  to=""
                  className='bg-[#F5F5F5] text-[#656565] text-[24px] w-10 h-10 flex justify-center items-center rounded-sm '
              >
                  2
              </Link>

              <Link
                  to=""
                  className='bg-[#F5F5F5] text-[#656565] text-[24px] w-10 h-10 flex justify-center items-center rounded-sm '
              >
                  3
              </Link>

              <Link
                  to=""
                  className='bg-[#F5F5F5] text-[#656565] text-[24px] w-10 h-10 flex justify-center items-center rounded-sm '
              >
                  4
              </Link>

              <Link
                  to=""
                  className='bg-[#F5F5F5] text-[#656565] text-[24px] w-10 h-10 flex justify-center items-center rounded-sm '
              >
                  5
              </Link>


          </div>
      </>
  )
}

export default Pagination
