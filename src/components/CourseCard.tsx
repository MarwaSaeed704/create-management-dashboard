
import { MdOutlineDateRange } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { useNavigate } from 'react-router';

interface CourseCardProps {
    id:number,
    courseImage: string,
    courseTitle: string,
    courseDescription: string,
    startDate: string,
    endDate: string,
    coursePrice: number,
    handleDelete: () => void
}

const CourseCard: React.FC<CourseCardProps> = ({ id, courseImage, courseTitle, courseDescription, startDate, endDate, coursePrice, handleDelete}) => {
    const navigate = useNavigate();    
  return (
      <>
          {/* courseCard */}
          <div key={id} className='w-full h-full'>
              
                {/* cardImage */}
                <div className="w-full rounded-2xl h-[220px] relative group shadow-lg overflow-hidden">
                  <img
                      src={courseImage}
                      alt='course image'
                      className='rounded-2xl w-full h-full '
                  />
                  {/* overlay */}
                  <div className='rounded-2xl absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center '>
                      <p
                          className="text-white text-xl font-bold cursor-pointer"
                          onClick={()=>navigate(`/detailcourse/${id}`)}
                      >
                          View Details
                      </p>
                  </div>
                  {/*== overlay ==*/}

                </div>
                {/*== cardImage ==*/}

                {/* card-content */}
              <div className='py-4 px-2 w-full h-full'>
                  
                    {/* course-title */}
                    <p className='text-[24px] font-medium text-balance text-[#282938] opacity-[100%]'>
                        {courseTitle}
                    </p>
                    {/*== course-title ==*/}

                    {/* course-description */}
                    <p className='my-2 text-[16px] text-wrap text-[#282938] opacity-[60%] '>
                       {courseDescription}
                    </p>
                    {/*== course-description ==*/}

                    {/* course-details */}
                    <div className='flex gap-3 flex-col'>
                            {/* start-end-date */}
                        <div className='flex gap-1 '>
                            <MdOutlineDateRange className='w-6 h-6 opacity-[80%]' />
                            <p className='text-[16px] text-wrap text-[#282938] opacity-[90%]'>
                                <span> {startDate} </span>
                                :
                                <span> {endDate} </span>
                            </p>
                            
                        </div>
                        {/*== start-end-date ==*/}
                        
                        {/* price */}
                        <div className='flex gap-1 text-wrap'>
                            <GiTwoCoins className='w-6 h-6 opacity-[80%]' />
                          <span className='text-[16px] text-[#282938] text-wrap opacity-[90%]'>
                              {coursePrice} <span>$</span>
                          </span>
                        </div>
                        {/*== price ==*/}
                        
                    </div>
                  {/*== course-details ==*/}
                  
                  {/* buttons */}
                  <div className='my-4 flex gap-8'>
                      <button
                          className='font-bold cursor-pointer text-white text-[18px] bg-green-700  rounded-xl w-30 py-1 px-4'
                          onClick={
                              () => {
                                navigate(`/editcourse/${id}`)
                              }       
                          }
                      >
                          Edit
                      </button>

                      <button
                          onClick={handleDelete}
                          className='font-bold cursor-pointer text-white text-[18px] bg-red-700  rounded-xl w-30 py-1 px-4'
                      >
                          Delete
                      </button>
                      
                  </div>
                  {/*== buttons ==*/}
                        
              </div>
              {/*== card-content ==*/}

              {/* show deleteCourse component over courseCard */}
              {/* {removeCourse && <DeleteCourse onClose={() => { setRemoveCourse(false); } } id={id} />} */}

          </div>
          {/*== courseCard ==*/}
      </>
  )
}

export default CourseCard
