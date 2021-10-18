import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Input from '../../components/Input';
import MaskedInputCurrrency from '../../components/MaskedInputCurrrency';

import icoMoneySvg from '../../assets/images/ico-money.svg';
import icoStarSvg from '../../assets/images/ico-star.svg';
import icoUploadSvg from '../../assets/images/ico-upload.svg';

import { depositCheckSchema } from '../../schemas';
import api from '../../services/api';

function CheckDeposit() {
  const history = useHistory();
  const formRef = useRef(null);
  const inputFileRef = useRef(null);
  const [amount, setAmount] = useState(0);
  const [checkImage, setCheckImage] = useState(null);

  const onFilechange = e => {
    const reader = new FileReader();
    const { files } = e.target;
    reader.onload = r => {
      setCheckImage(r.target.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const triggerInputFile = e => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  const handleCurrencyInputChange = (e, masked, value) => {
    setAmount(masked);
  };

  const handleSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const { description } = data;
      const income = {
        amount: Number(
          String(amount).replace('$', '').replace(',', '.'),
        ).toFixed(2),
        description,
        check_image: checkImage,
      };

      const schema = yup.object().shape(depositCheckSchema);
      await schema.validate(income, {
        abortEarly: false,
      });

      await api
        .post('transactions', income)
        .then(() => {
          // Redirecting authenticated user to home page
          history.push('/checks');
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
      }
    }
  };

  useEffect(() => {
    window.document.title = 'BNB Bank - Check Deposit';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="depositCheck">
      <Header title="Check Deposit" />
      <Sidebar />

      <div className="DepositValue">
        <div className="container">
          <h2>CURRENT BALANCE</h2>
          <p>$6320.00</p>
        </div>
      </div>

      <div className="DepositCheckContent">
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
            <p className="disclaimer">
              *The money will be deposited in yout account once this check is
              accepted.
            </p>
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

            {checkImage && (
              <p>
                <img src={checkImage} alt="Check" style={{ width: '100%' }} />
              </p>
            )}

            {!checkImage && (
              <p className="previewImg">
                <a href="/" onClick={e => triggerInputFile(e)} id="fileSelect">
                  <img src={icoUploadSvg} alt="Upload" />
                  <span>Upload check Picture</span>
                </a>
                <input
                  type="file"
                  name="check_image"
                  accept="images/*"
                  style={{ display: 'none' }}
                  ref={inputFileRef}
                  onChange={onFilechange}
                />
              </p>
            )}

            <button type="submit">Deposit Check</button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default CheckDeposit;
