import './App.css';
import LandingPage from './components/landingPage';
import NavBar from './components/navBar';
import { Routes, Route } from "react-router-dom";
import ViewProductData from './components/viewProduct';
import Cart from './components/showCart';

function App() {
  return (
    <div>
     <NavBar/>
     <Routes>
        <Route path='/' element={<LandingPage/>}></Route> 
        <Route path='/viewProduct' element={<ViewProductData/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route> 
      </Routes>
       
    </div>
  );
}

export default App;
