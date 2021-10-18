import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';
import format from 'date-fns/format';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import MaskedInputCurrrency from '../../components/MaskedInputCurrrency';
import InputDatePicker from '../../components/InputDatePicker';

import { createTransactionSchema } from '../../schemas';
import api from '../../services/api';

import icoMoneySvg from '../../assets/images/ico-money.svg';
import icoCalendarSvg from '../../assets/images/ico-calendar.svg';
import icoStarSvg from '../../assets/images/ico-star.svg';

function Purchase() {
  const history = useHistory();
  const formRef = useRef(null);
  const [amount, setAmount] = useState(0);

  const handleCurrencyInputChange = (e, masked, value) => {
    setAmount(masked);
  };

  const handleSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const { transaction_date, description } = data;
      const purchase = {
        amount: Number(
          String(amount).replace('$', '').replace(',', '.'),
        ).toFixed(2),
        transaction_date: transaction_date
          ? format(transaction_date, 'yyyy-MM-dd')
          : null,
        description,
      };

      const schema = yup.object().shape(createTransactionSchema);
      await schema.validate(purchase, {
        abortEarly: false,
      });

      await api
        .post('transactions', purchase)
        .then(() => {
          // Redirecting authenticated user to home page
          history.push('/expenses');
        })
        .catch(err => {
          // TO-DO: Implement API error handler
        });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      } else {
        // TO-DO: Implement error handler for other type of errors
        console.log(err);
      }
    }
  };

  useEffect(() => {
    window.document.title = 'BNB Bank - Purchase';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="addPurchase">
      <Header title="Purchase" />
      <Sidebar />

      <div className="purchaseValue">
        <div className="container">
          <h2>Current Balance</h2>
          <p>$6320.00</p>
        </div>
      </div>

      <div className="purchaseContent">
        <div className="container">
          <Form ref={formRef} onSubmit={data => handleSubmit(data)}>
            <p>
              <label htmlFor="amount">
                <i>
                  <img src={icoMoneySvg} alt="Money" />
                </i>
                Amount
              </label>
              <MaskedInputCurrrency
                type="text"
                patern="\[0-9]"
                id="amount"
                name="amount"
                decimalSeparator=","
                thousandSeparator=""
                precision="2"
                prefix="$"
                placeholder="$40,00"
                value={amount}
                onChange={(e, m, v) => handleCurrencyInputChange(e, m, v)}
              />
            </p>
            <div className="paragraph">
              <label htmlFor="transaction_date">
                <i>
                  <img src={icoCalendarSvg} alt="Calendar" />
                </i>
                Date
              </label>
              <InputDatePicker
                type="tel"
                id="transaction_date"
                name="transaction_date"
                placeholder="August 8, 2021"
              />
            </div>
            <p>
              <label htmlFor="description">
                <i>
                  <img src={icoStarSvg} alt="Star" />
                </i>
                Description
              </label>
              <Input
                type="text"
                id="description"
                name="description"
                placeholder="t-shirt"
              />
            </p>
            <button type="submit">Add Purchase</button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Purchase;
