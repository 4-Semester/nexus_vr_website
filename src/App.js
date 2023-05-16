import './Components/Sidebar';
import Sidebar from './Components/Sidebar';
import { Route, Routes, useLocation} from "react-router-dom";
import Experience from './Components/Experience/Experience';
import Users from './Components/Users/Users';
import RegisterForm from './Components/Forms/RegisterForm';
import LoginForm from './Components/Forms/LoginForm';
import VerifyForm from './Components/Forms/VerifyForm';
import ProtectedRoute from './Components/ProtectedRoute';
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
          <Route path="/users" element={ <ProtectedRoute element={<Users/>} /> } />
          <Route path="/experiences" element={ <ProtectedRoute element={<Experience/>} /> } />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/verify" element={<VerifyForm/>} />
        </Routes>
      </main>
    </div>
    </>
    
  )
}

