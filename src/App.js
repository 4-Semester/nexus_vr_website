import logo from './logo.svg';
import './App.css';
import './Components/Sidebar';
import Sidebar from './Components/Sidebar';
import { Route, Routes} from "react-router-dom";
import Experience from './Components/Experience/Experience';
import Users from './Components/Users/Users';

export default function App() {
  return (
    <>
    
    <div className="flex">
    <div className='flex min-h-screen bg-gray-200'>
      <Sidebar />
    </div>
      <main className="flex-grow p-4">
        <Routes>
        <Route path="/Users" element={<Users/>} />
          <Route path="/Experience" element={<Experience/>} />
        </Routes>
      </main>
    </div>
    </>
    
  )
}

