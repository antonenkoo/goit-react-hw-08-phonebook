import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          className={css.field}
          required
          id="username"
          label="Username"
        />
        <TextField
          className={css.field}
          required
          id="email"
          label="Email"
          type="email"
        />
        <TextField
          className={css.field}
          required
          id="passvord"
          label="Password"
          type="text"
          autoComplete="current-password"
        />
        <Button className={css.btnStyle} variant="contained" size="medium">
          Register
        </Button>
      </form>
    </>
  );
};
