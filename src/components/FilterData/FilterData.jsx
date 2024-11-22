import { useParams } from 'react-router-dom';
import { MenuData,assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './filterdata.css'
const FullMenu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const handleBackClick = () => {
        window.history.back(); // Go back to the previous scroll position
      };
  const { categoryName } = useParams();
  const selectedCategory = MenuData.find((category) => category.title === categoryName);
  if (!selectedCategory) {
    return <h2>Category not found</h2>;
  }

  return (
    <>
    
    {/* <div className=" "> */}
      <div className=" data flex justify-between items-center px-4 py-2">

      <h2 className='filterh text-3xl font-bold text-center md:text-left'>{selectedCategory.title}</h2>
      
      <button onClick={handleBackClick} className="ficon text-black font-semibold py-2 px-4 
     transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 rounded-full 
    ">
          <img src={assets.arrowicon} className='bicon ' alt="" />
        </button>
      </div>
      <div className='filter '>
      <div className="rc">
  <img src={selectedCategory.image} className="filter-img" alt="" />
  <ul className="filter-lists">
    {selectedCategory.items.map((item, idx) => (
      <li
        key={idx}
        className=" categoryname flex flex-row justify-between items-center px-4 py-3 rounded-lg"
      >
        <span className="font-bold text-white ">{item.name}</span>
        <span className="">--- {item.type}</span>
        <span className="text-white  font-semibold">₹{item.price}</span>
      </li>
    ))}
  </ul>
</div>

    </div>
    </>
  );
};

export default FullMenu;
