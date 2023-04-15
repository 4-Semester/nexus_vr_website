import "daisyui/dist/full.css";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full" src={user.avatar} alt={user.name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <button className="btn btn-primary active:bg-on-primary focus:bg-primary">Tryk</button>
      </div>
    </div>
  );
}

export default UserCard;