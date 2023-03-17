import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 min-h-screen bg-gray-800">
      {/* Sidebar header */}
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white text-lg font-bold">NexusVR</span>
      </div>
      {/* Sidebar content */}
      <div className="flex-grow py-4 overflow-y-auto">
        <ul className="text-white">
          <li className={location.pathname == '/Users' ? 'py-2 bg-gray-700' : 'py-2 hover:bg-gray-700'}>
            <Link to="/Users" className="block p-2 w-full">
              Brugere
            </Link>
          </li>
          <li className={location.pathname == '/Experience' ? 'py-2 bg-gray-700' : 'py-2 hover:bg-gray-700'}>
            <Link to="/Experience" className="block p-2 w-full">
              Oplevelser
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
