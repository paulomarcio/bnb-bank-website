import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';

function InputDatePicker({ name, ...rest }) {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <ReactDatePicker
        ref={datepickerRef}
        dateFormat="MMMM d, yyyy"
        className={error ? 'invalid' : ''}
        selected={date}
        onChange={setDate}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}

export default InputDatePicker;
