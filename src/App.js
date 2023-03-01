import { BrowserRouter, Routes, Route } from 'react-router-dom';
//page components
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import Navbar from "./componets/Navbar";

// styles
import './App.css';

function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/create" element={<Create/>} />
        <Route path = "/search" element={<Search/>} />
        <Route path = "/recipes/:id" element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App
