
import './App.css'

import {Route,Routes} from 'react-router-dom'

import RequireAuth from './Components/Auth/RequireAuth';
import RequireAuth2 from './Components/Auth/RequireAuth2';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/ContactPage';
import CourseDescription from './Pages/Course/CourseDescription';
import Courses from './Pages/Course/Courselist';
import CreateCourse from './Pages/Course/CreateCourse';
import Denied from './Pages/Denied';
import HomePage from './Pages/Homepage';
import Login from './Pages/loginPage';
import PageNotFound from './Pages/PageNotFound';
import Checkout from './Pages/Payment/Checkout';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess';
import SignUp from './Pages/SignUp';
import EditProfile from './Pages/User/EditProfile';
import Profile from './Pages/User/Profile';

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


        <Route element = {<RequireAuth allowedRoles={ ["ADMIN"]}/>}>
          <Route path = "/course/create" element = {<CreateCourse/>}></Route>
        </Route>

        <Route element = {<RequireAuth allowedRoles={ ["ADMIN","USER"]}/>}>
          <Route path = "/user/profile" element = {<Profile/>}></Route>
          <Route path = "/user/editprofile" element = {<EditProfile/>}></Route>
        </Route>

        <Route element = {<RequireAuth2 />}>
          <Route path = "/payment/subscribe" element = {<Checkout/>}></Route>
          <Route path = "/payment/success" element = {<CheckoutSuccess/>}></Route>
        </Route>
        




        <Route path = "*" element = {<PageNotFound/>}></Route>
        
      </Routes>
    </>
    
  )
}

export default App
