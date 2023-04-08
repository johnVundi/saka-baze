import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import List from './pages/List';
import Hotelpage from './pages/Hotelpage';

function App() {
  return (
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotelpage/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
