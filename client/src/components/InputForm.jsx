import { useState } from 'react';

const data = {
  owner: {
    login: 'Medic1111',
    avatar_url: 'https://avatars.githubusercontent.com/u/91421539?v=4',
    html_url: 'https://github.com/Medic1111',
  },
  repos: [
    {
      name: 'CHINGU-CHANGE',
      description:
        'Currency converter full stack application created as a "pair-programming" project for the Chingu.io program',
      html_url: 'https://github.com/Medic1111/CHINGU-CHANGE',
      created_at: '2022-07-21T16:08:21Z',
      updated_at: '2022-07-22T16:55:38Z',
    },
    {
      name: 'ARYSE-PAGANO-PORTFOLIO',
      description: 'Aryse Tansy Personal Portfolio: Full Stack Web Developer',
      html_url: 'https://github.com/Medic1111/ARYSE-PAGANO-PORTFOLIO',
      created_at: '2022-06-05T20:15:48Z',
      updated_at: '2022-07-09T21:49:00Z',
    },
    {
      name: 'CHINGU-CHANGE',
      description:
        'Currency converter full stack application created as a "pair-programming" project for the Chingu.io program',
      html_url: 'https://github.com/Medic1111/CHINGU-CHANGE',
      created_at: '2022-07-21T16:08:21Z',
      updated_at: '2022-07-22T16:55:38Z',
    },
    {
      name: 'ARYSE-PAGANO-PORTFOLIO',
      description: 'Aryse Tansy Personal Portfolio: Full Stack Web Developer',
      html_url: 'https://github.com/Medic1111/ARYSE-PAGANO-PORTFOLIO',
      created_at: '2022-06-05T20:15:48Z',
      updated_at: '2022-07-09T21:49:00Z',
    },
    {
      name: 'CHINGU-CHANGE',
      description:
        'Currency converter full stack application created as a "pair-programming" project for the Chingu.io program',
      html_url: 'https://github.com/Medic1111/CHINGU-CHANGE',
      created_at: '2022-07-21T16:08:21Z',
      updated_at: '2022-07-22T16:55:38Z',
    },
    {
      name: 'ARYSE-PAGANO-PORTFOLIO',
      description: 'Aryse Tansy Personal Portfolio: Full Stack Web Developer',
      html_url: 'https://github.com/Medic1111/ARYSE-PAGANO-PORTFOLIO',
      created_at: '2022-06-05T20:15:48Z',
      updated_at: '2022-07-09T21:49:00Z',
    },
  ],
};

const InputForm = ({ setProfile, setIsLoading }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getRepos(searchInput);
  };

  const getRepos = (id) => {
    setIsLoading(true);
    if (id.length) {
      setProfile(data);
      setTimeout(() => setIsLoading(false), 500);
      // repoService.getRepos(id).then((res) => {
      //   setProfile(res.data);
      // });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mx-4'>
      <h3 className='text-lg font-medium leading-6 text-gray-900'>
        Your Github Timeline Viewer
      </h3>
      <div className='mt-2 max-w-xl text-sm text-gray-500 mx-auto'>
        <p>
          Enter a Github username to generate an interactive timeline of the
          user's repositories.
        </p>
      </div>
      <form
        className='relative translate-y-6 py-6 px-10 max-w-sm sm:flex sm:items-center justify-center rounded bg-slate-700'
        onSubmit={handleSubmit}
      >
        <div className='w-full sm:max-w-xs'>
          <input
            type='text'
            name='text'
            className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            placeholder='Enter username here...'
            value={searchInput}
            onChange={({ target }) => setSearchInput(target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputForm;
