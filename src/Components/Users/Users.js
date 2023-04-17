import React, { useState, useEffect } from 'react';
import UserGrid from './UserGrid';
import axios from 'axios';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import firestore from '../../Firebase';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const usersCollection = collection(firestore, "users");
    const usersQuery = query(usersCollection, orderBy("name"));
    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const newUsers = snapshot.docs.map((doc) => {
        const userData = doc.data();
        return {
          id: doc.id,
          name: userData.name,
        };
      });
      
        console.log(newUsers);
        setUsers(newUsers, console.log(newUsers));
        
    });

    return () => {
        unsubscribe();
    };
}, []);

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
      <UserGrid users={filteredUsers.length > 0 ? filteredUsers : users} />
      </div>
    </>
  );
};

export default Users;
