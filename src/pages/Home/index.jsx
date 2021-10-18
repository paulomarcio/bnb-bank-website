import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { Link } from 'react-router-dom';

import { TransactionType } from '../../utils/contants';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { useApp } from '../../providers/AppProvider';

import api from '../../services/api';

function Home() {
  const { user } = useApp();
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    const loadBalances = async () => {
      const { token } = user;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await api
        .get('balances', config)
        .then(response => {
          setBalances(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    window.document.title = 'BNB Bank - Home';
    window.scrollTo(0, 0);

    loadBalances();
  }, []);

  return (
    <section className="balance">
      <Header />
      <Sidebar />

      <div className="currentBalance">
        {balances.map(balance => (
          <React.Fragment key={balance.period}>
            <input type="checkbox" id={balance.period} />
            <label htmlFor={balance.period}>
              <div className="container">
                <h3>Current balance</h3>
                <div className="currentBalance-value">
                  <p>
                    <NumberFormat
                      value={balance.incomes.amount - balance.expenses.amount}
                      displayType="text"
                      thousandSeparator
                      prefix="$"
                      renderText={(value, props) => (
                        <span {...props}>{value}</span>
                      )}
                    />
                  </p>
                  <div className="monthCheckbox">
                    <p>
                      {format(
                        parse(balance.period, 'yyyy-MM', new Date()),
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
                    </p>
                  </div>
                </div>
              </div>
              <div className="Balance-Content">
                <div className="BalIncomes">
                  <div className="container">
                    <div className="BalIncomes-price">
                      <h3>Incomes</h3>
                      <p>
                        <NumberFormat
                          value={balance.incomes.amount}
                          displayType="text"
                          thousandSeparator
                          prefix="$"
                          renderText={(value, props) => (
                            <span {...props}>{value}</span>
                          )}
                        />
                      </p>
                    </div>
                    <div className="BalIncomes-link">
                      <Link to="/checks/deposit">
                        <strong>+</strong>Deposit a Check
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="BalExpenses">
                  <div className="container">
                    <div className="BalExpenses-price">
                      <h3>Expenses</h3>
                      <p>
                        <NumberFormat
                          value={balance.expenses.amount}
                          displayType="text"
                          thousandSeparator
                          prefix="$"
                          renderText={(value, props) => (
                            <span {...props}>{value}</span>
                          )}
                        />
                      </p>
                    </div>
                    <div className="BalExpenses-link">
                      <Link to="/purchase">
                        <strong>+</strong>Purchase
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="transactions">
                  <div className="container">
                    <h3>Transactions</h3>
                    <ul>
                      {balance.transactions.map(transaction => (
                        <li key={transaction.id}>
                          <div className="transactionsDetails">
                            <h4>{transaction.description}</h4>
                            <p>
                              {format(
                                parse(
                                  transaction.transaction_date,
                                  'yyyy-MM-dd',
                                  new Date(),
                                ),
                                'dd/MM/yyyy',
                              )}
                            </p>
                          </div>
                          <div className="transactionsPrice">
                            {transaction.type === TransactionType.EXPENSE && (
                              <p className="negative">
                                <NumberFormat
                                  value={transaction.amount}
                                  displayType="text"
                                  thousandSeparator
                                  prefix="-$"
                                  renderText={(value, props) => (
                                    <span {...props}>{value}</span>
                                  )}
                                />
                              </p>
                            )}

                            {transaction.type === TransactionType.INCOME && (
                              <p className="positive">
                                <NumberFormat
                                  value={transaction.amount}
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
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Home;
