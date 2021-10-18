import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Expenses() {
  useEffect(() => {
    window.document.title = 'BNB Bank - Expenses';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="expenses">
      <Header title="Expenses" />
      <Sidebar />

      <div className="MonthExpenses">
        <input type="checkbox" id="ExpAug21" />
        <label htmlFor="ExpAug21">
          <div className="container">
            <div className="monthCheckbox">
              <h3>
                August, 2021
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54.859"
                    height="30.214"
                    viewBox="0 0 54.859 30.214"
                  >
                    <path
                      id="Expand_More"
                      d="M56.129,11.8,33.423,34.513,10.717,11.8A2.77,2.77,0,0,0,6.8,15.718L31.463,40.389h0a2.764,2.764,0,0,0,3.914,0L60.04,15.718A2.767,2.767,0,1,0,56.129,11.8Z"
                      transform="translate(-5.99 -10.987)"
                      fill="#fff"
                    />
                  </svg>
                </i>
              </h3>
            </div>
          </div>
          <div className="Expenses-Content">
            <div className="transactions">
              <div className="container">
                <ul>
                  <li>
                    <div className="transactionsDetails">
                      <h4>T-shirt</h4>
                      <p>08/18/2021, 02:25 PM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="negative">-$40,00</p>
                    </div>
                  </li>
                  <li>
                    <div className="transactionsDetails">
                      <h4>Freelance work</h4>
                      <p>08/16/2021, 05:43 PM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="negative">-$3200,00</p>
                    </div>
                  </li>
                  <li>
                    <div className="transactionsDetails">
                      <h4>Grandma gift</h4>
                      <p>08/13/2021, 10:03 AM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="negative">-$300,00</p>
                    </div>
                  </li>
                  <li>
                    <div className="transactionsDetails">
                      <h4>Groceries</h4>
                      <p>08/12/2021, 07:25 PM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="negative">-$250,00</p>
                    </div>
                  </li>
                  <li>
                    <div className="transactionsDetails">
                      <h4>Lens</h4>
                      <p>10/22/2021, 07:45 PM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="negative">-$100,00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </label>
      </div>

      <div className="floatBtn">
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
          }}
        >
          <span>+</span>
        </a>
      </div>
    </section>
  );
}

export default Expenses;
