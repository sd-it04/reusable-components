import React, { useState, useMemo } from 'react';
import classnames from 'classnames';
import './style.css'; 

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderNavTab = useMemo(() =>
    ['home', 'profile', 'message', 'photos'].map((item, index) => {
    const dynaActiveClassName = classnames(
      'list', {
        'active': selectedIndex === index,
      },
    );

    return (<li className={dynaActiveClassName} key='key-{item}-{index}'>
      <a href='#' onClick={() => setSelectedIndex(index)}>
        <span className='icon'>
          <ion-icon name='{item}-outline'></ion-icon>
        </span>
        <span className='text'>{item}</span>
      </a>
    </li>)
  }), [selectedIndex]);

  return (
    <div className='navigation'>
    <ul>
      {renderNavTab}
      <div className='indicator'></div>
    </ul>
  </div>);
};

export default Navbar;
