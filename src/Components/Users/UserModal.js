import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 
const UserModal = ({ isOpen, onRequestClose, user }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Details"
    >
      {/* Add the content of your modal here */}
      <h2>{user.name}</h2>
      <p>Antal Hjertetryk: 5000</p>
      <p>Gennemsnitlig tid mellem hvert tryk: 1 sek</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default UserModal;
