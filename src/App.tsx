import { BrowserRouter, Routes ,Route  } from 'react-router'
import './App.css'

// import HomePage from './pages/HomePage'
import LoginForm from './pages/LoginForm'
import MainPage from './pages/MainPage'
import CourseListPage from './pages/CourseListPage'
import EditCourse from './pages/EditCourse'
import AddNewCourse from './pages/AddNewCourse'
import DetailCourses from './pages/DetailCourses'
import RegisterationForm from './pages/RegisterationForm'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
            
          <Route path='/login' element={< LoginForm />} />
          <Route path='/register' element={<RegisterationForm/>} />
          <Route
            path='/courselist'
            element=
            {
              <ProtectedRoute>
                < CourseListPage />
              </ProtectedRoute>
              
            }
          />
          <Route
            path='/editcourse/:id'
            element=
            {
              <ProtectedRoute>
                <EditCourse />
              </ProtectedRoute>
              

            }
          />
          <Route
            path='/addnewcourse'
            element={
              <ProtectedRoute>
                < AddNewCourse />
              </ProtectedRoute>
              
            }
          />
          <Route
            path='/detailcourse/:id'
            element={
              <ProtectedRoute>
                < DetailCourses />
              </ProtectedRoute>
              
            }
          />

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
