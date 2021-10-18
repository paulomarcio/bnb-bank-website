import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { Link } from 'react-router-dom';

import { TransactionStatus, TransactionType } from '../../utils/contants';
import { useApp } from '../../providers/AppProvider';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import api from '../../services/api';

function Checks() {
  const { setIsMenuActive, user } = useApp();
  const [incomes, setIncomes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(
    TransactionStatus.PENDING,
  );

  const handleStatusSelection = status => {
    setSelectedStatus(status);
  };

  useEffect(() => {
    const loadIncomes = async () => {
      const { token } = user;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await api
        .get('incomes', config)
        .then(response => {
          setIncomes(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    window.document.title = 'BNB Bank - Checks';
    window.scrollTo(0, 0);
    setIsMenuActive(false);

    loadIncomes();
  }, []);

  return (
    <section className="acceptedChecks">
      <Header title="Checks" />
      <Sidebar />

      <div className="monthAccptedChecks">
        {incomes.map(income => (
          <React.Fragment key={income.period}>
            <input type="checkbox" id={income.period} />
            <label htmlFor={income.period}>
              <div className="monthCheckbox">
                <div className="container">
                  <h3>
                    {format(
                      parse(income.period, 'yyyy-MM', new Date()),
                      'MMMM, yyyy',
                    )}
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
                      id={`01navTab1-${income.period}`}
                      name={`navTab1-${income.period}`}
                      checked={selectedStatus === TransactionStatus.PENDING}
                      onChange={() =>
                        handleStatusSelection(TransactionStatus.PENDING)
                      }
                    />
                    <label htmlFor={`01navTab1-${income.period}`}>
                      <h3>PENDING</h3>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`01navTab2-${income.period}`}
                      name={`navTab1-${income.period}`}
                      checked={selectedStatus === TransactionStatus.ACCEPTED}
                      onChange={() =>
                        handleStatusSelection(TransactionStatus.ACCEPTED)
                      }
                    />
                    <label htmlFor={`01navTab2-${income.period}`}>
                      <h3>ACCEPTED</h3>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id={`01navTab3-${income.period}`}
                      name={`navTab1-${income.period}`}
                      checked={selectedStatus === TransactionStatus.REJECTED}
                      onChange={() =>
                        handleStatusSelection(TransactionStatus.REJECTED)
                      }
                    />
                    <label htmlFor={`01navTab3-${income.period}`}>
                      <h3>REJECTED</h3>
                    </label>
                  </div>
                </div>

                {selectedStatus === TransactionStatus.PENDING && (
                  <div className="transactions 01navTab1">
                    <div className="container">
                      <ul>
                        {income.incomes
                          .filter(
                            income =>
                              income.status === TransactionStatus.PENDING,
                          )
                          .map(income => (
                            <li key={income.id}>
                              <div className="transactionsDetails">
                                <h4>{income.description}</h4>
                                <p>
                                  {format(
                                    parse(
                                      income.transaction_date,
                                      'yyyy-MM-dd',
                                      new Date(),
                                    ),
                                    'dd/MM/yyyy',
                                  )}
                                </p>
                              </div>
                              <div className="transactionsPrice">
                                {income.type === TransactionType.EXPENSE && (
                                  <p className="negative">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="-$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}

                                {income.type === TransactionType.INCOME && (
                                  <p className="positive">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedStatus === TransactionStatus.ACCEPTED && (
                  <div className="transactions 01navTab2">
                    <div className="container">
                      <ul>
                        {income.incomes
                          .filter(
                            income =>
                              income.status === TransactionStatus.ACCEPTED,
                          )
                          .map(income => (
                            <li key={income.id}>
                              <div className="transactionsDetails">
                                <h4>{income.description}</h4>
                                <p>
                                  {format(
                                    parse(
                                      income.transaction_date,
                                      'yyyy-MM-dd',
                                      new Date(),
                                    ),
                                    'dd/MM/yyyy',
                                  )}
                                </p>
                              </div>
                              <div className="transactionsPrice">
                                {income.type === TransactionType.EXPENSE && (
                                  <p className="negative">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="-$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}

                                {income.type === TransactionType.INCOME && (
                                  <p className="positive">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedStatus === TransactionStatus.REJECTED && (
                  <div className="transactions 01navTab3">
                    <div className="container">
                      <ul>
                        {income.incomes
                          .filter(
                            income =>
                              income.status === TransactionStatus.REJECTED,
                          )
                          .map(income => (
                            <li key={income.id}>
                              <div className="transactionsDetails">
                                <h4>{income.description}</h4>
                                <p>
                                  {format(
                                    parse(
                                      income.transaction_date,
                                      'yyyy-MM-dd',
                                      new Date(),
                                    ),
                                    'dd/MM/yyyy',
                                  )}
                                </p>
                              </div>
                              <div className="transactionsPrice">
                                {income.type === TransactionType.EXPENSE && (
                                  <p className="negative">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="-$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}

                                {income.type === TransactionType.INCOME && (
                                  <p className="positive">
                                    <NumberFormat
                                      value={income.amount}
                                      displayType="text"
                                      thousandSeparator
                                      prefix="$"
                                      renderText={(value, props) => (
                                        <span {...props}>{value}</span>
                                      )}
                                    />
                                  </p>
                                )}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </label>
          </React.Fragment>
        ))}

        <div className="floatBtn">
          <Link to="/checks/deposit">
            <span>+</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Checks;
