import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Home() {
  useEffect(() => {
    window.document.title = 'BNB Bank - Home';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="balance">
      <Header />
      <Sidebar />

      <div className="currentBalance">
        <input type="checkbox" id="BalAug21" />
        <label htmlFor="BalAug21">
          <div className="container">
            <h3>Current balance</h3>
            <div className="currentBalance-value">
              <p>$6320,00</p>
              <div className="monthCheckbox">
                <p>
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
                </p>
              </div>
            </div>
          </div>
          <div className="Balance-Content">
            <div className="BalIncomes">
              <div className="container">
                <div className="BalIncomes-price">
                  <h3>Incomes</h3>
                  <p>$7100,00</p>
                </div>
                <div className="BalIncomes-link">
                  <a href="/">
                    <strong>+</strong>Deposit a Check
                  </a>
                </div>
              </div>
            </div>
            <div className="BalExpenses">
              <div className="container">
                <div className="BalExpenses-price">
                  <h3>Expenses</h3>
                  <p>$7100,00</p>
                </div>
                <div className="BalExpenses-link">
                  <a href="/">
                    <strong>+</strong>Purchase
                  </a>
                </div>
              </div>
            </div>
            <div className="transactions">
              <div className="container">
                <h3>Transactions</h3>
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
                      <p className="positive">$3200,00</p>
                    </div>
                  </li>
                  <li>
                    <div className="transactionsDetails">
                      <h4>Grandma gift</h4>
                      <p>08/13/2021, 10:03 AM</p>
                    </div>
                    <div className="transactionsPrice">
                      <p className="positive">$300,00</p>
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
    </section>
  );
}

export default Home;
