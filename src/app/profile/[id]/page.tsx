import React from 'react';

function UserProfilePage({params}: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-4xl">Profile Page: {params.id}</p>
    </div>
  );
}

export default UserProfilePage;
