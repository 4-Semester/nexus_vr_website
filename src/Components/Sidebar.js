import { Link, useLocation } from 'react-router-dom';

export function Sidebar () {
    return (
      <div className="flex flex-col w-64 h-screen bg-gray-800">
        {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-lg font-bold">NexusVR</span>
        </div>
        {/* Sidebar content */}
        <div className="flex-grow p-4 overflow-y-auto">
          <ul className="text-white">
          <li className="py-2 hover:bg-gray-700">
                <Link to="/Components/Users" className="block py-2 text-white hover:text-gray-200 w-full">Brugere</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
                <Link to="/Components/Experience" className="block py-2 text-white hover:text-gray-200 w-full">Oplevelser</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;