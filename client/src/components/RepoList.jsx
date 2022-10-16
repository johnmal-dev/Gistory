import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
  return (
    <div>
      <ul className='flex flex-col gap-6 mt-4'>
        {repos.map((repo, i) => (
          <li
            key={i}
            className='rounded-lg bg-white shadow w-full sm:w-2/5 even:self-end odd:bg-blue-500 even:bg-red-500'
          >
            <RepoItem repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
