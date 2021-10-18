import React, { useRef, useEffect } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';

import { useApp } from '../../providers/AppProvider';

import Input from '../../components/Input';

import { signUpSchema } from '../../schemas';
import api from '../../services/api';

function SignUp() {
  const history = useHistory();
  const formRef = useRef(null);
  const { setUser } = useApp();

  const handleSubmit = async data => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = yup.object().shape(signUpSchema);

      await schema.validate(data, {
        abortEarly: false,
      });

      await api
        .post('users', data)
        .then(response => {
          sessionStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);

          // Redirecting authenticated user to home page
          history.push('/home');
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
        console.log(err);
      }
    }
  };

  useEffect(() => {
    window.document.title = 'BNB Bank - SignUp';
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
            <Input type="text" name="username" placeholder="username" />
            <Input type="email" name="email" placeholder="email" />
            <Input type="password" name="password" placeholder="password" />
            <button type="submit">SIGN UP</button>
          </Form>
        </div>
      </div>
      <div className="login-footer">
        <Link to="/signin">Already have an account?</Link>
      </div>
    </section>
  );
}

export default SignUp;
