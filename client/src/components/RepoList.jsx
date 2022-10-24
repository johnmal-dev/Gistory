import React from 'react';
import RepoItem from './RepoItem';
import Fade from 'react-reveal/Fade';

const RepoList = ({ repos }) => {
  return (
    <>
      <ul className='max-w-120 mx-auto flex flex-col relative after:absolute after:left-2/4 after:top-0 after:bottom-0 after:w-2 after:bg-slate-700 after:-z-10 after:-translate-x-2/4'>
        {repos.map((repo, i) => (
          <li
            key={i}
            className='w-full md:w-2/4 py-8 px-16 relative first:mt-8 odd:self-start even:self-end after:absolute  after:bg-slate-700 after:border-2 after:border-blue-500 after:rounded-full after:w-5 after:h-5 after:bottom-full after:left-2/4 after:-translate-x-2/4 after:translate-y-3 md:after:left-auto md:after:bottom-20 md:after:odd:right-0 md:after:odd:translate-x-2/4 md:after:even:left-0 md:after:even:-translate-x-2/4'
          >
            <Fade
              left={i % 2 === 0}
              right={i % 2 !== 0}
            >
              <RepoItem repo={repo} />
            </Fade>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoList;
