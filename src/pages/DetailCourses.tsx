import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../Redux/Store";

const DetailCourses: React.FC = () => {
    const { id } = useParams();
    const course = useSelector((state: RootState) =>
        state.courses.list.find(course => course.id === Number(id)));

    const [courseImage, setCourseImage] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [coursePrice, setCoursePrice] = useState(0);

    useEffect(() => {
        if (course) {
            setCourseImage(course.courseImage);
            setCourseTitle(course.courseTitle);
            setCourseDescription(course.courseDescription);
            setStartDate(course.startDate);
            setEndDate(course.endDate);
            setCoursePrice(course.coursePrice);
        }
    },[course])
   
   

    return (
        <>
            {/* detail course container */}
            <div className="my-20 flex flex-col  px-100 max-sm:px-10 max-lg:px-40 max-xl:px-50">
                {/* course image */}
                <div className="w-4/5 h-4/5">
                    <img
                    src={courseImage}
                    alt="course image"
                    className="w-full h-full rounded-lg"
                />
                </div>
                {/*== course image ==*/}

                {/* course content */}
                <div className="my-10 ">
                    {/* course title */}
                    <p className='text-[24px] font-medium text-wrap text-[#282938] opacity-[100%]'>
                        {courseTitle}
                    </p>
                    {/*== course title ==*/}

                    <p className='my-2 text-[16px] text-wrap text-[#282938] opacity-[60%] '>
                        {courseDescription}
                    </p>

                    <p className='text-[16px] text-wrap text-[#282938] opacity-[90%]'>
                    <span >
                     start from {startDate}
                    </span>
                    <span> to :     </span>
                    <span>
                   {endDate}
                    </span>
                    </p>

                    <p className='text-[16px] text-[#282938] text-wrap opacity-[90%]'>
                    total coast :    {coursePrice} $
                    </p>
                </div>
                {/*== course content ==*/}
            </div>
             {/*== detail course container ==*/}
            
        </>
    )
}

export default DetailCourses;