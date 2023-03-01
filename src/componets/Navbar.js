import { Link } from 'react-router-dom';
import React from 'react';
import SearchBar from './SearchBar';
//styles
import './Navbar.css';


export default function Navbar() {
  return (
    <div className='navbar'>
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
