import React from 'react';

import { useApp } from '../../providers/AppProvider';

function Header({ title = 'BNB Bank' }) {
  const { setIsMenuActive } = useApp();

  const handleMenuBarClick = () => {
    setIsMenuActive(true);
  };

  return (
    <header>
      <div
        onClick={() => handleMenuBarClick()}
        onKeyDown={() => handleMenuBarClick()}
        role="button"
        tabIndex={0}
        className="menu-mobile"
      >
        <span />
        <span />
        <span />
      </div>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
