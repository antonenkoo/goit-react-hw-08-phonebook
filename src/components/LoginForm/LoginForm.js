import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { TextField, Button } from '@mui/material';
import React from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        className={css.inputStyle}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        className={css.inputStyle}
      />

      <Button
        sx={{ mt: 1, mr: 1, margin: '10px' }}
        type="submit"
        variant="outlined"
      >
        Log In
      </Button>
    </form>
  );
};
