import './Components/Sidebar';
import Sidebar from './Components/Sidebar';
import { Route, Routes} from "react-router-dom";
import Experience from './Components/Experience/Experience';
import Users from './Components/Users/Users';
import RegisterForm from './Components/Forms/RegisterForm';
import LoginForm from './Components/Forms/LoginForm';
import SimpleLineChart from './Components/chart';

export default function App() {
  return (
    <>
    

    <div className="flex">
    <div className='flex min-h-screen'>
      <Sidebar />
    </div>
      <main className="flex-grow p-4">
        <Routes>
        <Route path="/Users" element={<Users/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/Register" element={<RegisterForm/>} />
          <Route path="/Chart" element={<SimpleLineChart/>} />
        </Routes>
      </main>
    </div>
    </>
    
  )
}

