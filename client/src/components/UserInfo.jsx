import React from 'react';

const UserInfo = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className='rounded-lg bg-white shadow mt-2 flex flex-col justify-center items-center gap-2 py-4 w-full max-w-xl sm:mx-auto text-gray-900'>
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
