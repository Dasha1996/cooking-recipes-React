import { Link } from 'react-router-dom';
import React from 'react';
import SearchBar from './SearchBar';
import { useTheme } from "../hooks/useTheme";
//styles
import './Navbar.css';


export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className='navbar'  style = {{backgroundColor: color}}>
        <nav>
            <Link to ="/" className='brand'>
                <h1>Robin Bobin</h1>
            </Link>
            <SearchBar/>
            <Link to="/create">
                Create Recipe
            </Link>


        </nav>
      
    </div>
  )
}
