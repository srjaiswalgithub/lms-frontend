
import './App.css'

import {Route,Routes} from 'react-router-dom'

import AboutPage from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import CourseDescription from './Pages/Course/CourseDescription';
import Courses from './Pages/Course/Courselist';
import Denied from './Pages/Denied';
import HomePage from './Pages/Homepage';
import Login from './Pages/loginPage';
import PageNotFound from './Pages/PageNotFound';
import SignUp from './Pages/SignUp';

function App() {
 

  return (
    <>
      <Routes>
        <Route path = "/" element = {<HomePage/>}></Route>
        <Route path = "/about" element = {<AboutPage/>}></Route>
        <Route path = "/signup" element = {<SignUp/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/courses" element = {<Courses/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/denied" element = {<Denied/>}></Route>
        <Route path = "/course/description" element = {<CourseDescription/>}></Route>
        <Route path = "*" element = {<PageNotFound/>}></Route>
        
      </Routes>
    </>
    
  )
}

export default App
