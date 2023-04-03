import React, { useState } from 'react';
import UserGrid from './UserGrid';

const registeredUsers = [
  { id: 1, name: 'Bruger1', avatar: 'https://i.pinimg.com/170x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg', bio: 'Beskrivelse.' },
  { id: 2, name: 'Bruger2', avatar: 'https://i.pinimg.com/170x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg', bio: 'Beskrivelse.' },
  { id: 3, name: 'Bruger3', avatar: 'https://i.pinimg.com/170x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg', bio: 'Beskrivelse.' },
  { id: 4, name: 'Bruger4', avatar: 'https://i.pinimg.com/170x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg', bio: 'Beskrivelse.' },
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