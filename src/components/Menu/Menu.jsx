// import React from 'react'
import './menu.css';
import { menu_list } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleClick = (menuName) => {
    navigate(`/fullmenu/${menuName}`);
  };
  
  return (
    // <div>
    <div id='menus' className="pt-20">
      <div className="menu-bg flex items-center justify-center">
        <div className=''>
          <div className="pt-9">
            <h1 className="text-3xl font-bold text-center" id='menus'>Menu</h1>
          </div>
          <div className=" mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-6 px-4 w-full max-w-6xl flext justify-center items-center">
            {menu_list.map((item, index) => (
              <div key={index} onClick={() => handleClick(item.menu_name)}>
                <div className={`box hover:scale-105 transition-all duration-700 rounded-2xl overflow-hidden shadow-lg  
         `} style={{
                    boxShadow:
                      index % 2 === 0
                        ? '4px 4px 9px rgba(255, 255, 255, 0.7)'
                        : '4px 4px 9px rgba(255, 165, 0, 0.7)',
                  }}>
                  <img
                    className="min-w-full h-32 object-cover sm:h-40  md:h-40 lg:h-40 xl:h-40"
                    src={item.menu_image}
                    alt={item.menu_name}
                  />
                </div>
                <div className="m-3 text-center">
                  <p className="text-lg font-semibold">{item.menu_name}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <Link to='/fullmenu'>
            <div className='text-center p-2 text-black'>
              <button className='menu-buttons 
    bg-orange-450 text-black font-semibold py-2 px-4 rounded-lg 
    shadow-md transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-40 
    focus:ring-opacity-50'  >
                Full Menu
              </button>
            </div>
          </Link> */}
        </div>
      </div>
</div>
    // </div>

  );
};
export default Menu;