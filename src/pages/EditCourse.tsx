
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { RootState } from "../Redux/Store";
import { useEffect, useState } from "react";
import { updateCourse } from "../Redux/features/coursesSlice";

const EditCourse: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const course = useSelector((state: RootState) =>
        state.courses.list.find(c => c.id === Number(id))
    );

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
        
    }, [course]);

    const handleUpdateCourse = () => {
        if (!course) return;

        dispatch(updateCourse({ id: course.id, courseImage, courseTitle, courseDescription, startDate, endDate, coursePrice }));
        navigate('/courselist');
        
    }
    
    

    
    return (
        <>
            {/* container-form */}
            <div className="w-full h-full bg-[#1C1E53] text-[#fff]">
                {/* update-form */}
                <form
                    className="flex w-full flex-col justify-center items-center py-10"
                    onSubmit={handleUpdateCourse}
                >
                    {/* upload-courseImage */}
                    <div className="mb-8 w-3/5 max-sm:w-4/5">
                    <span className="block m-2 text-[18px] text-[#ddd]">Upload an image:</span>
                    <input
                        className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                        type="file"
                        accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setCourseImage(reader.result as string);
                                    }

                                    reader.readAsDataURL(file);

                                }
                        }}    

                    />
                    </div>
                    {/*== upload-image ==*/}

                    {/* update-titleCourse */}
                    <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="text"
                            placeholder="update title Course"
                            value={courseTitle}
                            onChange={(e)=>setCourseTitle(e.target.value)}
                        />

                    </div>
                    {/*== update-titleCourse ==*/}

                     {/* update-descriptionCourse */}
                     <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="text"
                            placeholder="update description Course"
                            value={courseDescription}
                            onChange={(e)=>setCourseDescription(e.target.value)}
                        />

                    </div>
                    {/*== update-descriptionCourse ==*/}

                     {/* update-dateCourse */}
                     <div className="flex gap-4 mb-8 w-3/5 max-sm:w-4/5 max-sm:gap-2">
                        <input
                            className="p-4 w-1/2 border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="date"
                            placeholder="start date"
                            value={startDate}
                            onChange={(e)=>setStartDate(e.target.value)}
                        />
                        <input
                            className="p-4 w-1/2 border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="date"
                            placeholder="end date"
                            value={endDate}
                            onChange={(e)=>setEndDate(e.target.value)}
                        />
                    </div>
                    {/*== update-dateCourse ==*/}

                     {/* update-priceCourse */}
                     <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="number"
                            min="0"
                            placeholder="update price Course"
                            value={coursePrice}
                            onChange={(e)=>setCoursePrice(Number(e.target.value))}
                        />

                    </div>
                    {/*== update-priceCourse ==*/}

                    <button
                          type="submit"
                          className="w-3/5 p-4 rounded-lg text-center text-[#282938] font-black text-[18px] bg-[#FCD980] max-sm:w-4/5"
                        >
                            Update
                        </button>


                </form>
                {/*== update-form ==*/}

            </div>
            {/*== container-form ==*/}
            
        </>
    )
}

export default EditCourse;