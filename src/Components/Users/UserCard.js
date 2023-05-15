import "daisyui/dist/full.css";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p>Antal Hjertetryk: 5000</p>
        <p>Gennemsnitlig tid mellem hvert tryk: 1 sek</p>
        <button className="btn btn-primary active:bg-on-primary focus:bg-primary">Tryk</button>
      </div>
    </div>
  );
}



export default UserCard;