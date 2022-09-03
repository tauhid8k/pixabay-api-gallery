import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchInput from '../SearchInput';
import Item from './Item';
import ReactPaginate from 'react-paginate';

const Items = () => {
  const API_KEY = process.env.REACT_APP_PIXABAY_API;

  // Input Query
  const [query, setQuery] = useState('');

  // Loading Items
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=21`
      );
      if (data.totalHits) {
        setItems(data.hits);
        setPageCount(Math.ceil(data.totalHits / 21));
        setError(false);
      } else {
        setError(true);
      }

      setLoading(false);
    };
    fetchItems();
  }, [API_KEY, query, page]);

  // Input Query Handler
  const inputHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.query.value);
  };

  // Paginate OnClick Handler
  const pageClickHandler = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <>
      <SearchInput inputHandler={inputHandler} />
      {loading ? (
        <h2 className='text-center text-2xl'>Loading...</h2>
      ) : (
        <>
          {error && (
            <div className='flex justify-center mb-5'>
              <h3 className='text-red-500 text-2xl'>Not Found!</h3>
            </div>
          )}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
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
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={3}
            onPageChange={pageClickHandler}
            containerClassName={'pagination'}
            pageClassName={'pagination-item'}
            pageLinkClassName={'pagination-link'}
            previousClassName={'paginate-previous'}
            nextClassName={'paginate-next'}
            activeClassName={'paginate-active'}
            activeLinkClassName={'paginate-link-active'}
          />
        </>
      )}
    </>
  );
};

export default Items;
