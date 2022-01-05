import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Palm Springs Animal Shelter</h1>
      <NavLink className="home-navlink" to="/">
        Home
      </NavLink>
    </div>
  );
}
