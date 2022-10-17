import React from 'react';

const UserInfo = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className='rounded bg-white shadow mt-2 flex flex-col justify-center items-center py-4 text-gray-900'>
      <a
        href={html_url}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={avatar_url}
          alt='user avatar'
          className='w-32 rounded-full shadow-lg border'
        />
        <div className='cursor-pointer text-xl'>{login}</div>
      </a>
    </div>
  );
};

export default UserInfo;
