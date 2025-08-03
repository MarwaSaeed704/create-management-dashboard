
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import AddNewCourseIcon from "../components/AddNewCourseIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useEffect, useState } from "react";
import { deleteCourse } from "../Redux/features/coursesSlice";
import ConfirmDailog from "../components/ConfirmDailog";
import SuccessMessage from "../components/SuccessMessage";



const CourseListPage: React.FC = () => {
  
  const courses = useSelector((state: RootState) => state.courses.list);
  // for filter
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  // for confirm dialog
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const dispatch = useDispatch();

  

  // filter by course title
  const filteredCourses = courses.filter(course =>
    course.courseTitle.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
    (maxPrice === null || course.coursePrice <= maxPrice)
  );

  // handle delete click
  const handleDeleteClick = (id: number) => {
    setSelectedCourseId(id);
    setShowConfirm(true);
  }

  // confirm delete
  const confirmDelete = () => {
    if (selectedCourseId) {
      dispatch(deleteCourse(selectedCourseId));
      setShowSuccess(true);
      
      setTimeout(() => { setShowSuccess(false) }, 3000)
    }

    setShowConfirm(false);
    setSelectedCourseId(null);
  };

  // to control the scroll of the page 
  useEffect(() => {
        
        if (showConfirm ||showSuccess) {
            // to stop scroll
            document.body.style.overflow = 'hidden';
        } else {
            // to run scroll
            document.body.style.overflow = '';
        }

        // if component disapear will return the scroll
        return (() => {
            document.body.style.overflow = '';
        })
            
        
    },[showConfirm,showSuccess])
 


  return (
    <>
      {/* allCourses-container */}
      <div className= "w-full relative">
        <Navbar />

        {/* search&filter */}
        <div className="w-full mb-5 pt-10 flex gap-10">
         
          <Search
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <Filter
            value={maxPrice}
            onChange={setMaxPrice}
          />
        </div>
        {/*== search&filter ==*/}
        
        {/* course-list */}
         <div className="grid grid-cols-3 gap-10 p-20 max-sm:grid-cols-1 max-sm:p-8 max-lg:grid-cols-2 max-lg:p-10">
          {filteredCourses  .length > 0 ?
           filteredCourses .map((course) => (
          
          <CourseCard
            key={course.id}
            id={course.id}
            courseImage={course.courseImage}
            courseTitle={course.courseTitle}
            courseDescription={course.courseDescription}
            startDate={course.startDate}
            endDate={course.endDate}
            coursePrice={course.coursePrice}
            handleDelete={()=>handleDeleteClick(course.id)}
         
          />
        
        ) )
          :
            <p className="text-[32px] font-black text-center text-[#282938] opacity-[60%]"> there is no course !!! </p>
        }
        </div>
        {/*== course-list ==*/}

        <Pagination />

        <div className="relative w-full">
          <AddNewCourseIcon />
        </div>

        {showConfirm && 
          <ConfirmDailog
          message="Are you sure you want to delete this course?"
          onConfirm={confirmDelete}
          onCancle={()=>setShowConfirm(false)}
          />
        }

        {showSuccess &&
          <SuccessMessage
          message="The course has been successfully deleted."
          onClose={()=>setShowSuccess(false)}
          />
        }

      </div>
       {/*== allCourses-container ==*/}
         
      
      </>
  )
}

export default CourseListPage;
