import { Link } from 'react-router-dom';
import './NavHead.css';
import { assets } from '../../assets/assets';

const NavHead = () => {
  return (
    <section id="home">
      <div className="home">
        <div className="content">
          <div className="header ml-10">
            <h1 className="h1 ">HUNGRY BEAST</h1>
            <h2 className="h2">FOOD & BEVERAGES</h2> <br /> <br />
            <p className="para">Best Quality Food</p> <br /> <br />
            <p className="para1">A Really Good Place to Eat</p> <br />
            <p className="para1">Enjoy Our Delicious Meal</p> <br /> <br />
            <section id="menu">
              {/* <Link to='/fullmenu'> */}
              <a href="#menus">

                <button className="explore-btn">Explore Menu</button>
              </a>
              {/* </Link> */}
            </section>
          </div>
          <div className="homeimgs pb-[-10px]" >
            <img src={assets.homeimgs}  alt="" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default NavHead;
