import React, { useEffect, useState } from 'react';

import { TransactionStatus } from '../../utils/contants';
import { useApp } from '../../providers/AppProvider';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Checks() {
  const { setIsMenuActive } = useApp();
  const [selectedStatus, setSelectedStatus] = useState(
    TransactionStatus.PENDING,
  );

  const handleStatusSelection = status => {
    setSelectedStatus(status);
  };

  useEffect(() => {
    window.document.title = 'BNB Bank - Checks';
    window.scrollTo(0, 0);
    setIsMenuActive(false);
  }, []);

  return (
    <section className="acceptedChecks">
      <Header title="Checks" />
      <Sidebar />

      <div className="monthAccptedChecks">
        <input type="checkbox" id="ACAug21" />
        <label htmlFor="ACAug21">
          <div className="monthCheckbox">
            <div className="container">
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

          <div className="AccptedChecks-Content">
            <div className="navTab">
              <div>
                <input
                  type="radio"
                  id="01navTab1"
                  name="navTab1"
                  checked={selectedStatus === TransactionStatus.PENDING}
                  onChange={() =>
                    handleStatusSelection(TransactionStatus.PENDING)
                  }
                />
                <label htmlFor="01navTab1">
                  <h3>PENDING</h3>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="01navTab2"
                  name="navTab1"
                  checked={selectedStatus === TransactionStatus.ACCEPTED}
                  onChange={() =>
                    handleStatusSelection(TransactionStatus.ACCEPTED)
                  }
                />
                <label htmlFor="01navTab2">
                  <h3>ACCEPTED</h3>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="01navTab3"
                  name="navTab1"
                  checked={selectedStatus === TransactionStatus.REJECTED}
                  onChange={() =>
                    handleStatusSelection(TransactionStatus.REJECTED)
                  }
                />
                <label htmlFor="01navTab3">
                  <h3>REJECTED</h3>
                </label>
              </div>
            </div>

            {selectedStatus === TransactionStatus.PENDING && (
              <div className="transactions 01navTab1">
                <div className="container">
                  <ul>
                    <li>
                      <div className="transactionsDetails">
                        <h4>T-shirt</h4>
                        <p>08/18/2021, 02:25 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$40,00</p>
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
                        <h4>Grandmas gift</h4>
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
                        <p className="positive">$250,00</p>
                      </div>
                    </li>
                    <li>
                      <div className="transactionsDetails">
                        <h4>Lens</h4>
                        <p>10/22/2021, 07:45 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$100,00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {selectedStatus === TransactionStatus.ACCEPTED && (
              <div className="transactions 01navTab2">
                <div className="container">
                  <ul>
                    <li>
                      <div className="transactionsDetails">
                        <h4>T-shirt</h4>
                        <p>08/18/2021, 02:25 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$40,00</p>
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
                        <h4>Grandmas gift</h4>
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
                        <p className="positive">$250,00</p>
                      </div>
                    </li>
                    <li>
                      <div className="transactionsDetails">
                        <h4>Lens</h4>
                        <p>10/22/2021, 07:45 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$100,00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {selectedStatus === TransactionStatus.REJECTED && (
              <div className="transactions 01navTab3">
                <div className="container">
                  <ul>
                    <li>
                      <div className="transactionsDetails">
                        <h4>T-shirt</h4>
                        <p>08/18/2021, 02:25 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$40,00</p>
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
                        <h4>Grandmas gift</h4>
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
                        <p className="positive">$250,00</p>
                      </div>
                    </li>
                    <li>
                      <div className="transactionsDetails">
                        <h4>Lens</h4>
                        <p>10/22/2021, 07:45 PM</p>
                      </div>
                      <div className="transactionsPrice">
                        <p className="positive">$100,00</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </label>

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
      </div>
    </section>
  );
}

export default Checks;
