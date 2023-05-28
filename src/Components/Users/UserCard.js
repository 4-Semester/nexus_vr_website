import React, { useState } from "react";
import "daisyui/dist/full.css";
import UserModal from "./UserModal";

const UserCard = ({ user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Convert press and avg values to numbers if they are valid numbers
  const pressValue = Number.isNaN(Number(user.press))
    ? null
    : parseInt(user.press);
  const avgValue = Number.isNaN(Number(user.avg)) ? null : parseFloat(user.avg);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{user.name}</h2>
        <p>
          Antal Hjertetryk:{" "}
          {pressValue !== null ? pressValue : "Invalid Press Value"}
        </p>
        <p>
          Gennemsnitlig tid mellem hvert tryk:{" "}
          {avgValue !== null ? avgValue + " sek" : "Invalid Avg Value"}
        </p>
        <button
          className="btn btn-primary active:bg-on-primary focus:bg-primary"
          onClick={() => setModalIsOpen(true)}
        >
          Flere detaljer
        </button>
        <UserModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          user={user}
        />
      </div>
    </div>
  );
};

export default UserCard;
