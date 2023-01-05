import React from 'react';

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className="user-card">
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
      <p><img src={user.avatar} alt="Avatar" /></p>
    </div>
  );
};

export default UserCard;
