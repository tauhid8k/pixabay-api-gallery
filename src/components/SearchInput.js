import React from 'react';

const SearchInput = ({ inputHandler }) => {
  return (
    <form onSubmit={inputHandler} className='mb-8 text-center'>
      <input
        type='text'
        name='query'
        placeholder='Search Photo...'
        className='text-2xl py-2 px-4 ring-2 rounded focus:outline-none'
      />
    </form>
  );
};

export default SearchInput;
