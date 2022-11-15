import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/operations';

export const Filter = props => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Formik>
      <form
        autoComplete="off"
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '10px',
        }}
      >
        <h4
          style={{
            fontSize: '16px',
            letterSpacing: '.1rem',
            fontWeight: 700,
            fontFamily: 'monospace',
          }}
        >
          Filter
        </h4>
        <input
          type="input"
          name="filter"
          onChange={onChange}
          value={props.value}
        />
      </form>
    </Formik>
  );
};
