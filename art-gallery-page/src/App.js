import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Location  from "./components/Location/Location";

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Home/><Main/><Footer/></>}></Route> 
        <Route path='/location' element={<><Location/></>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
