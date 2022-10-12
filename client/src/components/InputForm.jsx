import React from 'react';

const InputForm = ({ searchInput, setSearchInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <div>
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
        className='mt-5 sm:flex sm:items-center justify-center'
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
          />
        </div>
        <button
          type='submit'
          className='mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputForm;
