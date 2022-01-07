import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Palm Springs Animal Shelter</h1>
      <div className='"home-navlink'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </div>
  );
}
