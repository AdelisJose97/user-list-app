import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';

const UserDetailCard = ({ user }) => {
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '80%',
        maxWidth: 500,
      }}
    >
      <CardMedia
        sx={{ height: 200, marginTop: '10px' }}
        image={user?.image}
        title="user-img"
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span className="block text-base font-medium leading-10">
          First Name: {user?.firstName}
        </span>
        <span className="block text-base font-medium leading-10">
          Last Name: {user?.lastName}
        </span>
        <span className="block text-base font-medium leading-10">
          Email: {user?.email}
        </span>
        <span className="block text-base font-medium leading-10">
          Birth Date: {user?.birthDate}
        </span>
        <span className="block text-base font-medium leading-10">
          Gender: {user?.gender}
        </span>
        <span className="block text-base font-medium leading-10">
          Phone: {user?.phone}
        </span>
        <span className="block text-base font-medium leading-10">
          Username: {user?.username}
        </span>
        <span className="block text-base font-medium leading-10">
          Weight: {user?.weight}
        </span>
        <span className="block text-base font-medium leading-10">
          Height: {user?.height}
        </span>
        <span className="block text-base font-medium leading-10">
          University: {user?.university}
        </span>
        <span className="block text-base font-medium leading-10">
          Address:{' '}
          {`${user?.address?.address}, 
                ${user?.address?.city} 
                ${user?.address?.state} 
                ${user?.address?.postalCode}`}
        </span>
      </CardContent>
    </Card>
  );
};

export default UserDetailCard;
