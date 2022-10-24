import React from 'react';
import RepoItem from './RepoItem';
import Fade from 'react-reveal/Fade';

const RepoList = ({ repos }) => {
  return (
    <>
      <ul className='max-w-120 mx-auto flex flex-col relative timeline'>
        {repos.map((repo, i) => (
          <li
            key={i}
            className='w-full md:w-2/4 py-8 px-16 relative first:mt-8 odd:self-start even:self-end timeline-side'
          >
            <Fade
              left={i % 2 === 0}
              right={i % 2 !== 0}
            >
              <RepoItem repo={repo} index={i}/>
            </Fade>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoList;
