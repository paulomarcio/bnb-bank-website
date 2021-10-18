import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import { useApp } from '../../providers/AppProvider';

import icoFilterSvg from '../../assets/images/ico-filter.svg';

function HeaderWithFilter({ title = 'BNB Bank' }) {
  const formRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const { setIsMenuActive, setFilteredTransactions, user } = useApp();

  const handleMenuBarClick = () => {
    setIsMenuActive(true);
  };

  const handleShowSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchTransactions = e => {
    setFilteredTransactions(e.target.value);
  };

  return (
    <>
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
        <button
          type="button"
          onClick={() => handleShowSearchClick()}
          className="ico-search"
          style={{ cursor: 'pointer' }}
        >
          <img src={icoFilterSvg} alt="Filter" />
        </button>
      </header>
      <Form ref={formRef}>
        <div className={showSearch ? 'input-search active' : 'input-search'}>
          <div className="container">
            <input
              type="text"
              placeholder="Search"
              onChange={e => handleSearchTransactions(e)}
            />
          </div>
        </div>
      </Form>
    </>
  );
}

export default HeaderWithFilter;
