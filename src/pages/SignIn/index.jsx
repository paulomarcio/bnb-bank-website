import React, { useRef, useEffect } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';

import { useApp } from '../../providers/AppProvider';

import Input from '../../components/Input';

import { signInSchema } from '../../schemas';
import api from '../../services/api';

function SignIn() {
  const history = useHistory();
  const formRef = useRef(null);
  const { setUser } = useApp();

  const handleSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = yup.object().shape(signInSchema);

      await schema.validate(data, {
        abortEarly: false,
      });

      await api
        .post('sessions', data)
        .then(response => {
          const user = response.data;
          const mainPage = user.is_admin ? '/incomes' : '/home';
          sessionStorage.setItem('user', JSON.stringify(user));
          setUser(user);

          // Redirecting authenticated user to home page
          history.push(mainPage);
        })
        .catch(err => {
          console.log(err);
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
    window.document.title = 'BNB Bank - SignIn';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="login">
      <div className="login-header">
        <h1>BNB Bank</h1>
      </div>
      <div className="container">
        <div className="login-content">
          <Form ref={formRef} onSubmit={data => handleSubmit(data)}>
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <button type="submit">SIGN IN</button>
          </Form>
        </div>
      </div>
      <div className="login-footer">
        <Link to="/">Sign Up</Link>
      </div>
    </section>
  );
}

export default SignIn;
