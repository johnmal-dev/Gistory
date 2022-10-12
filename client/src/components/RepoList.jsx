import React from 'react';
import RepoItem from './RepoItem';

const RepoList = ({repos}) => {
  return (
    <div>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4'>
        {repos.map((repo, i) => (
          <li
            key={i}
            className='col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow'
          >
            <RepoItem repo={repo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
