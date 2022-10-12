import React from 'react';

const RepoItem = ({ repo }) => {
  const { name, description, html_url, created_at, updated_at } = repo;
  return (
    <div className='flex flex-col w-full items-center justify-between p-6 gap-1'>
      <div className='font-bold'>{name}</div>
      <div className='text-sm'>{created_at.substring(0, 10)}</div>
      <div className='text-gray-700'>{description}</div>
      <a
        type='button'
        href={html_url}
        target='_blank'
        rel='noreferrer'
        className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        View Repository
      </a>
    </div>
  );
};

export default RepoItem;
