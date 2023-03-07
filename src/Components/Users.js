import React from 'react';
import UserGrid from './UserGrid';

const registeredUsers = [
  { id: 1, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
  { id: 2, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
  { id: 3, name: 'Patrick Bateman', avatar: 'https://upload.wikimedia.org/wikipedia/en/5/52/American-psycho-patrick-bateman.jpg', bio: 'Beskrivelse.' },
];

const Users = () => {
  return (
    <div className="container mx-auto px-4">
      <UserGrid users={registeredUsers} />
    </div>
  );
}

export default Users;
