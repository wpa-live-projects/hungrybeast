import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FullMenu from './components/FullMenu/FullMenu';
import FilterData from './components/FilterData/FilterData'
import './App.css'
import Menu from './components/Menu/Menu';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/fullmenu' element={<FullMenu/>}/>
        <Route path='/fullmenu/:categoryName' element={<FilterData/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>
    </div>
  );
};
export default App;
