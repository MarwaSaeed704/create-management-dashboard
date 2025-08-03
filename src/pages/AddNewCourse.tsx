import { useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { addCourse } from "../Redux/features/coursesSlice";

const AddNewCourse: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

     const [newCourse, setNewCourse] = useState(
    {
      courseImage: '',
      courseTitle: '',
      courseDescription: '',
      startDate: '',
      endDate: '',
      coursePrice: 0,
      

    }
  );
    
   

    const handleAddNewCourse = () => {
        
        dispatch(addCourse({ id:Date.now(), ...newCourse}));
        navigate('/courselist');
    }


    return (
    
        <>
            {/* container-form */}
            <div className="w-full h-full bg-[#1C1E53] text-[#fff] ">
                {/* addNewCourse-form */}
                <form
                    className="flex w-full flex-col justify-center items-center py-10 "
                    onSubmit={handleAddNewCourse}
                    
                >
                    {/* upload-courseImage */}
                    <div className="mb-8 w-3/5 max-sm:w-4/5">
                    <span className="block m-2 text-[18px] text-[#ddd]">Upload an image:</span>
                    <input
                        className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="file"
                            required
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                       setNewCourse({...newCourse,courseImage:reader.result as string});
                                    }

                                    reader.readAsDataURL(file);
                                }
                        }}  
                           

                    />
                    </div>
                    {/*== upload-image ==*/}

                    {/* titleCourse */}
                    <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="text"
                            required
                            placeholder=" title Course"
                            value={newCourse.courseTitle}
                            onChange={(e)=>{setNewCourse({...newCourse,courseTitle:e.target.value})}}
                           
                        />

                    </div>
                    {/*== titleCourse ==*/}

                     {/* descriptionCourse */}
                     <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="text"
                            required
                            placeholder="description Course"
                            value={newCourse.courseDescription}
                            onChange={(e)=>{setNewCourse({...newCourse,courseDescription:e.target.value})}}
                            
                        />

                    </div>
                    {/*== descriptionCourse ==*/}

                     {/* dateCourse */}
                     <div className="flex gap-4 mb-8 w-3/5 max-sm:w-4/5 max-sm:gap-2">
                        <input
                            className="p-4 w-1/2 border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="date"
                            required
                            placeholder="start date"
                            value={newCourse.startDate}
                            onChange={(e)=>{setNewCourse({...newCourse,startDate:e.target.value})}}
                           
                        />
                        <input
                            className="p-4 w-1/2 border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="date"
                            required
                            placeholder="end date"
                            value={newCourse.endDate}
                            onChange={(e)=>{setNewCourse({...newCourse,endDate:e.target.value})}}
                           
                        />
                    </div>
                    {/*== dateCourse ==*/}

                     {/* priceCourse */}
                     <div className="mb-8 w-3/5 max-sm:w-4/5">
                        <input
                            className="p-4 w-full border-[1px] border-[#F4F6FC] rounded-lg text-[16px] text-[#F4F6FC]"
                            type="number"
                            min="0"
                            required
                            placeholder=" price Course"
                            value={newCourse.coursePrice}
                            onChange={(e)=>{setNewCourse({...newCourse,coursePrice:Number(e.target.value)})}}
                           
                        />

                    </div>
                    {/*== priceCourse ==*/}

                    <button
                          type="submit"
                        className="w-3/5 p-4 rounded-lg text-center text-[#282938] font-black text-[18px] bg-[#FCD980] max-sm:w-4/5"
                        
                        >
                           Add New Course
                        </button>


                </form>
                {/*== addNewCourse-form ==*/}

            </div>
            {/*== container-form ==*/}
            
        </>
    )
};

export default AddNewCourse;