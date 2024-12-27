import React from 'react';

const MyProfile = () => {
  const name = 'John Doe';
  const age = 18;
  const description = 'Developer at Facebook';
  const address = 'Facebook HQ, Menlo Park, CA';
  const avatar = "https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg"

  return (
    <div>
      <h1>User 1</h1>
      <img alt='avatar' style={{ width: 300 }} src={avatar} />
      <h1 style={{ color: "red" }}>{name}</h1>
      <h3>{age}</h3>
      <p>{description}</p>
      <p>{address}</p>
    </div>
  );
};

export default MyProfile;