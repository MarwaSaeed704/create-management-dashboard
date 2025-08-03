import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import courseImage1 from "../../assets/course1.png";
import courseImage2 from "../../assets/course2.png";
import courseImage3 from "../../assets/course3.png";
import courseImage4 from "../../assets/course4.png";
import courseImage5 from "../../assets/course1.png";

interface Course{
    id:number,
    courseImage: string, //Base64 string
    courseTitle: string,
    courseDescription: string,
    startDate: string,
    endDate: string,
    coursePrice:number,   
};
  
interface CoursesState{
    list:Course[]
};

const defaultCourses = [
    {
        id: 1,
        courseImage: courseImage1,
        courseTitle: "Dasar Pemrograman WEB",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 100,
    },
    {
        id: 2,
        courseImage: courseImage2,
        courseTitle: "Digital Marketing 101",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 1000,
    },
    {
        id: 3,
        courseImage: courseImage3,
        courseTitle: "Data Science Dasar",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 200,
    },
    
    {
        id: 4,
        courseImage: courseImage4,
        courseTitle: "UI/UX Pemula",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 2000,
    },
    
    {
        id: 5,
        courseImage: courseImage5,
        courseTitle: "Public Speaking Dasar",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 150,
    },
    {
        id: 6,
        courseImage: courseImage1,
        courseTitle: "Jaringan Dasar",
        courseDescription: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
        startDate: "6 May",
        endDate: "7 June",
        coursePrice: 1500,
    },
    
];

const savedCourses = localStorage.getItem('courses');

const initialState: CoursesState = {
    list: savedCourses ? JSON.parse(savedCourses) : defaultCourses,
    
};

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<Course>) => {
            state.list.push(action.payload);
            localStorage.setItem('courses', JSON.stringify(state.list));    
            
        },
        deleteCourse: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(course => course.id !== action.payload);
            localStorage.setItem('courses', JSON.stringify(state.list));
            
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            const index = state.list.findIndex(c => c.id === action.payload.id);

            if(index !== -1){
                state.list[index] = action.payload;
                localStorage.setItem('courses', JSON.stringify(state.list));
            }
            
            
        },
    }
});

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
