import React, { useState } from 'react';
import UserGrid from './UserGrid';

const registeredUsers = [
  { id: 1, name: 'Patrick Bateman', avatar: 'https://d1e00ek4ebabms.cloudfront.net/production/9b2bdcdf-448f-4705-84e9-179bc3cbf4a0.jpg', bio: 'Beskrivelse.' },
  { id: 2, name: 'Lars Andersen', avatar: 'https://img-cdn-p.ekstrabladet.dk/image/ekstrabladet/3562960/relationBig/?at=c2244694ced01a0e57c19ee7bb60ca8c', bio: 'Beskrivelse.' },
  { id: 3, name: 'Jens Lauritsen', avatar: 'https://www.wiwo.de/images/02_pol_iv-hoppe-jpg/9282206/3-format1001.jpg', bio: 'Beskrivelse.' },
  { id: 4, name: 'Ryan Gosling', avatar: 'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2011/9/14/1315997543282/ryan-gosling-in-drive-007.jpg?width=465&quality=85&dpr=1&s=none', bio: 'Beskrivelse.' },
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(registeredUsers);

  const handleSearch = () => {
    const filtered = registeredUsers.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1>Brugere</h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 mr-2"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Søg
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <UserGrid users={filteredUsers} />
      </div>
    </>
  );
};

export default Users;