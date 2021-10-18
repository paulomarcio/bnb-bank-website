import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { Link } from 'react-router-dom';

import { TransactionType } from '../../utils/contants';
import { useApp } from '../../providers/AppProvider';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import api from '../../services/api';

function Expenses() {
  const { setIsMenuActive, user } = useApp();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenses = async () => {
      const { token } = user;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await api
        .get('expenses', config)
        .then(response => {
          setExpenses(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    window.document.title = 'BNB Bank - Expenses';
    window.scrollTo(0, 0);
    setIsMenuActive(false);

    loadExpenses();
  }, []);

  return (
    <section className="expenses">
      <Header title="Expenses" />
      <Sidebar />

      <div className="MonthExpenses">
        {expenses.map(expense => (
          <React.Fragment key={expense.period}>
            <input type="checkbox" id={expense.period} />
            <label htmlFor={expense.period}>
              <div className="container">
                <div className="monthCheckbox">
                  <h3>
                    {format(
                      parse(expense.period, 'yyyy-MM', new Date()),
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
              <div className="Expenses-Content">
                <div className="transactions">
                  <div className="container">
                    <ul>
                      {expense.expenses.map(transaction => (
                        <li>
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

      <div className="floatBtn">
        <Link to="/purchase">
          <span>+</span>
        </Link>
      </div>
    </section>
  );
}

export default Expenses;
