import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import { Link } from 'react-router-dom';

import { TransactionType } from '../../utils/contants';
import { useApp } from '../../providers/AppProvider';

import HeaderWithFilter from '../../components/HeaderWithFilter';
import Sidebar from '../../components/Sidebar';

import api from '../../services/api';

function ChecksControl() {
  const {
    user,
    setIsMenuActive,
    transactions,
    setTransactions,
    filteredTransactions,
    setSelectedCheck,
  } = useApp();

  const handleTransactionSelection = (e, transaction) => {
    sessionStorage.setItem('transaction', JSON.stringify(transaction));
    setSelectedCheck(transaction);
  };

  useEffect(() => {
    const loadTransactions = async () => {
      const { token } = user;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await api
        .get('transactions', config)
        .then(response => {
          setTransactions(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    window.document.title = 'BNB Bank - Home';
    window.scrollTo(0, 0);
    setIsMenuActive(false);

    loadTransactions();
  }, []);

  return (
    <section className="checkList">
      <HeaderWithFilter title="CHECKS CONTROL" />
      <Sidebar />

      <div className="checkListContent">
        <div className="transactions">
          <div className="container">
            <ul>
              {transactions
                .filter(
                  transaction =>
                    transaction.description.search(filteredTransactions) > -1,
                )
                .map(transaction => (
                  <li key={transaction.id}>
                    <div className="transactionsDetails">
                      <Link
                        onClick={e =>
                          handleTransactionSelection(e, transaction)
                        }
                        to="/incomes/details"
                      >
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
                      </Link>
                    </div>
                    <div className="transactionsPrice">
                      <Link
                        onClick={e =>
                          handleTransactionSelection(e, transaction)
                        }
                        to="/incomes/details"
                      >
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
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChecksControl;
