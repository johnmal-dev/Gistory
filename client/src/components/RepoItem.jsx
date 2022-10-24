import React from 'react';
import ClockIcon from './ClockIcon';

const RepoItem = ({ repo, index }) => {
  const { name, description, html_url, created_at } = repo;
  return (
    <div
      className={`${
        index % 2 === 0 ? 'even-card' : 'odd-card'
      } rounded bg-white break-words timeline-card`}
    >
      <div className='p-5 w-full'>
        <div className='text-2xl font-bold'>{name}</div>
        <div className='flex gap-1 items-center mt-2'>
          <span>
            <ClockIcon />
          </span>
          <span>{created_at.substring(0, 10)}</span>
        </div>
        <div className='text-gray-700 max-h-24 leading-6 mt-2 overflow-hidden'>
          {description}
        </div>
        <div className="flex justify-center mt-4">
          <a
            type='button'
            href={html_url}
            target='_blank'
            rel='noreferrer'
            className='rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition'
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
