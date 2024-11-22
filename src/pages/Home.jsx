import About from "../components/About/About"
import NavHead from "../components/NavHead/NavHead"
import Menu from '../components/Menu/Menu.jsx'
import Reviews from '../components/Reviews/Reviews'
import WorkerFooter from '../components/WorkerFooter/WorkerFooter'
import Navbar from "../components/Navbar/Navbar"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <NavHead/>
      <About/>
      <Menu/>
      <Reviews/>
      <WorkerFooter/>
    </div>
  )
}

export default Home