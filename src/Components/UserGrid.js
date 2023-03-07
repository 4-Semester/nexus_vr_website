import UserCard from './UserCard';

const UserGrid = ({ users }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserGrid;
