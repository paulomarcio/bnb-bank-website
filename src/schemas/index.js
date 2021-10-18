import * as yup from 'yup';

export const signUpSchema = {
  username: yup.string().required('You must fill a username'),
  email: yup.string().email('Invalid email').required('You must fill an email'),
  password: yup.string().required('You must fill a password'),
};

export const signInSchema = {
  email: yup.string().email('Invalid email').required('You must fill an email'),
  password: yup.string().required('You must fill a password'),
};

export const createTransactionSchema = {
  amount: yup
    .number()
    .moreThan(0, 'You must fill a number greater than zero')
    .required('You must fill an amount'),
  transaction_date: yup.date().nullable().required('You must fill a date'),
  description: yup.string().required('You must fill a description'),
};

export const depositCheckSchema = {
  amount: yup
    .number()
    .moreThan(0, 'You must fill a number greater than zero')
    .required('You must fill an amount'),
  description: yup.string().required('You must fill a description'),
};
