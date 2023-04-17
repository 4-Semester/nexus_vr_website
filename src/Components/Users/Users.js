import React, { useState, useEffect } from 'react';
import UserGrid from './UserGrid';
import axios from 'axios';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  /*useEffect(() => {
    axios.get('https://api.nexusvr.tech/schema/swagger')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data); // set filteredUsers to initial list of users
      })
      .catch(error => {
        console.error(error);
      });
  }, []);*/

  const handleSearch = () => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <div className="flex justify-end">
        <div className="flex">
          <div className="ml-auto">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
