import { FiEye } from 'react-icons/fi';
import { BiLike } from 'react-icons/bi';

const Item = ({ webformatURL, views, likes, pageURL }) => {
  return (
    <div className='shadow rounded bg-white'>
      <a href={pageURL} target='_blank' rel='noreferrer noopener'>
        <div className='card-top'>
          <img src={webformatURL} alt='' className='card-img rounded-t' />
        </div>
        <div className='card-body p-4'>
          <div className='flex justify-between text-gray-700 font-medium'>
            <span className='flex items-center gap-1'>
              <FiEye className='text-xl' /> {views}
            </span>
            <span className='flex items-center gap-1'>
              <BiLike className='text-xl' /> {likes}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Item;
