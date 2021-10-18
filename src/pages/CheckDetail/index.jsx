import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import icoProfileSvg from '../../assets/images/ico-profile.svg';
import icoMessageSvg from '../../assets/images/ico-message.svg';
import icoArrowSvg from '../../assets/images/ico-arrow-right.svg';
import icoPaperSvg from '../../assets/images/ico-paper.svg';
import icoMoneySvg from '../../assets/images/ico-money.svg';
import icoNegativeSvg from '../../assets/images/ico-negative.svg';
import icoCheckSvg from '../../assets/images/ico-check.svg';

import checkImage from '../../assets/images/ex-check.PNG';

function CheckDetail() {
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
                  customer1
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
                  customer1@email.com
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
                  365498745244
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
                  $300,00 USD
                </p>
              </a>
            </li>
          </ul>
          <div className="photoCheck">
            <img src={checkImage} alt="Check" />
          </div>
          <div className="btns">
            <button type="submit" style={{ cursor: 'pointer' }}>
              <i>
                <img src={icoNegativeSvg} alt="Reject" />
              </i>{' '}
              Reject
            </button>
            <button type="button" style={{ cursor: 'pointer' }}>
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
