import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import RepoList from './components/RepoList';
import UserInfo from './components/UserInfo';
import './index.css';

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
  ],
};

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className='App bg-slate-100 px-6 py-4 flex flex-col gap-2 select-none'>
      <h1 className='text-4xl font-bold text-gray-900'>Gistory</h1>
      <InputForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <UserInfo user={data.owner} />
      <RepoList repos={data.repos} />
    </div>
  );
}

export default App;
