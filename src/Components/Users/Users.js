import React from 'react';
import UserGrid from './UserGrid';

const registeredUsers = [
  { id: 1, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
  { id: 2, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
  { id: 3, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
];

const Users = () => {
  return (
    <>
      <div className="flex justify-between items-center">
    <div>
      <h1>Brugere</h1>
    </div>
    <div className="flex">
      <input type="text" placeholder="Search" className="border p-2 mr-2" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Søg
      </button>
    </div>
  </div>
  <div className="container mx-auto px-4 mt-10">
    <UserGrid users={registeredUsers} />
  </div>
    </>
  );
}

export default Users;
