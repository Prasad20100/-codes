import React from 'react';
import './Sidebar.css';

function Sidebar({ setView }){
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setView('home')}>Home</li>
        <li onClick={() => setView('about')}>About Us</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
