import React, { useState, useMemo } from 'react';
import './style.css'; 

const Navbar = () => {
  let navbar_tabs = ['home', 'profile', 'message', 'photos'];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderNavTab = useMemo(() => navbar_tabs.map((item, index) => {
    /*const dynaActiveClassName = className({
      'list',
      selectedIndex === index ? 'active' : null,
    });*/
    return (<li className='list {selectedIndex === index ? "active" : ""}'>
      <a href='#' onClick={setSelectedIndex(index)}>
        <span className='icon'>
          <ion-icon name='{item}-outline'></ion-icon>
        </span>
        <span className='text'>{item}</span>
      </a>
    </li>)
  }), [setSelectedIndex]);

  return (
    <div className='navigation'>
    <ul>
      {renderNavTab}
      <div className='indicator'></div>
    </ul>
  </div>);
};

export default Navbar;
