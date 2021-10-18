import React from 'react';

import HeaderWithFilter from '../../components/HeaderWithFilter';
import Sidebar from '../../components/Sidebar';

function ChecksControl() {
  return (
    <section className="checkList">
      <HeaderWithFilter title="CHECKS CONTROL" />
      <Sidebar />

      <div className="checkListContent">
        <div className="transactions">
          <div className="container">
            <ul>
              <li>
                <div className="transactionsDetails">
                  <a href="/">
                    <h4>T-shirt</h4>
                    <p>08/18/2021, 02:25 PM</p>
                  </a>
                </div>
                <div className="transactionsPrice">
                  <a href="/">
                    <p className="positive">$40,00</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="transactionsDetails">
                  <a href="/">
                    <h4>Freelance work</h4>
                    <p>08/16/2021, 05:43 PM</p>
                  </a>
                </div>
                <div className="transactionsPrice">
                  <a href="/">
                    <p className="positive">$3200,00</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="transactionsDetails">
                  <a href="/">
                    <h4>Grandmas gift</h4>
                    <p>08/13/2021, 10:03 AM</p>
                  </a>
                </div>
                <div className="transactionsPrice">
                  <a href="/">
                    <p className="positive">$300,00</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="transactionsDetails">
                  <a href="/">
                    <h4>Groceries</h4>
                    <p>08/12/2021, 07:25 PM</p>
                  </a>
                </div>
                <div className="transactionsPrice">
                  <a href="/">
                    <p className="positive">$250,00</p>
                  </a>
                </div>
              </li>
              <li>
                <div className="transactionsDetails">
                  <a href="/">
                    <h4>Lens</h4>
                    <p>10/22/2021, 07:45 PM</p>
                  </a>
                </div>
                <div className="transactionsPrice">
                  <a href="/">
                    <p className="positive">$100,00</p>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChecksControl;
