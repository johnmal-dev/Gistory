import { useState } from 'react';
import InputForm from './components/InputForm';
import RepoList from './components/RepoList';
import UserInfo from './components/UserInfo';

function App() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App flex flex-col gap-2 select-none w-full'>
      <div className='bg-slate-200 bg-opacity-90'>
        <h1 className='mt-4 text-4xl font-bold text-gray-900'>Gistory</h1>
        <InputForm
          setProfile={setProfile}
          setIsLoading={setIsLoading}
        />
      </div>
      <div className='main mt-24 mx-8 mb-12'>
        {isLoading && <div>loading</div>}
        {profile && !isLoading && (
          <>
            <UserInfo user={profile.owner} />
            <RepoList repos={profile.repos} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
