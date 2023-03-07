const UserCard = ({ user }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img className="w-full" src={user.avatar} alt={user.name} />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-700 text-base">{user.bio}</p>
        </div>
      </div>
    );
  }
  
  export default UserCard;