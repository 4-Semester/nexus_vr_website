import './Components/Sidebar';
import Sidebar from './Components/Sidebar';
import { Route, Routes, useLocation} from "react-router-dom";
import Experience from './Components/Experience/Experience';
import Users from './Components/Users/Users';
import RegisterForm from './Components/Forms/RegisterForm';
import LoginForm from './Components/Forms/LoginForm';
<<<<<<< HEAD
=======
import SimpleLineChart from './Components/chart';
>>>>>>> daf44f3f3980be3548a9d80d23040162a0a6b1d0

export default function App() {
  const location = useLocation();

  const showSidebar = location.pathname !== '/';


  return (
    <>
   <div className="flex">
        {showSidebar && (
          <div className='flex min-h-screen'>
            <Sidebar />
          </div>
        )}
      <main className="flex-grow p-4">
        <Routes>
        <Route path="/Users" element={<Users/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Register" element={<RegisterForm/>} />
<<<<<<< HEAD
          <Route path="/" element={<LoginForm/>} />
=======
          <Route path="/Chart" element={<SimpleLineChart/>} />
>>>>>>> daf44f3f3980be3548a9d80d23040162a0a6b1d0
        </Routes>
      </main>
    </div>
    </>
    
  )
}

