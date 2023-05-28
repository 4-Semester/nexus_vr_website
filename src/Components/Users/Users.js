import React, { useState, useEffect } from "react";
import UserGrid from "./UserGrid";
import axios from "axios";

const dummyUsers = [
  { id: 1, name: "Mike", press: 800, avg: 2 },
  { id: 2, name: "Jens", press: 300, avg: 2 },
  { id: 3, name: "Alexander", press: 1100, avg: 2 },
  { id: 4, name: "Rasmus", press: 1400, avg: 2 },
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState(dummyUsers);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
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
