import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export function Sidebar() {
  const location = useLocation();

  const { user } = useContext(AuthContext)

  return (
    <div className="flex flex-col w-64 min-h-screen bg-gray-800 justify-between">
      <div className="flex flex-col">
      {/* Sidebar header */}
        <div className="flex items-center justify-center h-16 bg-gray-900 flex-col">
          <span className="text-white text-lg font-bold">NexusVR</span>
          <span>{user?.email} : {user?.roles ? user.roles.map((r) => r.name) : ''}</span>
        </div>
        {/* Sidebar content */}
        <div className="flex-grow py-4 overflow-y-auto">
          <ul className="text-white">
            <li className={location.pathname.toLowerCase() === '/users' ? 'py-2 bg-gray-700' : 'py-2 hover:bg-gray-700'}>
              <Link to="/Users" className="block p-2 w-full">
                Brugere
              </Link>
            </li>
            <li className={location.pathname.toLowerCase() === '/experiences' ? 'py-2 bg-gray-700' : 'py-2 hover:bg-gray-700'}>
              <Link to="/experiences" className="block p-2 w-full">
                Oplevelser
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {/* Sidebar footer */}
        <button className="flex items-center justify-center h-16 bg-red-900 text-gray hover:opacity-50 w-full font-bold"
          onClick={
            () => {
              localStorage.removeItem('token');
              window.location.reload();
            }
          }>
            Log ud
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
