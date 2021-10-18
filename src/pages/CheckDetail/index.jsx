import React, { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';

import { TransactionStatus } from '../../utils/contants';
import { useApp } from '../../providers/AppProvider';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import icoProfileSvg from '../../assets/images/ico-profile.svg';
import icoMessageSvg from '../../assets/images/ico-message.svg';
import icoArrowSvg from '../../assets/images/ico-arrow-right.svg';
import icoPaperSvg from '../../assets/images/ico-paper.svg';
import icoMoneySvg from '../../assets/images/ico-money.svg';
import icoNegativeSvg from '../../assets/images/ico-negative.svg';
import icoCheckSvg from '../../assets/images/ico-check.svg';

import api from '../../services/api';

function CheckDetail() {
  const history = useHistory();
  const { user, setIsMenuActive, selectedCheck } = useApp();
  const { id, account, amount, check_image } = selectedCheck;
  const { token } = user;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleAcceptCheck = async () => {
    await api
      .put(`transactions/${id}`, { status: TransactionStatus.ACCEPTED }, config)
      .then(() => {
        // Redirecting authenticated user to home page
        history.push('/incomes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleRejectCheck = async () => {
    await api
      .put(`transactions/${id}`, { status: TransactionStatus.REJECTED }, config)
      .then(() => {
        // Redirecting authenticated user to home page
        history.push('/incomes');
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.document.title = 'BNB Bank - Home';
    window.scrollTo(0, 0);
    setIsMenuActive(false);
  }, []);

  return (
    <section className="checkList">
      <Header title="Purchase" />
      <Sidebar />

      <div className="checkDetails-Content">
        <div className="container">
          <ul>
            <li>
              <a href="/">
                <img src={icoProfileSvg} alt="Profile" />
                <p>
                  <strong>Customer</strong>
                  {account.user.username}
                </p>
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <img src={icoMessageSvg} alt="Message" />
                <p>
                  <strong>Customer Email</strong>
                  {account.user.email}
                </p>
                <i>
                  <img src={icoArrowSvg} alt="Arrow Right" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <img src={icoPaperSvg} alt="Paper" />
                <p>
                  <strong>Account</strong>
                  {account.number}
                </p>
                <i>
                  <img src={icoArrowSvg} alt="Arrow Right" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <img src={icoMoneySvg} alt="Money" />
                <p>
                  <strong>Reported Amount</strong>
                  <NumberFormat
                    value={amount}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value, props) => (
                      <span {...props}>{value}</span>
                    )}
                  />{' '}
                  USD
                </p>
              </a>
            </li>
          </ul>
          <div className="photoCheck">
            <img src={check_image} alt="Check" />
          </div>
          <div className="btns">
            <button
              type="submit"
              onClick={() => handleRejectCheck()}
              style={{ cursor: 'pointer' }}
            >
              <i>
                <img src={icoNegativeSvg} alt="Reject" />
              </i>{' '}
              Reject
            </button>
            <button
              type="button"
              onClick={() => handleAcceptCheck()}
              style={{ cursor: 'pointer' }}
            >
              <i>
                <img src={icoCheckSvg} alt="Check" />
              </i>{' '}
              Accept
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckDetail;
