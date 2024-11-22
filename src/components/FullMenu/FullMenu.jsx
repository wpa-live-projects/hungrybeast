import { MenuData } from '../../assets/assets';
import './fullmenu.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
const FullMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleBackClick = () => {
    window.history.back(); // Go back to the previous scroll position
  };
  return (
    <>
      <div className="full-nav flex justify-between items-center px-4 py-2">
        <h1 className="full-menu text-3xl font-bold text-center md:text-left">
          Our Menu
        </h1>

        <button onClick={handleBackClick} className="backmenu text-black font-semibold py-2 px-4 rounded-lg 
    shadow-md transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 
    ">
          Back
        </button>
      </div>

      <div className="p-6  min-h-screen menu-container">

        {MenuData.map((section, index) => (

          <div key={section._id} className={`flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto my-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} >

            {/* Section Image */}

            <img
              src={section.image}
              alt={section.title} style={{
                boxShadow:
                  index % 2 === 0
                    ? '3px 3px 9px rgba(255, 165, 0, 0.7)'
                    : '3px 3px 9px rgba(255, 255, 255, 0.7)',
              }}
              className="w-full md:w-[45%] lg:w-[40%] xl:w-[35%] rounded-lg shadow-md mb-4 md:mb-0 object-cover max-h-64 hover:scale-105 transition-all duration-700"
            />


            {/* Menu Items lg */}
            {/* <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-xl font-semibold text-center md:text-left">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between px-4 py-2  shadow-md rounded-lg"
                  >
                    <span className="font-bold text-white menuItems">{item.name}</span>
                    <span className= "menuItems"> --- {item.type}</span>
                    <span className="text-white menuItems">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </div> */}

<div className="w-full md:w-1/2 space-y-4">
  <h2 className="text-xl font-semibold text-center md:text-left">
    {section.title}
  </h2>
  <ul className="space-y-2">
  {section.items.map((item, idx) => (
    <li
      key={idx}
      className="flex justify-between items-center px-4 py-3 shadow-md rounded-lg"
    >
      <span className="font-bold text-white smenuItems flex-1">{item.name}</span>
      <span className=" smenuItems flex-[0.5] text-center">
        --- {item.type}
      </span>
      <span className="text-white font-semibold smenuItems flex-[0.5] text-right">
        ₹{item.price}
      </span>
    </li>
  ))}
</ul>

</div>

          </div>
        ))}
        <Link to='/'>
          <div className='text-center p-12 text-black'>
            <button onClick={handleBackClick}  className='fullmenu-button 
     text-black font-semibold py-2 px-4 rounded-lg 
    shadow-md transition-transform duration-300 transform hover:scale-105 
    hover:bg-orange-450 active:scale-95 '>
              Back
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FullMenu;