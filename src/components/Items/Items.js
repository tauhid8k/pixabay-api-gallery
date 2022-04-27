import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput';
import Item from './Item';

const Items = () => {
  const API_KEY = process.env.REACT_APP_PIXABAY_API;

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&per_page=21`
      );
      setItems(data.hits);
      console.log(data);
    };
    fetchItems();
    setLoading(false);
  }, [API_KEY, query]);

  const inputHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };

  return (
    <>
      <SearchInput inputHandler={inputHandler} />
      {loading ? (
        <h2 className='text-center text-3xl'>Loading...</h2>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {items.map((item) => (
            <Item
              key={item.id}
              webformatURL={item.webformatURL}
              views={item.views}
              likes={item.likes}
              pageURL={item.pageURL}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Items;
