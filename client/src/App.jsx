import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import RepoList from './components/RepoList';
import UserInfo from './components/UserInfo';
import './index.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App flex flex-col gap-2 select-none'>
      <div className='bg-slate-200 bg-opacity-90'>
        <h1 className='mt-4 text-4xl font-bold text-gray-900'>Gistory</h1>
        <InputForm
          setProfile={setProfile}
          setIsLoading={setIsLoading}
        />
      </div>
      {isLoading && <div>loading</div>}
      {profile && !isLoading && (
        <div className="p-4">
          <UserInfo user={profile.owner} />
          <RepoList repos={profile.repos} />
        </div>
      )}
    </div>
  );
}

export default App;
